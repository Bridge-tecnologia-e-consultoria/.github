# ⚡ QUICK REFERENCE GUIDE
## Bridge Governance Framework - One-Page Cheat Sheet

---

## 🎯 QUICK LINKS

| Tópico | Arquivo | Descrição |
|--------|---------|-----------|
| 📋 Governança | [GOVERNANCE.md](.github/GOVERNANCE.md) | Estrutura e roles |
| 🔒 Segurança | [SECURITY.md](../SECURITY.md) | Políticas e procedimentos |
| ✍️ Contribuindo | [CONTRIBUTING.md](.github/CONTRIBUTING.md) | Como contribuir |
| 🔄 CI/CD | [PHASE-4-PIPELINES.md](PHASE-4-PIPELINES.md) | Pipelines de automação |
| 📊 Projects | [PROJECTS-V2-CONFIG.md](PROJECTS-V2-CONFIG.md) | Gerenciamento de projeto |
| 💬 Slack | [PHASE-6-SLACK-INTEGRATION.md](PHASE-6-SLACK-INTEGRATION.md) | Notificações e alerts |

---

## 🚀 PRIMEIRO DIA - O QUE FAZER

### 1️⃣ Setup Inicial (15 min)
```bash
# Clone seu repositório
git clone https://github.com/Bridge-tecnologia/seu-repo.git

# Configure seu git
git config user.name "Seu Nome"
git config user.email seu.email@bridge.tech

# Instale dependências
npm install
# ou
pip install -r requirements.txt
```

### 2️⃣ Criar Feature Branch (5 min)
```bash
# Sempre crie branch para novas features
git checkout -b feature/sua-feature

# Nomes: feature/, bugfix/, hotfix/, docs/
```

### 3️⃣ Fazer Commit (10 min)
```bash
# Use conventional commits
git commit -m "type: subject

body

footer"

# Types: feat, fix, docs, style, refactor, test, chore
```

### 4️⃣ Criar Pull Request (5 min)
- Push sua branch
- Abra PR no GitHub
- Use template automático
- Preencha checklist

### 5️⃣ Code Review (varies)
- Espere reviews
- Responda comentários
- Faça ajustes se necessário
- Merge quando aprovado

---

## 📝 TEMPLATES IMPORTANTES

### Commit Message
```
feat: add new feature

Describe what changed and why.

Closes #issue-number
```

### PR Title
```
[Feature] Descrição curta do que foi feito
```

### Issue Title
```
[Bug] Descrição do problema
ou
[Feature] Descrição da feature solicitada
```

---

## 🔐 SEGURANÇA - 5 REGRAS DE OURO

1. ❌ **NUNCA** commite secrets/passwords
2. ✅ Use `.env` para variáveis locais
3. ✅ Adicione `.env` ao `.gitignore`
4. ✅ Use GitHub Secrets para prod
5. 🚨 Se commitar acidentalmente, notifique #security-alerts

---

## 📊 GITHUB PROJECTS - QUICK START

### Adicionar Issue ao Project
1. Abra a issue
2. Clique em "Add to Project"
3. Selecione projeto
4. Confirme

### Atualizar Status
1. Abra project view
2. Arraste issue entre colunas
3. Atualize automaticamente

### Usar Custom Fields
- **Status:** To Do, In Progress, In Review, Done
- **Priority:** Low, Medium, High, Critical
- **Team:** Backend, Frontend, DevOps, QA

---

## 🔄 CI/CD - O QUE ESPERAR

### Build Pipeline (Automático)
```
Push code
  ↓
Build starts
  ↓
Tests run
  ↓
Coverage check
  ↓
Deploy to staging (se branch = develop)
  ↓
Deploy to production (se branch = main)
```

### Monitorar Status
1. Abra PR
2. Scroll para "Checks" section
3. Clique em build para ver logs
4. Espere todos passarem ✅

### Se Falhar
1. Leia erro no log
2. Faça correção local
3. Commit e push
4. Pipeline roda novamente (automático)

---

## 💬 SLACK CHANNELS

