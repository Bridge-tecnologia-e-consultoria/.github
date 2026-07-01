# VetBooking - CI/CD & Setup

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker
- Git

### Development Setup

```bash
# Clone repository
git clone https://github.com/Bridge-tecnologia-e-consultoria/vetbooking.git
cd vetbooking

# Install dependencies
npm install
pip install -r requirements.txt

# Setup environment
cp .env.example .env.local

# Run development server
npm run dev
```

## 📋 Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 🔒 Security

Security is our priority. Please read [SECURITY.md](SECURITY.md) for vulnerability reporting.

## 📊 CI/CD Pipelines

### Automated Workflows
- **Lint & Format**: ESLint, Prettier
- **Tests**: Jest (JS), pytest (Python)
- **CodeQL**: Security scanning
- **Coverage**: 80%+ requirement
- **Build**: Production build verification
- **Deploy**: Automatic to staging (develop), production (main)

### Branch Protection
- `main`: Production branch - requires 1+ approval + status checks
- `develop`: Staging branch - requires tests passing

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test
npm test -- auth.test.js
```

## 📦 Deployment

### Staging (develop branch)
- Automatic deploy on push to develop
- URL: https://staging-vetbooking.example.com

### Production (main branch)
- Automatic deploy on push to main
- URL: https://vetbooking.example.com
- Requires all checks passing

## 📞 Support

For issues or questions, open a GitHub issue or contact the team.

---

*Last Updated: 2026-07-01*  
*Maintained by: Bridge Tecnologia*