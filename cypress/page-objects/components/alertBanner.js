/// <reference types="cypress" />

export class AlertBanner {
  message = () => cy.get(".woocommerce-message");
  link = () => cy.get(".woocommerce-message > a");

  clickOnLink() {
    this.link().click();
  }
}
