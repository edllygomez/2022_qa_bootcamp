export class searchItem {
    elements = {
        getSearchResultById: () => cy.get('#woocommerce-product-search-field-0')
    }

    ItemInput (item){
        this.elements.getSearchResultById().click()
        .type(item)
        .type('{enter}')

    }

}

export const searchItemPage = new searchItem();