| Canal | Uso | Quem Recebe |
|-------|-----|-----------|
| #dev-prs | Notificações de PR | Todo Dev |
| #deployments | Deploy status | DevOps + Leads |
| #dev-issues | Novas issues | Todo Dev |
| #alerts | Build/Test failures | Leads + DevOps |
| #security-alerts | Vulnerabilities | Leads (PRIVATE) |
| #standup | Daily 9 AM | Todo Dev |

---

## ⏰ DAILY STANDUP - SLACK AUTOMATED

**Tempo:** 9 AM UTC (seg-sex)

**Aparecerá automaticamente em #standup:**
```
📊 DAILY STANDUP - 2026-07-02

🔴 BLOCKER Issues:
🎯 PRs Merged Yesterday:
📅 Today's Focus:
🚨 Risks:
```

**Ação:** Leia e commente com atualizações!

---

## 📈 WEEKLY REPORT - FRIDAY 5 PM UTC

**Aparecerá automaticamente em #weekly-report:**
```
📊 WEEKLY REPORT

📈 Velocity
⚡ Performance
🔒 Security
🎯 Deployments
```

**Ação:** Compartilhe com stakeholders!

---

## 🆘 PRECISO DE AJUDA!

### Para issues técnicas
```
1. Procure em CONTRIBUTING.md
2. Procure em FAQ (veja abaixo)
3. Poste em #bridge-support
4. Mencione @leads se urgente
```

### Comum Issues & Soluções

**Problema:** Build falha localmente mas passa em CI
```
Solução:
1. git pull origin main
2. npm install (ou pip install)
3. npm test (ou python -m pytest)
```

**Problema:** PR blocked - reviewer não responde
```
Solução:
1. Ping no Slack
2. Mencione em comentário PR
3. Escale para lead se >24h
```

**Problema:** Secret vazou no commit
```
Ação:
1. NÃO IGNORE - notifique imediatamente
2. Poste em #security-alerts
3. Rotacione a secret
4. Aguarde confirmação que foi removida
```

**Problema:** Não consigo fazer push
```
Solução:
1. Verifique branch protection: `git branch -vv`
2. Todos checks passam?
3. Tem 2 approvals?
4. Contato lead se problema continuar
```

---

## 📚 FAQ - PERGUNTAS FREQUENTES

**P: Posso pushear direto para main?**
A: Não. Main é protegido. Use branch + PR sempre.

**P: Como faço rollback se errei?**
A: Crie novo PR com revert. Não force push para main.

**P: Meu código tem coverage baixo, e agora?**
A: Aumente tests. Pipeline vai bloquear se <80%.

**P: Quanto tempo leva code review?**
A: Target <24h. Ping se demorar mais.

**P: Posso commitar diretamente com -m "fix"?**
A: Não. Use conventional commits sempre.

**P: Slack alerts estão muito barulhentos?**
A: Mute canal. Alertas críticos destacam com 🔴

**P: Posso desabilitar CI/CD em um commit?**
A: Não. Sempre roda. Se problema, abra issue.

**P: Como atualizo dependências?**
A: Faça em branch, run tests, PR, merge. Automático depois.

---

## ✅ PRÉ-PUSH CHECKLIST

Antes de fazer push, verifique:

```
[ ] Branch name segue convenção (feature/, bugfix/, etc)
[ ] Commits usam conventional commits
[ ] Code segue style guide
[ ] Tests passam localmente (npm test ou pytest)
[ ] Coverage >80%
[ ] Sem console.log ou print statements
[ ] Sem secrets/passwords
[ ] .env no .gitignore
[ ] PR template preenchido
[ ] Descrição clara
[ ] Atribuído a project
[ ] Etiquetas adicionadas
```

---

## 🚨 EMERGENCY CONTACTS

| Role | Nome | Slack | Email |
|------|------|-------|-------|
| Lead | [Nome] | @lead | lead@bridge.tech |
| Security | [Nome] | @security | security@bridge.tech |
| DevOps | [Nome] | @devops | devops@bridge.tech |
| Project Lead | [Nome] | @pm | pm@bridge.tech |

---

## 📞 SUPORTE

- **Slack:** #bridge-support
- **Email:** support@bridge.tech
- **Issues:** Abra em bridge/.github
- **Hora de Resposta:** <1 hour (business hours)

---

**Versão:** 1.0
**Última atualização:** 2026-07-02
**Próxima review:** 2026-07-09