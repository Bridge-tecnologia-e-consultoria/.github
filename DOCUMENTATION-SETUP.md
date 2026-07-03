# DOCUMENTATION-SETUP.md

## 📚 Objetivo
Centralizar todos os materiais de treinamento, guias rápidos e runbooks da FASE G para que qualquer pessoa encontre rapidamente o documento certo para aprender, executar uma rotina comum ou responder a um incidente.

## 🎯 Tópicos Cobertos
- Como usar os 6 training materials
- Quando consultar os 4 quick start guides
- Em quais cenários usar os 5 runbooks
- Ordem recomendada de leitura
- Responsabilidades de manutenção da documentação

## 📖 Seções Principais
### 1. Visão geral da biblioteca operacional
A FASE G conclui o Bridge Governance Framework com um pacote documental voltado para operação real. Em vez de espalhar instruções entre vários arquivos sem contexto, este índice agrupa materiais por objetivo: treinamento, consulta rápida e resposta operacional. A regra de uso é simples: comece pelos training materials para formação, use quickstarts para tarefas frequentes e recorra aos runbooks quando houver risco, falha ou incidente.

### 2. Training materials (aprendizado estruturado)
| Documento | Quando usar | Resultado esperado |
|---|---|---|
| [TRAINING-01-GOVERNANCE.md](./TRAINING-01-GOVERNANCE.md) | Entender ownership, branch protection e reviews | PRs mais previsíveis e governados |
| [TRAINING-02-SECURITY.md](./TRAINING-02-SECURITY.md) | Evitar secret leaks, triagem de CodeQL e compliance | Postura de segurança consistente |
| [TRAINING-03-CONTRIBUTING.md](./TRAINING-03-CONTRIBUTING.md) | Aprender convenções de contribuição | Menos retrabalho em commits e PRs |
| [TRAINING-04-CI-CD.md](./TRAINING-04-CI-CD.md) | Entender pipelines, coverage, deploys e troubleshooting | Leitura correta de CI/CD |
| [TRAINING-05-PROJECTS.md](./TRAINING-05-PROJECTS.md) | Operar GitHub Projects V2 | Melhor visibilidade e priorização |
| [TRAINING-06-SLACK.md](./TRAINING-06-SLACK.md) | Usar notificações e alertas no Slack | Resposta mais rápida a eventos |

### 3. Quick start guides (consulta rápida)
| Guia | Cenário principal |
|---|---|
| [QUICKSTART-FIRST-PR.md](./QUICKSTART-FIRST-PR.md) | Abrir o primeiro PR corretamente |
| [QUICKSTART-TROUBLESHOOTING.md](./QUICKSTART-TROUBLESHOOTING.md) | Triage rápida de falhas comuns |
| [QUICKSTART-SECURITY-INCIDENT.md](./QUICKSTART-SECURITY-INCIDENT.md) | Primeira resposta a risco de segurança |
| [QUICKSTART-DEPLOYMENT.md](./QUICKSTART-DEPLOYMENT.md) | Deploy, monitoramento e rollback rápido |

### 4. Runbooks (procedimentos críticos)
| Runbook | Cenário |
|---|---|
| [RUNBOOK-BUILD-FAILURE.md](./RUNBOOK-BUILD-FAILURE.md) | Build, lint, test, coverage ou security job falhando |
| [RUNBOOK-SECRET-LEAK.md](./RUNBOOK-SECRET-LEAK.md) | Vazamento de credencial ou token |
| [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md) | Reversão segura de release |
| [RUNBOOK-SECURITY-INCIDENT.md](./RUNBOOK-SECURITY-INCIDENT.md) | Triagem e resposta por severidade |
| [RUNBOOK-OUTAGE-RESPONSE.md](./RUNBOOK-OUTAGE-RESPONSE.md) | Resposta a indisponibilidade |

### 5. Ordem recomendada de leitura
**Para novos colaboradores**
1. [TRAINING-01-GOVERNANCE.md](./TRAINING-01-GOVERNANCE.md)
2. [TRAINING-03-CONTRIBUTING.md](./TRAINING-03-CONTRIBUTING.md)
3. [QUICKSTART-FIRST-PR.md](./QUICKSTART-FIRST-PR.md)
4. [TRAINING-04-CI-CD.md](./TRAINING-04-CI-CD.md)
5. [TRAINING-02-SECURITY.md](./TRAINING-02-SECURITY.md)

**Para leads e maintainers**
1. [TRAINING-05-PROJECTS.md](./TRAINING-05-PROJECTS.md)
2. [TRAINING-06-SLACK.md](./TRAINING-06-SLACK.md)
3. [RUNBOOK-BUILD-FAILURE.md](./RUNBOOK-BUILD-FAILURE.md)
4. [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md)
5. [RUNBOOK-SECURITY-INCIDENT.md](./RUNBOOK-SECURITY-INCIDENT.md)

### 6. Como manter esta documentação útil
Atualize os documentos sempre que o processo real mudar. Se uma regra de branch protection, um canal de Slack, um workflow ou um fluxo de resposta mudar, o documento correspondente deve ser revisado no mesmo ciclo. O custo de documentação desatualizada é alto porque ela induz execução errada em momentos críticos.

Checklist de manutenção:
- revisar links cruzados após cada mudança;
- validar exemplos para garantir que não expõem secrets;
- atualizar índices do README e deste arquivo quando novos documentos forem criados;
- registrar mudanças de processo em PR com contexto claro.

## 💡 Exemplos Práticos
```yaml
document_selection:
  learning: "TRAINING-*"
  quick_reference: "QUICKSTART-*"
  incidents: "RUNBOOK-*"
  central_index: "DOCUMENTATION-SETUP.md"
```

## ❓ FAQ
**Q: Qual documento devo abrir primeiro em um incidente?**  
A: O quickstart correspondente, seguido do runbook da situação.

**Q: Onde encontro a visão completa da FASE G?**  
A: Neste índice e no README atualizado.

**Q: Quem mantém os links e a organização?**  
A: O owner do PR que altera o processo e `@leads` na revisão.

## 🔗 Recursos Adicionais
- [README.md](./README.md)
- [IMPLEMENTATION-ACTION-PLAN.md](./IMPLEMENTATION-ACTION-PLAN.md)
- [PhD-PROGRESS-DASHBOARD.md](./PhD-PROGRESS-DASHBOARD.md)
- [PHASE-7-GO-LIVE.md](./PHASE-7-GO-LIVE.md)

## 🆘 Ajuda & Suporte
Se houver dúvida sobre qual documento seguir, use este índice como ponto de entrada. Em situações urgentes, escolha o runbook mais próximo do sintoma e envolva os owners apropriados o quanto antes.
