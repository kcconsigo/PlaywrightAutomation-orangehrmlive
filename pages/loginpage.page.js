const { expect } = require('@playwright/test');
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
        this.logout_drpdown = page.locator('//span[@class="oxd-userdropdown-tab"]');
        this.logout_btn = page.locator('//a[normalize-space()="Logout"]');
        this.err_msg = page.getByText('Invalid credentials');
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
            await this.page.waitForTimeout(3000);
        
    }
    async validateInvalidMessage()
    {
            console.log(await this.err_msg.textContent());

    }
    async clickUserDropdown(){
        await this.logout_drpdown.click();
        await this.page.waitForTimeout(2000)
      }
    async clicklogoutBtn(){
            await this.logout_btn.click();
    }

    // enterUsername(){

    // }
    // enterPassword(){

    // }
    // clickLogin(){

    // }

}