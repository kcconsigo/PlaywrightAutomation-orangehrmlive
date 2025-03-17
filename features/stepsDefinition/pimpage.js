const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginpage.page');
const { PIMPage } = require('../../pages/pimpage.page');
const playwright = require('@playwright/test');

Given('Admin on the login page using valid credentials', {timeout: 30*5000}, async function () {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.loginpage = new LoginPage(page);
    this.pimpage = new PIMPage(page)
    await this.loginpage.gotoLoginPage();
    await this.pimpage.PIMTab();
  });

  When('Admin enters my {string} and {string} valid credentials', async function (username, password) {
    await this.loginpage.userLoginCreds(username, password);
  });

  When('Admin clicks the Login button with valid credentials', async function () {
    await this.loginpage.clickLoginBtn();
  });

  When('Admin clicks PIM Tab menu and Pim Tab menu', async function () {
    await this.pimpage.PIMTab();
    await this.pimpage.addEmpTab();
  });

  When('Admin enters Employees details on the fields', async  function (firstName, middleName, lastName, empID) {
    await this.pimpage.addEmployeeDetails(firstName, middleName, lastName, empID);
    await this.pimpage.employeeListlandingTab(firstName);
    return firstName;
  });
  
  Then('Pim Employee details are added', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });