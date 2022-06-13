export class SearchBar {
    elements = {
        getSearchBar: () => cy.get('#woocommerce-product-search-field-0'),
        getSecondSearchBar: () => cy.get('#search-2 .search-field'),
    }//elements

    searchProduct(product) {
        this.elements.getSearchBar().type(`${product}{enter}`)

    }//searchProduct

    secondSearchProduct(product) {
        this.elements.getSecondSearchBar().type(`${product}{enter}`)
    }//secondSearchProduct

}//class

export const SearchBarPage = new SearchBar()