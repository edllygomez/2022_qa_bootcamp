/// <reference types="cypress" />

export class SearchBarComponent {
  searchBar = () => cy.get("#woocommerce-product-search-field-0");
  searchBarSecundary = () => cy.get("#search-2 > form > label > input");

  //Search using primary search bar
  searchProduct(product) {
    this.searchBar().click().type(product).type("{enter}");
  }

  //Search using secundary search bar
  searchProductSecundary(product) {
    this.searchBarSecundary().click().type(product).type("{enter}");
    cy.get("label > .search-field");
  }
}
