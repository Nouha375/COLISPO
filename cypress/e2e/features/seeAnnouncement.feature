Feature: see announcement

    Background:
    Scenario: User can login 
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard
    Scenario: See Announcement
        When I navigate to the announcement page
        Then I see the announcement

