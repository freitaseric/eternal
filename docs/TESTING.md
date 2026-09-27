# Checklist de validação

No estado atual do repositório:

```text
packwiz list
packwiz refresh
git diff --check
```

Para uma validação completa, exporte uma cópia do pack em ambiente com acesso aos provedores Modrinth/CurseForge, inicie um servidor limpo e depois um cliente limpo. Confirme que o servidor não carrega mods marcados `client`, que KubeJS registra os scripts sem erro e que uma receita Create/Farmer's Delight aparece no JEI.

Não há JARs locais neste repositório; portanto, carregamento real de NeoForge/KubeJS depende de uma exportação/instalação externa.
