export class SearchResults {
  elements = {
    getResultsTitleLbl: () => cy.get('.page-title'),
    getProductlnks: () => cy.get('h2.woocommerce-loop-product__title, [rel="bookmark"]'),
    getNoResultsMsg: () => cy.get('.woocommerce-info'),
  }
}

export const SearchResultsPage = new SearchResults();