Feature: Trello Add New Board

Scenario: Add new board from workspace page
    Given I’m at workspace page for my free account
    When I choose to  create new board
    And I set board title in widget with board details displayed 
    And I confirm creation
    Then new board is displayed
    And the board has given name