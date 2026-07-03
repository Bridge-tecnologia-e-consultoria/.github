# TRAINING-04-CI-CD.md

## 📚 Objetivo
Este treinamento explica como o framework usa GitHub Actions, cobertura, workflows de segurança e processos de deploy para manter qualidade até o go-live. Ele foi escrito para desenvolvedores, reviewers e leads que precisam entender quando um workflow roda, o que cada job faz, como diagnosticar falhas e como agir em caso de rollback.

## 🎯 Tópicos Cobertos
- Eventos que disparam workflows e o papel de cada pipeline
- Jobs típicos: lint, test, build, security e coverage
- Troubleshooting de falhas em CI
- Processo de deployment e rollback
- Uso correto de secrets em workflows
- Cobertura mínima de 80% e validação local

## 📖 Seções Principais
### 1. Visão geral dos workflows
No ecossistema do framework, os workflows servem como gate automatizado entre branch e merge. Eles verificam se a mudança compila, passa em testes, respeita thresholds de cobertura e não viola regras de segurança. O ganho principal é consistência: cada PR passa pelo mesmo funil, independentemente de quem o abriu.

Os eventos mais comuns são `push`, `pull_request`, execuções agendadas e acionamentos específicos de deploy. Em geral, `pull_request` protege integração; `push` confirma o estado da branch; jobs de segurança e agendamentos ajudam a detectar problemas contínuos. Esse desenho diminui dependência de revisão manual para tarefas repetitivas.

### 2. Quando os workflows rodam
Situações típicas:
- abertura ou atualização de PR: lint, test, build, coverage, security-scan;
- push em branches protegidas: validação completa e artefatos quando aplicável;
- schedules: CodeQL, auditoria de segurança, rotinas recorrentes;
- deployment triggers: publicação, notificações e verificações pós-deploy.

É importante lembrar que workflow verde não substitui review, mas workflow vermelho deve bloquear merge até entendimento. Ignorar um check falho porque “parece flaky” sem investigação cria risco operacional e perda de confiança no pipeline.

### 3. O que cada job faz
Um pipeline saudável separa responsabilidades:

| Job | Objetivo | Saída esperada |
|---|---|---|
| `lint` | padronizar qualidade estática | 0 erros de lint/format |
| `test` | validar comportamento | suíte passando |
| `build` | confirmar integridade do artefato | build gerado sem erro |
| `security-scan` | encontrar riscos | findings triados |
| `coverage` | medir cobertura mínima | >= 80% conforme política |
| `deploy` | publicar em ambiente | status de sucesso/falha + logs |

Separar jobs ajuda troubleshooting. Se `build` falhar mas `lint` passar, o time já reduz o escopo da investigação. Se միայն `coverage` quebra, talvez o problema esteja em testes ausentes ou alteração de threshold, não em funcionalidade principal.

### 4. Troubleshooting: como debugar falhas
A ordem certa reduz tempo perdido:
1. identifique qual job falhou;
2. abra logs do passo exato, não apenas do job inteiro;
3. classifique: lint, test, build, secret, coverage, infra, timeout;
4. tente reproduzir localmente usando o comando equivalente;
5. só depois proponha correção ou rerun.

Exemplos de interpretação:
- erro de lint normalmente aponta arquivo e linha específicos;
- falha de teste exige ver expectativa, fixture e ambiente;
- build quebrado costuma sinalizar dependência ausente, configuração ou sintaxe;
- timeout pode indicar flakiness, rede ou job lento;
- falha de secret scanning pede correção imediata do conteúdo e rotação se necessário.

### 5. Deployments e rollback
Deploy não é apenas “apertar o botão”. O fluxo esperado inclui pré-checagens, monitoramento e verificação pós-publicação. Um deploy saudável começa com pipeline verde, secrets válidos e contexto claro do que está entrando. Depois da publicação, alguém confirma health checks, logs e sinais básicos de usuário.

Quando fazer rollback:
- deploy falhou parcialmente e deixou sistema inconsistente;
- bug crítico em produção;
- performance degradou significativamente;
- houve incidente de segurança ou configuração incorreta.

Rollback deve seguir procedimento documentado, nunca improvisado. Identifique última release boa, execute reversão, valide saúde do serviço e comunique stakeholders. Após restauração, abra investigação de causa raiz para evitar repetição.

### 6. Secrets em workflows
Secrets devem entrar no workflow apenas via mecanismo do GitHub, nunca hardcoded em YAML. O autor do PR também precisa revisar se mensagens de debug, eco de variáveis ou serialização de objetos podem expor valores. Um pipeline tecnicamente “funcional” ainda está errado se imprime segredo no log.

Boas práticas:
- referencie `${{ secrets.NAME }}`;
- use permissões mínimas;
- remova debug extra antes de merge;
- documente quais workflows dependem de quais secrets;
- rotacione e atualize secret ao primeiro sinal de exposição.

### 7. Coverage: regra de 80% e medição local
Cobertura é usada aqui como guardrail, não como troféu isolado. O requisito de 80% indica que mudanças relevantes devem vir acompanhadas de validação automatizada proporcional. Em JavaScript/TypeScript, o fluxo comum usa `npm test -- --coverage`; em Python, `pytest --cov=.`. Se a cobertura cair, o autor precisa decidir entre adicionar testes, ajustar escopo da mudança ou justificar adequadamente uma exceção rara.

