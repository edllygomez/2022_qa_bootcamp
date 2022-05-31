export const SearchBar = {

    elements: {
        getClickSearchBar: () => cy.get('input#woocommerce-product-search-field-0'),
    
    },

    searchByProduct: (productToSearch) => {
        SearchBar.elements.getClickSearchBar()
            .click()
            .type(productToSearch + '{enter}');

    },

}