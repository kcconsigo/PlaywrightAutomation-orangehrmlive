@E2Etesting @Regressiontesting

Feature: Verify that Admin add pim users
        As an Admin user, I want to add pim users on this page
Scenario: Admin adds PIM Employees with valid details
    Given Admin on the login page using valid credentials
    When Admin enters my "<username>" and "<password>" valid credentials
    And Admin clicks the Login button with valid credentials
    And Admin clicks PIM Tab menu and Pim Tab menu
    And Admin enters Employees details on the fields
    Then Pim Employee details are added

     