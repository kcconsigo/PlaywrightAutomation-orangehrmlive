@E2Etesting @Regressiontesting
Feature: Login page
        As a user 
        I want to login to the page using valid credentials
Background:
  Scenario: User logins in Page
    Given I am on the login page
    When I enter my "username" and "password"
    And I click the Login button
    Then I should be logged in
