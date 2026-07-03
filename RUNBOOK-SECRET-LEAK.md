# RUNBOOK-SECRET-LEAK.md

## 📚 Objetivo
Padronizar a resposta imediata a vazamento ou suspeita de vazamento de credenciais, tokens, chaves e segredos operacionais no contexto do Bridge Governance Framework.

## 🎯 Tópicos Cobertos
- Ação imediata
- Investigação
- Remediação
- Pós-incidente

## 📖 Seções Principais
### AÇÃO IMEDIATA
O primeiro princípio é conter, não discutir. Se um secret apareceu em commit, PR, log, screenshot, chat ou arquivo de configuração, assuma risco real até prova em contrário.

1. **Alert `@leads` imediatamente.** Informe o tipo de secret e onde apareceu.
2. **Rotate secret immediately.** Gere nova credencial antes de qualquer limpeza cosmética.
3. **Revoke access if applicable.** Se o provedor permitir revogação direta, faça sem esperar.
4. **Update GitHub secrets.** Propague o valor novo para workflows e ambientes dependentes.

Se o vazamento estiver em canal público, reduza redistribuição: peça para remover conteúdo exposto, mas nunca trate remoção visual como solução suficiente. O segredo já deve ser considerado comprometido.

### Investigação
Depois de conter, responda às perguntas certas:
- qual secret vazou?
- em qual sistema ele era usado?
- quando e onde foi exposto?
- houve execução, download ou acesso suspeito?
- quem tinha acesso ao contexto exposto?
- o secret concedia acesso só de leitura ou também mutação/deploy?

Fontes de evidência:
- histórico do Git;
- logs do GitHub Actions;
- auditoria do provedor da credencial;
- timestamps de PR, push e screenshots;
- mensagens em Slack ou issue relacionadas.

### Remediação
Com o secret já rotacionado, execute a limpeza estrutural.

1. Remova o valor de arquivos, exemplos e workflows.
2. Atualize documentação para usar placeholders.
3. Se necessário, coordene limpeza de histórico com o time responsável usando ferramenta adequada e com comunicação clara do impacto.
4. Faça deploy da configuração corrigida.
5. Revise logs para confirmar que o valor antigo não continua em uso.

A limpeza de histórico deve ser tratada com cautela porque pode impactar branches, forks e integrações. Ela nunca substitui a rotação. O objetivo é reduzir exposição residual, não recuperar uma credencial já comprometida.

### Comunicação
A comunicação mínima deve registrar:
- o que vazou;
- quando foi detectado;
- quais ações imediatas foram tomadas;
- se havia acesso a produção ou dado sensível;
- próximos passos de investigação e prevenção.

Evite publicar o valor do secret em qualquer atualização. Descreva apenas o tipo e o escopo.

### Pós-incidente: document, lessons learned
Quando o risco imediato terminar, registre lições aprendidas:
- por que o secret chegou ao local errado?
- faltou revisão humana, guardrail automático ou treinamento?
- o template de documentação induzia erro?
- o workflow imprimia dados excessivos?
- qual ação preventiva reduz repetição?

Ações preventivas comuns:
- melhorar exemplos para usar placeholders explícitos;
- reduzir logs verbosos;
- reforçar treinamento de secret scanning;
- adicionar revisão específica a arquivos sensíveis.

### Critérios de severidade
Considere severidade mais alta quando o secret permitir deploy, acesso administrativo, leitura de dados sensíveis ou uso em múltiplos repositórios. Segredos de baixo alcance ainda exigem ação imediata, mas a comunicação e o número de stakeholders envolvidos pode variar.

### Verificação após rotação
Depois de atualizar a credencial:
- confirme que workflows e integrações usam o valor novo;
- verifique se o valor antigo realmente foi revogado;
- execute teste controlado do fluxo dependente;
- confirme ausência de novos vazamentos em logs recentes.

### Template de follow-up
O follow-up ideal registra: causa provável, sistemas afetados, janela de exposição, ação corretiva permanente e owner da prevenção. Isso transforma um incidente em melhoria processual mensurável.

### Responsáveis mínimos
- owner técnico da integração afetada;
- `@devops` quando o secret estiver em workflow ou deploy;
- `@leads` para coordenação e exceções.

### Decisão sobre histórico do Git
Se o valor exposto estiver em commit compartilhado, avalie limpeza histórica apenas depois da rotação e com alinhamento claro do impacto em branches, forks e clones locais. O objetivo é reduzir superfície residual, não atrasar a contenção.


### Encerramento do incidente
Considere o incidente encerrado somente quando a credencial antiga estiver inutilizada, o valor novo validado, a origem do vazamento entendida e a ação preventiva com owner definido. Encerrar cedo demais deixa espaço para recorrência silenciosa.


## 💡 Exemplos Práticos
```yaml
secret_leak_incident:
  severity: "P1"
  secret_type: "deployment token"
  actions:
    - "rotate"
    - "revoke"
    - "update github secrets"
    - "review access logs"
```

```json
{
  "communication_template": {
    "detected_at": "2026-07-04T13:30:00Z",
    "rotated": true,
    "revoked": true,
    "public_details_allowed": false
  }
}
```

## ❓ FAQ
**Q: Preciso rotacionar se o push foi bloqueado?**  
A: Sim, se a credencial real apareceu no conteúdo.

**Q: Apagar o commit resolve?**  
A: Não. A prioridade é rotação/revogação.

**Q: Quem coordena limpeza de histórico?**  
A: Owners técnicos com `@leads`, após contenção imediata.

## 🔗 Recursos Adicionais
- [TRAINING-02-SECURITY.md](./TRAINING-02-SECURITY.md)
- [QUICKSTART-SECURITY-INCIDENT.md](./QUICKSTART-SECURITY-INCIDENT.md)
- [RUNBOOK-SECURITY-INCIDENT.md](./RUNBOOK-SECURITY-INCIDENT.md)

## 🆘 Ajuda & Suporte
Se existir qualquer dúvida sobre o alcance do vazamento, trate o caso como severidade mais alta até a triagem concluir o contrário.

