import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// ─── CONFIGURAÇÃO ─────────────────────────────────────────
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ Defina a variável GEMINI_API_KEY');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

const COMPONENTS_DIR = './src/components';

// ─── PROMPT ───────────────────────────────────────────────
const SYSTEM_PROMPT = `
Você é um especialista em Storybook para React + TypeScript.

REGRAS ESTRITAS:
- Gere APENAS o código do arquivo .stories.tsx, sem markdown, sem explicações
- Use o formato CSF3 (Component Story Format 3) com Meta e StoryObj
- Importe o tipo correto: import type { Meta, StoryObj } from '@storybook/react'
- Inclua a tag 'autodocs' no array tags do meta
- Crie uma story para CADA combinação relevante de variantes (variant, size, state)
- Use argTypes com control adequado (select, boolean, text, color)
- Descrições dos argTypes em português
- Nomeie as stories em inglês (Primary, Secondary, Small, Large, Disabled, etc.)
- Adicione args padrão no meta quando fizer sentido
- NÃO inclua backticks de markdown no output
- O arquivo deve ser TypeScript válido
- NÃO use export default inline, declare a const meta primeiro e exporte depois
`;

// ─── SANITIZAÇÃO DE TEXTO ─────────────────────────────────
// Normaliza apenas caracteres tipográficos que causam problemas de encoding.
// Acentos do português são mantidos — a API aceita UTF-8 e substituí-los
// corromperia strings literais dos componentes, gerando stories com valores errados.
function sanitizeText(text) {
  return text
    .replace(/"/g, '"').replace(/"/g, '"')   // aspas duplas tipográficas
    .replace(/'/g, "'").replace(/'/g, "'")   // aspas simples tipográficas
    .replace(/–/g, '-').replace(/—/g, '--')  // dashes
    .replace(/…/g, '...')                         // reticências
    .replace(/ /g, ' ');                          // espaço não-quebrável
}

// ─── VALIDAÇÃO DO OUTPUT DA IA ─────────────────────────────
const BLOCKED_PATTERNS = [
  { re: /\beval\s*\(/, label: 'eval()' },
  { re: /new\s+Function\s*\(/, label: 'new Function()' },
  { re: /dangerouslySetInnerHTML/, label: 'dangerouslySetInnerHTML' },
  { re: /\bprocess\.env\b/, label: 'process.env' },
  { re: /\brequire\s*\(/, label: 'require()' },
  { re: /\bexecSync\b|\bspawnSync\b|\bchild_process\b/, label: 'child_process' },
  { re: /(?<!vi\.(fn|spyOn)\()(?<!jest\.(fn|spyOn)\()\bfetch\s*\(/, label: 'fetch() fora de mock' },
  { re: /import\s+.*\s+from\s+['"](?!\.\.?\/|vitest|@testing-library|@storybook|react)/, label: 'import de pacote externo inesperado' },
];

function validateAIOutput(code, componentName) {
  for (const { re, label } of BLOCKED_PATTERNS) {
    if (re.test(code)) {
      throw new Error(`Output da IA rejeitado para "${componentName}": padrão proibido detectado — ${label}`);
    }
  }
  if (code.trim().length < 50) {
    throw new Error(`Output da IA rejeitado para "${componentName}": conteúdo suspeitosamente curto`);
  }
}

// ─── FUNÇÕES ──────────────────────────────────────────────

function findComponents() {
  const components = [];
  const dirs = fs.readdirSync(COMPONENTS_DIR);

  for (const dir of dirs) {
    const fullPath = path.join(COMPONENTS_DIR, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const tsxFile = path.join(fullPath, `${dir}.tsx`);
    const storyFile = path.join(fullPath, `${dir}.stories.tsx`);

    if (fs.existsSync(tsxFile)) {
      components.push({
        name: dir,
        sourcePath: tsxFile,
        storyPath: storyFile,
        hasStory: fs.existsSync(storyFile),
        source: fs.readFileSync(tsxFile, 'utf-8'),
      });
    }
  }

  return components;
}

async function generateStory(component) {
  const cssPath = path.join(
    COMPONENTS_DIR,
    component.name,
    `${component.name}.module.css`
  );
  const cssFile = path.join(
    COMPONENTS_DIR,
    component.name,
    `${component.name}.css`
  );
  const cssSource = fs.existsSync(cssPath)
    ? fs.readFileSync(cssPath, 'utf-8')
    : fs.existsSync(cssFile)
      ? fs.readFileSync(cssFile, 'utf-8')
      : '';

  const cleanSource = sanitizeText(component.source);
  const cleanCss = cssSource ? sanitizeText(cssSource) : '';

  const prompt = `
${SYSTEM_PROMPT}

COMPONENTE: ${component.name}

CÓDIGO FONTE:
${cleanSource}

${cleanCss ? `CSS:\n${cleanCss}` : ''}

Gere o arquivo .stories.tsx completo.
O import do componente deve ser: import { ${component.name} } from './${component.name}';
O title deve ser: 'Components/${component.name}'
`;

  const result = await model.generateContent(prompt);
  let code = result.response.text();

  code = code.replace(/^```(?:tsx?|javascript)?\n?/gm, '');
  code = code.replace(/```$/gm, '');
  code = code.trim();

  validateAIOutput(code, component.name);

  return code;
}

// ─── EXECUÇÃO ─────────────────────────────────────────────

async function main() {
  console.log('🔍 Buscando componentes...\n');
  const components = findComponents();

  const mode = process.argv[2];
  const filter = mode === '--all'
    ? components
    : components.filter(c => !c.hasStory);

  if (filter.length === 0) {
    console.log('✅ Todos os componentes já têm stories!');
    return;
  }

  console.log(`📖 Gerando stories para ${filter.length} componente(s):\n`);

  for (const component of filter) {
    process.stdout.write(`   ⏳ ${component.name}...`);

    try {
      const storyCode = await generateStory(component);
      fs.writeFileSync(component.storyPath, storyCode);
      console.log(' ✅');
    } catch (error) {
      console.log(` ❌ ${error.message}`);
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n✅ Stories geradas! Rode "npm run storybook" para visualizar.\n');
}

main().catch(console.error);
