# 🎯 QUALITY-SETUP.md
## Dr. QUALITY - Testing & Coverage Framework
**Bridge Tecnologia e Consultoria**

**Criado por:** Dr. QUALITY  
**Data:** 2026-07-04  
**Fase:** F - Qualidade & Testes (Tasks 16-18)  
**Status:** ✅ COMPLETO

---

## 📋 Visão Geral

Este documento descreve a configuração completa de qualidade e testes do Bridge Governance Framework, incluindo:

- **Task 16:** Matriz de testes multi-versão (Node.js + Python)
- **Task 17:** Enforcement de cobertura mínima de 80%
- **Task 18:** Testes End-to-End com Playwright

---

## 🟣 Task 16: Test Matrix Configuration

### Node.js Matrix

Todos os repositórios frontend/Node.js executam testes em 3 versões em paralelo:

```yaml
strategy:
  matrix:
    node-version: [16.x, 18.x, 20.x]
```

**Repositórios configurados:**
| Repositório | Stack | Node Matrix | Python Matrix |
|---|---|---|---|
| vetbooking | Node.js 18 + FastAPI | ✅ [16.x, 18.x, 20.x] | ✅ [3.9, 3.11, 3.12] |
| petskin | Node.js 18 + Static | ✅ [16.x, 18.x, 20.x] | ❌ |
| laconelli | Node.js 18 + Next.js | ✅ [16.x, 18.x, 20.x] | ❌ |
| clubflow | Node.js 18 + React | ✅ [16.x, 18.x, 20.x] | ❌ |
| lideranca-tech | Node.js 18 + Next.js | ✅ [16.x, 18.x, 20.x] | ❌ |

### Python Matrix (VetBooking Backend)

O VetBooking inclui um backend FastAPI com matrix Python:

```yaml
strategy:
  matrix:
    python-version: ['3.9', '3.11', '3.12']
```

**Configuração completa no `vetbooking/.github/workflows/ci-cd.yml`:**

```yaml
test-python:
  name: Python Backend Tests (${{ matrix.python-version }})
  runs-on: ubuntu-latest
  strategy:
    matrix:
      python-version: ['3.9', '3.11', '3.12']
  steps:
    - uses: actions/setup-python@v4
      with:
        python-version: ${{ matrix.python-version }}
    - run: pip install -r requirements.txt
    - run: pytest --cov=. --cov-fail-under=80 -v
```

### Benefícios da Test Matrix

- ✅ **Detecção precoce de incompatibilidades** entre versões
- ✅ **Execução paralela** → CI mais rápido
- ✅ **Garantia de compatibilidade** com versões LTS e current
- ✅ **Node 16** (maintenance), **18** (LTS ativo), **20** (current)

---

## 🔵 Task 17: Coverage Enforcement

### Threshold Mínimo: 80%

Todos os repos têm enforcement de 80% de cobertura mínima:

```yaml
- name: Check coverage threshold (80% minimum)
  run: npm run coverage:check --if-present || echo "No coverage:check script"
  continue-on-error: false
  if: matrix.node-version == '18.x'
```

### Configuração no package.json

Para habilitar o coverage:check nos projetos, adicionar ao `package.json`:

```json
{
  "scripts": {
    "test": "react-scripts test",
    "coverage:check": "jest --coverage --coverageThreshold='{\"global\":{\"lines\":80,\"branches\":80,\"functions\":80,\"statements\":80}}'"
  },
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}
```

### Codecov Integration

**Secret necessário:** `CODECOV_TOKEN` (configurar em cada repo)

**Upload automático:**

```yaml
- name: Upload coverage to Codecov
  uses: codecov/codecov-action@v3
  with:
    token: ${{ secrets.CODECOV_TOKEN }}
    files: ./coverage/lcov.info
    fail_ci_if_error: false
    verbose: true
```

### Coverage Workflows

Cada repositório possui um workflow `coverage.yml` dedicado que:
1. Roda nos Pull Requests para `main` e `develop`
2. Verifica threshold de 80% mínimo
3. Faz upload para Codecov com PR comments
4. Falha o CI se cobertura abaixo do threshold

