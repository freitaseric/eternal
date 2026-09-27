# Arquitetura e critérios de Eternal

## Fonte de verdade

`pack.toml`, `index.toml` e os metadados em `mods/` definem a distribuição. O índice deve ser regenerado com `packwiz refresh`; hashes manuais não devem ser mantidos em paralelo.

## Divisão de responsabilidades

- **MineColonies + Structurize + addons:** progressão de assentamento e trabalho.
- **Create + Create: Colony Logistics:** automação física e logística da colônia.
- **Farmer's Delight:** produção e alimentação.
- **Supplementaries, Chipped e Domum Ornamentum:** construção sem alterar worldgen.
- **Sophisticated Storage/Backpacks e Waystones:** logística e mobilidade com custo próprio.
- **KubeJS:** somente pequenas pontes de receitas/tags e balanceamento explicitamente documentado.
- **Cliente:** otimização, HUD, mapas e Controlify ficam fora do servidor.

## Regras de longevidade

- Não adicionar worldgen sem uma migração explícita.
- Não atualizar automaticamente mods ou NeoForge.
- Evitar receitas duplicadas e gates que dependam de um mod cosmético.
- Toda mudança de receita deve ter um ID estável e ser reversível.
- Testar uma instalação limpa de cliente e servidor antes de criar o mundo definitivo.
