Feature: Edit Trello Profile

Scenario: Edit bio in profile name
    Given I am logged in with valid credentials
    When I am at my profile page "Profile and visibility" tab
    When I edit the bio in my profile name
    Then the bio should be updated