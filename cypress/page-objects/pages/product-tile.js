export const ProductTitle = {
    elements: {
        getAddToCartBtn: () => cy.get('.add_to_cart_button'),
        getGoToCartBtn: () => cy.get('li .added_to_cart')
    },

    addToCart: (index) => {
        ProductTitle.elements.getAddToCartBtn().eq(index).click();
    },

    goToCart: () => {
        ProductTitle.elements.getGoToCartBtn().click();
    },
}