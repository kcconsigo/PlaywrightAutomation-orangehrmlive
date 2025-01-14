const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage.page');
const { LeavePage } = require('../pages/leavepage.page');

const dataLeave = JSON.parse(JSON.stringify(require("../utils/leaveTestData.json")));
const leaveType = JSON.parse(JSON.stringify(require("../utils/leaveTypeTestData.json")));


test('Should allow an Employee to have leave entitlements', async({ page }) => {

        const loginpage = new LoginPage(page);
        await page.waitForTimeout(2000);
        await loginpage.gotoLoginPage();
        await loginpage.loginCreds(dataLeave.username, dataLeave.password);
        await loginpage.clickLoginBtn();
        await page.waitForTimeout(3000);

        const leavepage = new LeavePage(page);
        await page.waitForTimeout(2000);
        await leavepage.leaveTab();
        await page.waitForTimeout(3000);
        await leavepage.entitlementTab(dataLeave.firstName);
        await leavepage.addleaveentitlmentPage(dataLeave.firstName);
})