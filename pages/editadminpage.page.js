const { expect } = require('@playwright/test');

exports.EditAdminPage = class EditAdminPage{
    /**
* @param {import('@playwright/test').Page} page
*/

    constructor(page){
        this.page = page;
        this.adminmenu = page.locator(".oxd-main-menu-item");
        this.recordCheckbox = page.locator('.oxd-checkbox-wrapper');
        this.systemUser = page.locator('.oxd-input.oxd-input');
        this.systemUserSearchbtn = page.locator('//button[normalize-space()="Search"]');
        this.systemUserEditInfobtn = page.locator('//div[@class="orangehrm-paper-container"]//button[2]');
        this.userRoleSelectOptionsEditInfo = page.locator('.oxd-select-text');
        this.userRoleFieldEditInfo = page.locator('//div[@role="listbox"]//span[contains(text(),"ESS")]');
        this.usernameEditInfo = page.locator('.oxd-input.oxd-input');
        this.usernameEditInfoSavebtn = page.locator('//button[normalize-space()="Save"]');
        this.successfullyEditInfoMsg = page.getByText('SuccessSuccessfully Updated×');
        this.scolldownInfo = page.locator('.orangehrm-container');
        this.userDeleteInfo = page.locator('.oxd-checkbox-wrapper');
        this.userDeleteDialogbox = page.locator('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.oxd-dialog-sheet');
        this.userDeletebtn = page.locator('//div[@class="orangehrm-container"]//button[1]');
        this.userDeleteDialogbtn = page.locator('//button[normalize-space()="Yes, Delete"]');
        this.successfullyDeletedUser = page.getByText('SuccessSuccessfully Deleted×');
        this.NorecordsFound = page.getByText('InfoNo Records Found×');
        
    }

    async adminpageDashboard(){
        await this.adminmenu.nth(0).click();
        await this.page.waitForTimeout(2000);
    }

    async systemuserFilter(EditUserName){
        await this.systemUser.nth(1).click();
        await this.systemUser.nth(1).fill(EditUserName);
        await this.systemUserSearchbtn.click();
    }

    async recordsfoundList(){
        await this.recordCheckbox.nth(1).click();
        await this.systemUserEditInfobtn.click();
    }
    async edituserInfoPage(EditUserName){
        await this.userRoleSelectOptionsEditInfo.nth(0).click();
        await this.userRoleFieldEditInfo.click();
        await this.usernameEditInfo.nth(1).fill(EditUserName);
        await this.usernameEditInfoSavebtn.click();
        console.log(await this.successfullyEditInfoMsg.textContent());
        await this.page.waitForTimeout(2000);
    }
    async deleteuserInfo(EditUserName){
        await this.systemUser.nth(1).click();
        await this.systemUser.nth(1).fill(EditUserName);
        await this.systemUserSearchbtn.click();
        await this.recordCheckbox.nth(1).click();
        await this.userDeleteInfo.nth(1).click();
        await this.userDeletebtn.click();
        await this.userDeleteDialogbox.waitFor();
        await this.userDeleteDialogbtn.click();
        // Waits for either confirmation dialog or load spinner.
// await page.locator(
//     `//span[contains(@class, 'spinner__loading')]|//div[@id='confirmation']`
// ).waitFor();
        console.log(await expect(this.successfullyDeletedUser).toBeVisible());
        console.log(await expect(this.NorecordsFound).toBeVisible());

    }

}