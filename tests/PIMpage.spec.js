const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/loginpage.page');
const { PIMPage } = require('../pages/pimpage.page');
const dataSetPIM = JSON.parse(JSON.stringify(require("../utils/PIMTestData.json")));


test.describe('Navigates to PIM page', {tag:'@Regressiontesting'}, async () => {
    for(const dataPIM of dataSetPIM)
        {
            test(`should allow to Add Employee ${dataPIM.firstName},${dataPIM.lastName},${dataPIM.lastName},${dataPIM.empID}`, async ({ page })=> {

            const loginpage = new LoginPage(page);
            await page.waitForTimeout(2000);
            await loginpage.gotoLoginPage();
            await loginpage.loginCreds(dataPIM.username, dataPIM.password);
            await loginpage.clickLoginBtn();
            await page.waitForTimeout(3000);
    
    
            const pimpage = new PIMPage(page);
            await pimpage.PIMTab();
            await pimpage.addEmpTab();
            await pimpage.addEmployeeDetails(dataPIM.firstName, dataPIM.middleName, dataPIM.lastName, dataPIM.empID);
            await pimpage.employeeListlandingTab(dataPIM.firstName);
            await loginpage.clickUserDropdown();
            await loginpage.clicklogoutBtn();
            // // await pimpage.employeeListdisplayTable();
            // await pimpage.editemployeeList();
    
            // await pimpage.closeBrowser();
        });
    }
    
})
