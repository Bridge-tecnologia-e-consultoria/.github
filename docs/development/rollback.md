# Rollback

Comandos abaixo confirmados com `--help` (Claude Code 2.1.306). Execução real: **NÃO TESTADO**.

## Mod / plugin (do mais leve ao mais completo)
| Objetivo | Comando |
|---|---|
| Desligar sem remover | `claude plugin disable context-bar --scope local` |
| Remover o plugin | `claude plugin uninstall context-bar --scope local` (use `--keep-data` para preservar dados do plugin) |
| Remover a fonte (marketplace) | `claude plugin marketplace remove claude-code-mods --scope local` |
| Abrir o Claude Code sem nenhuma personalização | `claude --safe-mode` |
| Conferir o resultado | `claude plugin list` e `claude plugin marketplace list` |

Se o plugin travar a interface, abra com `--safe-mode` e então rode o `uninstall`.

## Arquivos deste repositório
- Antes de commitar: `git status` para ver, `git restore <arquivo>` para descartar mudanças de um arquivo e `rm <arquivo>` para arquivos novos. Confira o alvo antes.
- Depois de commitar e dar push: `git revert <commit>` (cria um commit que desfaz). Sem `git reset --hard` nem `git clean` sem pedido específico.

## Workflows e segredos
- Workflow com problema: desative na aba Actions do GitHub ou reverta o commit.
- Segredo vazado: seguir `RUNBOOK-SECRET-LEAK.md` e `RUNBOOK-DEPLOYMENT-ROLLBACK.md` (existem no repositório; conteúdo não revisado aqui).
