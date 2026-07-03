# QUICKSTART-DEPLOYMENT.md

## 📚 Objetivo
Oferecer um guia enxuto para disparar, monitorar, validar e, se necessário, reverter um deployment.

## 🎯 Tópicos Cobertos
- Como disparar deployment
- Como monitorar status
- Procedimento de rollback
- Verificação pós-deploy
- Problemas comuns

## 📖 Seções Principais
### How to trigger deployment
Use o workflow previsto pelo repositório ou o gatilho manual documentado. Nunca faça deploy sem pipeline verde e sem confirmar o ambiente alvo.

### Monitor deployment status
Acompanhe o GitHub Actions e o canal `#deployments`. Confirme início, progresso, conclusão e eventuais falhas.

### Rollback procedure
Se o deploy falhar ou causar impacto, siga [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md) e envolva `@devops`.

### Verify after deploy
- health checks verdes
- logs sem erro novo
- serviço respondendo
- stakeholders avisados se necessário

### Common deploy issues
- secret inválido
- ambiente errado
- migration incompatível
- falha de build tardia

### Verificação rápida antes de disparar
Antes do deploy, confirme branch correta, pipeline verde, owner disponível e rollback conhecido. Depois do deploy, valide health checks, logs e canal de notificações. Se qualquer um desses sinais estiver inconsistente, pause e investigue antes de seguir.

### Etiqueta operacional
Sempre responda na thread do deploy com status objetivo: iniciado, monitorando, concluído ou revertido. Isso reduz ruído e facilita auditoria rápida.

### Sinal de alerta
Se health check, logs ou notificações divergirem entre si, considere o deploy inconclusivo até nova validação.


## 💡 Exemplos Práticos
```yaml
post_deploy_check:
  health_check: true
  logs_reviewed: true
  rollback_plan_ready: true
```

## ❓ FAQ
**Q: Deploy verde significa sucesso total?**  
A: Não, valide também o comportamento pós-deploy.

**Q: Quem autoriza rollback?**  
A: Owners operacionais e `@leads` quando o impacto for alto.

## 🔗 Recursos Adicionais
- [TRAINING-04-CI-CD.md](./TRAINING-04-CI-CD.md)
- [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md)
- [RUNBOOK-OUTAGE-RESPONSE.md](./RUNBOOK-OUTAGE-RESPONSE.md)

## 🆘 Ajuda & Suporte
Se o deploy estiver em risco, registre status em thread operacional e mantenha stakeholders atualizados.

