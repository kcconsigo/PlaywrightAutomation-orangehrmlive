const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage.page');

//JSON->string->js object
const dataSetLiveDemo = JSON.parse(JSON.stringify(require("../utils/loginTestData.json")));
const negativeDataSet = JSON.parse(JSON.stringify(require("../utils/invalidloginTestData.json")));


test.beforeEach('Orange live demo app', async ({page}) => {


  await page.goto('https://www.google.com/');
});

// test.describe('navigate hr demo login', async ({ page })=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// })

test.describe('Allow user login page', {tag: '@e2eTesting'}, () => {
    test('should be able to login when user enters valid credentials', async ({ page })=>{


        const loginpage = new LoginPage(page);
        await page.waitForTimeout(2000);
        await loginpage.gotoLoginPage()
        await loginpage.loginCreds(dataSetLiveDemo.username, dataSetLiveDemo.password)
        await loginpage.clickLoginBtn()
        await page.waitForTimeout(5000);
       
    });
    test('should not be able to login when user enters invalid credentials', async ({ page })=>{

      const invalidloginpage = new LoginPage(page);
      await page.waitForTimeout(2000);
      await invalidloginpage.gotoLoginPage()
      await invalidloginpage.loginCreds(negativeDataSet.usernameInvalid, negativeDataSet.passwordInvalid)
      await invalidloginpage.clickLoginBtn()
      await invalidloginpage.validateInvalidMessage()
      await page.waitForTimeout(5000);
      
  });
    
})
