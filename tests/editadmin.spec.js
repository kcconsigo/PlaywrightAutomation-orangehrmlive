const { test, expect } = require('@playwright/test');
const { EditAdminPage } = require('../pages/editadminpage.page');
const { LoginPage } = require('../pages/loginpage.page');

const EditAdminData = JSON.parse(JSON.stringify(require("../utils/editadmininfoTestData.json")));

test.describe('User configures Admin Information ', async () => {
    for(const dataEditAdmin of EditAdminData)
        {
        test(`should allow to Edit and Delete Admin ${dataEditAdmin.EditEmpName},${dataEditAdmin.EditUserName},${dataEditAdmin.EditPassword},${dataEditAdmin.EditConfirmPassword}`, {tag: '@EndtoEndTesting'}, async ({ page })=> {
        
        const loginpage = new LoginPage(page);
        await page.waitForTimeout(2000);
        await loginpage.gotoLoginPage()
        await loginpage.loginCreds(dataEditAdmin.username,dataEditAdmin.password)
        await page.waitForTimeout(5000);    

        
        const editadmininfo = new EditAdminPage(page);
        await editadmininfo.adminpageDashboard();
        await page.waitForTimeout(2000);
        await editadmininfo.systemuserFilter(dataEditAdmin.EditUserName);
        await editadmininfo.recordsfoundList();
        await editadmininfo.edituserInfoPage(dataEditAdmin.EditUserName);
        await editadmininfo.deleteuserInfo(dataEditAdmin.EditUserName);
        await loginpage.clickUserDropdown();
        await loginpage.clicklogoutBtn();
    
            // await pimpage.closeBrowser();
        });
    }
    
})