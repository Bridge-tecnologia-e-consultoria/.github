# Fluxo de trabalho com o Claude Code

## Ciclo de uma tarefa
1. **Diagnosticar** (somente leitura): git, stack, instruções, configurações.
2. **Combinar o escopo** por escrito: o que pode e o que está fora.
3. **Executar** em passos pequenos; mostrar o comando antes de ações que alteram algo.
4. **Verificar**: rodar o que existir (ver `quality-gates.md`) e anotar o que não foi testado.
5. **Fechar a sessão** com o handoff abaixo.

## Branches e PRs
- Trabalhar na branch indicada para a sessão. Sem commit/push/PR sem pedido específico.
- PR segue `.github/pull_request_template.md` (tipo de mudança, testes, checklist).
- Revisão: `CODEOWNERS` define `@Bridge-tecnologia-e-consultoria/leads` como dono global.
- Commits: seguir `.github/CONTRIBUTING.md`.

## Sessões na nuvem
- O container é descartável. **Arquivos não commitados somem** quando ele é reclamado.
- Mods e plugins instalados no container **não aparecem no Desktop**.

## Modelo de handoff entre sessões
Copie, preencha e cole no início da próxima sessão (ou salve em `docs/development/handoff-AAAA-MM-DD.md`).

```
# Handoff — <projeto> — <data>
## Objetivo da sessão
## Feito (com evidência: comando/arquivo/saída)
## NÃO TESTADO (motivo + como validar)
## Decisões tomadas (e por quê)
## Estado do git
- Branch:
- Arquivos não commitados (só nomes):
- Último commit:
## Fora do escopo / proibido nesta tarefa
## Próxima ação (depende de quem?)
## Riscos / desconhecidos
```
