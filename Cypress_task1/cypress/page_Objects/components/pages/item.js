export class resultItem {
    elements = {
        getResultById: () => cy.get('product_title entry-title')
    }


}

export const resultItemPage = new resultItem();
