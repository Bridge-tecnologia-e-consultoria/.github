# TRAINING-01-GOVERNANCE.md

## 📚 Objetivo
Este material de treinamento apresenta a base de governança do Bridge Governance Framework para qualquer pessoa que abre issues, envia pull requests, revisa código ou administra permissões. O foco não é apenas explicar o que são CODEOWNERS, branch protection e teams, mas mostrar como essas peças se conectam no fluxo diário. Ao final, a equipe deve conseguir responder três perguntas com segurança: quem pode alterar o quê, quais verificações precisam passar antes do merge e qual é o caminho correto para propor mudanças sem bloquear o time.

## 🎯 Tópicos Cobertos
- O papel de governança do repositório `.github`
- Como o arquivo `.github/CODEOWNERS` distribui responsabilidade técnica
- Regras de branch protection para `main` e `develop`
- Estrutura de teams: `@leads`, `@frontend`, `@backend`, `@devops`, `@qa`, `@product`
- Fluxo prático de PR: criação, review, aprovação e merge
- Escalação quando existe bloqueio de permissão, conflito de ownership ou exceção operacional

## 📖 Seções Principais
### 1. Por que governança importa no framework
Governança neste framework significa tornar mudanças previsíveis. Quando uma equipe trabalha em vários repositórios, a ausência de regras claras gera retrabalho: PRs sem revisão adequada, configurações alteradas por engano, pipelines quebradas e incidentes difíceis de auditar. O modelo adotado aqui reduz esse risco definindo proprietários, revisões mínimas e permissões por papel.

A governança também protege a velocidade. Pode parecer que aprovações obrigatórias deixam o fluxo mais lento, mas na prática elas evitam que erros entrem em `main`, o que é muito mais caro. Branch protection e CODEOWNERS deslocam a conversa para antes do merge, quando ainda é barato corrigir. Isso melhora a qualidade sem depender de memória individual.

Outro ponto importante é rastreabilidade. Quando uma alteração em workflow, segurança ou documentação é feita, o framework deixa claro qual team deve ser envolvido. Isso facilita auditoria, onboarding e incident response. Um novo integrante não precisa adivinhar quem revisar; o processo já indica o caminho.

### 2. CODEOWNERS: o que é e como funciona
O arquivo `.github/CODEOWNERS` define quem deve revisar mudanças em caminhos específicos. No modelo atual, arquivos Markdown são direcionados para `@leads`, workflows para `@devops`, testes para `@qa`, backend para `@backend` e áreas de frontend para `@frontend`. Esse mapeamento transforma conhecimento tácito em regra operacional.

Na prática, quando alguém altera um arquivo coberto por uma regra, o GitHub sugere ou exige revisores adequados. Isso evita situações em que um PR de infraestrutura é aprovado apenas por quem não acompanha CI/CD, ou em que um ajuste de segurança passa sem olhar especializado. CODEOWNERS não substitui comunicação entre times; ele garante que a comunicação comece pelo grupo correto.

Boas práticas para interpretar CODEOWNERS:
- Leia a regra mais específica aplicável ao arquivo alterado.
- Se um PR tocar múltiplas áreas, espere múltiplos reviewers.
- Se o owner estiver indisponível, escale para `@leads` em vez de contornar a regra.
- Não mova arquivos entre diretórios apenas para escapar de revisão especializada.

### 3. Branch protection: o contrato antes do merge
Branch protection é o conjunto de regras que define quando uma branch pode receber mudanças. Para `main`, o framework espera pelo menos uma aprovação, resolução de conversas, branches atualizadas e checks obrigatórios como `lint`, `test`, `build` e `security-scan`. Para `develop`, a proteção pode ser mais leve, mas ainda preserva revisão mínima e validações essenciais.

O objetivo não é burocracia. O objetivo é impedir merge de código não validado. Uma alteração que “funciona na minha máquina” não é suficiente; ela precisa passar pelo mesmo funil de verificação que qualquer outra. Esse padrão deixa o comportamento dos repositórios consistente, o que reduz surpresa na hora do deploy.

