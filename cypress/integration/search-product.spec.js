/// <reference types='Cypress'/>

// import { SearchBarComponent } from "../page-objects/components/search-bar"
import { ProductDetailPage } from "../page-objects/pages/product-detail"
import { SearchResultsPage } from "../page-objects/pages/search-results"

describe('Search product', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should show multiple coincidences for a product', () => {
        // SearchBarComponent.searchProduct('Hoodie');
        cy.searchProduct('Hoodie');
        SearchResultsPage.elements.getResultsTitleLbl().should('contain.text', 'Hoodie');
        SearchResultsPage.elements.getProductlnks().each(($element) => {
            expect($element).to.contain('Hoodie');
        });
    });

    it('should show one coincidence for a product', () => {
        cy.searchProduct('Belt');
        // Approach using regular expression with match assertion
        // ProductDetailPage.elements.getNameLbl().invoke('text').should('match', '/belt/i');
        ProductDetailPage.elements.getNameLbl().should(($div) => {
            let text = $div.text().toLowerCase();
            expect(text).to.contain('belt');
        });
    });

    it('should results when searched from a different product details page', () => {
        ProductDetailPage.navigate('tshirt');
        //SearchBarComponent.secondSearchProduct('Hoodie');
        cy.secondSearchProduct('Hoodie');
        SearchResultsPage.elements.getResultsTitleLbl().should('contain.text', 'Hoodie');
        SearchResultsPage.elements.getProductlnks().each(($element) => {
            expect($element).to.contain('Hoodie');
        })
    });

    it('should show a message when no results are found', () => {
        cy.searchProduct('pants');
        SearchResultsPage.elements.getResultsTitleLbl().should('contain.text', 'pants');
        SearchResultsPage.elements.getNoResultsMsg()
            .should('contain.text', 'No products were found matching your selection.');
    });
})