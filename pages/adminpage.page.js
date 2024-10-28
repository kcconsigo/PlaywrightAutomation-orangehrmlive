const { expect } = require('@playwright/test');

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