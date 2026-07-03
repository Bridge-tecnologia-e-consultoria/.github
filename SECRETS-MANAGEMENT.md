# Secrets Management - Bridge CI/CD

Este guia centraliza os secrets necessários para os repositórios da organização **Bridge-tecnologia-e-consultoria**.

## Repositórios alvo

1. vetbooking
2. petskin
3. laconelli
4. clubflow
5. lideranca-tech

## Inventário de secrets

| Secret | Obrigatório | Repositórios | Uso |
|---|---|---|---|
| `CODECOV_TOKEN` | Sim | Todos os 5 | Upload de cobertura nos workflows `coverage.yml` e `ci-cd.yml` |
| `SLACK_WEBHOOK` | Sim (placeholder até Task 13) | Todos os 5 | Notificações de build/deploy |
| `DATABASE_URL` | Condicional | vetbooking, lideranca-tech | Conexão com banco PostgreSQL |
| `API_KEYS` (ex.: `STRIPE_API_KEY`, `OPENAI_API_KEY`) | Condicional | Conforme aplicação | Integrações externas |

## Como adicionar/atualizar secrets

Para cada repositório:

1. Acesse `https://github.com/Bridge-tecnologia-e-consultoria/<repo>/settings/secrets/actions` (substitua `<repo>` por `vetbooking`, `petskin`, `laconelli`, `clubflow` ou `lideranca-tech`)
2. Clique em **New repository secret**
3. Cadastre o secret com o nome exato (case-sensitive)
4. Repita para todos os secrets obrigatórios e específicos do app

### CODECOV_TOKEN

1. Acesse https://codecov.io/signup
2. Faça login com GitHub
3. Selecione a organização **Bridge-tecnologia-e-consultoria**
4. Copie o token do repositório
5. Salve como `CODECOV_TOKEN` no GitHub Secrets

### SLACK_WEBHOOK (Task 13)

- Formato esperado: `https://hooks.slack.com/services/T.../B.../...`
- Enquanto a Task 13 não estiver concluída, manter placeholder não sensível no secret para evitar falha de lookup no workflow.

## Rotação de secrets

- Frequência recomendada (baseline): a cada **90 dias**, ajustando conforme criticidade do secret e limitações do provedor
- Rotacionar imediatamente em caso de incidente ou exposição
- Sempre atualizar o secret no GitHub antes de invalidar o antigo (janela de transição)

## Boas práticas de segurança

- Nunca commitar valores reais em `.env`, `.env.local`, YAML ou logs
- Não imprimir secrets em scripts de CI (`echo`, debug verbose sem mascaramento)
- Usar nomes explícitos para cada integração
- Limitar acesso administrativo a secrets apenas para responsáveis
- Auditar uso e rotação periodicamente

## Validação pós-configuração

1. Fazer push de teste em cada repositório
2. Confirmar execução dos workflows
3. Confirmar uso de `CODECOV_TOKEN` no upload de coverage
4. Garantir que não houve vazamento de valor em logs

## Observação importante

Este repositório `.github` documenta o processo e os placeholders de ambiente. A configuração de valores reais deve ser feita diretamente em **Settings → Secrets and variables → Actions** de cada repositório alvo.
