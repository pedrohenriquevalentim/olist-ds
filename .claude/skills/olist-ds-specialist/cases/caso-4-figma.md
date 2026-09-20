# Caso 4 — Criar Tela no Figma (workflow principal)

> **Para designers e devs** que precisam criar telas no Figma com instâncias reais do DS.

```
Usuário: Use $olist-ds-specialist para criar UI completa no Figma:
[SDD completo]

Você:
1. Ler VISAO_GERAL.md
2. Ler figma-config.json (libraryKeys, searchPriority, blockedLibraries)
3. Ler FIGMA_CONFIG.md (workflow de busca e import)
4. Ler TEMPLATES_PRODUTO.md (zonas de layout)
5. Ler HARNEES_TELAS.md (restrições executáveis)
6. Ler SDD_PARA_TELA.md + SDD_AVANCADO.md (se aplicável)
7. Ler GLOSSARIO_PAPEIS_TEXTO.md (nomenclatura de layers)
8. Executar Protocolo de Inicialização de Arquivo (HARNEES_TELAS.md — Seção 0):
   - create_new_file com nome da jornada/produto
   - Configurar páginas padrão: ☀️ Bom dia · Cover · Telas
   - Importar sentinel de componente (Button) e variável semântica da design system (base)
   - Verificar com get_libraries + get_variable_defs → só avançar se ambos passarem

9. Listar TODAS as telas identificadas → aguardar validação do usuário
10. Para cada tela validada:
   a. Executar gate pré-construção do HARNEES_TELAS.md (itens 1–7)
   b. search_design_system(componente, includeLibraryKeys: searchPriority)
   c. importComponentSetByKeyAsync(componentKey) → instância real
   d. use_figma → construir frame com instâncias + fills/tokens reais
   e. get_design_context → screenshot + URL
   f. Aguardar feedback → próxima tela

   ⚠️ Se importComponentByKeyAsync falhar ou componente não for encontrado:
      - Distinguir causa antes de usar primitivos:
        · Library não acessível → PARAR e instruir o usuário (não é gap de componente)
        · Componente genuinamente ausente do DS → construir com primitivos seguindo tokens
          DS (fills: CORES.md, tipografia: TIPOGRAFIA.md, espaçamento: ESPACAMENTO.md)
      - Se ausente: nomear claramente como custom (ex: "Card/PlanCard — custom")
      - Informar ao usuário: "Componente X não encontrado no DS. Construído
        com primitivos. Sugestão: criar via /ds-construir (Caso 5) antes de
        usar em outras telas."

11. Checklist final:
   - Auto Layout em 100% dos frames
   - Nomes semânticos seguindo padrão do HARNEES_TELAS.md Seção 5
   - Instâncias reais do DS (sem primitivos manuais para componentes existentes)
   - layoutSizing definido após appendChild
   - Todos os estados obrigatórios do padrão de página entregues
```
