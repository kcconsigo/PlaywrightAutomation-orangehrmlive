const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage.page');
const { AdminPage } = require('../pages/adminpage.page');
const { EditAdminPage } = require('../pages/editadminpage.page');
//JSON->string->js object
const positveDataSet = JSON.parse(JSON.stringify(require("../utils/loginTestData.json")));
const negativeDataSet = JSON.parse(JSON.stringify(require("../utils/invalidloginTestData.json")));


test.beforeEach('Orange live demo app', async ({page}) => {


  await page.goto('https://www.google.com/');
});

// test.describe('navigate hr demo login', async ({ page })=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// })

test.describe('Allow user login page', {tag: '@E2ETesting'}, () => {
  test('navigate hr demo login', async ({ page })=>{


        const loginpage = new LoginPage(page);
        await page.waitForTimeout(2000);
        await loginpage.gotoLoginPage()
        await loginpage.loginCreds(positveDataSet.username, positveDataSet.password)
        await loginpage.clickLoginBtn()
        await page.waitForTimeout(5000);

        // const adminpage = new AdminPage(page);
        // await adminpage.AdminTab();
        // await adminpage.selectUserRoleAndUserStatus();
        // await adminpage.createNewEmployeeInputTextFields('Francesco Corrado', 'Ronaldo Valdez','D3vT3$t3rR0l305','D3vT3$t3rR0l305');
        // await adminpage.clickSavebtn();

        // const adminpagedashboard = new AdminPageDashboard(page);
        // await adminpagedashboard.adminpageDashboard();
        // await page.waitForTimeout(2000);
        // await adminpagedashboard.systemuserFilter();
        // await adminpagedashboard.recordsfoundList();
        // await adminpagedashboard.edituserInfoPage('Ronaldo Valdez Gibbs');
        // await adminpagedashboard.deleteuserInfo();

        
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
