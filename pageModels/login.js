exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;  
        this.pageUrl = 'https://www.saucedemo.com/';  
        this.usernameElem = page.locator('[data-test="username"]');
        this.passwordElem = page.locator('[data-test="password"]');
        this.loginButtonElem = page.locator('[data-test="login-button"]');
    }

    async navigateTopage() {
        await this.page.goto(this.pageUrl);
    }   

    async login(username, password) {
        await this.usernameElem.fill(username);
        await this.passwordElem.fill(password);
        await this.loginButtonElem.click();
    }
};        
