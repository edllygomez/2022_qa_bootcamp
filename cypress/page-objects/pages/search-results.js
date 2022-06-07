export class SearchResults {
    elements = {
        getResultsTitleLbl: () => cy.get('.woocommerce-products-header__title'),
        getProductLinks: () => cy.get('.woocommerce-loop-product__title, [rel="bookmark"]'),
        getNoResultsMsg: () => cy.get('.woocommerce-info'),
    }
}

export const searchResultsPage = new SearchResults();