A rotina esperada para o autor do PR é:
1. Criar branch a partir da base correta.
2. Submeter mudanças pequenas e rastreáveis.
3. Verificar se todos os checks iniciaram.
4. Resolver comentários de review.
5. Garantir que a branch está atualizada com a base.
6. Fazer merge somente após todos os requisitos estarem verdes.

### 4. Teams & permissions: quem faz o quê
Os teams documentados no framework refletem responsabilidades diferentes:

| Team | Foco principal | Permissão esperada | Quando acionar |
|---|---|---|---|
| `@leads` | decisão técnica, documentação, exceções | admin | bloqueios, conflitos entre times, aprovações críticas |
| `@frontend` | UI, componentes, páginas, experiência do usuário | maintain | mudanças em `src/components`, `src/pages`, `*.tsx`, `*.jsx` |
| `@backend` | APIs, serviços, regras de negócio, Python | maintain | alterações em `/api`, `/src/server`, `/src/services`, `*.py` |
| `@devops` | workflows, deploy, Docker, infraestrutura | maintain | mudanças em `.github/workflows`, containers e automações |
| `@qa` | testes, qualidade, E2E, validação | push | cenários de teste, cobertura, flakiness |
| `@product` | backlog, prioridade, contexto funcional | push | refinamento de issues, roadmap, priorização |

Permissões são sobre responsabilidade, não sobre hierarquia social. Se um time não precisa alterar certo tipo de configuração, ele não deve ter acesso mais amplo só por conveniência. O framework assume princípio de menor privilégio e revisão por especialidade.

### 5. Como submeter um PR do jeito certo
Um bom pull request neste ambiente tem escopo pequeno, contexto claro e reviewers corretos. O título deve dizer o que mudou; a descrição precisa registrar motivação, impacto, forma de validação e eventuais riscos. Quando a mudança toca governança, segurança ou workflow, detalhe o comportamento esperado antes e depois.

Checklist rápido antes de abrir o PR:
- branch criada a partir da base certa;
- arquivos fora de escopo removidos;
- documentação atualizada quando o processo mudou;
- checks locais executados quando existirem;
- reviewers automáticos via CODEOWNERS conferidos.

Durante o review:
- responda comentários com ação concreta;
- se discordar, explique o motivo com dados e não com opinião vaga;
- evite reabrir discussões já resolvidas sem novo contexto;
- prefira novos commits claros a force-pushes confusos em branches compartilhadas.

### 6. Exceções e escalonamento
Nem todo caso cabe perfeitamente no fluxo padrão. Às vezes um owner está indisponível, um workflow obrigatório falha por problema externo ou uma mudança emergencial precisa entrar rapidamente. Nesses casos, o framework pede escalonamento explícito para `@leads` e, quando relevante, `@devops` ou `@security`.

A regra prática é simples: exceção sem registro vira dívida operacional. Se houve bypass, documente o motivo, o risco aceito e a ação de follow-up. Isso vale especialmente para merges urgentes, alterações diretas em configuração sensível e mudanças feitas fora do horário normal.

### 7. Sinais de que a governança está saudável
Alguns indicadores mostram que o processo está funcionando:
- reviewers certos são acionados automaticamente;
- PRs têm tamanho administrável e descrição útil;
- checks falhos são tratados antes do merge;
- ninguém depende de mensagens privadas para saber quem aprova;
- exceções são raras e registradas.

Se o time perceber o oposto — aprovações aleatórias, owners ausentes, merges manuais frequentes ou branches protegidas sendo contornadas — a documentação de governança deve ser revisada imediatamente.

### 8. Exercício guiado para onboarding
Uma forma prática de absorver governança é simular um PR pequeno de documentação e acompanhar todo o caminho. O participante deve abrir um branch, alterar um arquivo Markdown, conferir quais reviewers automáticos aparecem e observar como branch protection se comporta quando checks passam e quando falham. Esse exercício mostra que governança não é teoria: ela aparece na interface, na fila de review e na capacidade de merge.

