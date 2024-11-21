const { expect } = require('@playwright/test');

exports.LeavePage = class LeavePage{
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page){
    this.page = page;

    this.leavemenu = page.locator(".oxd-main-menu-item");
    this.leaveEntitlementTab = page.locator('//span[normalize-space()="Entitlements"]');
    this.leaveEmpEntitlement = page.locator('li');
    this.leaveEmpNameEntitlement = page.locator('.oxd-autocomplete-text-input');
    this.leaveEmpNameSearchBtton = page.locator('//button[normalize-space()="Search"]');
    this.leaveEnttitlementsAdd = page.locator('//button[normalize-space()="Add"]');
  }

  async leaveTab(){
    await this.leavemenu.nth(2).click();
  }

  async entitlementTab(firstName){
    await this.leaveEntitlementTab.click();
    await this.leaveEmpEntitlement.filter({ hasText: /^Employee Entitlements$/ }).click();
    await this.page.waitForTimeout(2000);
    // await expect(async () =>{
    //     await this.leaveEmpEntitlement.click({timeout: 2000});
    // }).toPass();
    await this.leaveEmpNameEntitlement.getByPlaceholder('Type for hints...').fill(firstName);
    await this.leaveEmpNameSearchBtton.click();
    await this.leaveEnttitlementsAdd.click();

    
  }

}