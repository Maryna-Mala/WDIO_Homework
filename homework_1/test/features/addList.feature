Feature: Add List in Trello Account

Scenario: Add list to existent board
    Given I am at the board page for my free account
    When I choose to Add a list
    And I set the list title
    And I confirm list creation
    Then list is added