### 8. Relação entre CI/CD e comunicação
Cada falha relevante precisa ser comunicável. Isso significa logs legíveis, nomes de jobs claros e integração com canais como Slack para build, deploy e alertas. Um pipeline incompreensível é operacionalmente fraco, mesmo quando funciona. O treinamento prepara o time para olhar sinais, não apenas status verde/vermelho.

### 9. Como ler logs sem se perder
Logs de CI/CD podem ser longos, mas quase sempre o sinal útil está perto do step que mudou de verde para vermelho. Procure primeiro a mensagem inicial do erro, não apenas a última linha do job. Em falhas de compilação, a primeira ocorrência costuma apontar o arquivo ou a dependência problemática. Em testes, a primeira assertion falha é mais importante do que o resumo agregado.

Também é útil comparar com o último run verde do mesmo workflow. Isso ajuda a responder se a falha veio da mudança atual, de ambiente ou de uma condição externa. A disciplina de comparação reduz correções por tentativa e erro.

### 10. Readiness de deploy antes da janela crítica
Antes de uma release importante, o time deve checar pipeline verde, secret válido, rollback conhecido, owner disponível e canal de comunicação ativo. Esse pequeno ritual evita o cenário em que o deploy tecnicamente começa, mas ninguém sabe quem acompanha health checks ou quem comunica stakeholders se algo falhar.

Quando o framework entra em fase de go-live, essa readiness deixa de ser opcional e vira parte do processo de segurança operacional.

### 11. Checklist para PR com impacto em pipeline
Se o PR toca workflow, coverage, secrets ou deploy, confira adicionalmente:
- se o nome do job continua claro;
- se mensagens de erro ajudam troubleshooting;
- se secrets não ficam expostos em debug;
- se o rollback continua documentado;
- se a mudança exige atualização do quickstart ou runbook.

### 12. Erros comuns de interpretação
Um erro comum é confundir job concluído com sistema validado. Outro é assumir que a falha mais visível é a causa raiz. Em pipelines longos, várias mensagens aparecem por consequência. O treinamento precisa reforçar que o time deve buscar o primeiro ponto de quebra com impacto real.


### 13. Colaboração entre times durante falhas
Falhas relevantes de CI/CD raramente são só “problema do pipeline”. Um teste quebrado pode apontar bug funcional; um job de security pode indicar falha de processo; um deploy ruim pode mostrar lacuna de comunicação. O treinamento precisa reforçar que a pessoa certa lidera a etapa certa, mas com contexto compartilhado entre `@devops`, `@qa`, owners técnicos e `@leads` quando necessário.


### 14. Cultura de pipeline confiável
Pipeline confiável nasce de pequenas escolhas repetidas: nomes claros de job, comandos reproduzíveis localmente, mensagens de erro úteis e documentação sincronizada com a automação real. Quando esses elementos se acumulam, o time gasta menos energia decifrando a ferramenta e mais energia resolvendo o problema certo.


## 💡 Exemplos Práticos
```yaml
pull_request_pipeline:
  on:
    pull_request:
      branches: [main, develop]
  jobs:
    - lint
    - test
    - build
    - security-scan
    - coverage
  policy:
    minimum_coverage: 80
    require_green_pipeline: true
```

```json
{
  "failed_build_triage": {
    "job": "build",
    "first_step": "open exact step log",
    "reproduce_locally": true,
    "rollback_needed": false
  }
}
```

```typescript
const deploymentDecision = {
  allChecksGreen: true,
  secretsValidated: true,
  rollbackPlanReady: true,
  proceed: true
};
```

## ❓ FAQ
**Q: Posso fazer merge se só a cobertura falhou?**  
A: Não sem tratar a causa ou ter exceção aprovada e registrada.

**Q: Rerun resolve qualquer falha?**  
A: Não. Primeiro entenda se é flakiness, erro real ou infra.

**Q: Onde vejo se faltou secret em workflow?**  
A: Nos logs do passo afetado e na configuração do job.

**Q: Build verde garante deploy seguro?**  
A: Não. Ainda é preciso verificar ambiente, secrets e health checks.

**Q: Quem participa de rollback?**  
A: Em geral `@devops`, owners do serviço e `@leads` quando o impacto é alto.

**Q: Como medir cobertura localmente?**  
A: Use o comando padrão da stack do repositório antes de abrir o PR.

## 🔗 Recursos Adicionais
- [DOCUMENTATION-SETUP.md](./DOCUMENTATION-SETUP.md)
- [QUALITY-CONFIG.md](./QUALITY-CONFIG.md)
- [PHASE-4-DEPLOYMENT.md](./PHASE-4-DEPLOYMENT.md)
- [QUICKSTART-TROUBLESHOOTING.md](./QUICKSTART-TROUBLESHOOTING.md)
- [QUICKSTART-DEPLOYMENT.md](./QUICKSTART-DEPLOYMENT.md)
- [RUNBOOK-BUILD-FAILURE.md](./RUNBOOK-BUILD-FAILURE.md)
- [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md)

## 🆘 Ajuda & Suporte
Se um workflow falhar, consulte primeiro os logs e os documentos de troubleshooting. Se o erro envolver secrets, segurança ou rollback, trate como incidente operacional e escale para os owners adequados. Se houver dúvida sobre thresholds, matriz de testes ou responsabilidade do job, consulte `QUALITY-CONFIG.md` e mencione `@devops` ou `@qa` no contexto correto.

