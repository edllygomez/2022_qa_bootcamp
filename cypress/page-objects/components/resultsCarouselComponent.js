/// <reference types="cypress" />

export class ResultsCarouselComponent {
  searchHeader = () => cy.get("#main > header > h1");
  searchResults = () => cy.get("#main > article > header > h2 > a");

  //Search using primary search bar
  goToProduct(productCode) {
    this.searchResults().contains(productCode).click();
  }
}
