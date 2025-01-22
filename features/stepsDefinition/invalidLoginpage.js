const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginpage.page');
const playwright = require('@playwright/test');

Given('I am on the login page using invalid credentials', {timeout: 100*1000}, async function () {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  this.invalidloginpage = new LoginPage(page);
  await this.invalidloginpage.gotoLoginPage();
  });

When('I enter my {string} and {string} invalid credentials', async function (usernameInvalid, invalidpassword) {
  await this.invalidloginpage.loginCreds(usernameInvalid, invalidpassword);
  });

When('I click the Login button with invalid credentials', async function () {
  await this.invalidloginpage.clickLoginBtn();
  });

Then('I should not be login and should see {string} error message', async function (string) {
  await this.invalidloginpage.validateInvalidMessage();
  });