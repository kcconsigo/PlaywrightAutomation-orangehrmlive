const { expect } = require('@playwright/test');
// const { chromium } = require('@playwright/test');
const { Console } = require('console');

exports.LoginPage = class LoginPage{
   /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page;
        this.username_textbox = page.locator('input[placeholder=Username]');
        this.password_textbox = page.locator('input[placeholder=Password]');
        this.login_btn = page.locator('button[type=submit]');
    }


    async gotoLoginPage(){
        // const browser = await chromium.launch();
        // const page = await browser.newPage();
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const titlePage = await this.page.getByTitle('OrangeHRM');
        console.log(titlePage);
        //await this.browser.close();
    }
    
    async loginCreds(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        
    }
    async clickLoginBtn(){
        await this.login_btn.click();
    }

    // enterUsername(){

    // }
    // enterPassword(){

    // }
    // clickLogin(){

    // }

}