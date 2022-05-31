/// <reference types="cypress" />

export class ProductDetails {
  productTitle = () => cy.get(".product_title");
  ProductDescription = () => cy.get("#tab-description > p");

  //ToDo
  //   addToCart(amount) {}
}