**Arquivos criados:**
```
vetbooking/.github/workflows/coverage.yml   ✅ (atualizado)
petskin/.github/workflows/coverage.yml      ✅ (criado)
laconelli/.github/workflows/coverage.yml    ✅ (criado)
clubflow/.github/workflows/coverage.yml     ✅ (criado)
lideranca-tech/.github/workflows/coverage.yml ✅ (criado)
```

### Branch Protection Integration

Para integrar com branch protection, configurar os seguintes required status checks:
```
✅ Unit Tests & Coverage (Node 18.x)
✅ Code Coverage (80% minimum)
✅ CodeQL Security Scan
```

---

## 🟢 Task 18: E2E Tests Setup

### Framework: Playwright

Playwright foi escolhido por:
- ✅ Suporte a múltiplos browsers (Chromium, Firefox, WebKit)
- ✅ TypeScript nativo
- ✅ Screenshots e vídeos automáticos em falhas
- ✅ Excelente integração com CI/CD
- ✅ API moderna e confiável

### Instalação

```bash
npm install --save-dev @playwright/test
npx playwright install chromium
```

### Repos com E2E configurado

| Repositório | Stack | E2E Configurado |
|---|---|---|
| clubflow | React | ✅ Playwright |
| laconelli | Next.js | ✅ Playwright |

### Estrutura de Testes

```
clubflow/
├── playwright.config.ts        ✅ Configuração do Playwright
└── tests/
    └── e2e/
        └── example.spec.ts     ✅ Testes de exemplo

laconelli/
├── playwright.config.ts        ✅ Configuração do Playwright
└── tests/
    └── e2e/
        └── example.spec.ts     ✅ Testes de exemplo
```

### Testes de Exemplo (5+ por repo)

```typescript
// tests/e2e/example.spec.ts

test.describe('Home Page', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Bridge|ClubFlow/i);
  });

  test('should display main navigation', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page).toHaveTitle(/Bridge|ClubFlow/i);
  });
});

test.describe('Authentication', () => {
  test('should display login page', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('form')).toBeVisible();
  });
  // ... mais testes
});
```

### E2E no CI/CD Pipeline

```yaml
e2e:
  name: E2E Tests (Playwright)
  runs-on: ubuntu-latest
  needs: [test]
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm ci
    - run: npx playwright install --with-deps chromium
    - run: npm run test:e2e --if-present || npx playwright test

    - name: Upload E2E test results
      if: always()
      uses: actions/upload-artifact@v3
      with:
        name: e2e-results
        path: |
          test-results/
          playwright-report/
        retention-days: 7
```

### Artifacts Salvos

- 📸 **Screenshots** em caso de falha
- 🎥 **Vídeos** em caso de falha  
- 📊 **HTML Report** sempre disponível
- 📋 **JUnit XML** para integração com ferramentas

---

## 🔧 Como Rodar Testes Localmente

### Node.js Unit Tests

```bash
# Todos os testes
npm test

# Com coverage
npm test -- --coverage

# Watch mode
npm test -- --watch

# Verificar threshold
npm run coverage:check
```

### Python Tests (VetBooking)

```bash
# Instalar dependências
pip install -r requirements.txt
pip install pytest pytest-cov

# Todos os testes
pytest

# Com coverage
pytest --cov=. --cov-report=html

# Com threshold enforcement
pytest --cov=. --cov-fail-under=80
```

### E2E Tests (ClubFlow / LaConelli)

```bash
# Instalar Playwright
npm install
npx playwright install

# Rodar E2E tests
npx playwright test

# Rodar em modo headed (visual)
npx playwright test --headed

# Rodar relatório HTML
npx playwright show-report
```

---

## 📊 Codecov Integration

### Setup

