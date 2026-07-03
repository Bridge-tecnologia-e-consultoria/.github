# RUNBOOK-OUTAGE-RESPONSE.md

## 📚 Objetivo
Guiar a resposta estruturada a indisponibilidade total ou parcial de serviços, integrações ou fluxos críticos do framework até a restauração da operação e o pós-mortem.

## 🎯 Tópicos Cobertos
- Detecção
- Resposta inicial
- Investigação
- Remediação
- Verificação
- Pós-mortem

## 📖 Seções Principais
### Detection
A detecção pode começar por alerta de monitoramento, reporte de usuário, descoberta interna ou falha observada em deploy/build. Antes de declarar outage, confirme se o sintoma é real, atual e reproduzível. Isso evita alarmes falsos e reduz ruído operacional.

### Initial response
No minuto zero, o objetivo é coordenar pessoas e informação.
- page on-call engineer ou owner operacional;
- reunir `@leads` e `@devops` se o impacto for amplo;
- iniciar canal/thread de incidente;
- registrar timeline inicial.

Linha do tempo mínima:
- **T+0:** reconhecer e classificar severidade;
- **T+5 min:** definir owner e hipótese inicial;
- **T+15 min:** publicar status, impacto e próximo update.

### Investigation
A investigação deve seguir fontes objetivas:
- dashboards de monitoramento;
- deploys recentes;
- mudanças de configuração;
- dependências externas;
- logs de aplicação e plataforma.

Busque primeiro o caminho mais curto para restaurar serviço, depois a explicação completa. Incidente longo sem mitigação por busca de perfeição é erro clássico.

### Remediation
Duas frentes podem coexistir:
- **Mitigation:** ação rápida para reduzir impacto e restaurar parcialmente o serviço.
- **Permanent fix:** solução correta e completa, quando o sistema estiver estável o suficiente.

Também é responsabilidade do time comunicar ETA realista. Melhor dar intervalo honesto do que prometer restauração sem base.

### Verification
Após aplicar correção ou rollback:
- confirme que o serviço voltou;
- monitore regressão;
- valide sistemas dependentes;
- notifique stakeholders de que a operação está estável.

### Post-mortem
Nenhum outage deve terminar sem aprendizado registrado. O pós-mortem precisa incluir:
- timeline factual;
- causa raiz;
- impacto observado;
- ações corretivas;
- ações preventivas e owners.

O objetivo do pós-mortem é melhoria sistêmica, não atribuição de culpa.

### Papéis durante o outage
- **Incident owner:** coordena decisão e timeline.
- **Technical owner:** executa mitigação/correção.
- **Communications owner:** publica updates consistentes.
- **Support/stakeholder liaison:** leva contexto para pessoas impactadas.

Separar papéis evita que a mesma pessoa tente investigar, corrigir e comunicar ao mesmo tempo sob pressão.

### Indicadores de restauração
Considere o serviço restaurado quando usuários conseguem completar fluxos críticos, health checks permanecem estáveis por janela razoável e os alerts principais param de disparar. Voltar a responder parcialmente não é necessariamente o fim do incidente.

### Itens obrigatórios do pós-mortem
- resumo executivo do incidente;
- timeline detalhada;
- causa raiz confirmada ou hipótese mais provável;
- impacto mensurado;
- ações preventivas com owners e prazo.

### Mitigação versus correção definitiva
Em muitos outages, a melhor decisão inicial é restaurar serviço com solução temporária e deixar a correção elegante para depois. Documentar essa escolha é importante porque evita que a mitigação temporária seja confundida com resolução final.

### Comunicação com usuários internos
Se o outage afetar o fluxo de PR, deploy ou monitoramento, informe também usuários internos sobre o comportamento esperado durante a recuperação. Isso reduz tentativas de repetir ações que só pioram o cenário.


### Critério para reduzir severidade
A severidade só deve ser reduzida quando o impacto principal estiver contido e houver evidência objetiva de estabilização. Reduzir severidade cedo demais cria falsa sensação de normalidade e atrapalha monitoramento.


### Encerramento formal
Antes de encerrar o outage, confirme que a thread/canal do incidente recebeu atualização final, que os owners concordam com a estabilização e que o pós-mortem tem responsável e prazo.


### Checklist de verificação pós-restauração
- fluxos críticos de usuário funcionando;
- dashboards estáveis por janela observável;
- ausência de novos alerts principais;
- dependências externas respondendo;
- comunicação final enviada.

### Armadilhas comuns
As armadilhas mais comuns são encerrar cedo demais, focar em causa raiz antes de restaurar o serviço e deixar comunicação fragmentada entre vários canais. O runbook existe justamente para evitar essas três perdas de tempo sob pressão.


### Uma fonte de verdade
Durante o outage, mantenha uma thread ou canal principal como fonte oficial de atualização.


### Registro da timeline
Durante o incidente, anote horário de detecção, mitigação, restauração parcial e restauração completa. Essa linha do tempo ajuda comunicação em tempo real e simplifica o pós-mortem.


### Fechamento
Só encerre após consenso dos owners.

## 💡 Exemplos Práticos
```yaml
outage_response:
  severity: "P1"
  detected_by: "monitoring alert"
  t_plus_0: "incident acknowledged"
  t_plus_5: "owner assigned"
  t_plus_15: "stakeholder update sent"
```

## ❓ FAQ
**Q: Toda indisponibilidade vira P1?**  
A: Não, depende de escopo, duração e impacto.

**Q: Quando abrir canal dedicado?**  
A: Quando várias pessoas precisarão coordenar atualização e decisão.

## 🔗 Recursos Adicionais
- [TRAINING-06-SLACK.md](./TRAINING-06-SLACK.md)
- [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md)
- [QUICKSTART-TROUBLESHOOTING.md](./QUICKSTART-TROUBLESHOOTING.md)

## 🆘 Ajuda & Suporte
Mantenha uma única linha oficial de atualização e feche o incidente somente depois da verificação de estabilidade.

