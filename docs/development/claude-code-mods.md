# Mods do Claude Code

## Política
- **Um mod por vez**, só com autorização explícita.
- Aprovado até agora: **somente Context Bar** (`context-bar@claude-code-mods`, repositório `hamzafer/claude-code-mods`).
- Fora de escopo: Replay Theater, Blast Radius, Output Diet, Reread Guard, Tool Diet, Cache Keeper, Goal Meter, Collision Guard e MD Preview (este envia Markdown à API do GitHub; só com autorização específica).
- Estar no GitHub, ter popularidade ou passar em validação **não** prova segurança.

## Análise do Context Bar (commit `5c925b0`, versão 0.1.3)
| Item | Resultado (lido no código) |
|---|---|
| Eventos | `session.start`, `turn.complete`, `session.compact`, `command.run`, `ui.render` |
| Chamadas | `$.command.register`, `$.env.get`, `$.fs.exists`, `$.fs.read`, `$.session.usage`, `$.store.get/set`, `$.ui.resolve` (+ estado interno) |
| Não usa | `$.process`, `$.http`, `$.settings`, `$.mcp`, `$.model`, `$.prompt` |
| Lê | `<CLAUDE_CONFIG_DIR ou ~/.claude>/claude-code-mods/bands.json`, se existir; variáveis `CLAUDE_CONFIG_DIR` e `HOME` |
| Escreve | Só a preferência mostrar/ocultar, via `$.store` |
| Rede / processos / modelo / dependências | Nenhum encontrado |
| `claude plugin validate` | Passou (aviso: sem ícone) — a validação não faz varredura de segurança |

## Instalação no Desktop (Passo 3) — **NÃO TESTADO**
Sintaxe confirmada com `--help`. Rode numa sessão **local** aberta na pasta do projeto.

1. (opcional) conferir se o repositório mudou: `git ls-remote https://github.com/hamzafer/claude-code-mods HEAD` — a análise acima vale para `5c925b0`.
2. `claude plugin marketplace add hamzafer/claude-code-mods --scope local` — registra a fonte; **NÃO CONFIRMADO** se isso já instala plugins ou liga atualização automática. Confira com o passo 3.
3. `claude plugin list` — nenhum plugin novo deve aparecer ainda.
4. `claude plugin install context-bar@claude-code-mods --scope local`
5. `claude plugin details context-bar` — mostra componentes e custo estimado em tokens.

Evite `claude plugin install context-bar --marketplace hamzafer/claude-code-mods`: segundo a ajuda, ele adiciona o marketplace em **user settings** (global), não local.

## Teste de aceitação (na sua máquina)
| Teste | Como | Status |
|---|---|---|
| A barra aparece | Abra o projeto, envie uma mensagem; a barra aparece acima do prompt | NÃO TESTADO |
| Comando | `/context-bar` oculta e mostra | NÃO TESTADO |
| Sem escrita fora do esperado | `git status` no projeto não deve mudar | NÃO TESTADO |
| Sem rede | Código não tem chamadas de rede (lido); teste em runtime não feito | NÃO TESTADO |
| Desabilitar / remover | Ver `rollback.md` | NÃO TESTADO |
| Coexiste com `/context` | Rode `/context` com a barra ligada | NÃO TESTADO |
