import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageModels/login';

test('POM test @POMTEST', async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigateTopage();

    await login.login('standard_user', 'secret_sauce');

});