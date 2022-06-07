export class SearchBar {
    elements = {
        getSearchInputText: () => cy.get('#woocommerce-product-search-field-0'),
        getSecondSearchInputText: () => cy.get('#search-2 .search-field'),
    }

    searchProduct(product) {
        this.elements.getSearchInputText().type(product + '{enter}');
    }

    secondSearchProduct(product) {
        this.elements.getSecondSearchInputText().type(product + '{enter}');
    }
}

export const searchBarComponent = new SearchBar();