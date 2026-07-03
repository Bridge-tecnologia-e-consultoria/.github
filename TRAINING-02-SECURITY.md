# TRAINING-02-SECURITY.md

## 📚 Objetivo
Este treinamento consolida a postura de segurança do framework em torno de quatro pilares: prevenção de secrets no repositório, análise estática com CodeQL, compliance com GDPR/LGPD e resposta adequada a vulnerabilidades. A meta é que qualquer colaborador saiba reconhecer um risco, evitar exposição acidental e acionar o processo correto sem improviso.

## 🎯 Tópicos Cobertos
- Secret scanning e higiene de credenciais
- CodeQL: como funciona, como ler findings e como corrigir
- Compliance: retenção de dados, minimização, direitos do usuário e notificação
- Vulnerability disclosure e canais de reporte
- Relação entre segurança, CI/CD e governança

## 📖 Seções Principais
### 1. Segurança como comportamento diário
No framework Bridge, segurança não é uma etapa isolada no final do projeto. Ela aparece em cada PR, em cada workflow, em cada secret cadastrado e em cada decisão sobre acesso. Isso significa que a maioria dos incidentes evitáveis nasce de pequenas falhas operacionais: colar token em arquivo errado, ignorar um alert de CodeQL ou tratar informação pessoal como dado de teste inofensivo.

O objetivo deste material é reduzir esse tipo de erro repetitivo. Em vez de depender de especialistas para tudo, o time inteiro precisa dominar o básico: onde credenciais podem viver, o que nunca deve ir para o Git, quando um alert é crítico e qual é a janela de resposta esperada. Quanto mais cedo uma pessoa identifica um padrão inseguro, menor o custo de correção.

### 2. Secret Scanning: como não fazer push de secrets
Secret scanning existe para bloquear vazamentos, mas o melhor resultado é quando ele não precisa bloquear nada. A disciplina começa antes do commit. Nunca grave credenciais reais em `.env`, JSON, YAML, capturas de tela, comentários ou exemplos copiados de produção. Use valores fictícios, placeholders claros e documentação que aponte para GitHub Secrets.

Práticas obrigatórias:
- use `secrets.*` em workflows, nunca valores inline;
- mantenha exemplos como `API_KEY=your-key-here`;
- revise diffs com atenção especial a arquivos de configuração;
- remova segredos de históricos locais antes de abrir PR;
- rotacione imediatamente qualquer credencial exposta, mesmo que o push tenha sido bloqueado.

Sinais clássicos de vazamento:
- tokens longos com prefixos conhecidos;
- URLs com usuário e senha embutidos;
- chaves privadas PEM;
- capturas de terminal mostrando export de variáveis;
- logs de CI que imprimem objetos inteiros de configuração.

### 3. CodeQL: análise estática, resultados e remediação
CodeQL procura padrões de vulnerabilidade no código e nos fluxos de dados. O valor da ferramenta não está apenas em “ter o scan ligado”, mas em triagem disciplinada. Um finding precisa ser lido no contexto: qual arquivo foi marcado, qual é o fluxo vulnerável, existe entrada controlada pelo usuário, há sanitização confiável, o dado é persistido ou só exibido?

Tipos de achado comuns que exigem atenção:
- injeção (SQL, command, template);
- exposição de dados sensíveis em logs;
- uso inseguro de dependências ou configuração;
- validação insuficiente de entrada;
- fluxos de autenticação/autorização frágeis.

Fluxo recomendado para triagem:
1. classificar severidade e impacto;
2. reproduzir mentalmente ou localmente o caminho vulnerável;
3. decidir se é verdadeiro positivo, risco aceitável documentado ou falso positivo;
4. corrigir com mudança mínima e teste apropriado quando houver infraestrutura;
5. registrar a decisão na discussão do PR ou no issue associado.

### 4. Compliance: GDPR/LGPD na prática
Compliance deixa de ser abstrato quando vira pergunta operacional. O time coleta esse dado? Precisa mesmo dele? Por quanto tempo ele fica retido? Quem consegue acessá-lo? Como o usuário pede exclusão? O framework documenta retenção, direito de acesso, correção e remoção como responsabilidades contínuas.

Princípios a aplicar:
- minimização: colete apenas o necessário;
- finalidade: explique por que o dado existe;
- retenção: mantenha por prazo definido;
- acesso restrito: só quem precisa deve visualizar;
- resposta a incidente: notifique e registre dentro da janela exigida.

Em documentação e exemplos, evite dados reais de clientes, pacientes ou colaboradores. Se precisar demonstrar payloads, anonimize nomes, e-mails, IDs e qualquer elemento sensível. O mesmo vale para prints de dashboards e logs.

### 5. Como reportar vulnerabilidades
Nem toda descoberta deve virar issue pública. Se a pessoa suspeitar de falha de segurança, o caminho inicial é o canal privado definido pelo time, incluindo GitHub Security tab quando aplicável. O reporte precisa conter contexto suficiente para triagem: componente afetado, comportamento observado, possível impacto, passos de reprodução e urgência percebida.

Boas práticas no reporte:
- descreva fato observado, não hipótese vaga;
- não publique exploit completo em canal aberto;
- inclua hashes, links e timestamps relevantes;
- registre se a credencial já foi rotacionada ou revogada;
- indique se houve exposição de dados pessoais ou segredo operacional.

### 6. O que fazer quando algo já deu errado
Se um secret vazou ou um finding crítico apareceu, velocidade importa mais que perfeição. Primeiro contenha: rotacione chave, revoke acesso, remova uso ativo e interrompa automações afetadas. Depois investigue alcance: onde foi publicado, quem acessou, que repositórios ou ambientes dependem disso. Só então finalize remediação estrutural.

