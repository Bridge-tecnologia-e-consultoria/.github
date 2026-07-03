# TRAINING-06-SLACK.md

## 📚 Objetivo
Este material treina a equipe para usar a integração com Slack como canal operacional do framework: receber notificações, interpretar alertas, acompanhar deploys, participar de rotinas como daily standup e agir corretamente quando algo falha. A ideia é transformar ruído em sinal útil.

## 🎯 Tópicos Cobertos
- Tipos de notificações: PR, review, build, deploy, security, daily/weekly reports
- Estrutura de canais e seu propósito
- Como responder a alertas sem gerar confusão
- Troubleshooting quando mensagens não chegam
- Etiqueta operacional em canais compartilhados
- Relação entre Slack, GitHub Actions e incident response

## 📖 Seções Principais
### 1. O papel do Slack no framework
Slack não substitui GitHub, mas complementa o framework com velocidade e visibilidade. O GitHub continua sendo a fonte de verdade para código, issues e PRs; o Slack reduz tempo de resposta ao levar o evento até as pessoas certas no momento certo. Isso é especialmente valioso para builds quebrados, deploys, incidentes e lembretes operacionais.

A integração só funciona bem quando cada notificação tem destino claro. Canal errado gera ruído; canal silencioso gera atraso. Por isso o treinamento enfatiza propósito de cada canal, severidade e ação esperada.

### 2. Tipos de notificações
Exemplos de eventos importantes:
- **PR criado:** visibilidade para revisão;
- **Review solicitado:** acionamento direto do reviewer;
- **Build falhou:** reação rápida do autor/owner;
- **Deploy iniciado/finalizado/falhou:** coordenação operacional;
- **Security alert:** tratamento prioritário e canal restrito;
- **Daily standup / weekly report:** alinhamento contínuo.

Cada tipo pede resposta diferente. Nem toda mensagem exige thread, menção ou ação imediata. O time precisa distinguir sinal informativo de sinal acionável.

### 3. Estrutura de canais
O framework prevê canais de uso geral, canais por time e canais operacionais.

| Canal | Propósito | Resposta esperada |
|---|---|---|
| `#dev-notifications` | PRs, reviews, updates gerais | acompanhamento e visibilidade |
| `#alerts` | falhas de build/deploy e sinais operacionais | triagem rápida |
| `#deployments` | acompanhamento de entregas | confirmação e monitoramento |
| `#builds` | status de pipelines e testes | análise técnica |
| `#security-alerts` | eventos de segurança | ação coordenada e discreta |
| `#incidents` | gestão de incidentes ativos | comunicação estruturada |
| `#standup` | rotina diária | atualização breve |
| `#weekly-report` | resumo semanal | leitura e follow-up |

Canais por especialidade como `#frontend`, `#backend`, `#devops`, `#qa` e `#product` servem para coordenação dirigida. Evite levar alertas críticos para canal genérico quando existe canal dedicado.

### 4. Como responder a alerts
Ao receber um alert, a primeira pergunta não é “quem causou?”, e sim “qual é o impacto e quem é o owner imediato?”. Responder bem a um alert significa classificar, reconhecer ownership e iniciar a conversa certa em thread, sem espalhar informação conflitante.

Passos recomendados:
1. confirmar se o alert é real e atual;
2. identificar owner do serviço/repo/job;
3. responder na thread com status inicial;
4. anexar link para PR, workflow ou runbook;
5. escalar se houver risco de produção, segurança ou atraso relevante.

Evite comportamentos que atrapalham:
- reagir apenas com emoji sem contexto quando o time precisa de ação;
- abrir múltiplas threads paralelas para o mesmo problema;
- discutir root cause cedo demais antes de conter impacto;
- copiar credenciais, payloads sensíveis ou logs completos em canal aberto.

### 5. Daily standup e weekly report
As automações de standup e weekly report são mecanismos de disciplina leve. O standup ajuda a registrar foco, bloqueios e prioridades. O relatório semanal resume tendências. O objetivo não é microgerenciamento, mas criar cadência de acompanhamento sem depender só de reuniões longas.

Formato útil de resposta em standup:
- o que finalizei;
- no que estou trabalhando;
- qual bloqueio tenho;
- se preciso de ajuda de outro time.

### 6. Troubleshooting: mensagens não chegando
Quando uma mensagem esperada não aparece, investigue de forma objetiva:
- o workflow disparou?
- o passo de notificação executou?
- o secret/webhook está configurado?
- o canal correto foi usado?
- houve limitação temporária do Slack ou erro HTTP?

A ausência de notificação não significa automaticamente que o evento não ocorreu. Às vezes o deploy aconteceu e falhou apenas a publicação no Slack. Por isso é importante sempre conseguir voltar ao GitHub como fonte primária.

### 7. Etiqueta operacional
Slack eficiente depende de combinados simples:
- use thread para continuidade;
- cite fatos e links, não interpretações vagas;
- mencione times/pessoas com intenção clara;
- feche o loop quando o problema for resolvido;
- registre decisão final no sistema de origem quando necessário.

### 8. Slack e incident response
Durante incidentes, Slack vira sala de coordenação, não lugar de especulação. A comunicação precisa ser curta, verificável e sincronizada com os runbooks. O objetivo é reduzir MTTR e manter stakeholders alinhados. Para problemas de segurança ou indisponibilidade, use canais específicos e respeite a sensibilidade do conteúdo.

