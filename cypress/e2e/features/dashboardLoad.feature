Feature: load dashboard elements

  Scenario: load dashboard
    When I login to the application
    Then I should navigate to the dashboard page
    And  I should see the dashboard elements
