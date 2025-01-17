const playwright = require('@playwright/test');
const {After, Before, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/loginpage.page');
const path = require('path');

// Synchronous
Before(async function () {
 const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  this.loginpage = new LoginPage(page);
  await this.loginpage.gotoLoginPage();
});

BeforeStep({tags: "@foo"}, function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep( async function ({result}) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    await this.page.takeScreenshot({path: 'screenshot_dir.png'});
  }
});

After(function () {
  // Assuming this.driver is a selenium webdriver
  console.log("Last to execute");
  // return this.page.driver.quit();
});