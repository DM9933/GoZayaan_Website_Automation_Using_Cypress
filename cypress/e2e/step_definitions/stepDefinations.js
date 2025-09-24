// cypress/e2e/step_definitions/loginSteps.js

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../locators/locators";
import allData from "../../data/data";
import "cypress-file-upload";

Cypress.config("defaultCommandTimeout", 60000);

const locator = new locatorsPage();
const data = new allData(); // ✅ using instance

Given("Open Browser and Visit Website", () => {
  cy.visit(data.orange_url);
});

When("the user clicks on the {string} button", (buttonText) => {
  cy.wait(data.twoSecond); // optional wait for page load
  cy.contains("button", buttonText).should("be.visible").click({ force: true });
});

When('the user enters email {string}', (email) => {
  cy.get('input#email').type(email, { force: true });
});

Then('the user enters password {string}', (password) => {
  cy.get(locator.passwordField).type(password, { force: true });
});

Then('user clicks on the "Sign In" button', () => {
  cy.get(locator.signInButton).click({ force: true });
});


Given('user should see the Gozayann FlightPage', () => {
  cy.get('.search-type-tab.active')
    .should('be.visible')
    .within(() => {
      cy.get('.product').should('contain.text', 'Flight').click(); // click added if needed
    });
});



When('the user clicks the From location and selects {string}', (cityName) => {
  cy.get(locator.fromLocationBox).click({ force: true });
  cy.get(locator.fromAirportOption)
    .contains(cityName)
    .scrollIntoView()
    .click({ force: true });
});

Then('the user types {string} in the From location input', (city) => {
  cy.get(locator.fromInputField).should('have.length', 1).type(city, { force: true });
});

Then('the user clicks the To location box', () => {
  cy.get(locator.toLocationBox).click({ force: true });
});

Then('the user types {string} in the To location input', (city) => {
  cy.get(locator.toInputField).should('have.length', 1).type(city, { force: true });
});


Then('I click on the Journey Date field', () => {
  cy.get(locator.journeyDateBox).click();
});

Then('I select {string} as the journey date', (day) => {
  cy.get(locator.datepickerDay(day)).click({ force: true });
});

Then('I click the Search button', () => {
  cy.get(locator.searchButton).click();
});

Then('I select the {string} option to sort flights', (sortType) => {
  if (sortType === 'Cheapest') {
    cy.get(locator.cheapestRadioButton).check({ force: true });
  }
});

Then('I select the Fastest option to sort flights', () => {
  cy.get(locator.fastestRadioButton).check({ force: true });
});

Then('I select a flight from the results', () => {
  cy.get(locator.selectFlightButton).first().click({ force: true });
});

Then('I select {string} from the traveler dropdown', (travelerOption) => {
  cy.get(locator.travelerInput).scrollIntoView().click().type(`${travelerOption}{enter}`);
});

Then('I click on the title {string}', (title) => {
  if (title === 'MR.') {
    cy.get('div.input-content span.text').contains(title).click(); // Clicks on the 'MR.' title
  }
});

Then('I enter {string} as the first name of the first traveler', (firstName) => {
  cy.get(locator.firstTravelerFirstName).clear().scrollIntoView().type(firstName);
});

Then('I enter {string} as the last name of the first traveler', (lastName) => {
  cy.get(locator.lastTravelerLastName).clear().scrollIntoView().type(lastName);
});

Then('I type {string} into the nationality field and press Enter', (nationality) => {
  cy.get(locator.nationalityInput).scrollIntoView() // Get the nationality input field
    .first()                      // If multiple match, take the first one
    .clear()
    .type(`${nationality}{enter}`); // Type nationality and press Enter
});

Then('I type a random email for the first traveler', () => {
  const randomEmail = `user${Date.now()}@example.com`;
  cy.get(locator.firstTravelerEmail).clear().type(randomEmail);
});

Then('I type a random Bangladeshi phone number for the first traveler', () => {
  const randomPhone = `1${Math.floor(300000000 + Math.random() * 699999999)}`; // Random 1XXXXXXXXX number
  
  cy.get(locator.firstTravelerPhone)
    .scrollIntoView()
    .clear()
    .type(randomPhone);
});

Then('I click on the Continue button', () => {
  cy.get('#bookButton')    // Select the button by its id
    .scrollIntoView()       // First scroll into view to make sure it's visible
    .should('be.visible')   // Ensure it's visible
    .click();               // Then click
});

Then('I click on the Confirm Booking button', () => {
  cy.get('button.btn.btn-secondary')    // Select the button by class
    .contains('Confirm Booking')         // Make sure it’s the correct button by text
    .scrollIntoView()                    // Scroll it into view
    .should('be.visible')                // Ensure it's visible
    .click();                            // Then click it
});

When('User click on the Hotel tab', () => {
  cy.get(locator.hotelTab).click();
});

Then('User selects Cox\'s Bazar as destination', () => {
  cy.get(locator.coxsBazarOption).click();
});

