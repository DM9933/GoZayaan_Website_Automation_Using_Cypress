Feature: One Way Ticket Booking

  Background:
    Given Open Browser and Visit Website
    When the user clicks on the "Sign In" button
    Then the user enters email "daberjun.mojumder@gmail.com"
    And the user enters password "Vasker.30@"
    And user clicks on the "Sign In" button


Scenario: User select the "Cheapest" option to book a Ticket

    Given user should see the Gozayann FlightPage
    When the user clicks the From location and selects "Dhaka, Bangladesh"
    And the user types "Dhaka" in the From location input
    And the user clicks the To location box
    And the user types "Cox's Bazar" in the To location input
    And I click on the Journey Date field
    And I select "24" as the journey date
    Then I click the Search button
    Then I select the "Cheapest" option to sort flights
    And I select a flight from the results
    And I select "New Traveler" from the traveler dropdown
    And I click on the title "MR."
    And I enter "John" as the first name of the first traveler
    And I enter "Johnson" as the last name of the first traveler
    And I type "Bangladesh" into the nationality field and press Enter
    And I type a random email for the first traveler
    And I type a random Bangladeshi phone number for the first traveler
    And I click on the Continue button
    Then I click on the Confirm Booking button


Scenario: User selects Fastest option to book a Ticket

    Given user should see the Gozayann FlightPage
    When the user clicks the From location and selects "Dhaka, Bangladesh"
    And the user types "Dhaka" in the From location input
    And the user clicks the To location box
    And the user types "Cox's Bazar" in the To location input
    And I click on the Journey Date field
    And I select "24" as the journey date
    Then I click the Search button
    Then I select the Fastest option to sort flights
    And I select a flight from the results
    And I select "New Traveler" from the traveler dropdown
    And I click on the title "MR."
    And I enter "John" as the first name of the first traveler
    And I enter "Johnson" as the last name of the first traveler
    And I type "Bangladesh" into the nationality field and press Enter
    And I type a random email for the first traveler
    And I type a random Bangladeshi phone number for the first traveler
    And I click on the Continue button
    Then I click on the Confirm Booking button


