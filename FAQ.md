# ❓ FAQ - FREQUENTLY ASKED QUESTIONS
## Bridge Governance Framework - Complete Q&A

---

## 🎯 GETTING STARTED

### P: Por onde começo?
**A:** 
1. Leia [GOVERNANCE.md](.github/GOVERNANCE.md) - entenda a estrutura
2. Leia [CONTRIBUTING.md](.github/CONTRIBUTING.md) - aprenda o workflow
3. Leia [QUICK-REFERENCE.md](QUICK-REFERENCE.md) - use como cheat sheet
4. Faça seu primeiro PR usando template

### P: Qual é meu role no projeto?
**A:** 
Verificar em [GOVERNANCE.md](.github/GOVERNANCE.md):
- **Contributor:** Envia PRs, cria issues
- **Reviewer:** Revisa código de contributors
- **Maintainer:** Merge PRs, gerencia releases
- **Admin:** Configura repositório, policies

Ou procure em CODEOWNERS file para seu nome.

### P: Onde encontro documentação completa?
**A:**
```
.github/
├── GOVERNANCE.md          ← Estrutura e roles
├── CONTRIBUTING.md        ← Como contribuir
├── README.md              ← Overview
├── SECURITY.md            ← Políticas de segurança
└── PHASE-*.md             ← Detalhes de cada fase

Raiz do projeto:
├── SECURITY.md            ← Security policy
└── README.md              ← Project overview
```

---

## 💻 GIT & GITHUB

### P: Como faço clone do repositório?
**A:**
```bash
git clone https://github.com/Bridge-tecnologia/seu-repo.git
cd seu-repo
```

### P: Qual é a estrutura de branches?
**A:**
```
main (production-ready)
  ↑
develop (staging branch)
  ↑
feature/* (sua feature)
bugfix/* (seu bugfix)
hotfix/* (hotfix crítico)
docs/* (documentação)
```

### P: Como criar uma feature branch?
**A:**
```bash
# A partir de develop
git checkout develop
git pull origin develop
git checkout -b feature/minha-feature

# Nome: feature/, bugfix/, hotfix/, docs/
# Lowercase, hífens para espaços, descritivo
```

### P: Qual é a convenção de commit?
**A:**
```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat:` Nova feature
- `fix:` Bug fix
- `docs:` Documentação
- `style:` Formatação (sem mudança lógica)
- `refactor:` Refatoração
- `test:` Adição de testes
- `chore:` Build, deps, etc

**Exemplo:**
```
feat: add user authentication

Added JWT-based authentication to API.
Users can now login with email/password.

Closes #123
```

### P: Como fazer um bom commit?
**A:**
1. Commits devem ser **atômicos** (uma coisa por commit)
2. Use **conventional commits**
3. Escreva **descrição clara**
4. Referencie **issues** no footer
5. Mantenha **histórico limpo**

```bash
git commit -m "fix: resolve login timeout issue

Increased session timeout from 30 to 60 minutes.
Users were getting logged out unexpectedly.

Fixes #456"
```

### P: Posso fazer push direto para main?
**A:** 
❌ **NÃO.** Main é protegido:
- Requer pull request
- Requer 2 approvals
- Requer todos checks passarem
- Requer CODEOWNERS approval

**Solução:** Sempre use branch + PR.

### P: Como faço revert de um commit?
**A:**
```bash
# Se ainda não foi mergeado
git revert <commit-sha>
git push origin feature/sua-branch

# Se já foi mergeado para main
git revert <commit-sha>
git push origin main
# Isso cria novo commit que desfaz o anterior
```

**⚠️ Nunca faça force push para main!**

### P: Meu branch está desatualizado. O que fazer?
**A:**
```bash
# Opção 1: Rebase (preferido)
git fetch origin
git rebase origin/develop
git push origin feature/sua-branch --force-with-lease

# Opção 2: Merge
git fetch origin
git merge origin/develop
git push origin feature/sua-branch
```

---

