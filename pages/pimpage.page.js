const { expect } = require('@playwright/test');
const { time } = require('console');
exports.PIMPage = class PIMPage{
    /**
* @param {import('@playwright/test').Page} page
*/

    constructor(page) {
        this.page = page;
        this.pimmenu = page.locator('.oxd-main-menu-item');
        this.addempTab = page.locator('.oxd-topbar-body-nav-tab');
        this.addEmpFirstName = page.locator('.orangehrm-firstname');
        this.addEmpMidName = page.locator('.orangehrm-middlename');
        this.addEmpLastName = page.locator('.orangehrm-lastname');
        this.addEmpID = page.locator('.oxd-input');
        this.addEmpbuttonSave = page.locator('//button[normalize-space()="Save"]');
        this.successfullyMsg = page.locator('.oxd-toast.oxd-toast--success');
        this.listEmpNavTab = page.locator('.oxd-topbar-body-nav-tab');
        this.listEmployeeName = page.locator('.oxd-autocomplete-text-input');
        this.listEmpSearchbtn = page.locator('//button[normalize-space()="Search"]');
        this.editEmplistbtn = page.locator('(//button[@type="button"])[6]');
        this.emplistdisplayTable = page.locator('.oxd-table.orangehrm-employee-list');
    }

    async PIMTab(){
        await this.pimmenu.nth(1).click();
        await this.page.waitForTimeout(2000);
    }
    async addEmpTab(){
        await this.addempTab.nth(2).click();
        await this.page.waitForTimeout(2000);
    }
    async addEmployeeDetails(firstName, middleName, lastName, empID ){
        await this.addEmpFirstName.fill(firstName);
        await this.page.waitForTimeout(1000);
        await this.addEmpMidName.fill(middleName);
        await this.page.waitForTimeout(1000);
        await this.addEmpLastName.fill(lastName);
        await this.page.waitForTimeout(1000);
        await this.addEmpID.nth(4).fill(empID);
        await this.page.waitForTimeout(2000);
        await this.addEmpbuttonSave.click({timeout: 1000});
        console.log(await this.successfullyMsg.textContent());
        await this.page.waitForTimeout(5000);
    }
    async editemployeeListlandingTab(firstName){
        await this.pimmenu.nth(1).click();
        await this.page.waitForTimeout(2000);
        await this.listEmpNavTab.nth(1).click();
        await this.page.getByPlaceholder('Type for hints...').nth(0).fill(firstName);
        await this.page.getByRole('option', { name: firstName }).click();
        await this.page.waitForTimeout(2000);
        await this.listEmpSearchbtn.click();
        await this.page.waitForTimeout(2000);

    }
    async employeeListdisplayTable(){
    //     const rowList = this.emplistdisplayTable;
    //    for(const emplist of rowList){
    //     console.log(await this.emplist.allTextContents());
    //    }
    await this.emplistdisplayTable.textContent()
       await this.page.waitForTimeout(2000);

    }
    async editemployeeList(){
        await this.editEmplistbtn.click({timeout: 1000});
        await this.page.waitForTimeout(3000);
    }



}