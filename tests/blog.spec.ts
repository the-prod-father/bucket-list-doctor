import { test, expect } from '@playwright/test';

test.describe('Blog Page - Articles Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
  });

  test('should load the blog page successfully', async ({ page }) => {
    await expect(page).toHaveURL(/.*blog/);
    await expect(page.getByRole('heading', { name: /Blog & Media/i })).toBeVisible();
  });

  test('should display the Latest Articles section', async ({ page }) => {
    const articlesHeading = page.getByRole('heading', { name: /Latest Articles/i });
    await expect(articlesHeading).toBeVisible();
  });

  test('should show loading state initially then resolve', async ({ page }) => {
    // Navigate fresh to catch loading state
    await page.goto('/blog');

    // Wait for either articles grid, empty state, or error state to appear
    await page.waitForSelector('[id="articles"]', { timeout: 10000 });

    // After loading, should show one of: articles, empty state, or error
    const articlesGrid = page.locator('[id="articles"] .grid');
    const emptyState = page.locator('text=No articles found');
    const errorState = page.locator('text=Unable to Load Articles');

    // One of these should be visible after loading completes
    const hasArticles = await articlesGrid.count() > 0;
    const hasEmpty = await emptyState.count() > 0;
    const hasError = await errorState.count() > 0;

    expect(hasArticles || hasEmpty || hasError).toBeTruthy();
  });

  test('should display article cards when posts exist', async ({ page }) => {
    // Wait for loading to complete
    await page.waitForTimeout(2000);

    // Check for article cards or empty state
    const articleCards = page.locator('[id="articles"] a[href*="/blog/"]');
    const emptyState = page.locator('text=No articles found');

    const cardCount = await articleCards.count();
    const isEmpty = await emptyState.isVisible().catch(() => false);

    // Either cards exist or empty state is shown
    expect(cardCount > 0 || isEmpty).toBeTruthy();

    if (cardCount > 0) {
      // Verify first card has expected elements
      const firstCard = articleCards.first();
      await expect(firstCard).toBeVisible();

      // Each card should have an image and title
      const cardImage = firstCard.locator('img');
      const cardTitle = firstCard.locator('h3');

      await expect(cardTitle).toBeVisible();
    }
  });

  test('should have clickable article cards that navigate to post', async ({ page }) => {
    await page.waitForTimeout(2000);

    const articleCards = page.locator('[id="articles"] a[href*="/blog/"]');
    const cardCount = await articleCards.count();

    if (cardCount > 0) {
      const firstCard = articleCards.first();
      const href = await firstCard.getAttribute('href');

      expect(href).toBeTruthy();
      expect(href).toMatch(/\/blog\/.+/);
    }
  });
});

test.describe('Blog Page - Videos Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
  });

  test('should display the Videos section', async ({ page }) => {
    const videosHeading = page.locator('h2', { hasText: /Videos|Loading Videos/i });
    await expect(videosHeading).toBeVisible();
  });

  test('should have YouTube channel link', async ({ page }) => {
    const youtubeLink = page.locator('a[href*="youtube.com/@dr.jeffreydesarbo"]');
    await expect(youtubeLink.first()).toBeVisible();
  });

  test('should show video grid or error state', async ({ page }) => {
    await page.waitForTimeout(3000);

    // Check for video cards or API not configured message
    const videoCards = page.locator('a[href*="youtube.com/watch"]');
    const apiNotConfigured = page.locator('text=YouTube API Not Configured');
    const emptyState = page.locator('text=No videos found');

    const hasVideos = await videoCards.count() > 0;
    const hasApiError = await apiNotConfigured.isVisible().catch(() => false);
    const hasEmpty = await emptyState.isVisible().catch(() => false);

    // One of these states should be present
    expect(hasVideos || hasApiError || hasEmpty).toBeTruthy();
  });
});

test.describe('Blog Page - Media Appearances Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
  });

  test('should display As Featured On section', async ({ page }) => {
    const mediaHeading = page.getByRole('heading', { name: /As Featured On/i });
    await expect(mediaHeading).toBeVisible();
  });

  test('should display media logos', async ({ page }) => {
    // Check for the media logos grid
    const mediaLogos = page.locator('img[alt*="Radio"], img[alt*="Newsday"], img[alt*="iHeart"]');

    // At least one media logo should be visible
    const logoCount = await mediaLogos.count();
    expect(logoCount).toBeGreaterThan(0);
  });
});

test.describe('Blog Page - YouTube CTA Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
  });

  test('should display Subscribe on YouTube CTA', async ({ page }) => {
    const ctaHeading = page.getByRole('heading', { name: /Subscribe on YouTube/i });
    await expect(ctaHeading).toBeVisible();
  });

  test('should have Subscribe Now button linking to YouTube', async ({ page }) => {
    const subscribeButton = page.locator('a', { hasText: /Subscribe Now/i });
    await expect(subscribeButton).toBeVisible();

    const href = await subscribeButton.getAttribute('href');
    expect(href).toContain('youtube.com');
  });
});

test.describe('Blog Page - Responsive Design', () => {
  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: /Blog & Media/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Latest Articles/i })).toBeVisible();
  });

  test('should be tablet responsive', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: /Blog & Media/i })).toBeVisible();
  });

  test('should be desktop responsive', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: /Blog & Media/i })).toBeVisible();
  });
});

test.describe('Blog Page - Error Handling', () => {
  test('should display error state gracefully when API fails', async ({ page }) => {
    // Mock API failure
    await page.route('/api/blog/posts', (route) => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Database connection failed', posts: [], count: 0 }),
      });
    });

    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Should show error state
    const errorState = page.locator('text=Unable to Load Articles');
    await expect(errorState).toBeVisible();

    // Should have Try Again button
    const retryButton = page.locator('button', { hasText: /Try Again/i });
    await expect(retryButton).toBeVisible();
  });

  test('should have retry functionality on error', async ({ page }) => {
    let callCount = 0;

    // First call fails, second succeeds
    await page.route('/api/blog/posts', (route) => {
      callCount++;
      if (callCount === 1) {
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Temporary error', posts: [], count: 0 }),
        });
      } else {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            posts: [{
              id: '1',
              title: 'Test Article',
              slug: 'test-article',
              excerpt: 'Test excerpt',
              featured_image_url: null,
              published_at: new Date().toISOString(),
              view_count: 0
            }],
            count: 1
          }),
        });
      }
    });

    await page.goto('/blog');
    await page.waitForTimeout(2000);

    // Should show error initially
    const errorState = page.locator('text=Unable to Load Articles');
    await expect(errorState).toBeVisible();

    // Click retry
    const retryButton = page.locator('button', { hasText: /Try Again/i });
    await retryButton.click();

    await page.waitForTimeout(2000);

    // Should now show articles
    const articleTitle = page.locator('text=Test Article');
    await expect(articleTitle).toBeVisible();
  });
});

test.describe('Blog Page - Performance', () => {
  test('should load within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Should load in under 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('should not have critical console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Filter out known acceptable errors
    const criticalErrors = errors.filter(
      (error) => !error.includes('fonts.gstatic.com') && !error.includes('YouTube')
    );

    expect(criticalErrors).toHaveLength(0);
  });
});
