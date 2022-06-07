export class SearchResults {
    elements = {
        getResultsTitleLabel: () => cy.get('.page-title'),
        getProductTitleLink: () => cy.get('a h2.woocommerce-loop-product__title, [rel="bookmark"]'),
        getNoResultsMessage: () => cy.get('.woocommerce-info'),
    }//elements

    checkResults(search) {
        this.elements.getProductTitle().should('contain', `${search}`)
    }//checkResults
}

export const SearchResultsPage = new SearchResults();