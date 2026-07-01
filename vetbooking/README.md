# VetBooking
## Plataforma de Agendamento Veterinário

**Stack:** FastAPI + Next.js 15 + PostgreSQL + Redis + Kubernetes

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker
- PostgreSQL 15+
- Redis 7+

### Development

```bash
# Clone
git clone https://github.com/Bridge-tecnologia-e-consultoria/vetbooking.git
cd vetbooking

# Install
npm install
pip install -r requirements.txt

# Setup
cp .env.example .env.local

# Run
npm run dev
```

## 📋 Features

- ✅ Agendamento de consultas
- ✅ Gestão de pacientes (pets)
- ✅ Calendário integrado
- ✅ Notificações
- ✅ Multi-tenant support

## 🧪 Testing

```bash
# Unit tests
npm test

# With coverage (80%+ required)
npm test -- --coverage

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## 📦 CI/CD

### Workflows
- `ci-cd.yml` - Lint, test, build, deploy
- `security.yml` - CodeQL scanning
- `coverage.yml` - Code coverage enforcement

### Branch Protection
- `main`: Production - requires 1+ approval + tests
- `develop`: Staging - auto-deploy

## 🚢 Deployment

### Staging
```bash
git push origin develop
# Automatically deploys to staging
```

### Production
```bash
git push origin main
# Automatically deploys to production (after all checks pass)
```

## 📚 Documentation

- [CONTRIBUTING.md](.github/CONTRIBUTING.md)
- [SECURITY.md](SECURITY.md)
- [ARCHITECTURE.md](docs/ARCHITECTURE.md)

## 🤝 Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md)

---

*VetBooking - Bridge Tecnologia e Consultoria*
