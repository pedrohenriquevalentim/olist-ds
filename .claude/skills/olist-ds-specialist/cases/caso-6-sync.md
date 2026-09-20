# Caso 6 — Sincronizar Inventário de Componentes

> Acionado por: "Sincronize o registry" / "Atualize o inventário" / "Sync componentes"

```
1. search_design_system("*", includeLibraryKeys: searchPriority) para cada categoria
2. Consolidar por ordem de prioridade (há só 1 library ativa — sem sobreposição a resolver)
3. Para cada componente: anotar name, componentKey, libraryName, variantes
4. Comparar com inventário anterior (COMPONENTES.md):
   - 🟢 Adicionados: componentes novos nas libraries
   - 🔴 Removidos: componentes que sumiram
   - 🟡 Migrados: agora em library de maior prioridade
5. Apresentar resumo ao usuário
```
