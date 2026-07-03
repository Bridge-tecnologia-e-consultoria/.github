# TRAINING-03-CONTRIBUTING.md

## 📚 Objetivo
Este documento treina o time para contribuir de forma consistente com o Bridge Governance Framework e com os repositórios dependentes. Ele cobre convenções de commit, workflow de pull request, padrões de qualidade e a checklist final antes de submeter mudanças. O foco é reduzir fricção: menos PRs confusos, menos retrabalho de review e mais previsibilidade para quem mantém os projetos.

## 🎯 Tópicos Cobertos
- Convenções de commit: tipo, escopo e descrição
- Workflow completo: fork → branch → commit → PR → review → merge
- Boas práticas de descrição de PR e organização de mudanças
- Code style, linting, formatting e cobertura
- Checklist pré-submissão
- Comportamentos que aceleram review e integração

## 📖 Seções Principais
### 1. O que é uma contribuição de qualidade
Contribuição de qualidade não é só código funcionando. É uma mudança compreensível, com contexto suficiente, validada de forma proporcional ao risco e fácil de revisar. Em um framework organizacional, isso vale ainda mais porque muitos artefatos são processos, workflows, documentação e convenções que impactam múltiplos repositórios.

Boas contribuições têm algumas características em comum:
- um objetivo claro;
- escopo pequeno o suficiente para review humano;
- mensagens de commit descritivas;
- documentação atualizada quando o comportamento muda;
- respeito aos owners e aos checks automáticos.

### 2. Convenções de commit
O padrão mais seguro é usar um prefixo com tipo e, quando útil, escopo. O time pode trabalhar com formatos como `docs(training): add governance quick guide`, `ci(vetbooking): enforce coverage`, `security(actions): rotate webhook usage` ou `fix(slack): adjust alert payload`. O importante é que a mensagem responda rapidamente o que mudou e em qual área.

Estrutura recomendada:
- **tipo:** `feat`, `fix`, `docs`, `ci`, `chore`, `test`, `refactor`, `security`
- **escopo (opcional, mas útil):** repositório, domínio ou componente
- **descrição:** verbo no imperativo curto e objetivo

Exemplos bons:
- `docs(training): add security training material`
- `ci(coverage): enforce 80 percent threshold`
- `fix(slack): correct deployment notification channel`

Exemplos ruins:
- `update`
- `changes`
- `fix stuff`
- `final version`

### 3. Workflow de PR do começo ao fim
O fluxo padrão começa com entendimento do problema e criação de branch dedicada. Mesmo em repositórios de documentação, evite misturar vários assuntos. Um branch para training materials, outro para workflows, outro para secrets policy. Isso melhora revisão e rollback.

Passo a passo recomendado:
1. sincronize sua cópia com a base correta;
2. crie branch com nome descritivo;
3. faça commits incrementais coerentes;
4. valide localmente o que existir de lint/test/check;
5. abra o PR com título e descrição úteis;
6. responda review e mantenha a branch atualizada;
7. faça merge somente quando os requisitos forem atendidos.

Quando o fluxo envolver fork, garanta que o PR aponte para a branch base certa e que segredos nunca sejam copiados para o fork. Em mudanças organizacionais, prefira branch interna quando possível para simplificar permissões e checks.

### 4. Como escrever um bom PR
O título do PR deve permitir leitura rápida em listas, Slack e GitHub Projects. A descrição precisa conter pelo menos: objetivo, arquivos/áreas impactadas, validação executada e riscos ou follow-ups. Se a mudança altera processo, diga explicitamente o que o time passa a fazer de agora em diante.

Estrutura sugerida de descrição:
- **Contexto:** por que essa mudança existe
- **O que mudou:** resumo em bullets
- **Como validar:** comandos, checagens ou revisão manual
- **Riscos:** impactos, migrações, exceções
- **Links relacionados:** issue, project item, doc associada

### 5. Code style e qualidade por linguagem
Este repositório centraliza documentação e padrões, mas também referencia times e pipelines multi-stack. Por isso o treinamento enfatiza comportamento comum:
- rode linters e testes existentes antes de pedir review;
- não ignore cobertura abaixo do esperado sem justificativa;
- mantenha exemplos de código consistentes com a linguagem mostrada;
- não introduza dependências sem necessidade clara e validação de segurança.

Para JavaScript/TypeScript, o baseline é lint + test + coverage quando configurados. Para Python, `pytest` e cobertura seguem a mesma lógica. Para documentação, revisão manual, links válidos e consistência de formatação substituem testes automatizados quando não houver infra específica.

### 6. Checklist antes de submeter PR
Checklist operacional:
- objetivo da mudança está explícito;
- escopo está limitado ao problema;
- arquivos temporários foram removidos;
- exemplos não contêm segredos nem dados reais;
- documentação foi atualizada se processo/comportamento mudou;
- checks locais existentes foram executados;
- reviewers corretos serão acionados por CODEOWNERS;
- o merge resultante não depende de contexto secreto fora do PR.

Checklist de comunicação:
- descrição do PR está completa;
- screenshots ou exemplos ajudam quando necessário;
- impactos em outros times foram mencionados;
- follow-ups foram registrados em issue se não couberam neste PR.

