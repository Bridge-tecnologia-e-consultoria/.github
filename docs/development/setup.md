# Setup do ambiente

> Verificado em 2026-10-21 numa sessão **remota (container Ubuntu 24.04)** do Claude Code 2.1.306. Itens "NÃO TESTADO" precisam ser conferidos na sua máquina.

## Este repositório
- Só documentação e arquivos de configuração do GitHub. **Não há** `package.json`, lockfile, `pyproject.toml`, Dockerfile ou Makefile na raiz.
- Não há instalação de dependências para trabalhar nele: basta `git` e um editor.

## Ferramentas
| Ferramenta | Container remoto (verificado) | Sua máquina |
|---|---|---|
| git, gh, node, npm, pnpm, python3, docker, psql, jq | presentes | NÃO TESTADO — rode `command -v <nome>` |
| supabase, vercel, aws | ausentes | NÃO TESTADO |

`CONTRIBUTING.md` pede (para projetos de código): Node.js 18+, Python 3.11+, Docker, Git.

## Claude Code
- Versão exigida pelos mods: >= 2.1.287 no terminal, >= 2.1.286 no Desktop (informação do seu briefing; no container: 2.1.306).
- Conferir: `claude --version`.
- Plugins: `claude plugin list` e `claude plugin marketplace list`.

## Variáveis de ambiente
- Os `.env.example` dos subprojetos listam só nomes. Nunca registrar valores neste repositório.
- Segredos usados pelos workflows (nomes): `SLACK_WEBHOOK_MAIN`, `SLACK_WEBHOOK_ALERTS`, `SLACK_WEBHOOK_BUILD`, `SLACK_WEBHOOK_DEPLOYMENTS`, `CODECOV_TOKEN`.
- Atenção: os `.env.example` usam `SLACK_WEBHOOK`, nome diferente dos workflows. Divergência anotada, não corrigida.
