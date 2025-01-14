const { expect } = require('@playwright/test');

exports.LeavePage = class LeavePage{
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page){
    this.page = page;

    this.leavemenu = page.locator(".oxd-main-menu-item");
    this.leaveEntitlementTab = page.locator('li');
    this.leaveEmpEntitlement = page.locator('li');
    this.leaveEmpNameEntitlement = page.locator('.oxd-autocomplete-text-input');
    this.leaveEmpNameEntitlementSelect = page.locator('.oxd-autocomplete-dropdown');
    this.leaveEmpNameSearchBtton = page.locator('//button[normalize-space()="Search"]');
    this.leaveEnttitlementsAdd = page.locator('//button[normalize-space()="Add"]');
    this.addLeaveEntitlement = page.locator('.oxd-autocomplete-text-input');
    this.addLeaveEntitlementSelect = page.locator('.oxd-autocomplete-dropdown');
    this.addLeaveTypeSelect = page.locator('div');
    this.addLeaveTypeSelectDropdown = page.locator('.oxd-select-dropdown');
    this.addleavePeriod = page.locator('div');
    this.addleavePeriodSelectDropdown = page.locator('.oxd-select-dropdown');
  }

  async leaveTab(){
    await this.leavemenu.nth(2).click();
  }

  async entitlementTab(firstName){
    await this.leaveEntitlementTab.filter({ hasText: 'Entitlements' }).click();
    await this.leaveEmpEntitlement.filter({ hasText: /^Employee Entitlements$/ }).click();
    await this.page.waitForTimeout(2000);
    // await expect(async () =>{
    //     await this.leaveEmpEntitlement.click({timeout: 2000});
    // }).toPass();
    await this.leaveEmpNameEntitlement.getByPlaceholder('Type for hints...').fill(firstName);
    await this.page.waitForTimeout(2000);
    await this.leaveEmpNameEntitlementSelect.getByRole('option', { name: firstName }).click();
    // await page.getByRole('option', { name: 'Andy Tak-wah lau' }).click();
    // const leaveEmpNames = this.leaveEmpNameEntitlementSelect.getByRole('option', { name: firstName });
    // for(let i = 0; i < leaveEmpNames; i++){
    //     if(await leaveEmpNames.toBeVisible()){
    //         await leaveEmpNames.nth(i).click();
    //     }
    // }
    await this.leaveEmpNameSearchBtton.click();
    await this.leaveEnttitlementsAdd.click();
  //   await expect(async () => {
  //     await this.leaveEnttitlementsAdd.click({timeout: 500});
      
  // }).toPass();

  }
  async addleaveentitlmentPage(firstName){
    await this.addLeaveEntitlement.getByPlaceholder('Type for hints...').fill(firstName);
    // await this.page.waitForTimeout(2000);
    await this.addLeaveEntitlementSelect.getByRole('option', { name: firstName }).click();
    await this.addLeaveTypeSelect.filter({ hasText: /^-- Select --$/ }).nth(2).click();
    await this.addLeaveTypeSelectDropdown.getByRole('option', { name: 'CAN - Vacation' }).click();
    await this.addleavePeriod.filter({ hasText: /^2025-01-01 - 2025-31-12$/ }).nth(2).click();
    await this.addleavePeriodSelectDropdown.getByText('-01-01 - 2024-31-12').click();
    await this.page.waitForTimeout(2000);
  }

}