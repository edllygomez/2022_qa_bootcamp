/// <reference types="cypress" />

export class SlideDownBanner {
  productTitle = () => cy.get(".storefront-sticky-add-to-cart__content-title");
  productPrice = () => cy.get(".storefront-sticky-add-to-cart__content-price");
  addToCartButton = () =>
    cy.get(".storefront-sticky-add-to-cart__content-button");

  addToCart() {
    this.addToCartButton().click();
  }
}
