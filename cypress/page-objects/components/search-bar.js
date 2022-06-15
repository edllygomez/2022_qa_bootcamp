export class SearchBar {

  elements = {
    getSearchInputTxt: () => cy.get('#woocommerce-product-search-field-0'),
    getSecondSearchInputTxt: () => cy.get('#search-2 .search-field'),
  }

  searchProduct(product) {
    this.elements.getSearchInputTxt().type(product + '{enter}');
  }

  secondSearchProduct(product) {
    this.elements.getSecondSearchInputTxt().type(product + '{enter}');
  }
}

export const SearchBarComponent = new SearchBar();