// cypress/e2e/locators/locators.js

class locatorsPage {
  

  /******************************************
   *  Login locators  *
   *****************************************/
  emailField = 'input#email';
  passwordField = 'input#password';
  signInButton = '#submitBtn';


  /******************************************
 *  Location Selectors *
 *****************************************/
fromLocationBox = '.box.location.from';
fromAirportOption = '.airport .city-country'; // This selects all cities shown in the dropdown
fromInputField = '.location.from input[placeholder="Type to search"]';

toLocationBox = '.location.to';
toInputField = '.location.to input[placeholder="Type to search"]';

journeyDateBox = '.box.date.depart'; // or add `.active` if required
datepickerDay = (day) => `.calendar.left .day:not(.disabled):contains(${day})`;
doneButton = '.btn.picker-mb-btn.btn-secondary';


cheapestRadioButton =  'input[type="radio"][value="total_price"]';

fastestRadioButton = 'input[type="radio"][value="total_flight_time"]';

selectFlightButton = 'button.selection-btn';

travelerInput = 'input[placeholder="Select Traveler"]';

titleMr =  'div.input-content span.text';


firstTravelerFirstName = '#first-name-0';

lastTravelerLastName = '#last-name-0';

nationalityInput = 'input[placeholder="Select Nationality"]';

firstTravelerEmail = 'input#email-0';
firstTravelerPhone = 'input#phone-number-0';


searchButton = 'button.search-btn';

hotelTab = 'span.product:contains("Hotel")';

coxsBazarOption = 'div.value:contains("Cox\'s Bazar")';

}





export default locatorsPage;
