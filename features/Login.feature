@E2Etesting @Regressiontesting
@ValidLogin
Feature: Verify Login page using valid credentials and invalid credentials
        As an Admin user
        I want to login to the page using valid credentials and invalid credentials
Background:
  Scenario Outline: User logins in Page using valid credentials
    Given I am on the login page using valid credentials
    When I enter my "<username>" and "<password>" valid credentials
    And I click the Login button with valid credentials
    Then I should be logged in

  Examples:
    | username | password |
    | Admin    | admin123 |

@InvalidLogin  
Scenario Outline: User logins in Page using invalid credentials
Given I am on the login page using invalid credentials
When I enter my "<usernameInvalid>" and "<passwordInvalid>" invalid credentials
And I click the Login button with invalid credentials
Then I should not be login and should see "Invalid credentials" error message

  Examples:
    | usernameInvalid | passwordInvalid | 
    | Admin#$(*@#     | *&@$#admin123   |