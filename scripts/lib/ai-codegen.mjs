/**
 * Utilidades compartilhadas de geração de artefatos por IA (Gemini)
 * a partir dos componentes — usadas por generate-tests.mjs e
 * generate-stories.mjs.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

const COMPONENTS_DIR = './src/components';

// ─── SANITIZAÇÃO DE TEXTO ─────────────────────────────────
// Normaliza apenas caracteres tipográficos que causam problemas de encoding.
// Acentos do português são mantidos — a API aceita UTF-8 e substituí-los
// corromperia strings literais dos componentes, gerando artefatos contra
// valores errados.
export function sanitizeText(text) {
  return text
    .replace(/“/g, '"').replace(/”/g, '"') // aspas duplas tipográficas
    .replace(/‘/g, "'").replace(/’/g, "'") // aspas simples tipográficas
    .replace(/–/g, '-').replace(/—/g, '--') // dashes
    .replace(/…/g, '...')                        // reticências
    .replace(/ /g, ' ');                         // espaço não-quebrável
}

// ─── VALIDAÇÃO DO OUTPUT DA IA ─────────────────────────────
export const BLOCKED_PATTERNS = [
  { re: /\beval\s*\(/, label: 'eval()' },
  { re: /new\s+Function\s*\(/, label: 'new Function()' },
  { re: /dangerouslySetInnerHTML/, label: 'dangerouslySetInnerHTML' },
  { re: /\bprocess\.env\b/, label: 'process.env' },
  { re: /\brequire\s*\(/, label: 'require()' },
  { re: /\bexecSync\b|\bspawnSync\b|\bchild_process\b/, label: 'child_process' },
  // fetch fora de contexto de mock (vi.fn / vi.spyOn)
  { re: /(?<!vi\.(fn|spyOn)\()(?<!jest\.(fn|spyOn)\()\bfetch\s*\(/, label: 'fetch() fora de mock' },
  // imports de pacotes externos não esperados nos artefatos gerados
  { re: /import\s+.*\s+from\s+['"](?!\.\.?\/|vitest|@testing-library|@storybook|react)/, label: 'import de pacote externo inesperado' },
];

export function validateAIOutput(code, componentName) {
  for (const { re, label } of BLOCKED_PATTERNS) {
    if (re.test(code)) {
      throw new Error(`Output da IA rejeitado para "${componentName}": padrão proibido detectado — ${label}`);
    }
  }
  if (code.trim().length < 50) {
    throw new Error(`Output da IA rejeitado para "${componentName}": conteúdo suspeitosamente curto`);
  }
}

// ─── DESCOBERTA DE COMPONENTES ────────────────────────────

/**
 * Lista os componentes (pastas com Nome/Nome.tsx) e informa se o artefato
 * alvo (ex.: ".test.tsx", ".stories.tsx") já existe para cada um.
 */
export function findComponents(targetSuffix) {
  const components = [];

  for (const dir of fs.readdirSync(COMPONENTS_DIR)) {
    const fullPath = path.join(COMPONENTS_DIR, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    const tsxFile = path.join(fullPath, `${dir}.tsx`);
    if (!fs.existsSync(tsxFile)) continue;

    const targetPath = path.join(fullPath, `${dir}${targetSuffix}`);
    components.push({
      name: dir,
      sourcePath: tsxFile,
      targetPath,
      hasTarget: fs.existsSync(targetPath),
      source: fs.readFileSync(tsxFile, 'utf-8'),
    });
  }

  return components;
}

function readComponentCSS(name) {
  const moduleCss = path.join(COMPONENTS_DIR, name, `${name}.module.css`);
  const plainCss = path.join(COMPONENTS_DIR, name, `${name}.css`);
  if (fs.existsSync(moduleCss)) return fs.readFileSync(moduleCss, 'utf-8');
  if (fs.existsSync(plainCss)) return fs.readFileSync(plainCss, 'utf-8');
  return '';
}

function stripMarkdownFences(code) {
  return code
    .replace(/^```(?:tsx?|javascript)?\n?/gm, '')
    .replace(/```$/gm, '')
    .trim();
}

function createGeminiModel() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('❌ Defina a variável GEMINI_API_KEY');
    console.error('   export GEMINI_API_KEY="sua-chave-aqui"');
    process.exit(1);
  }
  return new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: 'gemini-2.5-pro' });
}

// ─── EXECUÇÃO ─────────────────────────────────────────────

/**
 * Loop de geração compartilhado. Config:
 * - targetSuffix:    sufixo do artefato gerado (".test.tsx" | ".stories.tsx")
 * - systemPrompt:    prompt de sistema específico do artefato
 * - buildPromptTail: (component) => string com as instruções finais
 * - emptyMessage:    mensagem quando não há nada a gerar
 * - startMessage:    (count) => string exibida antes do loop
 * - doneMessage:     mensagem final
 *
 * Modo vem de process.argv[2]: "--all" regenera tudo; default gera só os
 * que faltam. A chave GEMINI_API_KEY só é exigida se houver algo a gerar.
 */
export async function runGeneration({
  targetSuffix,
  systemPrompt,
  buildPromptTail,
  emptyMessage,
  startMessage,
  doneMessage,
}) {
  console.log('🔍 Buscando componentes...\n');
  const components = findComponents(targetSuffix);

  const mode = process.argv[2];
  const filter = mode === '--all'
    ? components
    : components.filter((c) => !c.hasTarget);

  if (filter.length === 0) {
    console.log(emptyMessage);
    return;
  }

  const model = createGeminiModel();

  console.log(`${startMessage(filter.length)}\n`);

  for (const component of filter) {
    process.stdout.write(`   ⏳ ${component.name}...`);

    try {
      const cleanSource = sanitizeText(component.source);
      const css = readComponentCSS(component.name);
      const cleanCss = css ? sanitizeText(css) : '';

      const prompt = `
${systemPrompt}

COMPONENTE: ${component.name}

CÓDIGO FONTE:
${cleanSource}

${cleanCss ? `CSS:\n${cleanCss}` : ''}

${buildPromptTail(component)}
`;

      const result = await model.generateContent(prompt);
      const code = stripMarkdownFences(result.response.text());
      validateAIOutput(code, component.name);

      fs.writeFileSync(component.targetPath, code);
      console.log(' ✅');
    } catch (error) {
      console.log(` ❌ ${error.message}`);
    }

    // Pausa entre chamadas para respeitar rate limit da API
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  console.log(doneMessage);
}