## 🔒 SEGURANÇA

### P: Cometi um secret no repositório. E agora?
**A:** 
🚨 **AÇÃO IMEDIATA:**
1. Poste em #security-alerts: "@security Secret exposure in PR #XYZ"
2. **Não delete o commit** (ainda será visível no histórico)
3. Notifique lead imediatamente
4. Não merge até resolver

**Resolução:**
- Team usará git-filter-branch para remover
- Secret será rotacionado
- Você será notificado quando limpo

### P: Como evitar commitar secrets?
**A:**
1. **Nunca** use secrets direto no código
2. Crie `.env.example` com placeholders
3. Adicione `.env` ao `.gitignore`
4. Use GitHub Secrets para CI/CD
5. Configure pre-commit hook para validar

```bash
# .env (no gitignore)
DB_PASSWORD=actual_password

# .env.example (commitar!)
DB_PASSWORD=your_password_here
```

### P: Como acessar secrets em workflows?
**A:**
```yaml
- name: Deploy
  env:
    DB_PASSWORD: ${{ secrets.DB_PASSWORD }}
  run: ./deploy.sh
```

Secrets não aparecerão em logs.

### P: Recebo alerta de vulnerability. O que fazer?
**A:**
1. Abra o alerta em Security tab
2. Leia a descrição e recomendação
3. Se patch disponível: update dependência
4. Crie PR com fix
5. Aguarde review e merge

```bash
# Update dependência vulnerável
npm update vulnerable-package
# ou
pip install --upgrade vulnerable-package

# Commit e push
git commit -m "fix: update vulnerable dependency"
git push origin feature/security-fix
```

### P: Qual é a política de senhas/keys?
**A:**
- ✅ Use GitHub Secrets para prod
- ✅ Use `.env` local para dev
- ✅ Rotacione regularmente
- ❌ Nunca commite secrets
- ❌ Nunca compartilhe keys por Slack
- ❌ Nunca use secrets em comentários

---

## 📝 CONTRIBUTING

### P: Como crio uma issue?
**A:**
1. Abra https://github.com/Bridge-tecnologia/repo/issues/new
2. Escolha template:
   - Bug Report
   - Feature Request
   - Documentation
3. Preencha todos os campos
4. Submita

**Bom exemplo:**
```
## 🐛 Bug Report

### Descrição
Login falha quando email tem espaço

### Steps to Reproduce
1. Abra login page
2. Digite " user@example.com " (com espaço)
3. Click login

### Expected
Login funciona mesmo com espaço

### Actual
Erro: "Invalid email"

### Environment
- Browser: Chrome 120
- OS: Ubuntu 22.04
```

### P: Como crio um Pull Request?
**A:**
1. Push sua branch
2. GitHub mostrará botão "Create PR"
3. Clique
4. Preencha template automático
5. Clique "Create Pull Request"

**Template automático aparece com:**
- [ ] Descrição clara
- [ ] Link para issue
- [ ] Checklist de validação
- [ ] Screenshots (se UI change)

### P: Qual é o processo de code review?
**A:**
```
Você → Cria PR
  ↓
Reviewers → Leem código
  ↓
Comentários → Você responde
  ↓
Você → Faz ajustes (se necessário)
  ↓
Reviewers → Aprovam ✅
  ↓
Lead → Merge para main
  ↓
CI/CD → Deploy automático
```

**Tempo esperado:** <24h para review

### P: Como respondo a comentários em PR?
**A:**
1. Leia comentário
2. Faça ajuste no código (se necessário)
3. Commit: `git commit -m "review: address feedback on PR"`
4. Push: `git push origin feature/sua-branch`
5. Responda no PR: "Updated, PTAL (Please Take Another Look)"

**Não force push** - mantém histórico de discussão.

### P: PR foi rejeitado. O que fazer?
**A:**
1. Leia feedback detalhadamente
2. Pergunte se não entender
3. Faça alterações necessárias
4. Reclame se achar injusto (escalte para lead)
5. Resubmita para review

