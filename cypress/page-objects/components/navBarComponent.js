/// <reference types="cypress" />

export class NavBar {
  cart = () => cy.get("#site-header-cart > li > .cart-contents");
  cartAmount = () =>
    cy.get("#site-header-cart > li > a > span > .woocommerce-Price-amount");
  cartItemsCount = () => cy.get("#site-header-cart > li > a > span > .count");

  clickOnCart() {
    this.cart().click();
  }
}
