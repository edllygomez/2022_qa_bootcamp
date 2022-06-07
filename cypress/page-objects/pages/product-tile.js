export class ProductTile {
    productTile = 'Zipper'

    elements = {
        getAddToCartBtn: () => cy.get('[data-product_id="32"]'),
        getGoToCartBtn: () => cy.get('li .added_to_cart'),
        getProductTitleName: () => cy.get('.product_title'),
    }

    addToCart(){ 
        this.elements.getAddToCartBtn().click()
    }

    goToCart () {
        this.elements.getGoToCartBtn().click()
    }

    validateSearchedProduct (){
        this.elements.getProductTitleName().should('contain', `${this.productTile}`)
    }

}

export const ProductTilePage = new ProductTile()