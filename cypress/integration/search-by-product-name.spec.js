/// <reference types='Cypress'/>

import { SearchBar } from '../page-objects/components/search-bar'

describe('Search by Product Name', () => {
    var product = 'Sweater' // Product to search by

    beforeEach(() => {
        cy.visit('/')
    })

    it('should search by product name and find the matching product', () => {
        SearchBar.searchByProduct(product);
        cy.contains(product).should('be.visible'); // This just looks for the product name so is not reliable

        // cy.contains('.product_title', product).should('be.visible'); -> Trying to get the field by the class with no luck
        
        cy.get('.woocommerce-product-gallery__wrapper').should('be.visible'); // Looks for another element to make sure the product exists

    })

    it('should search by product name and NOT find the matching product', () => {
        var noMatchingResultsMsg = 'No products were found matching your selection.';
        
        SearchBar.searchByProduct(product);
        
        cy.contains(`Search results: “${product}”`).should('be.visible');
        cy.contains(noMatchingResultsMsg).should('be.visible');
        
    })
})