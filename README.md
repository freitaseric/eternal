# Eternal

Modpack Minecraft 1.21.1 + NeoForge, distribuído por Packwiz e versionado com Git.

Eternal prioriza um mundo de longa duração: poucos mods estruturais, compatibilidade explícita, progressão integrada entre MineColonies, Create e Farmer's Delight, e atualizações deliberadas. Não há worldgen adicional nem atualização automática de mods.

## Requisitos

- Minecraft 1.21.1
- NeoForge 21.1.250
- Java compatível com Minecraft 1.21.1
- Packwiz para instalar ou exportar o pack

## Cliente e servidor

O mesmo repositório é a fonte de verdade para os dois lados. Entradas marcadas `side = "client"` ficam fora do servidor (renderização, mapas e controle); as demais são compartilhadas. O servidor deve ser instalado a partir do índice do pack, sem copiar a pasta `mods` de uma instalação cliente.

## Fluxo de atualização

1. Faça uma alteração deliberada em uma branch.
2. Atualize apenas o mod ou arquivo necessário.
3. Rode `packwiz refresh` e revise o diff de `index.toml`/`pack.toml`.
4. Teste cliente e servidor antes de alterar a versão do pack.

Não rode `packwiz update` sem especificar a intenção: versões são fixadas para preservar mundos existentes.

## KubeJS

Os scripts em `kubejs/server_scripts` são pequenos e opcionais para a identidade do pack. Integrações devem preferir tags e receitas existentes; KubeJS não deve virar requisito para conteúdo central ou substituir sistemas dos mods.
