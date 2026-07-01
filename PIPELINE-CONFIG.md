# ⚙️ Dr. PIPELINE - Engenheiro de CI/CD
## GitHub Actions & Automation

**Responsável:** Dr. PIPELINE  
**Data Início:** 2026-07-01  
**ETA Conclusão:** 2026-07-10

---

## 📋 Plano de Ação

### FASE 1: Template Workflow Padrão (Dia 1-2)

#### Arquivo: `.github/workflows/ci-cd-template.yml`

```yaml
name: CI/CD Pipeline Template

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  workflow_dispatch:

jobs:
  lint:
    name: Lint & Format
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run format:check

  test:
    name: Unit Tests
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test -- --coverage
      - uses: codecov/codecov-action@v3

  build:
    name: Build
    runs-on: ubuntu-latest
    needs: [lint, test]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/

  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: github/super-linter@v4
      - uses: dependabot/dependabot-core

  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: [build, security-scan]
    if: github.ref == 'refs/heads/develop'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v3
      - run: echo "Deploying to staging..."

  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [build, security-scan]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v3
      - run: echo "Deploying to production..."
```

### FASE 2: Dependabot Configuration (Dia 3)

#### Arquivo: `.github/dependabot.yml`

```yaml
version: 2
updates:
  # npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "09:00"
    open-pull-requests-limit: 10
    reviewers:
      - "antonioneto19"
    assignees:
      - "antonioneto19"
    labels:
      - "dependencies"
      - "automated"
    commit-message:
      prefix: "chore: "
      prefix-development: "chore(deps): "
    allow:
      - dependency-type: "all"
    ignore:
      - dependency-name: "package-name"

  # Python
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
      time: "09:00"
    reviewers:
      - "antonioneto19"
    labels:
      - "dependencies"
      - "python"

  # Docker
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    reviewers:
      - "antonioneto19"
    labels:
      - "dependencies"
      - "docker"

  # GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    reviewers:
      - "antonioneto19"
    labels:
      - "dependencies"
      - "github-actions"
```

### FASE 3: Project-Specific Workflows (Dia 4-6)

#### VetBooking Workflow: `.github/workflows/vetbooking-ci.yml`

```yaml
name: VetBooking - CI/CD

on:
  push:
    branches: [main]
    paths:
      - 'vetbooking/**'
  pull_request:
    branches: [main]
    paths:
      - 'vetbooking/**'

jobs:
  test-backend:
    name: Backend Tests (Python)
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
      redis:
        image: redis:7
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      - run: pip install -r requirements.txt
      - run: pytest --cov=. --cov-report=xml

  test-frontend:
    name: Frontend Tests (React)
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test -- --coverage

  e2e-tests:
    name: E2E Tests
    runs-on: ubuntu-latest
    needs: [test-backend, test-frontend]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run test:e2e
```

### FASE 4: Deployment Automation (Dia 7-8)

#### Auto-Deploy Configuration:

```yaml
deployment:
  staging:
    trigger: "develop branch push"
    platform: "Vercel / Render"
    environment: "staging.vetbooking.com"
    
  production:
    trigger: "main branch push + approval"
    platform: "Vercel / AWS"
    environment: "vetbooking.com"
    
  rollback:
    trigger: "deployment failure"
    action: "automatic rollback to previous version"
```

### FASE 5: Monitoring & Alerts (Dia 9-10)

#### Status Checks & Notifications:

```yaml
status_checks:
  - name: "Lint (ESLint)"
    required: true
    
  - name: "Tests (Jest)"
    required: true
    
  - name: "Build"
    required: true
    
  - name: "Security Scan"
    required: true
    
  - name: "Code Coverage"
    required: true
    minimum: 80%

alerts:
  slack:
    - event: "build_failed"
      channel: "#dev-alerts"
    - event: "deployment_failed"
      channel: "#dev-alerts"
    - event: "security_issue"
      channel: "#security-alerts"
```

---

## 📋 Checklist de Implementação

### Semana 1
- [ ] Criar template workflow padrão
- [ ] Validar syntax do template
- [ ] Deploy em staging primeiro
- [ ] Test execution e validação

### Semana 2
- [ ] Implementar em VetBooking
- [ ] Implementar em PetSkin
- [ ] Implementar em LaConelli
- [ ] Implementar em ClubFlow
- [ ] Configurar Dependabot em todos

### Semana 3
- [ ] Setup auto-deploy to staging
- [ ] Setup auto-deploy to production
- [ ] Test rollback procedures
- [ ] Configure alerts e notifications

---

## 🔗 Repositórios Afetados

- ✅ Bridge-tecnologia-e-consultoria/vetbooking
- ✅ Bridge-tecnologia-e-consultoria/petskin
- ✅ Bridge-tecnologia-e-consultoria/laconelli
- ✅ Bridge-tecnologia-e-consultoria/clubflow
- ✅ Bridge-tecnologia-e-consultoria/lideranca-tech

---

**Status:** 🟡 PENDING EXECUTION  
**Responsável:** Dr. PIPELINE  
**Próxima Atualização:** 2026-07-05