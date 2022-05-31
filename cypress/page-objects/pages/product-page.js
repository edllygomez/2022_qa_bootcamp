export class Product {
    elements = {
        productTitle: () => cy.get('.product_title'),
    }

    getProductTitle() {
        return this.elements.productTitle();
    }
}

export const productPage = new Product();