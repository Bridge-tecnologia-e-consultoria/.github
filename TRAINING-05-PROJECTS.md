# TRAINING-05-PROJECTS.md

## 📚 Objetivo
Este treinamento ensina como usar GitHub Projects V2 como camada operacional do framework: organização do backlog, acompanhamento do fluxo de status, planejamento do Bridge-Roadmap e rastreamento por produto. Ao final, a equipe deve conseguir transformar issues e pull requests em trabalho visível, priorizado e auditável.

## 🎯 Tópicos Cobertos
- Estrutura do Bridge-Roadmap e projects por produto
- Custom fields, views e filtros operacionais
- Status flow: Backlog → Not Started → In Progress → In Review → Done
- Planejamento estratégico e uso do roadmap organizacional
- Automação para adicionar issues e PRs aos projects
- Boas práticas de manutenção e governança do board

## 📖 Seções Principais
### 1. Por que Projects V2 é parte da governança
No framework Bridge, Projects V2 não é só um quadro bonito. Ele funciona como camada de coordenação entre times, repos e iniciativas. Quando issues, PRs e prioridades estão visíveis em um projeto comum, a tomada de decisão melhora: fica mais fácil enxergar gargalos, disputar capacidade com transparência e relacionar trabalho técnico com objetivos estratégicos.

Sem esse nível de organização, o time cai em listas soltas, mensagens de chat e acompanhamento manual. O resultado costuma ser previsível: item em andamento sem owner claro, review travado sem status, prioridade mudando sem histórico e roadmap que ninguém consulta. Projects V2 corrige isso ao centralizar o fluxo de trabalho.

### 2. Estrutura dos projetos
O framework prevê um projeto organizacional, `Bridge-Roadmap`, e projetos específicos por produto. O Roadmap concentra visão transversal: prioridade global, time, repositório, datas-alvo e status agregado. Já os projetos de produto organizam a execução diária de cada repositório.

Estrutura típica:
- **Bridge-Roadmap:** visão estratégica, dependências entre times e repos, acompanhamento executivo;
- **VetBooking Development:** execução e refinamento do produto VetBooking;
- **PetSkin Development:** trabalho do repositório PetSkin;
- **LaConelli Development:** foco em ciclos de staging/production;
- **ClubFlow Development:** fluxo ágil do produto ClubFlow;
- **LiderançaTech Development:** acompanhamento consultivo e entregas associadas.

### 3. Custom fields que realmente importam
Custom fields tornam o projeto útil para decisão. Os campos mais importantes aqui são `Status`, `Priority`, `Target Date`, `Team` e `Repository`. Sem eles, o board vira só uma lista de cartões. Com eles, passa a ser um instrumento de gestão.

Sugestão de uso:
- `Status`: estado operacional atual;
- `Priority`: urgência relativa, visível para trade-offs;
- `Target Date`: compromisso temporal, não promessa oculta;
- `Team`: ownership principal;
- `Repository`: onde a entrega acontece.

Boas práticas:
- atualize status sempre que o trabalho mudar de fase real;
- não use `In Review` para item ainda sem PR;
- não deixe prioridade vazia em item ativo;
- ajuste target date quando o contexto mudar, registrando motivo se necessário.

### 4. Status flow padrão
O fluxo `Backlog → Not Started → In Progress → In Review → Done` traz uma linguagem comum entre times. O valor disso é enorme: quando alguém lê `In Review`, entende que existe entrega pronta aguardando validação. Quando vê `Backlog`, entende que ainda não entrou em execução.

Definição prática de cada status:
- **Backlog:** ideia registrada, ainda não puxada para trabalho;
- **Not Started:** priorizado, mas aguardando início;
- **In Progress:** execução ativa com owner;
- **In Review:** mudança pronta e sob validação;
- **Done:** entregue e concluído, com aceitação mínima definida.

O erro mais comum é usar status como sentimento em vez de estado. “Quase pronto” não é status. Escolha o estado observável.

### 5. Views: como ler o projeto certo para a pergunta certa
Views servem para responder perguntas diferentes. Uma visão por status ajuda cerimônias operacionais; uma por prioridade ajuda planejamento; uma por team ajuda alocação; uma por repository ajuda coordenação entre repositórios. O mesmo item pode aparecer em várias views sem duplicação de trabalho.

Exemplos de perguntas úteis:
- O que está parado em `In Review` há mais tempo?
- Quais itens críticos não começaram?
- Qual time concentra mais trabalho ativo?
- Quais repositórios estão puxando mais iniciativas no Roadmap?

### 6. Automação de inclusão de issues e PRs
A automação reduz manutenção manual. Idealmente, issues e PRs relevantes devem entrar nos projects com o mínimo de atrito possível. Mesmo quando a automação não preenche todos os campos, ela já elimina o passo esquecido de “adicionar ao board”. Depois disso, o owner complementa prioridade, time e data.

Princípios de automação saudáveis:
- automatize entrada e atualização simples;
- mantenha regras fáceis de entender;
- não esconda trabalho em automações opacas;
- revise periodicamente se a automação continua refletindo o processo real.

### 7. Bridge-Roadmap como ferramenta estratégica
O Roadmap existe para conectar tarefas locais a objetivos organizacionais. Isso permite que um item de segurança, por exemplo, seja visto não apenas como tarefa técnica, mas como requisito de readiness para go-live. O mesmo vale para documentação, qualidade e integração.