### 7. Como reduzir retrabalho no review
Grande parte do retrabalho vem de três causas: PR grande demais, falta de contexto e validação insuficiente. Para evitar isso, prefira iterar em partes pequenas e pedir feedback cedo. Se você sabe que o change set toca segurança e documentação, mencione isso logo na descrição. Se um check falhou por motivo conhecido, explique o plano de correção em vez de esperar que o reviewer descubra sozinho.

Responder review também é uma habilidade. Um bom retorno indica a ação tomada, o commit correspondente e, se houver divergência, o motivo técnico. Comentários como “done” ajudam pouco; comentários como “Ajustei o exemplo YAML para remover valor inline e atualizei a seção de troubleshooting” ajudam muito.

### 8. Quando abrir issue, quando abrir PR, quando escalar
Abra issue quando o trabalho ainda precisa ser refinado, priorizado ou discutido. Abra PR quando já existe mudança concreta pronta para review. Escale para `@leads` quando houver conflito entre processos, bloqueio de permissão, urgência operacional ou impacto transversal em múltiplos repositórios.

### 9. Cultura de contribuição sustentável
Um framework só se mantém se a documentação de contribuição for realmente seguida. Isso significa tratar templates, checklists e convenções como ferramentas para trabalhar melhor, não como formalidade. Quanto mais previsível o fluxo, mais fácil fica integrar novos membros, revisar com qualidade e entregar com confiança perto do go-live.

### 10. Auto-review antes de pedir review externo
Antes de envolver outras pessoas, faça uma leitura final do PR como se você fosse o reviewer. Pergunte se o título faz sentido sem contexto oculto, se a descrição explica a motivação, se o diff contém arquivos estranhos e se os commits contam uma história coerente. Esse auto-review costuma eliminar a maior parte dos comentários evitáveis.

Também vale conferir se o PR poderia ser dividido. Quando a resposta for sim, talvez o reviewer também pense isso. Dividir cedo quase sempre é mais barato do que receber feedback para reestruturar um change set grande depois.

### 11. Como documentar validação de forma útil
Dizer apenas “testado” ajuda pouco. Um registro melhor informa o que foi validado, com qual comando, e o que não se aplica. Em mudanças de documentação, por exemplo, uma boa validação pode dizer que os links foram revisados, que os arquivos novos foram conferidos contra a estrutura esperada e que não há infraestrutura de teste automatizado para Markdown nesse repositório.

Esse nível de clareza acelera review porque reduz perguntas básicas e mostra cuidado com o processo.

### 12. Exemplos de narrativa de PR
Uma descrição fraca diz apenas “atualizações de docs”. Uma descrição útil explica que a mudança conclui a FASE G, cria materiais novos, atualiza o índice central e alinha os dashboards. A diferença importa porque reviewers e stakeholders leem o PR em listas, notificações e histórico futuro. Quanto mais clara a narrativa, menor o tempo até entendimento compartilhado.


## 💡 Exemplos Práticos
```yaml
commit_examples:
  - "docs(training): add ci-cd training material"
  - "docs(runbook): add outage response procedure"
  - "ci(vetbooking): enforce coverage threshold"
pr_template_summary:
  context: "Expande Phase G com training materials e runbooks"
  validation:
    - "Revisão manual dos links"
    - "Contagem de palavras por documento"
    - "Secret scan dos arquivos modificados"
```

```json
{
  "pre_pr_check": {
    "docsUpdated": true,
    "testsRun": "not applicable for markdown-only changes",
    "reviewersExpected": ["@leads"],
    "secretsChecked": true
  }
}
```

## ❓ FAQ
**Q: Posso misturar documentação, workflow e segurança no mesmo PR?**  
A: Só se fizerem parte do mesmo problema e o review continuar manejável.

**Q: Commit pequeno precisa seguir convenção?**  
A: Sim. Clareza importa em qualquer tamanho.

**Q: Documentação sem teste precisa validação?**  
A: Sim. Revisão manual, links e consistência também são validação.

**Q: Quando um PR está “grande demais”?**  
A: Quando o reviewer perde a linha narrativa ou a mudança cobre assuntos independentes.

**Q: Posso resolver todo feedback em um único commit final?**  
A: Pode, mas commits menores e descritivos facilitam auditoria.

**Q: O que fazer se eu não souber quem revisar?**  
A: Consulte CODEOWNERS e, em dúvida, acione `@leads`.

## 🔗 Recursos Adicionais
- [DOCUMENTATION-SETUP.md](./DOCUMENTATION-SETUP.md)
- [.github/CONTRIBUTING.md](./.github/CONTRIBUTING.md)
- [TRAINING-01-GOVERNANCE.md](./TRAINING-01-GOVERNANCE.md)
- [TRAINING-04-CI-CD.md](./TRAINING-04-CI-CD.md)
- [QUICKSTART-FIRST-PR.md](./QUICKSTART-FIRST-PR.md)

## 🆘 Ajuda & Suporte
Se houver dúvida sobre fluxo de contribuição, abra issue no `.github` ou consulte `@leads`. Para bloqueios de CI/CD, use o quick start de troubleshooting e o runbook de build failure antes de pedir ajuda. Para mudanças sensíveis em segurança, combine este treinamento com o material de security e os runbooks correspondentes.

