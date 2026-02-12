import { test, expect } from '@playwright/test';

await context.traicing.start({ snapshots: true,snapshots: true });
await context.traicing.stop({ path:'test_trace.zip' });

let context;
let page;
test.beforeAll(async({ page }) => {
  context = browser.newContext();
  context.traicing.star({screenshots: true,snapshots: true});
  page = await context.newPage();
});

test.afterAll(async({ page }) => {
  await context.traicing.stop({path:'test-trace.zip'})
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button24"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});