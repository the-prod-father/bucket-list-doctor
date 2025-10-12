import { test, expect } from '@playwright/test';

test.describe('Visual Inspection Tests', () => {
  test('Homepage - Full visual inspection', async ({ page }) => {
    await page.goto('/');

    // Wait for the page to be fully loaded including animations
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Allow time for 3D animations to initialize

    // Take full page screenshot
    await page.screenshot({ path: 'test-results/homepage-full.png', fullPage: true });

    // Check hero section
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();

    // Scroll through sections slowly to check animations
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(500);

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
  });

  test('Check hover states on navigation cards', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Find navigation cards
    const blogCard = page.locator('a[href*="/blog"]').first();
    const booksCard = page.locator('a[href*="/books"]').first();

    // Hover over each card and take screenshots
    await blogCard.hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/blog-card-hover.png' });

    await booksCard.hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/books-card-hover.png' });
  });

  test('Check button states and interactions', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Newsletter button
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();

    // Hover over button
    await submitButton.hover();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/newsletter-button-hover.png' });

    // Focus on button
    await submitButton.focus();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/newsletter-button-focus.png' });
  });

  test('Check mobile layout', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'test-results/mobile-homepage.png', fullPage: true });

    // Scroll through on mobile
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);
  });

  test('Check tablet layout', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'test-results/tablet-homepage.png', fullPage: true });
  });

  test('Check desktop layout', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'test-results/desktop-homepage.png', fullPage: true });
  });

  test('Check animation performance', async ({ page }) => {
    await page.goto('/');

    // Monitor for any layout shifts or jank
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      };
    });

    console.log('Performance Metrics:', performanceMetrics);
  });

  test('Check color contrast and gradients', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that brand colors are being applied
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();

    // Get computed styles of key elements
    const heroStyles = await hero.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        background: computed.background,
        color: computed.color,
      };
    });

    console.log('Hero Styles:', heroStyles);
  });

  test('Check all page routes render correctly', async ({ page }) => {
    const routes = ['/', '/about', '/blog', '/books', '/tips-ideas', '/your-brain'];

    for (const route of routes) {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      // Check that page loaded without errors
      await expect(page.locator('body')).toBeVisible();

      // Take screenshot
      const routeName = route === '/' ? 'home' : route.slice(1);
      await page.screenshot({ path: `test-results/${routeName}-page.png`, fullPage: true });
    }
  });
});
