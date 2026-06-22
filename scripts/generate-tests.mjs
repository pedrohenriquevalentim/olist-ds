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
// Normaliza apenas caracteres tipográficos que causam problemas de encoding.
// Acentos do português são mantidos — a API aceita UTF-8 e substituí-los
// corromperia strings literais dos componentes, gerando testes contra valores errados.
function sanitizeText(text) {
  return text
    .replace(/“/g, '"').replace(/”/g, '"')   // aspas duplas tipográficas
    .replace(/‘/g, "'").replace(/’/g, "'")   // aspas simples tipográficas
    .replace(/–/g, '-').replace(/—/g, '--')  // dashes
    .replace(/…/g, '...')                         // reticências
    .replace(/ /g, ' ');                          // espaço não-quebrável
}

// ─── VALIDAÇÃO DO OUTPUT DA IA ─────────────────────────────
const BLOCKED_PATTERNS = [
  { re: /\beval\s*\(/, label: 'eval()' },
  { re: /new\s+Function\s*\(/, label: 'new Function()' },
  { re: /dangerouslySetInnerHTML/, label: 'dangerouslySetInnerHTML' },
  { re: /\bprocess\.env\b/, label: 'process.env' },
  { re: /\brequire\s*\(/, label: 'require()' },
  { re: /\bexecSync\b|\bspawnSync\b|\bchild_process\b/, label: 'child_process' },
  // fetch fora de contexto de mock (vi.fn / vi.spyOn)
  { re: /(?<!vi\.(fn|spyOn)\()(?<!jest\.(fn|spyOn)\()\bfetch\s*\(/, label: 'fetch() fora de mock' },
  // imports de pacotes externos não esperados em testes
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
  testCode = testCode.trim();

  validateAIOutput(testCode, component.name);

  return testCode;
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
