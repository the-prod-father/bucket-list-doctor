import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Bucket List Doctor/);
  });

  test('should display the animated brain hero', async ({ page }) => {
    // Wait for the hero section to be visible
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();

    // Check for the main heading
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('should display all navigation cards', async ({ page }) => {
    // Check for the four main navigation cards
    const cards = page.locator('a[href*="/blog"], a[href*="/books"], a[href*="/tips-ideas"], a[href*="/your-brain"]');
    await expect(cards).toHaveCount(4);

    // Verify each card is visible and clickable
    for (let i = 0; i < 4; i++) {
      await expect(cards.nth(i)).toBeVisible();
    }
  });

  test('should display the value proposition section', async ({ page }) => {
    // Look for key neuroscience benefits
    await expect(page.getByText(/neuroplasticity/i)).toBeVisible();
  });

  test('should display the book showcase', async ({ page }) => {
    // Check for book title
    await expect(page.getByText(/Neuroscience of a Bucket List/i)).toBeVisible();

    // Check for Amazon link
    const amazonLink = page.locator('a[href*="amazon.com"]');
    await expect(amazonLink).toBeVisible();
  });

  test('should display the about section', async ({ page }) => {
    // Check for Dr. DeSarbo's name
    await expect(page.getByText(/Dr\. Jeffrey DeSarbo/i)).toBeVisible();
  });

  test('should display cross-site navigation', async ({ page }) => {
    // Check for links to other sites
    const crossSiteLinks = page.locator('a[href*="doctordesarbo.com"], a[href*="ed180.com"]');
    await expect(crossSiteLinks.first()).toBeVisible();
  });

  test('should display newsletter signup', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check for newsletter form
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();

    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
  });
});

test.describe('Newsletter Signup Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  });

  test('should accept email input', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');
  });

  test('should validate email format', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    const submitButton = page.locator('button[type="submit"]');

    // Try invalid email
    await emailInput.fill('invalid-email');
    await submitButton.click();

    // HTML5 validation should prevent submission
    const validationMessage = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validationMessage).toBeTruthy();
  });

  test('should show feedback after submission', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    const submitButton = page.locator('button[type="submit"]');

    await emailInput.fill('test@example.com');
    await submitButton.click();

    // Wait for success/error message
    await page.waitForTimeout(1000);

    // Should show some feedback (either success or "not configured" message)
    const feedback = page.locator('text=/thank you|subscribed|configured/i');
    await expect(feedback).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Navigation', () => {
  test('should have a functional header navigation', async ({ page }) => {
    await page.goto('/');

    // Check for nav items
    const aboutLink = page.locator('nav a[href*="/about"]');
    const blogLink = page.locator('nav a[href*="/blog"]');

    await expect(aboutLink).toBeVisible();
    await expect(blogLink).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href*="/about"]');
    await expect(page).toHaveURL(/.*about/);
  });

  test('should navigate to Blog page', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href*="/blog"]');
    await expect(page).toHaveURL(/.*blog/);
  });

  test('should navigate to Books page', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href*="/books"]');
    await expect(page).toHaveURL(/.*books/);
  });

  test('should navigate to Tips & Ideas page', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href*="/tips-ideas"]');
    await expect(page).toHaveURL(/.*tips-ideas/);
  });

  test('should navigate to Your Brain page', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href*="/your-brain"]');
    await expect(page).toHaveURL(/.*your-brain/);
  });
});

test.describe('Social Media Links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  });

  test('should have Facebook link', async ({ page }) => {
    const fbLink = page.locator('a[href*="facebook.com/bucketlistdoctor"]');
    await expect(fbLink).toBeVisible();
  });

  test('should have Instagram link', async ({ page }) => {
    const igLink = page.locator('a[href*="instagram.com/bucketlistdoctor"]');
    await expect(igLink).toBeVisible();
  });

  test('should have LinkedIn link', async ({ page }) => {
    const liLink = page.locator('a[href*="linkedin.com/in/drdesarbo"]');
    await expect(liLink).toBeVisible();
  });

  test('social links should open in new tab', async ({ page }) => {
    const socialLinks = page.locator('a[href*="facebook.com"], a[href*="instagram.com"], a[href*="linkedin.com"]');

    for (let i = 0; i < await socialLinks.count(); i++) {
      const target = await socialLinks.nth(i).getAttribute('target');
      expect(target).toBe('_blank');

      const rel = await socialLinks.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
    }
  });
});

test.describe('Responsive Design', () => {
  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');

    // Hero should be visible
    await expect(page.locator('h1').first()).toBeVisible();

    // Navigation cards should stack vertically on mobile
    const cards = page.locator('a[href*="/blog"], a[href*="/books"]');
    await expect(cards.first()).toBeVisible();
  });

  test('should be tablet responsive', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad
    await page.goto('/');

    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('should be desktop responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop
    await page.goto('/');

    await expect(page.locator('h1').first()).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1); // Should have exactly one H1
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy(); // All images should have alt text
    }
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');

    // Tab through the page
    await page.keyboard.press('Tab');

    // Check that focus is visible
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
  });

  test('should have proper link labels', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const text = await links.nth(i).textContent();
      const ariaLabel = await links.nth(i).getAttribute('aria-label');

      // Each link should have either text content or aria-label
      expect(text || ariaLabel).toBeTruthy();
    }
  });
});

test.describe('Performance', () => {
  test('should load within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Should load in under 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should not have console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForTimeout(3000); // Wait for any lazy-loaded content

    // Filter out known acceptable errors (like font loading)
    const criticalErrors = errors.filter(
      (error) => !error.includes('fonts.gstatic.com')
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
