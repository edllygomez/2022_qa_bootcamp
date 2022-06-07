/// <reference types="cypress" />

export class ShippingAddressComponent {
  firstName = () => cy.get("#shipping_first_name");
  lastName = () => cy.get("#shipping_last_name");
  companyName = () => cy.get("#shipping_company");
  country = () => cy.get("#select2-shipping_country-container");
  streetAddress1 = () => cy.get("#shipping_address_1");
  streetAddress2 = () => cy.get("#shipping_address_2");
  town = () => cy.get("#shipping_city");
  state = () => cy.get("#shipping_state");
  zip = () => cy.get("#shipping_postcode");
  orderComments = () => cy.get("#order_comments");
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
    this.orderComments().clear();
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
    this.orderComments().type("I love GAP !" + random);
  }

  selectCountry(countryName) {
    this.country().select(countryName);
  }

  selectState(stateName) {
    this.country().select(stateName);
  }
}
