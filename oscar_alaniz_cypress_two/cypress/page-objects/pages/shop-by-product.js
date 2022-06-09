export class shopByProduct {
    elements = {
        getProductByTextSearch: () => cy.get('#woocommerce-product-search-field-0'),
    }

    enterProduct(product) {
        this.elements.getProductByTextSearch(product).type('Hoodie{enter}');
    }
}

export const ShopByProductPage = new shopByProduct();