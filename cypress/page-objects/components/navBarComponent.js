/// <reference types="cypress" />

export class NavBar {
  cart = () => cy.get("#site-header-cart > li > .cart-contents");
  cartAmount = () =>
    cy.get("#site-header-cart > li > a > .woocommerce-Price-amount");
  cartItemsCount = () => cy.get("#site-header-cart > li > a > .count");

  clickOnCart() {
    this.cart().click();
  }
}
