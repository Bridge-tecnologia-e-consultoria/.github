# SLACK Integration

## Status
- Tasks 13-15 implemented in repository on 2026-07-03.
- GitHub Actions workflows for Slack notifications are available in `.github/workflows`.

## Webhooks (GitHub Secrets)
Configure these secrets in **Bridge-tecnologia-e-consultoria/.github**:

1. `SLACK_WEBHOOK_MAIN` → channel `#dev-notifications`
2. `SLACK_WEBHOOK_ALERTS` → channel `#alerts`
3. `SLACK_WEBHOOK_DEPLOYMENTS` → channel `#deployments`
4. `SLACK_WEBHOOK_BUILD` → channel `#builds`

### Webhook test (manual)
```bash
curl -X POST -H 'Content-type: application/json' \
  --data '{"text":"✅ Test message from GitHub integration"}' \
  "$SLACK_WEBHOOK_MAIN"
```

Repeat for all four webhook URLs.

## Slack channels and quick guide

### Comunicação geral
- `#dev-notifications` (public): PR/Issue notifications
- `#alerts` (public): critical system/security alerts
- `#deployments` (public): deployment status and rollbacks
- `#builds` (public): CI/CD build status and failures

### Times
- `#frontend` (public): frontend updates
- `#backend` (public): backend updates
- `#devops` (public): infrastructure/operations updates
- `#qa` (public): test planning and QA updates
- `#product` (public): roadmap and product discussion

### Operacional
- `#standup` (public): daily standup summary
- `#weekly-report` (public): weekly metrics report
- `#security-alerts` (private): security incidents and vulnerabilities
- `#incidents` (private): critical incidents and outages

## GitHub Actions workflows

1. `slack-notifications.yml`
   - Trigger: `pull_request`, `issues`, `workflow_dispatch`
   - Destination: `SLACK_WEBHOOK_MAIN`
   - Content: title, author, URL, status/action

2. `slack-deployment.yml`
   - Trigger: `workflow_run` (deployment-like workflows), `workflow_dispatch`
   - Destination: `SLACK_WEBHOOK_DEPLOYMENTS`
   - Content: workflow name, status, commit, branch, run URL

3. `slack-build-alerts.yml`
   - Trigger: `workflow_run` on failure, `workflow_dispatch`
   - Destination: `SLACK_WEBHOOK_BUILD` and `SLACK_WEBHOOK_ALERTS`
   - Content: failed workflow details + `@devops` mention

4. `slack-daily-standup.yml`
   - Trigger: `0 9 * * 1-5` + `workflow_dispatch`
   - Destination: `SLACK_WEBHOOK_MAIN` (for standup summary)
   - Content: previous-day PR/Issue/commit summary from GitHub API

5. `slack-weekly-report.yml`
   - Trigger: `0 17 * * 5` + `workflow_dispatch`
   - Destination: `SLACK_WEBHOOK_MAIN` (for weekly report)
   - Content: weekly PR merged, issues closed, commits summary

## Troubleshooting

1. **`secret is not set` error**
   - Confirm all `SLACK_WEBHOOK_*` secrets are present in repository settings.

2. **No Slack message received**
   - Validate webhook URL directly with `curl`.
   - Confirm app permissions in Slack (`Incoming Webhooks` enabled).

3. **Workflow not triggering**
   - Use `workflow_dispatch` for immediate manual validation.
   - Check `Actions` run logs for event filters and conditions.

4. **GitHub API metrics step fails**
   - Confirm default `GITHUB_TOKEN` permissions are available.
   - Re-run job from Actions tab after permissions update.
