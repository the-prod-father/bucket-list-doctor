const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  try {
  const page = await browser.newPage();

  // Navigate to homepage
  await page.goto('http://localhost:8000');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Take full page screenshot
  await page.screenshot({ path: 'homepage-screenshot.png', fullPage: true });

  console.log('✅ Screenshot saved to homepage-screenshot.png');

  // Get the page title and some text content
  const title = await page.title();
  console.log('Page title:', title);

  // Check what's in the hero section
  const heroText = await page.locator('h1').first().textContent();
  console.log('Hero H1:', heroText);

  // Get all h2 headings
  const h2s = await page.locator('h2').allTextContents();
  console.log('H2 headings:', h2s);
  } catch (error) {
    console.error('Error occurred during screenshot process:', error);
    throw error;
  } finally {
    // Always close the browser, even if an error occurred
  await browser.close();
  }
})();