**Importante:** Rejeição é feedback, não pessoal!

### P: Quanto tempo meu PR fica em review?
**A:**
- **SLA (Service Level Agreement):** <24h
- **Crítico/Hotfix:** <4h
- **Documentação:** <48h
- **Se demorar:** Ping em #bridge-support

---

## 🔄 CI/CD & TESTING

### P: O que é CI/CD?
**A:**
- **CI** = Continuous Integration (testes automáticos)
- **CD** = Continuous Deployment (deploy automático)

**Fluxo:**
```
Push code
  ↓
Automated tests run
  ↓
Coverage check
  ↓
Build check
  ↓
Deploy to staging (se develop)
  ↓
Deploy to production (se main)
```

### P: Como vejo status do build?
**A:**
1. Abra seu PR
2. Scroll para "Checks" seção
3. Veja status de cada check:
   - 🟢 Passou
   - 🟠 Rodando
   - 🔴 Falhou

### P: Build falhou. O que fazer?
**A:**
1. Clique em build falho para ver logs
2. Procure mensagem de erro
3. Corrija no seu código
4. Commit: `git commit -m "fix: resolve test failures"`
5. Push (build roda automático)

**Comum:**
- Test falhou → adicione testes ou corrija código
- Coverage baixa → adicione mais testes
- Lint falhou → rode `npm run lint --fix`

### P: Como rodo testes localmente?
**A:**
```bash
# JavaScript
npm test
npm run test:unit
npm run test:integration

# Python
pytest
python -m pytest tests/

# Ruby
rspec
```

**Antes de fazer push, rode testes!**

### P: Qual é o mínimo de coverage?
**A:** 
**80% de cobertura** é obrigatório.

Se seu PR tem coverage <80%, pipeline bloqueia.

```bash
# Ver coverage local
npm run test:coverage
# ou
pytest --cov=src tests/
```

### P: Como adiciono testes?
**A:**
```javascript
// test/auth.test.js
describe('Authentication', () => {
  test('should login with valid credentials', () => {
    const result = login('user@example.com', 'password123');
    expect(result.success).toBe(true);
  });

  test('should reject invalid password', () => {
    const result = login('user@example.com', 'wrong');
    expect(result.error).toBe('Invalid password');
  });
});
```

---

## 📊 PROJECTS & ISSUES

### P: Como adiciono issue ao project?
**A:**
1. Abra a issue
2. Procure seção "Projects"
3. Clique "Add to project"
4. Selecione projeto
5. Confirme

### P: Como atualizo status da issue?
**A:**
**Opção 1:** Via project board
1. Abra project
2. Arraste issue entre colunas
3. Pronto!

**Opção 2:** Via campo "Status"
1. Abra issue
2. Clique campo "Status"
3. Selecione novo status
4. Atualiza automático

### P: Qual é o ciclo de vida de uma issue?
**A:**
```
Backlog (criada)
  ↓
To Do (priorizada)
  ↓
In Progress (alguém trabalhando)
  ↓
In Review (PR aberto)
  ↓
Done (mergeado para main)
```

### P: Como priorizo uma issue?
**A:**
Via campo "Priority":
- 🔵 Low = pode esperar meses
- 🟡 Medium = próximas semanas
- 🔴 High = próximos dias
- 🔴🔴 Critical = hoje

---

## 💬 SLACK INTEGRATION

### P: Quando recebo notificação no Slack?
**A:**
Automático para:
- Nova PR aberta → #dev-prs
- PR comentário → thread
- PR aprovado/rejeitado → thread
- Issue criada → #dev-issues
- Build falha → #alerts
- Deploy completo → #deployments
- Secret detected → #security-alerts

### P: Como interpreto notificação de build?
**A:**
```
🔴 Build Failed - feature/my-fix
Branch: feature/my-fix
Reason: Tests failed
Logs: https://github.com/.../actions/...
```

Clique em link para ver detalhes.

