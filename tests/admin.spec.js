const { test, expect } = require('@playwright/test');
const { AdminPage } = require('../pages/adminpage.page');
const { LoginPage } = require('../pages/loginpage.page');
const { EditAdminPage } = require('../pages/editadminpage.page');
const dataSetCreateAdmin = JSON.parse(JSON.stringify(require("../utils/adminTestData.json")));
const dataSetRoleAndStatus = JSON.parse(JSON.stringify(require("../utils/adminroleandstatusTestData.json")));

test.describe('User Creates Admin ', {tag: '@Sanitytesting'}, async () => {
  for(const createdata of dataSetCreateAdmin)
       {
          test(`Create Admin ${createdata.EmpName},${createdata.UserName},${createdata.Password},${createdata.ConfirmPassword}`, async ({ page })=> {
                
             const loginpage = new LoginPage(page);
             await page.waitForTimeout(2000);
             await loginpage.gotoLoginPage();
             await loginpage.loginCreds(createdata.username,createdata.password);
             await loginpage.clickLoginBtn();
                        
             const adminpage = new AdminPage(page);
             await adminpage.AdminTab();
             await adminpage.selectUserRoleAndUserStatus();
             await adminpage.createNewEmployeeInputTextFields(createdata.EmpName, createdata.UserName,createdata.Password,createdata.ConfirmPassword);
             await adminpage.clickSavebtn();
             await adminpage.loadingSpinner();
             await adminpage.checkAdmin(UserName);
             await loginpage.clickUserDropdown();
             await loginpage.clicklogoutBtn();      
            })
      }
        
});


       

