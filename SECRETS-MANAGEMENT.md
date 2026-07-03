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
| `REDIS_URL` | Condicional | vetbooking | Cache/backend |
| `STRIPE_API_KEY` | Condicional | laconelli | Integração de pagamentos |
| `OPENAI_API_KEY` | Condicional | lideranca-tech | Integração de IA |
| `SUPABASE_URL` | Condicional | clubflow | Backend Supabase |
| `SUPABASE_ANON_KEY` | Condicional | clubflow | Chave pública Supabase |
| `NEXT_PUBLIC_API_URL` | Condicional | petskin, laconelli | Endpoint público frontend |
| `VERCEL_TOKEN` | Condicional | petskin, laconelli, clubflow | Deploy na Vercel |

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

### SLACK_WEBHOOK (integração Slack pendente)

- Formato esperado: `https://hooks.slack.com/services/T.../B.../...`
- Enquanto a integração Slack não estiver concluída, usar placeholder não sensível como `SLACK_INTEGRATION_PENDING`.
- Nos workflows de notificação dos repositórios de aplicação, validar antes do uso e ignorar envio quando `SLACK_WEBHOOK` estiver vazio ou com valor placeholder (requisito para implementação nesses repositórios).

## Rotação de secrets

- Intervalo recomendado por criticidade:
  - **30 dias:** credenciais críticas de produção (ex.: `DATABASE_URL` de ambiente produtivo)
  - **60 dias:** `JWT_SECRET`, com rotação coordenada e janela de transição para evitar invalidação abrupta de sessões
  - **60 dias:** API keys sensíveis de integrações externas (ex.: `OPENAI_API_KEY`, `STRIPE_API_KEY`)
  - **90 dias:** tokens de suporte/deploy com menor risco direto
- Considerar limitações do provedor antes da rotação (ex.: tokens sem rotação automática podem seguir janela planejada com validação prévia)
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
