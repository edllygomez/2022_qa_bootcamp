/// <reference types="cypress" />

export class ProductDetailsComponent {
  productTitle = () => cy.get(".product_title");
  ProductDescription = () => cy.get("#tab-description > p");
  addToCartButton = () => cy.get(".single_add_to_cart_button");
  addToCartAmountInput = () => cy.get(".quantity > input");

  changeCartAmount(number) {
    this.addToCartAmountInput().clear().type(number);
  }

  addToCart() {
    this.addToCartButton().click();
  }
}
