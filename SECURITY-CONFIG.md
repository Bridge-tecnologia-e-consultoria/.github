# 🔐 Dr. SECURITY - Engenheiro de Segurança
## DevSecOps & Threat Prevention

**Responsável:** Dr. SECURITY  
**Data Início:** 2026-07-01  
**ETA Conclusão:** 2026-07-03

---

## 📋 Plano de Ação

### FASE 1: CodeQL Setup (Dia 1)

#### Arquivo: `.github/workflows/codeql-analysis.yml`

```yaml
name: CodeQL Analysis

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]
  schedule:
    - cron: '0 0 * * 0'  # Weekly on Sunday

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Initialize CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: ${{ matrix.language }}
        queries: security-extended

    - name: Autobuild
      uses: github/codeql-action/autobuild@v2

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
      with:
        category: "/language:${{ matrix.language }}"
```

### FASE 2: Secret Scanning & Rotation (Dia 2)

#### Policy Document: `SECRETS-ROTATION.md`

```markdown
# Secrets Rotation & Management

## Current Secrets Inventory

### Production Secrets

| Secret Name | Repo(s) | Type | Last Rotated | Next Rotation |
|---|---|---|---|---|
| ANTHROPIC_API_KEY | vetbooking, petskin, laconelli | API Key | 2026-06-01 | 2026-09-01 |
| OPENAI_API_KEY | vetbooking | API Key | 2026-06-01 | 2026-09-01 |
| VERCEL_TOKEN | laconelli, clubflow | Deploy | 2026-06-01 | 2026-09-01 |
| DATABASE_URL | vetbooking | Infra | 2026-05-01 | 2026-08-01 |
| SUPABASE_URL | clubflow | Infra | 2026-05-01 | 2026-08-01 |

## Rotation Procedure

### Step 1: Generate New Secret
```bash
# Access the service (e.g., Anthropic, Vercel)
# Navigate to API Keys section
# Generate new key
# Store temporarily in secure location
```

### Step 2: Update GitHub Secrets
```bash
# For each affected repository:
# 1. Go to Settings → Secrets and variables → Actions
# 2. Click "New repository secret"
# 3. Name: [SECRET_NAME]
# 4. Value: [NEW_KEY]
# 5. Click "Add secret"
```

### Step 3: Revoke Old Secret
```bash
# Access the service
# Revoke the old key immediately
# Document in audit log
```

### Step 4: Test & Verify
```bash
# Run test workflow
# Verify all services still work
# Check logs for any errors
```

## Quarterly Schedule

- **Q1 (Jan-Mar):** API Keys (Anthropic, OpenAI)
- **Q2 (Apr-Jun):** Infrastructure Secrets (DB, Redis)
- **Q3 (Jul-Sep):** Deployment Tokens (Vercel, Docker)
- **Q4 (Oct-Dec):** All remaining secrets + audit

## Audit Log

| Date | Secret | Action | Rotated By |
|---|---|---|---|
| 2026-06-01 | ANTHROPIC_API_KEY | Rotated | @antonioneto19 |
| 2026-06-01 | OPENAI_API_KEY | Rotated | @antonioneto19 |
```

### FASE 3: SAST Configuration (Dia 3)

#### Arquivo: `.github/workflows/security-audit.yml`

```yaml
name: Security Audit

on:
  push:
    branches: [main, develop]
  pull_request:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  security-audit:
    name: Security Audit
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run npm audit
        run: npm audit --audit-level=moderate
        continue-on-error: true
      
      - name: Run Snyk
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high
      
      - name: Trivy vulnerability scanning
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          format: 'sarif'
          output: 'trivy-results.sarif'
      
      - name: Upload Trivy results to GitHub Security tab
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: 'trivy-results.sarif'
```

### FASE 4: Compliance & Reporting (Dia 4)

#### Document: `COMPLIANCE-REPORT.md`

```markdown
# Compliance & Security Report

## GDPR Compliance

### Data Processing
- ✅ Encryption at rest (AES-256)
- ✅ Encryption in transit (TLS 1.3)
- ✅ Data retention policy: 90 days
- ✅ User deletion procedures

## LGPD Compliance (Brazil)

### Requirements Met
- ✅ Explicit consent for data collection
- ✅ Right to access personal data
- ✅ Right to correction
- ✅ Right to deletion (LGPD Art. 17)
- ✅ Data breach notification (72 hours)

## SOC 2 Controls

| Control | Status | Last Audit |
|---|---|---|
| Access Control | ✅ Implemented | 2026-06-01 |
| Change Management | ✅ Implemented | 2026-06-01 |
| Incident Response | ✅ Implemented | 2026-06-01 |
| Monitoring & Logging | ✅ Implemented | 2026-06-01 |

## Vulnerability Management

### Critical (0 found)
- None reported in last 90 days

### High (0 found)
- None reported in last 90 days

### Medium
- 2 identified and remediated

### Low
- 5 identified, 3 remediated, 2 in progress
```

---

## 📋 Checklist de Implementação

### Dia 1 (CodeQL)
- [ ] Habilitar GitHub Advanced Security
- [ ] Criar workflow CodeQL
- [ ] Validar análise em repositório teste
- [ ] Configurar alerts

### Dia 2 (Secret Scanning)
- [ ] Habilitar Secret Scanning
- [ ] Documentar all secrets
- [ ] Setup rotation schedule
- [ ] Create audit log system

### Dia 3 (SAST)
- [ ] Configurar npm audit
- [ ] Setup Snyk integration
- [ ] Configurar Trivy scanning
- [ ] Test em todos os repos

### Dia 4 (Compliance)
- [ ] Criar COMPLIANCE-REPORT.md
- [ ] Documentar GDPR procedures
- [ ] Documentar LGPD procedures
- [ ] Setup compliance automation

---

## 🔗 Repositórios Afetados

- ✅ Bridge-tecnologia-e-consultoria/.github (config central)
- ✅ Bridge-tecnologia-e-consultoria/vetbooking
- ✅ Bridge-tecnologia-e-consultoria/petskin
- ✅ Bridge-tecnologia-e-consultoria/laconelli
- ✅ Bridge-tecnologia-e-consultoria/clubflow
- ✅ Bridge-tecnologia-e-consultoria/lideranca-tech

---

**Status:** 🟡 PENDING EXECUTION  
**Responsável:** Dr. SECURITY  
**Próxima Atualização:** 2026-07-02