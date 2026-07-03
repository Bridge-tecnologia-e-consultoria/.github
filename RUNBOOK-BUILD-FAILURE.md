# RUNBOOK-BUILD-FAILURE.md

## 📚 Objetivo
Descrever o procedimento operacional completo para diagnosticar e resolver falhas de build, teste, lint, cobertura e segurança nos workflows do framework.

## 🎯 Tópicos Cobertos
- Diagnóstico inicial
- Tratamento por tipo de erro
- Escalonamento
- Prevenção

## 📖 Seções Principais
### Diagnóstico: verificar logs
O primeiro passo é confirmar exatamente qual job e qual step falharam. Não basta ler o resumo em vermelho. Abra o GitHub Actions, identifique o workflow, o job e a linha do erro. Registre o link do run para que todos investiguem a mesma evidência.

Classifique a falha em uma das categorias abaixo:
- lint
- test
- build
- coverage
- security-scan
- timeout/infra

Essa classificação evita correções aleatórias. Um timeout pode pedir rerun ou ajuste de performance; uma falha de lint pede correção objetiva; um problema de segurança pode exigir contenção imediata.

### Lint
Quando o erro for lint, o objetivo é reproduzir localmente e aplicar correção mínima. Em geral, o log já aponta arquivo e linha. Corrija o padrão, rode novamente o comando local equivalente e confirme que não criou regressões. Não masque o problema desabilitando regra sem justificativa aprovada.

### Test
Falha de teste exige olhar além da mensagem final. Descubra qual teste falhou, qual expectativa não foi atendida e se o ambiente influenciou. Se a falha for reproduzível, trate como bug real até prova em contrário. Se parecer flakiness, cole evidências: repetição, tempo, dependência externa ou concorrência.

### Build
Falhas de build costumam surgir por sintaxe, dependência ausente, configuração incorreta ou diferença entre ambiente local e CI. Verifique versões de runtime, lockfiles, cache, paths e artefatos. Se o build depender de variáveis secretas, valide se elas existem e se não mudaram.

### Security
Se o job que falhou for CodeQL, secret scanning ou outro scan, a abordagem muda: contenção e triagem têm prioridade. Não tente “passar o pipeline” sem resolver o motivo do alerta. Se houver secret exposto, siga imediatamente o [RUNBOOK-SECRET-LEAK.md](./RUNBOOK-SECRET-LEAK.md).

### Timeout e falhas transitórias
Timeouts, falhas de rede e runners instáveis precisam de evidência antes de classificar como problema externo. Veja histórico do job, frequência do sintoma e se outros runs falharam igual. Um rerun é aceitável quando o contexto mostra forte indicação de instabilidade do runner, mas o rerun não deve substituir análise quando o erro é consistente.

### Fluxo operacional recomendado
1. reconhecer a falha em até poucos minutos úteis;
2. atribuir owner do incidente de build;
3. classificar tipo de erro;
4. reproduzir localmente quando aplicável;
5. corrigir a causa raiz;
6. reexecutar ou abrir novo PR/commit;
7. registrar resolução e prevenção.

### Escalation: quando chamar @devops
Acione `@devops` quando:
- o problema envolver runner, cache, workflow ou secret de pipeline;
- múltiplos repositórios apresentarem a mesma falha;
- houver suspeita de problema na infraestrutura do GitHub Actions;
- o deploy estiver bloqueado por longo período.

Acione `@leads` quando o bloqueio ameaçar data crítica, go-live ou envolver exceção de processo.

### Prevenção: como evitar no futuro
A prevenção nasce da categoria do problema:
- erros de lint: regras claras e execução local frequente;
- falhas de teste: fixtures estáveis e isolamento de dependências externas;
- build quebrado: paridade entre ambiente local e CI;
- coverage baixa: incluir testes junto com a mudança;
- segurança: revisão de secrets e logs antes do push.

Checklist pós-incidente:
- a causa raiz foi corrigida?
- o time sabe reproduzir o problema?
- existe ajuste em docs ou workflow?
- vale abrir issue de melhoria?
- há ação para reduzir recorrência?

### Matriz de decisão rápida
| Sintoma | Primeira ação | Owner inicial |
|---|---|---|
| Lint falhou | Corrigir linha/arquivo apontado | autor do PR |
| Teste falhou | Reproduzir cenário | autor + owner do módulo |
| Build falhou | Verificar dependência/configuração | owner técnico |
| Security falhou | Conter risco e triagem | `@devops`/`@leads` |
| Timeout | Comparar com runs anteriores | `@devops` |

### Comunicação durante a falha
Toda falha relevante deve ter uma atualização mínima contendo: workflow afetado, categoria do erro, owner atual, próximo passo e ETA de nova atualização. Isso evita duas pessoas corrigindo problemas diferentes ao mesmo tempo ou assumindo que outra já está investigando.

### Critérios de encerramento
Considere o incidente de build encerrado quando:
- a causa raiz estiver identificada ou suficientemente explicada;
- o pipeline voltar a verde;
- a correção estiver versionada;
- exista registro claro do que mudou;
- follow-ups necessários tenham owner definido.

### Aprendizados a capturar
Depois de resolver, documente se a falha poderia ter sido prevenida por lint local, teste adicional, melhor mensagem de erro, mudança em workflow ou treinamento. Pequenos ajustes nesse ponto reduzem reincidência de forma acumulativa.

## 💡 Exemplos Práticos
```yaml
build_failure_triage:
  workflow: "ci-cd"
  job: "build"
  category: "dependency"
  owner: "@devops"
  immediate_action: "reproduzir localmente e revisar lockfile"
```

```json
{
  "escalation": {
    "call_devops": true,
    "call_leads": false,
    "reason": "workflow failure across multiple repositories"
  }
}
```

## ❓ FAQ
**Q: Posso rerun antes de analisar logs?**  
A: Não é o padrão. Primeiro entenda a causa provável.

**Q: Falha de coverage é bug de build?**  
A: Não. É categoria própria e precisa correção proporcional.

**Q: Quando abrir incidente em vez de issue?**  
A: Quando o impacto bloqueia entregas críticas ou afeta produção/go-live.

## 🔗 Recursos Adicionais
- [TRAINING-04-CI-CD.md](./TRAINING-04-CI-CD.md)
- [QUICKSTART-TROUBLESHOOTING.md](./QUICKSTART-TROUBLESHOOTING.md)
- [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md)

## 🆘 Ajuda & Suporte
Use este runbook com o link do workflow run e compartilhe a classificação do problema logo no primeiro update. Em falhas amplas, centralize comunicação em canal operacional e mantenha `@devops` informado.

