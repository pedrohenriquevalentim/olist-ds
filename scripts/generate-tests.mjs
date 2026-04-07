import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// ─── CONFIGURAÇÃO ─────────────────────────────────────────
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('❌ Defina a variável GEMINI_API_KEY');
  console.error('   export GEMINI_API_KEY="sua-chave-aqui"');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

const COMPONENTS_DIR = './src/components';

// ─── PROMPT SYSTEM ────────────────────────────────────────
const SYSTEM_PROMPT = `
Você é um engenheiro de testes especialista em React + TypeScript + Vitest.

REGRAS ESTRITAS:
- Gere APENAS o código do arquivo de teste, sem markdown, sem explicações
- Use imports de: vitest, @testing-library/react, @testing-library/user-event
- Teste: renderização, todas as variantes/props, interações, acessibilidade
- Use describe/it com descrições em português
- Use vi.fn() para funções mock
- Inclua teste de acessibilidade com axe-core se possível
- NÃO inclua backticks de markdown no output
- O arquivo deve ser TypeScript válido (.test.tsx)
`;

// ─── SANITIZAÇÃO DE TEXTO ─────────────────────────────────
function sanitizeText(text) {
    // Remove TODOS os caracteres não-ASCII e substitui por equivalentes seguros
    return text.replace(/[^\x00-\x7F]/g, (char) => {
      const map = {
        '\u201C': '"', '\u201D': '"',   // aspas duplas tipográficas
        '\u2018': "'", '\u2019': "'",   // aspas simples tipográficas
        '\u2013': '-', '\u2014': '--',  // dashes
        '\u2026': '...',                // reticências
        '\u00A0': ' ',                  // espaço não-quebrável
        // Acentos do português
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a',
        'é': 'e', 'ê': 'e',
        'í': 'i',
        'ó': 'o', 'ô': 'o', 'õ': 'o',
        'ú': 'u', 'ü': 'u',
        'ç': 'c',
        'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A',
        'É': 'E', 'Ê': 'E',
        'Í': 'I',
        'Ó': 'O', 'Ô': 'O', 'Õ': 'O',
        'Ú': 'U', 'Ü': 'U',
        'Ç': 'C',
      };
      return map[char] || '';
    });
  }

// ─── FUNÇÕES ──────────────────────────────────────────────

function findComponents() {
  const components = [];
  const dirs = fs.readdirSync(COMPONENTS_DIR);

  for (const dir of dirs) {
    const fullPath = path.join(COMPONENTS_DIR, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const tsxFile = path.join(fullPath, `${dir}.tsx`);
    const testFile = path.join(fullPath, `${dir}.test.tsx`);

    if (fs.existsSync(tsxFile)) {
      components.push({
        name: dir,
        sourcePath: tsxFile,
        testPath: testFile,
        hasTest: fs.existsSync(testFile),
        source: fs.readFileSync(tsxFile, 'utf-8'),
      });
    }
  }

  return components;
}

async function generateTest(component) {
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

Gere o arquivo de teste completo para este componente.
O import do componente deve ser: import { ${component.name} } from './${component.name}';
`;

  const result = await model.generateContent(prompt);
  let testCode = result.response.text();

  testCode = testCode.replace(/^```(?:tsx?|javascript)?\n?/gm, '');
  testCode = testCode.replace(/```$/gm, '');

  return testCode.trim();
}

// ─── EXECUÇÃO PRINCIPAL ───────────────────────────────────

async function main() {
  console.log('🔍 Buscando componentes...\n');
  const components = findComponents();

  const mode = process.argv[2];
  const filter = mode === '--all'
    ? components
    : components.filter(c => !c.hasTest);

  if (filter.length === 0) {
    console.log('✅ Todos os componentes já têm testes!');
    return;
  }

  console.log(`📝 Gerando testes para ${filter.length} componente(s):\n`);

  for (const component of filter) {
    process.stdout.write(`   ⏳ ${component.name}...`);

    try {
      const testCode = await generateTest(component);
      fs.writeFileSync(component.testPath, testCode);
      console.log(' ✅');
    } catch (error) {
      console.log(` ❌ ${error.message}`);
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n🧪 Rodando testes...\n');
}

main().catch(console.error);