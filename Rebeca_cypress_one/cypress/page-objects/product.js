export class Product{
    url='/product/vneck-tee/';
    elements = {
        getProductSearch: () => cy.get('h1')
    }
}

export const ProductPage = new Product();