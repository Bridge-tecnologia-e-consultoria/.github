# QUICKSTART-TROUBLESHOOTING.md

## 📚 Objetivo
Servir como referência rápida para as falhas mais comuns de build, deploy, secret scanning e E2E no framework.

## 🎯 Tópicos Cobertos
- Build failure
- Deploy failure
- Secret scanning bloqueando push
- E2E tests falhando

## 📖 Seções Principais
### Build failure
1. Abra o job que falhou.
2. Identifique se o erro é lint, test, build, coverage ou timeout.
3. Reproduza localmente se houver comando equivalente.
4. Corrija a causa antes de pedir rerun.

### Deploy failure
- Verifique logs do workflow e ambiente alvo.
- Confirme se secrets e variáveis estão válidos.
- Se houve impacto, siga o rollback em [RUNBOOK-DEPLOYMENT-ROLLBACK.md](./RUNBOOK-DEPLOYMENT-ROLLBACK.md).

### Secret scanning blocked my push
- Remova o secret do arquivo ou commit.
- Rotacione a credencial se for real.
- Atualize GitHub Secrets se necessário.
- Tente novamente só depois da correção.

### E2E tests failing
- Rode a suíte localmente quando possível.
- Verifique screenshots, vídeos e passos exatos do teste.
- Confirme se a falha é regressão real ou flakiness.

### Regra de ouro
Não trate sintomas diferentes como se fossem a mesma falha. Build, deploy, secret scanning e E2E têm caminhos de triagem diferentes. Classificar direito no começo economiza tempo e evita escalonamento errado.

### Quando escalar
Escalone cedo quando houver risco de produção, bloqueio prolongado ou falha repetida em mais de um repositório.

## 💡 Exemplos Práticos
```yaml
triage_order:
  - "Classificar erro"
  - "Abrir logs do step"
  - "Reproduzir localmente"
  - "Aplicar correção mínima"
```

## ❓ FAQ
**Q: Posso rerun sem investigar?**  
A: Só se houver forte evidência de falha transitória de infra.

**Q: Falha de deploy sempre exige rollback?**  
A: Não, apenas quando houver risco ou impacto no ambiente.

## 🔗 Recursos Adicionais
- [TRAINING-04-CI-CD.md](./TRAINING-04-CI-CD.md)
- [RUNBOOK-BUILD-FAILURE.md](./RUNBOOK-BUILD-FAILURE.md)
- [RUNBOOK-OUTAGE-RESPONSE.md](./RUNBOOK-OUTAGE-RESPONSE.md)

## 🆘 Ajuda & Suporte
Escalone para `@devops` ou para o owner do repositório com link do workflow run e resumo do sintoma.

