export class searchProduct {
    elements = {
        getSearchResultById: () => cy.get('#woocommerce-product-search-field-0')
     }

    productInput (product){
        this.elements.getSearchResultById().click()
        .type(product)
        .type('{enter}')
    }

}

    export const searchProductPage = new searchProduct();
