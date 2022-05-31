export class SearchProduct{
    elements = {
        doSearchByText: (textToSearch) => cy.get('#woocommerce-product-search-field-0').type(`${textToSearch}`),
    }

    startSearch(search){
        this.elements.doSearchByText(search).type('{enter}');
    }
}
export const SearcProductPage = new SearchProduct();