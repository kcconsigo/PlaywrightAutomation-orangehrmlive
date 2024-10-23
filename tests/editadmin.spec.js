const { test, expect } = require('@playwright/test');
const { EditAdminPage } = require('../pages/editadminpage.page');
const { LoginPage } = require('../pages/loginpage.page');

const dataSetEditDeleteAdmin = JSON.parse(JSON.stringify(require("../utils/editadmininfoTestData.json")));

test.describe('Navigates to Admin dashboard', async () => {
    for(const dataEditAdmin of dataSetEditDeleteAdmin)
        {
            test(`should allow to Edit and Delete Admin ${createdata.EditEmpName},${dataEditAdmin.firstName},${dataEditAdmin.lastName},${dataEditAdmin.lastName},${dataEditAdmin.empID}`, {tag: '@EndtoEndTesting'}, async ({ page })=> {

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