Feature: Hotel Booking

  Background:
    Given Open Browser and Visit Website
    When the user clicks on the "Sign In" button
    Then the user enters email "daberjun.mojumder@gmail.com"
    And the user enters password "Vasker.30@"
    And user clicks on the "Sign In" button


Scenario: User Book a Hotel for Business Purpose
    When User click on the Hotel tab 
    Then User selects Cox\'s Bazar as destination