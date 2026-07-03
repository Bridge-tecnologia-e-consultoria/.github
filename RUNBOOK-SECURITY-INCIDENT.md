# RUNBOOK-SECURITY-INCIDENT.md

## 📚 Objetivo
Definir classificação, resposta, investigação e comunicação para incidentes de segurança de diferentes severidades no framework.

## 🎯 Tópicos Cobertos
- Classificação P1-P4
- Resposta por severidade
- Investigação
- Comunicação

## 📖 Seções Principais
### Classificação
- **P1 (Critical):** ação imediata, risco ativo alto, potencial impacto severo.
- **P2 (High):** resposta em horas, risco relevante controlável.
- **P3 (Medium):** correção programada em poucos dias.
- **P4 (Low):** baixo impacto, cabe em backlog priorizado.

A classificação deve considerar impacto, explorabilidade, exposição de dados, alcance e urgência operacional. Em dúvida entre duas severidades, comece pela mais alta até a triagem reduzir o risco percebido.

### Resposta por severidade
**P1:** all hands, escalonamento imediato para liderança, contenção antes de investigação completa.  
**P2:** DevOps + Security/owners da área, resposta coordenada em horas.  
**P3:** security review + fix com prazo curto.  
**P4:** documentar, priorizar e acompanhar em project/issue.

### Investigação
A investigação precisa responder quatro perguntas:
- quem fez o quê e quando?
- quais sistemas ou dados foram expostos?
- por quanto tempo o risco ficou ativo?
- quem precisa ser notificado?

Colete evidência antes de concluir causa raiz. Logs, timestamps, workflow runs, commits, configuração e contexto do usuário afetado são partes do quebra-cabeça.

### Comunicação template: what to say to users
A comunicação externa ou para stakeholders internos deve ser factual:
- o que aconteceu;
- o que já foi feito;
- se existe impacto conhecido em dados ou disponibilidade;
- quando virá a próxima atualização.

Evite linguagem especulativa e evite divulgar detalhes que ampliem risco enquanto a mitigação está em andamento.

### Checklist de resposta inicial
- severidade atribuída
- owner do incidente definido
- ativos afetados listados
- contenção iniciada
- próxima atualização agendada
- canal correto de comunicação confirmado

### Evidências mínimas
Ao investigar, preserve links para commits, PRs, workflow runs, dashboards, logs e timestamps de descoberta. Isso acelera a análise e evita reconstruções imprecisas depois que o incidente acabar.

### Encerramento e prevenção
Um incidente só deve ser encerrado quando o risco estiver contido, a comunicação final tiver sido publicada e as ações preventivas tiverem owner. Sem essa última parte, a resposta fica incompleta.

### Papéis recomendados
- **incident owner:** coordena resposta e priorização;
- **technical owner:** investiga e corrige a causa;
- **communications owner:** publica updates consistentes;
- **review owner:** garante que lições aprendidas virem melhoria real.

### Janela de atualização
Durante P1 e P2, defina desde o início a frequência de atualização para evitar silêncio operacional. Mesmo sem nova descoberta técnica, um update confirmando “investigação em andamento, próxima atualização em X minutos” preserva alinhamento.


### Escopo mínimo do relatório final
O relatório final deve conter severidade, ativos afetados, janela de exposição, ação de contenção, correção aplicada, impacto observado e próximos passos. Mesmo incidente pequeno merece fechamento disciplinado para não virar padrão informal.


### Relação com outros runbooks
Se a causa envolver credencial exposta, combine este documento com o `RUNBOOK-SECRET-LEAK.md`. Se o incidente vier de deploy ou outage, coordene a resposta com os runbooks correspondentes para não perder alinhamento operacional.


### Fluxo resumido por fase
**Fase 1: reconhecer** o sinal e atribuir severidade inicial.  
**Fase 2: conter** o risco ativo, como credencial, acesso ou componente vulnerável.  
**Fase 3: investigar** com evidências mínimas e owner técnico.  
**Fase 4: comunicar** status, impacto e próximo update.  
**Fase 5: prevenir** recorrência com ação registrada.

### Critério de escalonamento executivo
Escalone para liderança quando houver impacto significativo em produção, risco regulatório, indisponibilidade ampla ou qualquer cenário que possa afetar confiança de clientes e parceiros.


### Fechamento documentado
Todo incidente de segurança deve terminar com atualização final e link para o registro permanente da investigação.


### Checklist de encerramento
- contenção confirmada;
- comunicação final publicada;
- owner de prevenção definido;
- issue, PR ou ação de follow-up registrada;
- evidências preservadas para auditoria.

Esse checklist evita o erro comum de parar quando a urgência baixa, deixando documentação e prevenção incompletas.


### Revisão posterior
Depois do encerramento, revise se os canais, templates e alertas existentes ajudaram ou atrapalharam a resposta.

 Sempre registre qual decisão foi tomada, por quem e com base em qual evidência.

 Atualizações curtas e regulares mantêm alinhamento entre investigação, liderança e stakeholders sem criar silêncio operacional perigoso.

 Preserve a cadeia de decisão.

 Até o fim.

## 💡 Exemplos Práticos
```yaml
security_incident:
  severity: "P2"
  scope: "workflow secret exposure risk"
  response_team:
    - "@devops"
    - "@leads"
  next_update_in: "60 minutes"
```

## ❓ FAQ
**Q: Um finding de CodeQL pode ser P1?**  
A: Sim, se indicar vulnerabilidade crítica explorável ou exposição severa.

**Q: Quem fala com stakeholders?**  
A: O owner designado do incidente com alinhamento de `@leads`.

## 🔗 Recursos Adicionais
- [TRAINING-02-SECURITY.md](./TRAINING-02-SECURITY.md)
- [RUNBOOK-SECRET-LEAK.md](./RUNBOOK-SECRET-LEAK.md)
- [QUICKSTART-SECURITY-INCIDENT.md](./QUICKSTART-SECURITY-INCIDENT.md)

## 🆘 Ajuda & Suporte
Se houver potencial exposição de dado sensível, trate a comunicação como parte da resposta e não como passo opcional.

