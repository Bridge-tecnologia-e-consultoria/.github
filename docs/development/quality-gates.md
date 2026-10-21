# Quality gates

> Fonte: leitura dos arquivos em 2026-10-21. Nada abaixo foi executado no GitHub Actions por esta sessão — **NÃO TESTADO**.

## Neste repositório
- Sem lint, build ou testes locais.
- Workflows (`.github/workflows/`): `slack-build-alerts`, `slack-daily-standup`, `slack-deployment`, `slack-notifications`, `slack-weekly-report`. São notificações no Slack, não validações de código.
- Checklist manual antes de pedir revisão: links relativos do README funcionam, nenhum segredo/valor sensível no texto, `git diff` revisado.

## Modelos nos subprojetos (ex.: `vetbooking/.github/workflows/ci-cd.yml`)
| Etapa | Como está escrito | Bloqueia o merge? |
|---|---|---|
| Lint e Prettier | `continue-on-error: true` | Não |
| Testes Node | termina com `\|\| true` | Não |
| Checagem de cobertura 80% (`npm run coverage:check --if-present`) | `continue-on-error: false`, só no Node 18.x; se o script não existir só imprime aviso | Só se o script existir e falhar |
| Testes Python | `continue-on-error: true` | Não |
| CodeQL (`security-extended`) | job normal | Sim, se falhar |
| Build | `npm run build --if-present` | — |
| Deploy staging / produção | passo é só `echo` (placeholder) | — |

Conclusão (do texto dos arquivos): hoje os gates de lint e testes **não barram** nada. Decisão de endurecer fica com o time; não alterado.

## PR template
Pede cobertura de 80%+, testes e auto-revisão (`.github/pull_request_template.md`).
