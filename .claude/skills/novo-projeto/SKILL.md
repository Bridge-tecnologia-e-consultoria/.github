---
name: novo-projeto
description: Prepara o ambiente Claude Code de um projeto novo ou existente - diagnóstico somente leitura, CLAUDE.md curto e docs/development/. Use somente quando o usuário pedir /novo-projeto ou "preparar o projeto".
---

# /novo-projeto

Responda em português, de forma objetiva e fácil de entender (o usuário é iniciante em desenvolvimento e atua no comercial). Resumo de 5-8 linhas, tabelas curtas. No fim de cada etapa: feito / NÃO TESTADO / próxima ação que depende do usuário.

## Regras
- Escopo: apenas diagnosticar e criar documentação. Qualquer outra ação exige novo pedido.
- Nunca leia nem imprima valores de `.env`, tokens, chaves ou credenciais. Registre só nomes de variáveis e presença/ausência.
- Remova credenciais de URLs de remote antes de exibir.
- Não confirme comando por memória: use `--help` ou documentação oficial. Se não der, escreva "NÃO CONFIRMADO" e pare naquele passo.
- Não instale mod, plugin ou servidor MCP. Sem commit, push, PR, merge ou deploy sem pedido específico.
- Marque "NÃO TESTADO" (motivo + como validar) tudo que não foi executado.

## Etapa 1 - Diagnóstico (somente leitura)
Mostre em uma tabela curta:
1. Sistema, shell e se é sessão local ou remota (container). Se for WSL no Desktop, avise que hooks de mods não rodam e pare.
2. Versão do Claude Code e como foi instalada.
3. Git: raiz, branch, worktrees, nomes de arquivos não commitados, remotes sem credenciais.
4. Stack: nomes dos scripts do `package.json`, lockfiles, pyproject, Dockerfile, CI, testes, lint, build.
5. Instruções existentes: `CLAUDE.md`, `AGENTS.md`, `.claude/rules` (existência e nº de linhas).
6. Configurações por escopo: só nomes de chaves, plugins habilitados, eventos de hooks, nomes de variáveis, nomes de servidores MCP.
7. Plugins e marketplaces instalados (`claude plugin list`, `claude plugin marketplace list`).
8. Presença dos CLIs: git, gh, node, npm, pnpm, python3, docker, supabase, vercel, aws, psql, jq.
9. Políticas gerenciadas: o que se vê e o que não. Peça `/status` e `/plugin` se necessário.
10. Linha de base de contexto: peça `/context` ao usuário se não conseguir ler.
Liste o que ficou DESCONHECIDO e pare para o usuário.

## Etapa 2 - Documentação (após o diagnóstico)
- `CLAUDE.md` com no máximo ~40 linhas: stack, comandos de build/teste/lint, regras de segurança. Se já existir, NÃO sobrescreva: mostre o diff proposto e aguarde.
- `docs/development/`: `setup.md`, `workflow.md` (com modelo de handoff entre sessões), `quality-gates.md`, `claude-code-mods.md`, `integrations.md`, `rollback.md`. Conteúdo factual, só com o que foi verificado. Não commitar.
