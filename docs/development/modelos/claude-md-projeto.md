# Modelo — `CLAUDE.md` de projeto (máx. ~40 linhas)

Copie para a raiz do projeto e preencha o que estiver entre `<>`. Só escreva o que foi verificado.

```
# <Nome do projeto>

## O que é
<1-2 linhas: objetivo e quem usa>

## Stack (verificado em <data>)
- <linguagem/framework e versão, de onde veio a informação>

## Comandos
- Instalar: <comando ou "nenhum">
- Build: <comando ou "nenhum">
- Teste: <comando ou "nenhum">
- Lint: <comando ou "nenhum">

## Regras do projeto
- <ex.: branch principal, padrão de commit, pastas que não devem ser tocadas>

## Segurança
- Nunca ler nem imprimir valores de .env, tokens ou credenciais.
- Sem commit/push/PR/deploy sem pedido específico.
- Marcar "NÃO TESTADO" o que não foi executado.

## Documentação
- docs/development/ (setup, workflow, quality-gates, claude-code-mods, integrations, rollback)
```

Para projetos em produção: **não sobrescrever** um `CLAUDE.md` existente. Mostre o diff proposto e aguarde aprovação.
