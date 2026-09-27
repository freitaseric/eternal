# Checklist da release 1.0.0

## Antes de publicar

- [ ] Confirmar que `git status` está limpo.
- [ ] Rodar `packwiz refresh` e revisar `pack.toml`/`index.toml`.
- [ ] Rodar `git diff --check`.
- [ ] Validar sintaxe de todos os scripts KubeJS.
- [ ] Exportar uma cópia limpa do pack.
- [ ] Iniciar um servidor NeoForge limpo com a mesma versão.
- [ ] Iniciar um cliente limpo usando o pack exportado.
- [ ] Confirmar que mods `side = "client"` não foram instalados no servidor.
- [ ] Confirmar carregamento dos scripts KubeJS sem erros.
- [ ] Confirmar no JEI a receita `eternal:create/mixing/wheat_dough`.
- [ ] Criar uma colônia de teste e verificar trabalhadores e logística.
- [ ] Fazer backup do servidor antes do primeiro mundo persistente.

## Publicação

1. Criar uma tag Git `v1.0.0` somente após todos os itens acima.
2. Publicar o repositório e o changelog.
3. Distribuir o `pack.toml` por uma URL estável.
4. Registrar a versão exata do servidor e o procedimento de backup.

Não publicar a tag final enquanto o teste de servidor não estiver concluído.
