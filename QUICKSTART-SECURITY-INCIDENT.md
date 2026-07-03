# QUICKSTART-SECURITY-INCIDENT.md

## 📚 Objetivo
Guiar a primeira resposta quando houver suspeita de vulnerabilidade, secret exposto, finding de CodeQL ou dúvida de compliance.

## 🎯 Tópicos Cobertos
- Suspeita de issue de segurança
- Secret exposto
- Finding de CodeQL
- Dúvida de compliance

## 📖 Seções Principais
### Suspect security issue?
Reporte via canal privado apropriado e, quando aplicável, via aba Security do GitHub. Não publique detalhes sensíveis em issue aberta.

### Secret exposed?
1. Alert `@leads` imediatamente.
2. Rotacione o secret.
3. Revogue acesso antigo se aplicável.
4. Atualize GitHub Secrets e revise logs.

### CodeQL finding?
Faça triagem por severidade, confirme o fluxo vulnerável, corrija a causa raiz e registre a decisão no PR ou issue.

### Compliance question?
Abra issue no repositório `.github` com contexto suficiente para avaliação e sem dados pessoais reais.

### Primeiros 10 minutos
Nos primeiros minutos, foque em contenção e ownership. Nomeie quem está investigando, qual ativo foi afetado e qual próxima atualização será dada. Não espere “ter certeza total” para rotacionar credenciais ou restringir acesso quando o risco for plausível.

### Comunicação mínima
Registre o horário de detecção, a ação imediata tomada e se existe potencial impacto em produção ou dados sensíveis.

### Erros a evitar
Não publique detalhes sensíveis em issue pública, não espere validação completa para conter risco e não trate finding crítico como tarefa de backlog sem triagem.


## 💡 Exemplos Práticos
```json
{
  "security_incident": {
    "severity": "P1",
    "first_action": "rotate secret",
    "public_issue": false
  }
}
```

## ❓ FAQ
**Q: Posso esperar até o fim do dia para rotacionar?**  
A: Não, rotação é ação imediata.

**Q: Todo finding de CodeQL é incidente?**  
A: Não, mas todo finding precisa de triagem.

## 🔗 Recursos Adicionais
- [TRAINING-02-SECURITY.md](./TRAINING-02-SECURITY.md)
- [RUNBOOK-SECRET-LEAK.md](./RUNBOOK-SECRET-LEAK.md)
- [RUNBOOK-SECURITY-INCIDENT.md](./RUNBOOK-SECURITY-INCIDENT.md)

## 🆘 Ajuda & Suporte
Em risco ativo, trate como incidente. Em dúvida, escolha o caminho mais seguro e acione `@leads`.

