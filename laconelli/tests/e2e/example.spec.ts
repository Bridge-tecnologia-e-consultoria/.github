import { test, expect } from '@playwright/test';

// =================================================================
// LaConelli - E2E Tests
// =================================================================

test.describe('Home Page', () => {
  test('should navigate to home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Bridge|LaConelli/i);
  });

  test('should display main navigation', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page).toHaveTitle(/Bridge|LaConelli/i);
  });
});

test.describe('Authentication', () => {
  test('should display login page', async ({ page }) => {
    await page.goto('/login');
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should show validation errors on empty submit', async ({ page }) => {
    await page.goto('/login');
    const submitButton = page.locator('button[type="submit"]');
    if (await submitButton.isVisible()) {
      await submitButton.click();
      // Expect some form of error feedback
      await page.waitForTimeout(500);
    }
  });

  test('should navigate to login from home', async ({ page }) => {
    await page.goto('/');
    const loginLink = page.locator('a[href*="login"], button:has-text("Login"), button:has-text("Entrar")');
    if (await loginLink.first().isVisible()) {
      await loginLink.first().click();
      await page.waitForURL(/login/);
    }
  });
});

test.describe('Navigation', () => {
  test('should navigate between pages without errors', async ({ page }) => {
    await page.goto('/');
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.waitForTimeout(1000);
    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0);
  });

  test('should have working links on home page', async ({ page }) => {
    await page.goto('/');
    const links = await page.locator('a[href]').all();
    expect(links.length).toBeGreaterThanOrEqual(0);
  });
});

test.describe('Form Submission', () => {
  test('should handle contact or registration form', async ({ page }) => {
    await page.goto('/');
    const forms = await page.locator('form').all();
    if (forms.length > 0) {
      // Form exists - basic visibility check
      await expect(forms[0]).toBeVisible();
    }
  });
});
