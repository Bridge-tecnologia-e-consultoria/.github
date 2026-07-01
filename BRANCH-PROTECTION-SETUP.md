# 🔧 Dr. GOVERNANCE - BRANCH PROTECTION SETUP
## VetBooking, PetSkin, LaConelli, ClubFlow

**Executando em:** 4 repositórios  
**Status:** 🟢 EM EXECUÇÃO  
**ETA:** 2026-07-02

---

## 📋 BRANCH PROTECTION RULES - MAIN BRANCH

### Configuração Padrão (para todos os 4 repos)

```yaml
branch: main

protection_rules:
  # Pull Request Reviews
  required_pull_request_reviews:
    required_approving_review_count: 1
    dismiss_stale_reviews: true
    require_code_owner_reviews: true
    require_last_push_approval: false

  # Status Checks (Required)
  required_status_checks:
    strict: true
    contexts:
      - lint
      - test
      - build
      - security-scan
      - CodeQL
      - coverage

  # Push Restrictions
  restrictions:
    teams:
      - leads
      - devops
    users: []

  # Additional Settings
  enforce_admins: false
  dismiss_stale_reviews: true
  require_conversation_resolution: true
  allow_force_pushes: false
  allow_deletions: false
  require_linear_history: false
```

---

## 🔄 IMPLEMENTAÇÃO POR REPOSITÓRIO

### 1️⃣ VetBooking
**URL:** https://github.com/Bridge-tecnologia-e-consultoria/vetbooking/settings/branches

**Steps:**
1. Go to Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Require review from Code Owners
   - ✅ Dismiss stale pull request approvals
   - ✅ Require status checks to pass
   - Select: lint, test, build, security-scan
   - ✅ Require branches to be up to date
   - ✅ Require conversation resolution
5. Click "Create"

**Validation:**
- [ ] Rule created
- [ ] Try to push directly to main → blocked
- [ ] Create PR → requires 1 approval
- [ ] Tests must pass before merge

### 2️⃣ PetSkin
**URL:** https://github.com/Bridge-tecnologia-e-consultoria/petskin/settings/branches

**Same steps as VetBooking**

### 3️⃣ LaConelli
**URL:** https://github.com/Bridge-tecnologia-e-consultoria/laconelli/settings/branches

**Same steps as VetBooking**

### 4️⃣ ClubFlow
**URL:** https://github.com/Bridge-tecnologia-e-consultoria/clubflow/settings/branches

**Same steps as VetBooking**

---

## ✅ VERIFICAÇÃO PÓS-IMPLEMENTAÇÃO

Para cada repositório, validar:

```bash
# 1. Tentar push direto para main (deve falhar)
git push origin main
# Expected: ❌ REJECTED (requires PR)

# 2. Criar branch de teste
git checkout -b test/branch-protection
echo "test" > test.txt
git add .
git commit -m "Test commit"
git push origin test/branch-protection

# 3. Criar Pull Request
# Go to GitHub → Create PR → main

# 4. Verificar que PR requer:
# ✅ 1 approval
# ✅ Tests passing
# ✅ No conflicts
# ✅ Up-to-date with main
```

---

## 📊 STATUS

| Repo | Branch Protection | Status |
|------|-------------------|--------|
| VetBooking | main | ⏳ |
| PetSkin | main | ⏳ |
| LaConelli | main | ⏳ |
| ClubFlow | main | ⏳ |

---

**Responsável:** Dr. GOVERNANCE  
**Data:** 2026-07-01  
**Próxima Etapa:** Copiar workflows para cada repo