### P: O que é daily standup?
**A:**
Todo dia às 9 AM UTC em #standup:
```
📊 DAILY STANDUP - 2026-07-02

Você vê:
- Issues bloqueadas
- PRs mergeadas ontem
- Action items hoje
- Riscos conhecidos
```

Leia e comente com atualizações!

### P: Como desabilito notificações?
**A:**
- Mute canal: clique nome → Mute
- Customize: Settings → Notifications
- Configure por repo: Settings → Notifications → Custom

---

## 🚀 DEPLOYMENT & PRODUCTION

### P: Como é o processo de deploy?
**A:**
**Manual:**
```
main branch → All checks pass → Lead clicks merge
  ↓
GitHub Actions → Build runs
  ↓
Tests pass → Build passes
  ↓
Deploy to production → Slack notification
```

**Automático em staging:**
```
develop branch → Merge → Imediatamente deploy para staging
```

### P: Quanto tempo leva para deploy?
**A:**
- Build: 5-10 min
- Tests: 5-10 min
- Deploy: 5-15 min
- Total: 15-35 min

Status em #deployments no Slack.

### P: Posso fazer rollback?
**A:**
Sim! Mas através de novo PR:
```bash
git revert <commit-sha>
# Isso cria novo commit que desfaz o anterior
# Faça PR, review, merge
```

**Nunca force push para main!**

---

## 🆘 TROUBLESHOOTING

### P: Meu PR está blocked e não sei por quê
**A:**
Verifique:
- [ ] Todos checks (build, tests) passam? (🟢)
- [ ] Tem 2 approvals de reviewers? (✅)
- [ ] CODEOWNERS aprovou? (✅)
- [ ] Branch está updated com main?

Se tudo ok e ainda bloqueado, ping lead.

### P: Build falha localmente mas passa em CI
**A:**
```bash
# Sincronize com main
git fetch origin
git merge origin/main

# Limpe dependências
rm -rf node_modules
npm install

# Roda testes
npm test

# Se ainda falhar, veja logs em CI
```

### P: Recebo "Permission denied" ao fazer push
**A:**
```bash
# Verificar SSH key
ssh -T git@github.com

# Se falhar, adicionar SSH key
ssh-keygen -t ed25519 -C "seu.email@bridge.tech"
# Copiar chave pública para GitHub Settings

# Se usar HTTPS, verificar PAT (Personal Access Token)
git config --list | grep credential
```

### P: Meu laptop tem problema de rede
**A:**
```bash
# Verificar conexão
ping github.com

# Se offline, trabalhe localmente, depois sync
git log --oneline # ver commits locais

# Quando voltar online
git push origin feature/sua-branch
```

---

## 📞 QUANDO ESCALAR

**Escalte para Lead se:**
- ❓ Não entender reviewers feedback
- 🔒 Security concern ou possível vulnerability
- 🚨 Build consistently failing (>3 vezes)
- 🔄 Merge conflict que não consegue resolver
- ⏰ PR em review >48h
- 🚀 Ready para deploy a produção

**Escalte para Security se:**
- 🔐 Secret exposure
- 🚨 Vulnerabilidade crítica
- 📋 Policy question

**Escalte para DevOps se:**
- 📊 Infrastructure problem
- 🌐 Deployment failure
- 💾 Database migration

---

## 📚 MAIS RECURSOS

| Recurso | Link |
|---------|------|
| Governance | [GOVERNANCE.md](.github/GOVERNANCE.md) |
| Contributing | [CONTRIBUTING.md](.github/CONTRIBUTING.md) |
| Security | [SECURITY.md](../SECURITY.md) |
| Quick Ref | [QUICK-REFERENCE.md](QUICK-REFERENCE.md) |
| Slack | #bridge-support |
| Email | support@bridge.tech |

---

**Versão:** 1.0
**Última atualização:** 2026-07-02
**Próxima review:** 2026-07-09
**Mantém por:** Dr. GOVERNANCE & Dr. SUPPORT TEAM