/// <reference types="cypress" />

import { searchComponent } from "../page-objects/components/search-bar";
import { resultsPage } from "../page-objects/pages/results-page";

describe('Search a product', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should search a product using the search component', () => {

        // Product to search
        const productToSearch = 'Beanie'

        // Search by product name
        searchComponent.enterProductName(productToSearch)

        // Send the product name into URL and Title in order to make sure that any product should be searched (if it exists)
        resultsPage.setUrlProductName(productToSearch)
        resultsPage.setTitleProductName(productToSearch)

        // Validate that the product name is in the URL
        cy.url().should('include', resultsPage.url)

        // Validate that the product name is in the title of the page
        cy.title().should('include', resultsPage.title)

        // Validte that the product name is into the summary 
        resultsPage.elements.getSummaryNameLbl().invoke('text').should('contain', productToSearch)
    })

})