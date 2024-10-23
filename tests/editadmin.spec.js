const { test, expect } = require('@playwright/test');
const { EditAdminPage } = require('../pages/editadminpage.page');
const { LoginPage } = require('../pages/loginpage.page');

const dataSetEditDeleteAdmin = JSON.parse(JSON.stringify(require("../utils/editadmininfoTestData.json")));

test.describe('User configures Admin Information ', async () => {
    for(const dataEditAdmin of dataSetEditDeleteAdmin)
        {
        test(`should allow to Edit and Delete Admin ${dataEditAdmin.EditEmpName},${dataEditAdmin.EditUserName},${dataEditAdmin.EditPassword},${dataEditAdmin.EditConfirmPassword}`, {tag: '@EndtoEndTesting'}, async ({ page })=> {

        const editadmininfo = new EditAdminPage(page);
        await editadmininfo.adminpageDashboard();
        await page.waitForTimeout(2000);
        await editadmininfo.systemuserFilter();
        await editadmininfo.recordsfoundList();
        await editadmininfo.edituserInfoPage('Ronaldo Valdez Gibbs');
        await editadmininfo.deleteuserInfo();
    
            // await pimpage.closeBrowser();
        });
    }
    
})