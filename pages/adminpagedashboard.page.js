const { expect } = require('@playwright/test');

exports.AdminPageDashboard = class AdminPageDashboard{
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
        this.successfullyEditInfoMsg = page.locator('.oxd-toast.oxd-toast--success');
        this.scolldownInfo = page.locator('.orangehrm-container');
        this.userDeleteInfo = page.locator('.oxd-checkbox-wrapper');
        this.userDeleteDialogbox = page.locator('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.oxd-dialog-sheet');
        this.userDeletebtn = page.locator('//div[@class="orangehrm-container"]//button[1]');
        this.userDeleteDialogbox = page.locator('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.oxd-dialog-sheet');
        this.userDeleteDialogbtn = page.locator('//button[normalize-space()="Yes, Delete"]');
        this.successfullyDeletedUser = page.locator('.oxd-toast.oxd-toast--success');
        this.NorecordsFound = page.locator('.oxd-toast.oxd-toast--info');
        
    }

    async adminpageDashboard(){
        await this.adminmenu.nth(0).click();
        await this.page.waitForTimeout(2000);
    }

    async systemuserFilter(){
        await this.systemUser.nth(1).click();
        await this.systemUser.nth(1).fill('Ronaldo Valdez');
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
        await this.scolldownInfo.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
    }
    async deleteuserInfo(){
        await this.systemUser.nth(1).click();
        await this.systemUser.nth(1).fill('Ronaldo Valdez Gibbs');
        await this.systemUserSearchbtn.click();
        await this.recordCheckbox.nth(1).click();
        await this.userDeleteInfo.nth(1).click();
        await this.userDeletebtn.click();
        await this.page.waitForTimeout(5000);
        await this.userDeleteDialogbtn.click();
        console.log(await this.successfullyDeletedUser.textContent());
        console.log(await this.NorecordsFound.textContent());
        await this.page.waitForTimeout(2000);

    }

}