# Silent Gear em Eternal 1.1.0

## Escopo

Eternal usa Silent Gear 4.2.1.1 + Silent Lib 10.6.0 para ferramentas,
armas e armaduras modulares. Não foi adicionado addon de Silent Gear: o
`MineColonies Compatibility` já implementa upgrade e reparo de itens Silent
Gear no Blacksmith.

## Balanceamento

- Early: madeira/pedra/flint e ferro seguem próximos do vanilla.
- Mid: cobre, zinco, andesite alloy e brass entram como especialização de
  velocidade/controle, não como salto bruto de dano ou durabilidade.
- Late: diamante/netherite e combinações Create ficam acima do vanilla em
  especialização, mas não acumulam simultaneamente dano, velocidade e
  durabilidade sem custo.
- Hammer, excavator, saw e paxel não são liberados cedo: seus blueprints
  exigem mechanical crafting com netherite scrap, brass e precision mechanism.
  A ferramenta continua reconstruível e os upgrades continuam pertencendo ao
  Silent Gear.
- Traits universais podem ser usados por colonos. Traits que dependem de
  Player, tecla, uso ativo ou HUD são player-only e não são base de equipamento
  de Miner, Lumberjack, Builder ou Guards.

## MineColonies

O Blacksmith é o caminho oficial para upgrade e reparo de Silent Gear. O teste
obrigatório da 1.1.0 deve verificar Miner, Lumberjack, Builder e Guards com
gear de cobre/ferro/diamante: harvest tier, dano, velocidade, durabilidade e
reparo de item quebrado. Não há script KubeJS que injete comportamento em
colonos; isso evita tratar traits player-only como compatíveis.

## KubeJS versus datapack

KubeJS é usado apenas para remover e recolocar os quatro blueprints AOE com
receitas Create e IDs estáveis. Materiais, traits, tipos de gear e evolução
continuam no sistema data-driven nativo do Silent Gear; não foram copiados para
JSON local, evitando divergência com a versão do mod. Nenhum item KubeJS foi
criado.

## Migração

Instalações 1.0.x mantêm itens vanilla. Ferramentas Silent Gear existentes são
compatíveis com a atualização; apenas a obtenção de novos blueprints AOE passa
a exigir o gate Create. Não aplicar em mundo definitivo sem backup.
