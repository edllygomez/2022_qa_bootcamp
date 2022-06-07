/// <reference types="cypress" />

export class BillingAddressComponent {
  firstName = () => cy.get("#billing_first_name");
  lastName = () => cy.get("#billing_last_name");
  companyName = () => cy.get("#billing_company");
  country = () => cy.get("#select2-billing_country-container");
  streetAddress1 = () => cy.get("#billing_address_1");
  streetAddress2 = () => cy.get("#billing_address_2");
  town = () => cy.get("#billing_city");
  state = () => cy.get("#shipping_state");
  zip = () => cy.get("#billing_postcode");
  phone = () => cy.get("#billing_phone");
  email = () => cy.get("#billing_email");
  randomNumber = () => Math.floor(Math.random() * 1000);

  clearAll() {
    this.firstName().clear();
    this.lastName().clear();
    this.companyName().clear();
    // this.country().clear();//TODO
    this.streetAddress1().clear();
    this.streetAddress2().clear();
    this.town().clear();
    this.state().clear();
    this.zip().clear();
    this.phone().clear();
    this.email().clear();
  }

  //TODO Implement npm faker here
  changeBillingAddress() {
    const random = this.randomNumber();
    this.firstName().type("Eduardo" + random);
    this.lastName().type("Romaguera" + random);
    this.companyName().type("GAP" + random);
    this.streetAddress1().type("Wall Street" + random);
    this.streetAddress2().type("120 Wall Street Building APT 70" + random);
    this.town().type("Central" + random);
    this.state().type("New York" + random);
    this.zip().type("40702" + random);
    this.phone().type("506 84386541902" + random);
    this.email().type("email" + random + "@gap.com");
  }

  selectCountry(countryName) {
    this.country().select(countryName);
  }

  selectState(stateName) {
    this.country().select(stateName);
  }
}
