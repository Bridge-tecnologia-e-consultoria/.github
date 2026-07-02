# 🔴 Dr. GOVERNANCE - TASK 3: Teams & Permissions
## Bridge-tecnologia-e-consultoria - Org Teams Configuration

**Status:** ✅ CONFIGURADO  
**Data:** 2026-07-02  
**Responsável:** Dr. GOVERNANCE  
**Timeline:** 10:30–12:00 UTC

---

## 📋 Estrutura de Times

| Time | Permissão | Repositórios | Purpose |
|------|-----------|--------------|---------|
| [@leads](#leads) | Admin | Todos | Líderes técnicos e arquitetos |
| [@frontend](#frontend) | Maintain | clubflow, laconelli, petskin | Desenvolvedores Frontend |
| [@backend](#backend) | Maintain | vetbooking, lideranca-tech | Desenvolvedores Backend |
| [@devops](#devops) | Admin | Todos | DevOps e Infraestrutura |
| [@qa](#qa) | Push | Todos | QA e Testes |
| [@product](#product) | Push | Todos | Product Managers |

---

## 👥 Detalhes dos Times

### @leads
- **Permissão:** Admin
- **Membros:** @antonioneto19
- **Repositórios:** vetbooking, petskin, laconelli, clubflow, lideranca-tech, .github
- **Purpose:** Líderes técnicos e arquitetos — acesso total para gestão da organização

### @frontend
- **Permissão:** Maintain
- **Repositórios:** clubflow, laconelli, petskin
- **Purpose:** Desenvolvedores Frontend — gerenciam PRs, labels e releases nos repos front

### @backend
- **Permissão:** Maintain
- **Repositórios:** vetbooking, lideranca-tech
- **Purpose:** Desenvolvedores Backend — gerenciam PRs, labels e releases nos repos back

### @devops
- **Permissão:** Admin
- **Repositórios:** vetbooking, petskin, laconelli, clubflow, lideranca-tech, .github
- **Purpose:** DevOps e Infraestrutura — acesso total para pipelines, secrets e configurações

### @qa
- **Permissão:** Push
- **Repositórios:** vetbooking, petskin, laconelli, clubflow, lideranca-tech, .github
- **Purpose:** QA e Testes — push para branches de feature/test em todos os repos

### @product
- **Permissão:** Push
- **Repositórios:** vetbooking, petskin, laconelli, clubflow, lideranca-tech, .github
- **Purpose:** Product Managers — push para branches de feature, acesso a issues/projects

---

## 🚀 Como Ativar

### Opção 1: Workflow Automático (Recomendado)

1. Acesse: [Actions → Setup Org Teams](https://github.com/Bridge-tecnologia-e-consultoria/.github/actions/workflows/setup-teams.yml)
2. Clique em **"Run workflow"**
3. Configure o secret `ORG_ADMIN_TOKEN` antes de executar:
   - Vá em: Settings → Secrets → Actions
   - Adicione `ORG_ADMIN_TOKEN` com um Personal Access Token com escopo `admin:org`
4. Execute com `dry_run: false` para criação real

### Opção 2: Manual via GitHub UI

Acesse: https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/new

Criar cada time na ordem:
1. **leads** → Description: "Líderes técnicos e arquitetos" → Privacy: Closed
2. **frontend** → Description: "Desenvolvedores Frontend" → Privacy: Closed
3. **backend** → Description: "Desenvolvedores Backend" → Privacy: Closed
4. **devops** → Description: "DevOps e Infraestrutura" → Privacy: Closed
5. **qa** → Description: "QA e Testes" → Privacy: Closed
6. **product** → Description: "Product Managers" → Privacy: Closed

### Opção 3: Script de Setup Manual

```bash
# Requer: gh CLI + token com admin:org scope
export GH_TOKEN=<seu-org-admin-token>
ORG="Bridge-tecnologia-e-consultoria"

# Criar times
for team in leads devops; do
  gh api --method POST /orgs/$ORG/teams \
    --field name="$team" \
    --field privacy="closed"
done

for team in frontend backend; do
  gh api --method POST /orgs/$ORG/teams \
    --field name="$team" \
    --field privacy="closed"
done

for team in qa product; do
  gh api --method POST /orgs/$ORG/teams \
    --field name="$team" \
    --field privacy="closed"
done

# Adicionar @antonioneto19 ao time leads
gh api --method PUT /orgs/$ORG/teams/leads/memberships/antonioneto19 \
  --field role="maintainer"

# leads e devops: Admin em todos os repos
for repo in vetbooking petskin laconelli clubflow lideranca-tech .github; do
  for team in leads devops; do
    gh api --method PUT /orgs/$ORG/teams/$team/repos/$ORG/$repo \
      --field permission="admin"
  done
done

# frontend: Maintain em repos front
for repo in clubflow laconelli petskin; do
  gh api --method PUT /orgs/$ORG/teams/frontend/repos/$ORG/$repo \
    --field permission="maintain"
done

# backend: Maintain em repos back
for repo in vetbooking lideranca-tech; do
  gh api --method PUT /orgs/$ORG/teams/backend/repos/$ORG/$repo \
    --field permission="maintain"
done

# qa e product: Push em todos os repos
for repo in vetbooking petskin laconelli clubflow lideranca-tech .github; do
  for team in qa product; do
    gh api --method PUT /orgs/$ORG/teams/$team/repos/$ORG/$repo \
      --field permission="push"
  done
done

echo "✅ Todos os times configurados!"
```

---

## ✅ Checklist de Validação

Após execução, verificar em: https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams

- [ ] @leads criado com @antonioneto19 como membro (Admin)
- [ ] @frontend criado (Maintain em clubflow, laconelli, petskin)
- [ ] @backend criado (Maintain em vetbooking, lideranca-tech)
- [ ] @devops criado (Admin em todos os repos)
- [ ] @qa criado (Push em todos os repos)
- [ ] @product criado (Push em todos os repos)
- [ ] 6 times visíveis na organização

---

## 🔗 Links Úteis

- Times da org: https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams
- Workflow de setup: https://github.com/Bridge-tecnologia-e-consultoria/.github/actions/workflows/setup-teams.yml
- Settings → Members: https://github.com/orgs/Bridge-tecnologia-e-consultoria/settings/members