Durante o exercício, peça que a pessoa identifique:
- qual regra do CODEOWNERS foi aplicada;
- quais checks obrigatórios apareceram;
- quais ações ficariam bloqueadas sem aprovação;
- como pedir ajuda corretamente se um reviewer estiver ausente.

### 9. Erros comuns de governança
Os erros mais recorrentes são operacionais, não conceituais. Entre eles: abrir PR sem contexto, presumir que qualquer approval serve, ignorar conversa não resolvida, pedir bypass sem explicar urgência e interpretar team permission como autorização para pular o processo. Outro erro frequente é tratar documentação como área sem ownership. No framework, docs influenciam processos, então também precisam de governança.

Quando esses erros são corrigidos cedo, o time ganha fluidez. Quando são tolerados, o processo parece opcional e degrada rapidamente. Por isso vale reforçar exemplos concretos em treinamentos e reviews.

## 💡 Exemplos Práticos
```yaml
pull_request_flow:
  branch: "docs/training-governance"
  files_changed:
    - "README.md"
    - "TRAINING-01-GOVERNANCE.md"
    - ".github/CODEOWNERS"
  expected_reviewers:
    - "@leads"
    - "@devops"
  required_checks:
    - "lint"
    - "test"
    - "build"
    - "security-scan"
  merge_conditions:
    approvals: 1
    conversations_resolved: true
    branch_up_to_date: true
```

```typescript
const reviewDecision = {
  changeType: 'workflow',
  ownerTeam: '@devops',
  needsCodeOwnerReview: true,
  canMerge: false,
  reason: 'security-scan ainda não concluiu'
};
```

### Exemplo de decisão operacional
Se um PR altera `README.md` e `.github/workflows/security.yml`, o autor deve esperar review de `@leads` para a documentação e `@devops` para o workflow. Mesmo que a alteração em Markdown seja simples, a parte de workflow não pode ser tratada como mudança trivial sem validação especializada.

## ❓ FAQ
**Q: Posso pedir review direto para uma pessoa em vez do team?**  
A: Pode complementar, mas não substitui o owner definido para a área.

**Q: Se o check falhar por problema do GitHub Actions, posso fazer merge assim mesmo?**  
A: Só com exceção aprovada e registrada por `@leads`/`@devops`.

**Q: Um PR pequeno precisa de descrição detalhada?**  
A: Sim. Pequeno escopo não elimina necessidade de contexto.

**Q: Posso mover um arquivo para outro diretório para mudar os reviewers?**  
A: Não. Isso quebra o propósito do CODEOWNERS.

**Q: Quem resolve conflito entre times sobre ownership?**  
A: `@leads`, com base no impacto técnico e operacional.

**Q: Quando devo atualizar esta documentação?**  
A: Sempre que regras de review, teams ou branch protection mudarem.

## 🔗 Recursos Adicionais
- [DOCUMENTATION-SETUP.md](./DOCUMENTATION-SETUP.md)
- [GOVERNANCE-CONFIG.md](./GOVERNANCE-CONFIG.md)
- [.github/CODEOWNERS](./.github/CODEOWNERS)
- [TRAINING-03-CONTRIBUTING.md](./TRAINING-03-CONTRIBUTING.md)
- [QUICKSTART-FIRST-PR.md](./QUICKSTART-FIRST-PR.md)

## 🆘 Ajuda & Suporte
Para dúvidas sobre ownership, revisões obrigatórias ou exceções, abra issue no repositório `.github` com contexto do caso e mencione `@leads`. Se a dúvida impactar workflows, segurança ou acesso, envolva também `@devops` ou `@backend` conforme a área tocada. Em incidentes ou urgências operacionais, use os runbooks correspondentes antes de solicitar bypass de processo.

