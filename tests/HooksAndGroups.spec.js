import { test, expect } from '@playwright/test';
test.describe('All my tests', () => {
    test.beforeEach('login ', async ({ page }) => {
        //navigation
        await page.goto('https://www.saucedemo.com/');

        //login
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

    });

    test.afterEach(async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        await page.getByText('Swag Labs').click();
    });

    test('homepage / add to cart @addtocart', async ({ page }) => {
        //homepage
        await page.locator('[data-test="title"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    });

});


