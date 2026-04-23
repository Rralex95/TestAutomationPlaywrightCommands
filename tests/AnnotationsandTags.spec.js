import { test, expect } from '@playwright/test';

test.skip('Skip this test @skip', async ({ page }) => {
  //Esta prueba se saltará debido a la etiqueta @skip
});

test('Not yet ready @fail', async ({ page }) => {
  test.fail();
});

test.fixme('Not yet ready @fixme', async ({ page }) => {

});

test('Slow test ready @slow', async ({ page }) => {
    test.slow();
});

test.only('Only this test will be executed @only', async ({ page }) => {
});



