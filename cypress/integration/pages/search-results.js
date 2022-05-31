export class SearchResults {
    elements = {
        getProductTitle: () => cy.get('a h2.woocommerce-loop-product__title'),
    }//elements

    checkResults(search) {
        this.elements.getProductTitle().should('contain', `${search}`)
    }//checkResults
}

export const SearchResultsPage = new SearchResults();