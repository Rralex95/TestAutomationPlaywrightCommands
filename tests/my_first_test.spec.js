const{test,expect} = require ('@playwright/test')
const{hello,helloWorld} = require('./demo/hello')

test('my first test', async ({ page }) => {
await page.goto('https://google.com');
await expect(page).toHaveTitle('Google');

})

