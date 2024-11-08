const { expect } = require('@playwright/test');
const { text } = require('stream/consumers');

exports.AdminPage = class AdminPage{
       /**
   * @param {import('@playwright/test').Page} page
   */
constructor(page){
    this.page = page;
    
    
    this.adminmenu = page.locator(".oxd-main-menu-item");
    this.empAddButton = page.locator('.oxd-button');
    this.userRoleSelectOptions = page.locator('.oxd-select-text');
    this.userRoleField = page.getByRole('option', { name: 'Admin' });
    this.userStatus = page.locator('.oxd-select-text');
    this.userStatusField = page.getByRole('option', { name: 'Enabled' });
    this.userEmpName = page.locator('.oxd-autocomplete-text-input');
    this.userEmpNameSelect = page.locator('.oxd-autocomplete-dropdown');
    this.username = page.locator('.oxd-input.oxd-input');
    this.password = page.locator('.oxd-input.oxd-input');
    this.comfirmPassword = page.locator('.oxd-input.oxd-input');
    this.submitBtbnSave = page.locator('//button[@type="submit"]');
    this.successfullyMsg = page.getByText('SuccessSuccessfully Saved×');
    this.adminList = page.locator('.oxd-table-body');
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
    this.userDeleteDialogbox = page.locator('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.oxd-dialog-sheet');
    this.userDeleteDialogbtn = page.locator('//button[normalize-space()="Yes, Delete"]');
    this.successfullyDeletedUser = page.getByText('SuccessSuccessfully Deleted×');
    this.NorecordsFound = page.getByText('InfoNo Records Found×');

  }
  async AdminTab(){
    await this.adminmenu.nth(0).click();
    await this.empAddButton.nth(2).click();
    await this.page.waitForTimeout(500);
    
  }
  async selectUserRoleAndUserStatus(){
    
    await this.userRoleSelectOptions.nth(0).click();
    await this.page.waitForTimeout(3000);
    // await this.userRoleSelectOptions.nth(0).getByText('Admin').click();
    //await this.userRoleField.nth(0).selectOption({label: 'Admin'});
    await this.userRoleField.click();
    await this.page.waitForTimeout(3000);
    await this.userStatus.nth(1).click();
    await this.userStatusField.click();
    await this.page.waitForTimeout(3000);
  }

  async createNewEmployeeInputTextFields(EmpName, UserName, Password, ConfirmPassword){
    // await this.userStatus.nth(1).selectOption('Enabled');
    await this.userEmpName.getByPlaceholder('Type for hints...').fill(EmpName);
    const EmpNameSelectList = this.userEmpNameSelect.getByRole('option', { name: EmpName });
    for(let i = 0; i < EmpNameSelectList; ++i )
    {
      text = await thisuserEmpNameSelect.nth(i).textContent();
      if(text === EmpNameSelectList)
      {
        await this.EmpNameSelectList.nth(i).click();
        break;
      }
    }
    await this.userEmpNameSelect.getByRole('option', { name: EmpName }).click();
    await this.username.nth(1).fill(UserName);
    await this.password.nth(2).fill(Password);
    await this.comfirmPassword.nth(3).fill(ConfirmPassword);
  }
  async clickSavebtn(){
    await this.submitBtbnSave.nth(0).click();
    console.log(await this.successfullyMsg.textContent());

    await this.page.waitForTimeout(1000);
  }

  async loadingSpinner(){
    await expect(async () => {
      const webLoadingSpinnerLocator = this.page.locator('.oxd-loading-spinner-container');
      await webLoadingSpinnerLocator.waitFor();

    }).toPass();


            // Waits for either confirmation dialog or load spinner.
// await page.locator(
//     `//span[contains(@class, 'spinner__loading')]|//div[@id='confirmation']`
// ).waitFor();
  }

  async checkAdmin(UserName){
    const checkAdmin = this.page.locator('//div[@role="row"]//ancestor::div[contains(text(),'+UserName+')]');
    for(let i = 0; i<await checkAdmin.count(); i++)
    {
      const rowadminName = await checkAdmin.nth(i).textContent();
      if(checkAdmin.isVisible(rowadminName))
      {
        await checkAdmin.nth(i).locator('button').click();
        break;
      }
    }

  }

  

  // async verifyAdmin(UserName){
  //   // await page.getByTestId('scrolling-container').hover();
  //   // await page.mouse.wheel(5, 10);
  //   // await this.scolldownAdminInfo.scrollIntoViewIfNeeded();
  //   const adminNameList = this.adminList;
  //   const adminAddedNameList = this.page.locator('//div[contains(text(),'+UserName+')]');
  //   for(let i = 0; i<await adminNameList.count(); i++)
  //   {
  //     const rowadminName = await adminNameList.nth(i).textContent();
  //     if(adminAddedNameList.isVisible(rowadminName))
  //     {
  //         await adminNameList.nth(i).locator("button").click();
  //         break;
  //     }
  //   }
  //   await this.page.waitForTimeout(5000);
  // }

}