const {Given, When, Then} = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginpage.page');
const { PIMPage } = require('../../pages/pimpage.page');
const playwright = require('@playwright/test');

Given('Admin on the login page using valid credentials', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('Admin enters my {string} and {string} valid credentials', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('Admin clicks the Login button with valid credentials', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('Admin clicks PIM Tab menu and Pim Tab menu', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('Admin enters Employees details on the fields', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  
  Then('Pim Employee details are added', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });