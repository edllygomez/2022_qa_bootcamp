export class ProductTitle {
    elements = {
        getAddToCartBtn: () => cy.get('.add_to_cart_button'),
        getGoToCartBtn: () => cy.get('li .added_to_cart'),
    }

    addToCart() {
        this.elements.getAddToCartBtn().first().click();
    }

    goToCart() {
        this.elements.getGoToCartBtn().click();
    }

    addProductToCart(product) {
        cy.searchProduct(product);
        this.addToCart();
        this.goToCart();
    }
}

export const productTitlePage = new ProductTitle();