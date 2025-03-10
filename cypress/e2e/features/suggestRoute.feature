Feature: Suggest Route
Background: User can login 
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard
  Scenario: Propose a route
    When I click on the propose route tab
    And I enter details
    Then I should be redirected to search ad
