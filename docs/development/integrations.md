# Integrações

> Só nomes e presença. Nenhum valor, token ou credencial foi lido ou registrado.

## Slack (neste repositório)
Cinco workflows em `.github/workflows/` publicam no Slack via webhook:

| Workflow | Gatilho | Segredo (nome) |
|---|---|---|
| `slack-notifications` | PR e issues (opened/reopened/closed), manual | `SLACK_WEBHOOK_MAIN` |
| `slack-build-alerts` | `workflow_run` dos workflows "CI/CD" e "Build" (só quando falham), manual | `SLACK_WEBHOOK_BUILD`, `SLACK_WEBHOOK_ALERTS` |
| `slack-deployment` | `workflow_run`, manual | `SLACK_WEBHOOK_DEPLOYMENTS` |
| `slack-daily-standup` | cron `0 9 * * 1-5` (UTC), manual | `SLACK_WEBHOOK_MAIN` |
| `slack-weekly-report` | cron `0 17 * * 5` (UTC), manual | `SLACK_WEBHOOK_MAIN` |

Se o segredo não existir, `slack-notifications` falha com `exit 1` (lido no arquivo). Comportamento dos outros quatro: NÃO TESTADO.
Se o segredo está configurado no GitHub: **NÃO CONFIRMADO** (não há acesso às configurações do repositório).

## Variáveis por subprojeto (`.env.example`, só nomes)
| Projeto | Variáveis |
|---|---|
| clubflow | `CODECOV_TOKEN`, `SLACK_WEBHOOK`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `VERCEL_TOKEN` |
| laconelli | `CODECOV_TOKEN`, `SLACK_WEBHOOK`, `NEXT_PUBLIC_API_URL`, `STRIPE_API_KEY`, `VERCEL_TOKEN` |
| lideranca-tech | `CODECOV_TOKEN`, `SLACK_WEBHOOK`, `DATABASE_URL`, `JWT_SECRET`, `OPENAI_API_KEY` |
| petskin | `CODECOV_TOKEN`, `SLACK_WEBHOOK`, `NEXT_PUBLIC_API_URL`, `VERCEL_TOKEN` |
| vetbooking | `CODECOV_TOKEN`, `SLACK_WEBHOOK`, `DATABASE_URL`, `REDIS_URL`, `JWT_SECRET` |

## Claude Code
- 12 plugins "synced" do claude.ai estavam carregados na sessão remota (operations, brand-voice, human-resources, design, engineering, common-room, slack-by-salesforce, apollo, legal, product-management, sales, productivity).
- Vários servidores MCP desses plugins falharam no container (erro 403 do proxy). Isso é do container; **NÃO TESTADO** no Desktop.
- Regra: não instalar servidor MCP, criar autenticação ou conceder escopo sem pedido específico.
