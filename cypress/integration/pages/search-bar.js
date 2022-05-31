export class SearchBar {
    elements = {
        getSearchBar: () => cy.get('#woocommerce-product-search-field-0'),
    }//elements

    searchProduct(product) {
        this.elements.getSearchBar().type(`${product}{enter}`);
    }//searchProduct
}

export const SearchBarPage = new SearchBar();