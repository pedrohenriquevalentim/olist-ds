/**
 * Gera arquivos .test.tsx via IA para componentes que ainda não têm testes.
 * Uso: node scripts/generate-tests.mjs [--all | --missing]
 * Lógica compartilhada em scripts/lib/ai-codegen.mjs.
 */

import { runGeneration } from './lib/ai-codegen.mjs';

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

runGeneration({
  targetSuffix: '.test.tsx',
  systemPrompt: SYSTEM_PROMPT,
  buildPromptTail: (component) => `
Gere o arquivo de teste completo para este componente.
O import do componente deve ser: import { ${component.name} } from './${component.name}';
`,
  emptyMessage: '✅ Todos os componentes já têm testes!',
  startMessage: (count) => `📝 Gerando testes para ${count} componente(s):`,
  doneMessage: '\n🧪 Rodando testes...\n',
}).catch(console.error);
