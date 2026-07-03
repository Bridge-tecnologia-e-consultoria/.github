# RUNBOOK-DEPLOYMENT-ROLLBACK.md

## 📚 Objetivo
Fornecer um procedimento claro para reverter deployments com segurança quando houver falha de release, bug crítico, degradação de performance ou risco de segurança.

## 🎯 Tópicos Cobertos
- Quando fazer rollback
- Procedimento de rollback
- Pós-rollback
- Comunicação

## 📖 Seções Principais
### Quando fazer rollback?
Rollback é apropriado quando a permanência da release atual é mais arriscada que retornar ao último estado saudável. Sinais clássicos:
- deployment falhou parcialmente;
- bug crítico em produção;
- performance degradou após release;
- security issue introduzido;
- health checks não estabilizam.

### Procedimento de rollback
1. **Identificar última boa release.** Use tags, histórico de deploy ou registro operacional.
2. **Confirmar impacto atual.** Defina se o rollback é total, parcial ou por componente.
3. **Reverter deployment.** Execute o mecanismo suportado pela plataforma.
4. **Verificar health checks.** Confirme restauração do serviço.
5. **Notify stakeholders.** Informe o que foi revertido e o status atual.

Nunca faça rollback “às cegas”. A pressa é legítima, mas o time ainda precisa saber para qual versão está voltando e quais dependências podem ser afetadas.

### Pós-rollback
Com o serviço estável novamente:
- abra análise de causa raiz;
- crie issue para correção definitiva;
- aplique fix no branch apropriado;
- planeje novo deploy quando a correção estiver validada.

O rollback restaura operação, mas não fecha o problema. Sem follow-up explícito, a mesma falha tende a voltar na próxima release.

### Communication: update @leads, @devops
A comunicação deve ser simples e verificável:
- motivo do rollback;
- ambiente afetado;
- release revertida e release restaurada;
- status atual dos checks;
- próxima atualização prevista.

### Checklist operacional de rollback
- release atual identificada
- última boa release confirmada
- owner do rollback nomeado
- stakeholders avisados
- health checks definidos
- critério de sucesso do rollback conhecido

### Decisão entre mitigação e rollback
Nem todo problema pede reversão imediata. Se houver correção segura e muito rápida sem ampliar impacto, a mitigação pode ser suficiente. Ainda assim, a decisão precisa ser explícita, registrada e validada pelos owners operacionais. Ambiguidade nessa etapa aumenta tempo de recuperação.

### Verificação final
Após rollback, confirme não apenas que o deploy terminou, mas que o comportamento do sistema voltou ao padrão esperado. Logs limpos, dashboards estáveis e ausência de novos alerts são parte da definição de sucesso.

### Comunicação em janelas críticas
Em rollback durante janela sensível, publique atualizações curtas em intervalos definidos: detecção, decisão de rollback, reversão iniciada, health checks em andamento e estabilidade confirmada. Isso reduz ansiedade e evita pedidos paralelos de status.

### Follow-up obrigatório
Depois do rollback, registre se o problema veio de código, configuração, dado, migration, dependência externa ou processo. Essa categorização ajuda a atacar a causa raiz certa.


### Papéis durante rollback
Defina explicitamente quem executa a reversão, quem monitora health checks e quem comunica stakeholders. A clareza de papel reduz atraso e mensagens conflitantes.

### Registro final
Ao concluir, registre horário da decisão, release revertida, release restaurada e estado final dos checks. Esse histórico acelera auditorias e investigações futuras.


### Sinais de sucesso do rollback
O rollback é considerado bem-sucedido quando o serviço retorna ao comportamento esperado, os principais alerts cessam e os stakeholders recebem confirmação objetiva do estado restaurado.


### Sequência detalhada de execução
1. congelar novas mudanças enquanto o rollback é avaliado;
2. confirmar a versão de destino e os pré-requisitos;
3. executar a reversão pelo mecanismo suportado;
4. acompanhar logs e health checks em tempo real;
5. confirmar restauração funcional mínima;
6. comunicar estabilização ou necessidade de nova ação.

### Riscos de rollback mal conduzido
Rollback apressado sem confirmação de versão, sem observação de health checks ou sem comunicação pode ampliar o incidente. Por isso o procedimento precisa ser disciplinado mesmo sob pressão.


### Dono da decisão
A decisão final de rollback precisa ter owner identificado, mesmo quando a execução envolver várias pessoas.


### Dependências a revisar
Após a reversão, confira se filas, jobs assíncronos, integrações externas e dashboards também refletiram a volta para a release estável. Em alguns cenários, o deploy volta, mas componentes dependentes continuam apontando para estado inconsistente.


### Confirmação cruzada
Peça confirmação de estabilidade a pelo menos um owner técnico e um owner operacional.

 Registre também o horário final de estabilidade.

## 💡 Exemplos Práticos
```yaml
rollback_decision:
  trigger: "critical production bug"
  last_good_release: "v2026.07.03-2"
  health_checks_required: true
  stakeholders:
    - "@devops"
    - "@leads"
```

## ❓ FAQ
**Q: Toda falha de deploy vira rollback?**  
A: Não. Só quando manter a release atual for mais arriscado.

**Q: Posso corrigir em produção sem rollback?**  
A: Só se o risco for menor e o time tiver clareza total do impacto.

## 🔗 Recursos Adicionais
- [TRAINING-04-CI-CD.md](./TRAINING-04-CI-CD.md)
- [QUICKSTART-DEPLOYMENT.md](./QUICKSTART-DEPLOYMENT.md)
- [RUNBOOK-OUTAGE-RESPONSE.md](./RUNBOOK-OUTAGE-RESPONSE.md)

## 🆘 Ajuda & Suporte
Se o rollback estiver sob tempo crítico, centralize updates em thread única e registre a decisão final no sistema de origem.

