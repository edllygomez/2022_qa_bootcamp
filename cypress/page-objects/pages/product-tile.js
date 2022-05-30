export const ProductTile = {
    elements: {
        getAddToCartBtn: () => cy.get('[data-product_id="32"]'),
        getGoToCartBtn: () => cy.get('li .added_to_cart'),
        getProductTitleName: () => cy.get('.product_title'),
    },

    addToCart: () => { 
        ProductTile.elements.getAddToCartBtn().click()

    },

    goToCart: () => {
        ProductTile.elements.getGoToCartBtn().click()
    },

    validateSearchedProduct: (productName) => {
        ProductTile.elements.getProductTitleName().should('contain', `${productName}`)

    }

}