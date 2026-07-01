# Branch Protection & Security Policy

## Overview

This document outlines the branch protection rules and security policies for all repositories in the Bridge Tecnologia organization.

## Main Branch Protection Rules

### Required Status Checks
- ✅ Lint & Format checks
- ✅ Unit tests (80%+ coverage)
- ✅ Integration tests
- ✅ Security scanning (CodeQL)
- ✅ Build validation

### Required Reviews
- Minimum 1 approval required
- Code owner review required
- Stale reviews dismissed
- No changes requested pending

### Branch Requirements
- Require branches to be up to date before merging
- Require conversation resolution
- No force pushes allowed
- No branch deletions allowed

### Admin Exceptions
- Leads team can override rules if needed
- Must document reason in PR
- Requires approval from 2+ leads

## Secrets Management

### Allowed Secrets
1. **API Keys** - ANTHROPIC_API_KEY, OPENAI_API_KEY, GITHUB_TOKEN
2. **Infrastructure** - DATABASE_URL, REDIS_URL, SUPABASE_URL
3. **Deployment** - VERCEL_TOKEN, DOCKER_USERNAME, DOCKER_PASSWORD

### Rules
- ✅ Store ALL secrets in GitHub Secrets (never in code)
- ✅ Rotate secrets every 90 days
- ✅ Use descriptive names without abbreviations
- ✅ Document which projects use which secrets
- ✅ Audit access logs monthly
- ❌ Never commit secrets to repository
- ❌ Never log secrets in CI/CD output
- ❌ Never share secrets in Slack/Discord

### Rotation Schedule
- Q1 (Jan-Mar): API keys
- Q2 (Apr-Jun): Infrastructure secrets
- Q3 (Jul-Sep): Deployment tokens
- Q4 (Oct-Dec): All remaining secrets

## Security Best Practices

### Code Reviews
- All code requires peer review before merge
- CODEOWNERS must approve relevant files
- Focus on security, performance, and maintainability

### Testing Requirements
- Unit test coverage minimum: 80%
- Integration tests for critical paths
- E2E tests for user-facing features
- No regressions allowed

### Security Scanning
- CodeQL scanning enabled
- Secret scanning enabled
- SAST analysis on all PRs
- Dependency vulnerability scanning weekly

### Access Control
- Leads: Admin access
- Frontend/Backend/DevOps: Maintain access
- QA/Product: Push access
- Default: Pull access only

## Compliance

### GDPR
- Encryption at rest (AES-256)
- Encryption in transit (TLS 1.3)
- Data retention policy: 90 days
- User deletion procedures in place

### LGPD (Brazil)
- Explicit consent for data collection
- Right to access, correct, delete
- Data breach notification (72 hours)
- Privacy policy published

## Incident Response

### Security Incident Protocol
1. Immediate: Create private security issue
2. Within 1 hour: Notify leads
3. Within 24 hours: Assess impact
4. Within 72 hours: Notify affected users (if LGPD required)
5. Resolution: Fix and deploy to all branches

### Escalation
- 🔴 Critical: Immediate escalation to leads
- 🟠 High: Within 1 hour
- 🟡 Medium: Within 24 hours
- 🟢 Low: Next business day

## Audit & Compliance

- Monthly security audit
- Quarterly compliance review
- Annual third-party security assessment
- Continuous monitoring and logging

## Questions or Violations?

Contact: @antonioneto19 or open a security issue
