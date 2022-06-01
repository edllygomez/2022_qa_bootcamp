/// <reference types="cypress" />

export class Search {
    elements = {
        getSearchBarTxB: () => cy.get('#woocommerce-product-search-field-0')
    }

    // Click the search component, type into it and press enter
    enterProductName(productName) {
        this.elements.getSearchBarTxB()
            .click()
            .type(productName)
            .type('{enter}')
    }

}

export const searchComponent = new Search();