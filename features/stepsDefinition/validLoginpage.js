const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginpage.page');
const playwright = require('@playwright/test');

Given('I am on the login page using valid credentials', {timeout: 30*5000}, async function () {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  this.loginpage = new LoginPage(page);
  await this.loginpage.gotoLoginPage();
  });

When('I enter my {string} and {string} valid credentials', async function (username, password) {
  await this.loginpage.loginCreds(username, password);
  });

When('I click the Login button with valid credentials', async function () {
  await this.loginpage.clickLoginBtn();
  });

Then('I should be logged in', async function () {
  await this.loginpage.clickUserDropdown();
  await this.loginpage.clicklogoutBtn();
  });