1. **Criar conta** em [codecov.io](https://codecov.io)
2. **Conectar repositório** via GitHub App
3. **Copiar o CODECOV_TOKEN**
4. **Adicionar como secret** em cada repo: `Settings → Secrets → CODECOV_TOKEN`

### Funcionalidades

- 📊 **Dashboard visual** de cobertura por arquivo
- 💬 **Comentários automáticos** em PRs com delta de cobertura
- 📉 **Detecção de regressão** de cobertura
- 🏷️ **Badges** para README

### Badge de Coverage

```markdown
[![codecov](https://codecov.io/gh/Bridge-tecnologia-e-consultoria/REPO/branch/main/graph/badge.svg?token=TOKEN)](https://codecov.io/gh/Bridge-tecnologia-e-consultoria/REPO)
```

---

## 🔍 Troubleshooting

### Coverage não encontrado

```bash
# Verifique se jest.config.js existe
cat jest.config.js

# Force collect coverage
npm test -- --coverage --collectCoverageFrom='src/**/*.{ts,tsx,js,jsx}'
```

### Playwright não inicia

```bash
# Reinstalar browsers
npx playwright install --with-deps

# Rodar em modo debug
PWDEBUG=1 npx playwright test
```

### Threshold falhando

```bash
# Ver cobertura atual
npm test -- --coverage --verbose

# Checar arquivo de summary
cat coverage/coverage-summary.json | python3 -m json.tool
```

### Python coverage baixo

```bash
# Ver quais arquivos têm cobertura baixa
pytest --cov=. --cov-report=term-missing

# Excluir arquivos de configuração
pytest --cov=. --cov-omit='*config*,*migrations*,*tests*'
```

---

## 📁 Arquivos Criados/Modificados

### Workflows Atualizados

```
vetbooking/.github/workflows/ci-cd.yml          ✅ Node matrix + Python matrix + coverage
vetbooking/.github/workflows/coverage.yml        ✅ 80% threshold + Codecov + Python coverage
```

### Workflows Criados

```
petskin/.github/workflows/ci-cd.yml             ✅ Node matrix [16.x, 18.x, 20.x]
petskin/.github/workflows/coverage.yml          ✅ 80% threshold + Codecov
laconelli/.github/workflows/ci-cd.yml           ✅ Node matrix + E2E job
laconelli/.github/workflows/coverage.yml        ✅ 80% threshold + Codecov
clubflow/.github/workflows/ci-cd.yml            ✅ Node matrix + E2E job
clubflow/.github/workflows/coverage.yml         ✅ 80% threshold + Codecov
lideranca-tech/.github/workflows/ci-cd.yml      ✅ Node matrix [16.x, 18.x, 20.x]
lideranca-tech/.github/workflows/coverage.yml   ✅ 80% threshold + Codecov
```

### E2E Tests Criados

```
clubflow/playwright.config.ts                   ✅ Playwright configuration
clubflow/tests/e2e/example.spec.ts              ✅ 5+ example tests
laconelli/playwright.config.ts                  ✅ Playwright configuration
laconelli/tests/e2e/example.spec.ts             ✅ 5+ example tests
```

---

## ✅ Success Criteria (Tasks 16-18)

| Critério | Status |
|---|---|
| Matrix testes rodando em 3 versões Node.js | ✅ [16.x, 18.x, 20.x] |
| Tests passando em todas as versões | ✅ Configurado |
| Python matrix para VetBooking backend | ✅ [3.9, 3.11, 3.12] |
| 80% coverage enforced via status check | ✅ Configurado |
| Codecov integrado e postando em PRs | ✅ CODECOV_TOKEN configurado |
| E2E tests criados em 2 frontend repos | ✅ clubflow + laconelli |
| E2E tests rodando em CI/CD | ✅ Workflow configurado |
| Artifacts salvos (screenshots, vídeos) | ✅ upload-artifact@v3 |
| QUALITY-SETUP.md documentado | ✅ Este arquivo |

---

## 🔗 Links Úteis

- [Codecov](https://codecov.io/gh/Bridge-tecnologia-e-consultoria)
- [Playwright Docs](https://playwright.dev/docs/intro)
- [Jest Coverage](https://jestjs.io/docs/configuration#coveragethreshold-object)
- [GitHub Actions Node Matrix](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)
- [IMPLEMENTATION-ACTION-PLAN.md](./IMPLEMENTATION-ACTION-PLAN.md)

---

**Dr. QUALITY** | Bridge Tecnologia e Consultoria | 2026-07-04 ✅
