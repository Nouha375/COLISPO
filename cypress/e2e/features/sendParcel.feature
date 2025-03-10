Feature: Send Parcel
Background: User can login 
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard
    
 
  Scenario: send parcel
    When I click on the send parcel tab
    And I enter the parcel details
    And I submit the parcel details
    Then I should see a popup message confirming the parcel has been sent