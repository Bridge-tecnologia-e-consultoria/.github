# 🏢 TEAMS STRUCTURE - Bridge-tecnologia-e-consultoria

**Responsável:** Dr. GOVERNANCE  
**Data Criação:** 2026-07-03  
**Organização:** [Bridge-tecnologia-e-consultoria](https://github.com/orgs/Bridge-tecnologia-e-consultoria)

---

## 📋 Visão Geral

A organização Bridge-tecnologia-e-consultoria é composta por **6 times especializados** com diferentes níveis de acesso e responsabilidades. Cada time tem permissões configuradas de acordo com sua função e os repositórios com os quais trabalha.

---

## 🏗️ Hierarquia de Times

```
Bridge-tecnologia-e-consultoria
├── 🔴 @leads          (Admin)    - Líderes Técnicos e Arquitetos
├── 🟠 @devops         (Admin)    - DevOps e Infraestrutura
├── 🟡 @frontend       (Maintain) - Desenvolvedores Frontend
├── 🟡 @backend        (Maintain) - Desenvolvedores Backend
├── 🟢 @qa             (Push)     - QA e Testes
└── 🔵 @product        (Push)     - Product Managers e Designers
```

---

## 👥 Detalhamento dos Times

### 1. 🔴 @leads — Líderes Técnicos

| Campo | Valor |
|-------|-------|
| **Slug** | `leads` |
| **Permissão** | Admin |
| **Privacy** | Closed |
| **Descrição** | Líderes técnicos e arquitetos da organização |
| **Membros Iniciais** | @antonioneto19 |

**Repositórios e Permissões:**

| Repositório | Permissão |
|-------------|-----------|
| vetbooking | Admin |
| petskin | Admin |
| laconelli | Admin |
| clubflow | Admin |
| lideranca-tech | Admin |

**Responsabilidades:**
- Aprovação final de Pull Requests críticos
- Definição de arquitetura e padrões técnicos
- Gestão de branch protection e CODEOWNERS
- Tomada de decisão em conflitos técnicos

---

### 2. 🟠 @devops — DevOps e Infraestrutura

| Campo | Valor |
|-------|-------|
| **Slug** | `devops` |
| **Permissão** | Admin |
| **Privacy** | Closed |
| **Descrição** | DevOps e Infraestrutura (K8s, Docker, CI/CD) |

**Repositórios e Permissões:**

| Repositório | Permissão |
|-------------|-----------|
| vetbooking | Admin |
| petskin | Admin |
| laconelli | Admin |
| clubflow | Admin |
| lideranca-tech | Admin |

**Responsabilidades:**
- Gerenciamento de pipelines CI/CD
- Configuração de ambientes (Docker, Kubernetes)
- Gestão de secrets e variáveis de ambiente
- Monitoramento e observabilidade
- Configuração de workflows do GitHub Actions

---

### 3. 🟡 @frontend — Desenvolvedores Frontend

| Campo | Valor |
|-------|-------|
| **Slug** | `frontend` |
| **Permissão** | Maintain |
| **Privacy** | Closed |
| **Descrição** | Desenvolvedores Frontend (React, Next.js, Vue) |

**Repositórios e Permissões:**

| Repositório | Permissão |
|-------------|-----------|
| clubflow | Maintain |
| laconelli | Maintain |
| petskin | Maintain |

**Responsabilidades:**
- Desenvolvimento de interfaces e componentes
- Revisão de Pull Requests frontend
- Manutenção de código React, Next.js e Vue
- Garantia de qualidade visual e UX

---

### 4. 🟡 @backend — Desenvolvedores Backend

| Campo | Valor |
|-------|-------|
| **Slug** | `backend` |
| **Permissão** | Maintain |
| **Privacy** | Closed |
| **Descrição** | Desenvolvedores Backend (Python, Node.js, FastAPI) |

**Repositórios e Permissões:**

| Repositório | Permissão |
|-------------|-----------|
| vetbooking | Maintain |
| lideranca-tech | Maintain |

**Responsabilidades:**
- Desenvolvimento de APIs e serviços
- Revisão de Pull Requests backend
- Manutenção de código Python, Node.js e FastAPI
- Gestão de banco de dados e integrações

---

### 5. 🟢 @qa — QA e Testes

| Campo | Valor |
|-------|-------|
| **Slug** | `qa` |
| **Permissão** | Push |
| **Privacy** | Closed |
| **Descrição** | QA e Testes (E2E, Performance, Security) |

**Repositórios e Permissões:**

| Repositório | Permissão |
|-------------|-----------|
| vetbooking | Push |
| petskin | Push |
| laconelli | Push |
| clubflow | Push |
| lideranca-tech | Push |

**Responsabilidades:**
- Criação e manutenção de testes E2E
- Testes de performance e carga
- Testes de segurança
- Garantia de cobertura de código (mínimo 80%)
- Validação de releases

---

### 6. 🔵 @product — Product Managers e Designers

| Campo | Valor |
|-------|-------|
| **Slug** | `product` |
| **Permissão** | Push |
| **Privacy** | Closed |
| **Descrição** | Product Managers e Designers |

**Repositórios e Permissões:**

| Repositório | Permissão |
|-------------|-----------|
| vetbooking | Push |
| petskin | Push |
| laconelli | Push |
| clubflow | Push |
| lideranca-tech | Push |

**Responsabilidades:**
- Gestão de backlog e roadmap
- Especificação de requisitos e user stories
- Revisão de design e UX
- Comunicação com stakeholders

---

## 📊 Matriz de Acesso

| Time | vetbooking | petskin | laconelli | clubflow | lideranca-tech |
|------|-----------|---------|-----------|---------|----------------|
| @leads | ✅ Admin | ✅ Admin | ✅ Admin | ✅ Admin | ✅ Admin |
| @devops | ✅ Admin | ✅ Admin | ✅ Admin | ✅ Admin | ✅ Admin |
| @frontend | ❌ | ✅ Maintain | ✅ Maintain | ✅ Maintain | ❌ |
| @backend | ✅ Maintain | ❌ | ❌ | ❌ | ✅ Maintain |
| @qa | ✅ Push | ✅ Push | ✅ Push | ✅ Push | ✅ Push |
| @product | ✅ Push | ✅ Push | ✅ Push | ✅ Push | ✅ Push |

---

## 🔑 Níveis de Permissão

| Permissão | Descrição |
|-----------|-----------|
| **Admin** | Acesso total: gerenciar settings, branches, webhooks, colaboradores e permissões do repositório |
| **Maintain** | Gerenciar issues, PRs, milestones, labels, configurações básicas do repo (sem acesso a settings sensíveis) |
| **Push** | Ler, clonar, fazer push em branches e criar/atualizar PRs |

---

## ➕ Como Adicionar Novos Membros

### Via GitHub UI

1. Acesse: `https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams`
2. Clique no time desejado (ex: `@frontend`)
3. Vá para a aba **Members**
4. Clique em **Add a member**
5. Digite o username do novo membro
6. Confirme o convite

### Via GitHub CLI

```bash
# Adicionar membro a um time
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /orgs/Bridge-tecnologia-e-consultoria/teams/{team_slug}/memberships/{username} \
  -f role='member'

# Exemplos:
# Adicionar ao @frontend
gh api --method PUT \
  /orgs/Bridge-tecnologia-e-consultoria/teams/frontend/memberships/novo-dev \
  -f role='member'

# Adicionar ao @leads como maintainer
gh api --method PUT \
  /orgs/Bridge-tecnologia-e-consultoria/teams/leads/memberships/novo-lider \
  -f role='maintainer'
```

### Roles disponíveis

| Role | Descrição |
|------|-----------|
| `member` | Membro padrão do time |
| `maintainer` | Pode gerenciar o time (adicionar/remover membros) |

---

## ➕ Como Adicionar Novos Repositórios a um Time

### Via GitHub UI

1. Acesse: `https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/{team-slug}/repositories`
2. Clique em **Add repository**
3. Digite o nome do repositório
4. Selecione o nível de permissão
5. Confirme

### Via GitHub CLI

```bash
# Adicionar repositório a um time
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /orgs/Bridge-tecnologia-e-consultoria/teams/{team_slug}/repos/Bridge-tecnologia-e-consultoria/{repo_name} \
  -f permission='{permission_level}'

# Exemplos:
# Adicionar novo-repo ao @frontend com Maintain
gh api --method PUT \
  /orgs/Bridge-tecnologia-e-consultoria/teams/frontend/repos/Bridge-tecnologia-e-consultoria/novo-repo \
  -f permission='maintain'

# Adicionar novo-repo ao @qa com Push
gh api --method PUT \
  /orgs/Bridge-tecnologia-e-consultoria/teams/qa/repos/Bridge-tecnologia-e-consultoria/novo-repo \
  -f permission='push'
```

---

## 🔗 Links Úteis

| Recurso | Link |
|---------|------|
| Página de Times | https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams |
| @leads | https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/leads |
| @devops | https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/devops |
| @frontend | https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/frontend |
| @backend | https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/backend |
| @qa | https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/qa |
| @product | https://github.com/orgs/Bridge-tecnologia-e-consultoria/teams/product |
| CODEOWNERS | https://github.com/Bridge-tecnologia-e-consultoria/.github/blob/main/.github/CODEOWNERS |
| Governança | https://github.com/Bridge-tecnologia-e-consultoria/.github/blob/main/GOVERNANCE-CONFIG.md |

---

## 📋 Checklist de Criação dos Times

- [ ] @leads criado com privacy=closed, permission=admin
- [ ] @leads: @antonioneto19 adicionado como membro
- [ ] @leads: todos os 5 repos vinculados com Admin
- [ ] @devops criado com privacy=closed, permission=admin
- [ ] @devops: todos os 5 repos vinculados com Admin
- [ ] @frontend criado com privacy=closed, permission=maintain
- [ ] @frontend: clubflow, laconelli, petskin vinculados com Maintain
- [ ] @backend criado com privacy=closed, permission=maintain
- [ ] @backend: vetbooking, lideranca-tech vinculados com Maintain
- [ ] @qa criado com privacy=closed, permission=push
- [ ] @qa: todos os 5 repos vinculados com Push
- [ ] @product criado com privacy=closed, permission=push
- [ ] @product: todos os 5 repos vinculados com Push

---

*Documento gerado pelo Dr. GOVERNANCE — Bridge PhD Team*  
*Última atualização: 2026-07-03*
