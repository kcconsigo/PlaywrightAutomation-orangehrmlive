const { test, expect } = require('@playwright/test');
const { AdminPage } = require('../pages/adminPage.page');
const { LoginPage } = require('../pages/loginpage.page');
const dataSetCreateAdmin = JSON.parse(JSON.stringify(require("../utils/adminTestData.json")));

for(const createdata of dataSetCreateAdmin)
{
        test(`Create Admin ${createdata.EmpName},${createdata.UserName},${createdata.Password},${createdata.ConfirmPassword}`, async ({ page })=> {

                const loginpage = new LoginPage(page);
                await page.waitForTimeout(2000);
                await loginpage.gotoLoginPage()
                await loginpage.loginCreds(createdata.username,createdata.password)
                await loginpage.clickLoginBtn()
                await page.waitForTimeout(5000);
        
                const adminpage = new AdminPage(page);
                await adminpage.AdminTab();
                await adminpage.selectUserRoleAndUserStatus();
                await adminpage.createNewEmployeeInputTextFields(createdata.EmpName, createdata.UserName,createdata.Password,createdata.ConfirmPassword);
                await adminpage.clickSavebtn();
                await adminpage.verifyAdmin(createdata.UserName)
        
        })
}

       