Um erro comum é focar apenas em apagar o arquivo do branch atual. Isso não resolve se a credencial já foi exposta. A prioridade é sempre rotação/revogação. Limpeza histórica, comunicação e lições aprendidas vêm em seguida, com coordenação dos responsáveis.

### 7. Integração com pipelines e times
Segurança cruza todas as áreas: `@devops` cuida de workflows e storage de secrets; `@leads` arbitra exceções; `@qa` valida regressão em correções; `@backend` e `@frontend` removem a causa raiz no código. Isso significa que um incidente raramente é resolvido por uma pessoa só. O treinamento prepara o time para colaborar sem perder rastreabilidade.

### 8. Checklist operacional de segurança antes do merge
Antes de aprovar uma mudança, o reviewer pode usar um checklist simples:
- existe qualquer valor que pareça credencial no diff?
- logs, exemplos ou screenshots expõem dados desnecessários?
- a mudança altera workflow, permissões ou secrets?
- houve queda de guardrails como masking, validação ou sanitização?
- existe necessidade de atualizar documentação de resposta ou compliance?

Esse checklist ajuda principalmente em PRs que parecem “inofensivos”, como ajustes em documentação, YAML ou debug. Muitos incidentes surgem justamente em arquivos periféricos, onde a atenção tende a cair.

### 9. Papéis e responsabilidade compartilhada
Embora especialistas apoiem a resposta, segurança não pertence só ao time de segurança. O autor do PR previne, o reviewer questiona, `@devops` protege pipelines, `@qa` observa regressões e `@leads` coordena risco residual ou exceções. O treinamento funciona melhor quando todos entendem sua parcela de responsabilidade.

Uma cultura madura evita dois extremos: achar que qualquer pessoa pode decidir sozinha sobre risco alto e achar que só um especialista pode perceber problema óbvio. O framework procura equilíbrio entre autonomia e escalonamento responsável.

### 10. Exercício prático de triagem
Uma dinâmica útil para treinamento é apresentar três cenários curtos: um token real exposto em screenshot, um finding de CodeQL em workflow e um payload de exemplo contendo dado pessoal identificável. O grupo deve decidir severidade, owner inicial, canal de comunicação e primeira ação. O valor do exercício está em padronizar raciocínio, não em acertar tudo na primeira tentativa.

### 11. O que nunca normalizar
Nunca normalize credencial em print, valor inline “só para testar”, finding fechado sem justificativa ou dado pessoal real em documentação de exemplo. O framework assume que atalhos desse tipo cobram preço alto mais tarde. Segurança madura nasce de pequenas recusas consistentes a práticas inseguras.


## 💡 Exemplos Práticos
```yaml
security_checklist:
  before_push:
    - "Revisar diff por credenciais"
    - "Garantir uso de GitHub Secrets"
    - "Sanitizar payloads de exemplo"
  if_secret_exposed:
    - "Alertar @leads imediatamente"
    - "Rotacionar secret"
    - "Revogar acessos antigos"
    - "Atualizar GitHub Secrets"
    - "Registrar incidente"
```

```json
{
  "codeql_triage": {
    "severity": "high",
    "component": "workflow",
    "finding": "sensitive data in logs",
    "action": "mask variable and remove debug output",
    "owner": "@devops"
  }
}
```

```typescript
const disclosureTemplate = {
  summary: 'Potential credential exposure in CI logs',
  impactedArea: '.github/workflows',
  severity: 'P1',
  publicIssueAllowed: false
};
```

## ❓ FAQ
**Q: Secret scanning bloqueou meu push. O que faço primeiro?**  
A: Pare, remova o secret do conteúdo local e rotacione a credencial antes de tentar novamente.

**Q: Se o token era de teste, preciso rotacionar?**  
A: Sim, se havia risco de uso indevido ou acesso real.

**Q: Posso fechar um finding de CodeQL sem corrigir?**  
A: Apenas com justificativa técnica clara e aceite explícito do risco.

**Q: Posso usar dados reais anonimizados em documentação?**  
A: Só se a anonimização for completa e revisada com cuidado.

**Q: Onde reporto uma vulnerabilidade?**  
A: Pelo canal privado apropriado e, quando aplicável, pela aba Security do GitHub.

**Q: Qual é o maior erro em incidentes de secret leak?**  
A: Tentar “apagar” o problema sem rotacionar a credencial imediatamente.

## 🔗 Recursos Adicionais
- [DOCUMENTATION-SETUP.md](./DOCUMENTATION-SETUP.md)
- [SECURITY-CONFIG.md](./SECURITY-CONFIG.md)
- [SECURITY-POLICY.md](./SECURITY-POLICY.md)
- [QUICKSTART-SECURITY-INCIDENT.md](./QUICKSTART-SECURITY-INCIDENT.md)
- [RUNBOOK-SECRET-LEAK.md](./RUNBOOK-SECRET-LEAK.md)
- [RUNBOOK-SECURITY-INCIDENT.md](./RUNBOOK-SECURITY-INCIDENT.md)

## 🆘 Ajuda & Suporte
Para dúvidas rotineiras, abra issue ou discussion no repositório `.github` com o máximo de contexto possível. Para achados sensíveis, use o canal privado combinado pelo time e mencione `@leads` e os owners da área impactada. Em caso de vazamento de credencial ou suspeita de incidente ativo, trate como prioridade operacional e siga imediatamente os runbooks de incidente e secret leak.

