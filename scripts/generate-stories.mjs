/**
 * Gera arquivos .stories.tsx via IA para componentes que ainda não têm stories.
 * Uso: node scripts/generate-stories.mjs [--all | --missing]
 * Lógica compartilhada em scripts/lib/ai-codegen.mjs.
 */

import { runGeneration } from './lib/ai-codegen.mjs';

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

runGeneration({
  targetSuffix: '.stories.tsx',
  systemPrompt: SYSTEM_PROMPT,
  buildPromptTail: (component) => `
Gere o arquivo .stories.tsx completo.
O import do componente deve ser: import { ${component.name} } from './${component.name}';
O title deve ser: 'Components/${component.name}'
`,
  emptyMessage: '✅ Todos os componentes já têm stories!',
  startMessage: (count) => `📖 Gerando stories para ${count} componente(s):`,
  doneMessage: '\n✅ Stories geradas! Rode "npm run storybook" para visualizar.\n',
}).catch(console.error);