Um roadmap bom ajuda a responder:
- estamos avançando nas prioridades certas?
- qual iniciativa depende de qual time?
- existe gargalo recorrente em review, deploy ou segurança?
- qual data-alvo corre maior risco?

### 8. Higiene operacional do board
Board sem higiene perde valor rapidamente. Sinais de deterioração:
- cards sem owner ou sem prioridade;
- itens concluídos ainda em `In Progress`;
- PR merged com item ainda aberto em `Not Started`;
- views que ninguém usa;
- backlog crescendo sem revisão.

Rotina recomendada:
- revisão rápida diária de itens ativos;
- refinamento semanal de backlog;
- conferência de itens travados em review;
- limpeza de campos inconsistentes antes de reuniões.

### 9. Rituais que mantêm o project confiável
Projects V2 funciona melhor quando há rituais leves e frequentes. Daily standups podem usar a view por status para confirmar itens ativos; reviews semanais de prioridade evitam backlog obsoleto; retrospectivas podem olhar cartões que ficaram tempo demais em `In Review`. O objetivo não é burocratizar, mas impedir que o board vire fotografia desatualizada.

Se o time confiar no board, ele consulta o board. Se o board estiver frequentemente errado, as pessoas voltam para mensagens privadas e planilhas paralelas. Por isso, manutenção de project é parte da governança, não tarefa secundária.

### 10. Conexão entre projects e decisões executivas
O Roadmap organizacional permite transformar sinais do trabalho diário em decisão de gestão. Quando vários itens críticos se concentram no mesmo repositório ou team, isso pode justificar redistribuição de capacidade, replanejamento de data ou mudança de prioridade. Sem o project estruturado, essas discussões dependem de percepção subjetiva.

Usar o project corretamente cria histórico e contexto para esse tipo de decisão, o que melhora previsibilidade perto de marcos importantes como go-live.

### 11. Checklist de atualização de item
Antes de mover um item no project, confirme se o status reflete o estado observável, se o owner principal está claro e se a prioridade ainda faz sentido. Pequenos ajustes frequentes mantêm a qualidade do board melhor do que grandes limpezas esporádicas.

### 12. Como evitar board paralelo
Quando a equipe começa a controlar trabalho em mensagens privadas, planilhas ou listas locais, o project perde valor. O antídoto é simples: usar o board oficial como primeiro lugar de atualização e refletir nele qualquer mudança relevante de status, prioridade ou bloqueio.


### 13. Definição de pronto para `Done`
Um item só deve chegar a `Done` quando o resultado estiver realmente aceito no nível adequado. Em alguns casos isso significa PR merged; em outros, deploy verificado, documentação atualizada ou stakeholder informado. Ter esse combinado evita falso senso de conclusão e melhora a confiança no board.


### 14. Uso do project em sync de equipe
Durante syncs rápidos, o project deve servir de fonte compartilhada para prioridades, bloqueios e itens em review. Isso reduz dependência de memória individual e cria um ritual objetivo de acompanhamento.


### 15. Relação entre project e accountability
Quando um item tem status, owner, prioridade e prazo visíveis, a conversa sobre progresso fica mais objetiva. Isso reduz ambiguidade e ajuda a organização a perceber cedo quando existe risco real de atraso ou bloqueio.


## 💡 Exemplos Práticos
```yaml
project_item:
  title: "Documentar Phase G training materials"
  status: "In Review"
  priority: "Medium 🟡"
  team: "Product"
  repository: ".github"
  target_date: "2026-07-04"
```

```json
{
  "view_examples": {
    "by_status": ["Backlog", "In Progress", "In Review"],
    "by_priority": ["Critical 🔴", "High 🟠"],
    "recently_updated": true
  }
}
```

## ❓ FAQ
**Q: Todo PR precisa estar ligado a um project?**  
A: Idealmente sim, para manter rastreabilidade e contexto.

**Q: Quando mover para `In Review`?**  
A: Quando a entrega estiver pronta e submetida para validação real.

**Q: Posso usar campos personalizados diferentes por produto?**  
A: Sim, mas o mínimo comum deve continuar legível para toda a organização.

**Q: Quem define prioridade?**  
A: Em geral `@product` com apoio de `@leads` e owners técnicos.

**Q: O que fazer com item travado?**  
A: Mantenha visível, registre bloqueio e escale o owner certo.

**Q: Por que não usar só issues sem project?**  
A: Porque project traz visão agregada, filtros e governança operacional.

## 🔗 Recursos Adicionais
- [DOCUMENTATION-SETUP.md](./DOCUMENTATION-SETUP.md)
- [PROJECT-CONFIG.md](./PROJECT-CONFIG.md)
- [PHASE-5-PROJECTS-SETUP.md](./PHASE-5-PROJECTS-SETUP.md)
- [TRAINING-03-CONTRIBUTING.md](./TRAINING-03-CONTRIBUTING.md)
- [QUICK-REFERENCE.md](./QUICK-REFERENCE.md)

## 🆘 Ajuda & Suporte
Para dúvidas sobre campos, automações, filtros ou uso do Bridge-Roadmap, registre a pergunta no `.github` e envolva `@product` ou `@leads`. Se um item não estiver entrando automaticamente no project ou se o board não refletir o fluxo real, trate como problema de processo e corrija rapidamente antes que a inconsistência se espalhe.

