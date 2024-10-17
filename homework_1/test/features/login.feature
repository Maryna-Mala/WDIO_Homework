Feature: Trello Valid Login

Scenario: Login with valid credentials for free account
    Given I am at Trello home page for valid login
    When I choose to log in with my free account
    When I enter valid email for valid login
    When I enter valid password
    Then my workspace page is opened 

Scenario: Login with existent account and invalid password
    Given I am at Trello home page
    When I choose to Log in existent account
    When I enter valid email
    When I enter invalid password
    Then I see error message regarding incorrect email or password
