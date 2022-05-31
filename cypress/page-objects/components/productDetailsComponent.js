/// <reference types="cypress" />

export class ProductDetailsComponent {
  productTitle = () => cy.get(".product_title");
  ProductDescription = () => cy.get("#tab-description > p");

  //ToDo
  //   addToCart(amount) {}
}
