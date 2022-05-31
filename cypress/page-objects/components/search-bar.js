export class SearchBar {
    elements = {
        getSearchBar: () => cy.get('#woocommerce-product-search-field-0'), 
    }

    searchProduct(product) {
        this.elements.getSearchBar()
            .click()
            .type(product)
            .type('{enter}');
    }
}

export const searchBar = new SearchBar();