### 9. Matriz simples de severidade para alerts
Nem toda mensagem precisa da mesma urgência. Uma forma simples de orientar a reação é separar eventos informativos, operacionais e críticos. PR criado ou standup automático costuma ser informativo. Build falho ou deploy com erro é operacional. Security alert ou outage confirmado é crítico. Essa leitura evita tanto o excesso de pânico quanto a negligência com sinais importantes.

### 10. O que fazer e o que evitar em comunicação operacional
Faça:
- confirme recebimento quando você é owner direto;
- atualize em intervalos combinados;
- linke fonte primária sempre que possível;
- feche a thread com resolução.

Evite:
- flood de mensagens sem novo conteúdo;
- menções amplas sem necessidade;
- screenshots com dados sensíveis;
- status contraditórios em canais diferentes.

Esses combinados parecem simples, mas fazem grande diferença quando o time está sob pressão.

### 11. Exercício rápido de resposta em canal
Um bom treino é simular três eventos: PR criado, build falho e incidente de segurança. Para cada um, o participante deve escolher canal, tom de resposta, necessidade de thread e documento de apoio. Isso ajuda a transformar a integração em hábito operacional.

### 12. Fechamento do loop
Uma prática simples e valiosa é sempre encerrar a thread com a decisão final: corrigido, revertido, falso alarme ou follow-up aberto. Esse fechamento reduz mensagens repetidas e melhora a confiança no histórico do canal.


### 13. Relação entre Slack e memória operacional
Canais bem usados viram histórico rápido de decisão. Quando um alert tem thread organizada, links corretos e encerramento claro, a próxima pessoa consegue entender o que aconteceu sem reabrir a investigação do zero. Essa memória operacional complementa a documentação formal e acelera resposta futura.


### 14. Alinhamento entre canal e documento
Toda mensagem que exigir ação recorrente deve apontar para documento de apoio: training, quickstart ou runbook. Essa ligação entre alerta e documentação reduz improviso e acelera onboarding operacional.


### 15. Rotina recomendada por tipo de participante
Para desenvolvedores, a rotina ideal é acompanhar `#dev-notifications`, responder alerts do próprio trabalho e usar threads para atualização técnica. Para leads, além disso, vale observar `#alerts`, `#deployments` e `#incidents` para perceber tendência e coordenação entre times. Para product e stakeholders, canais como `#weekly-report` e os resumos de deploy ajudam a acompanhar impacto sem mergulhar em todo o detalhe técnico.

Esse recorte por papel evita duas distorções comuns: gente recebendo mais ruído do que precisa e gente importante não vendo sinais relevantes. O objetivo da integração com Slack não é fazer todos lerem tudo; é garantir que cada pessoa veja cedo o que realmente importa para sua responsabilidade.


### 16. Sinal bom versus ruído
Uma boa integração é aquela em que a equipe consegue identificar rapidamente o que exige ação e o que serve apenas como contexto. Revisar periodicamente canais, mensagens e frequência de notificações ajuda a manter esse equilíbrio.


## 💡 Exemplos Práticos
```yaml
slack_alert_response:
  channel: "#alerts"
  event: "build_failed"
  first_reply:
    owner: "@devops"
    message: "Investigando job build do PR #42. Atualizo em 10 min."
  links:
    - "GitHub Actions run"
    - "RUNBOOK-BUILD-FAILURE.md"
```

```json
{
  "notification_routing": {
    "pull_request": "#dev-notifications",
    "deployment": "#deployments",
    "security": "#security-alerts",
    "incident": "#incidents"
  }
}
```

## ❓ FAQ
**Q: Toda falha de build deve virar incidente?**  
A: Não. Só quando houver impacto amplo, recorrência grave ou risco operacional alto.

**Q: Onde respondo a um deploy falho?**  
A: Na thread do canal operacional correspondente, com link para o runbook.

**Q: Posso colar log completo no Slack?**  
A: Prefira linkar o log; cole apenas trechos curtos e não sensíveis.

**Q: Se a notificação não chegou, o workflow não rodou?**  
A: Não necessariamente. Verifique o GitHub Actions primeiro.

**Q: Quem deve ser mencionado em alertas críticos?**  
A: Owners da área e `@leads` quando houver alto impacto.

**Q: Daily standup é obrigatório mesmo com status no project?**  
A: Sim, porque complementa o board com bloqueios e coordenação imediata.

## 🔗 Recursos Adicionais
- [DOCUMENTATION-SETUP.md](./DOCUMENTATION-SETUP.md)
- [INTEGRATION-CONFIG.md](./INTEGRATION-CONFIG.md)
- [PHASE-6-SLACK-INTEGRATION.md](./PHASE-6-SLACK-INTEGRATION.md)
- [QUICKSTART-TROUBLESHOOTING.md](./QUICKSTART-TROUBLESHOOTING.md)
- [RUNBOOK-OUTAGE-RESPONSE.md](./RUNBOOK-OUTAGE-RESPONSE.md)
- [RUNBOOK-SECURITY-INCIDENT.md](./RUNBOOK-SECURITY-INCIDENT.md)

## 🆘 Ajuda & Suporte
Se notificações ou canais não estiverem funcionando como esperado, verifique primeiro o workflow, os logs e a configuração do webhook. Se o problema bloquear resposta operacional, trate como issue prioritária e mencione `@devops`. Em alertas de segurança ou indisponibilidade, migre rapidamente para o runbook correspondente e mantenha a comunicação centralizada no canal correto.

