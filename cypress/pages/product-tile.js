export class ProductTile {

    elements = {
        getAddToCartButton: () => cy.get('.add_to_cart_button'),
        getGoToCartButton: () => cy.get('li .added_to_cart'),
    } //elementsArray

    addToCart(index) {
        this.elements.getAddToCartButton().eq(index).click()
        //this.elements.getAddToCartButton().click()
    }//

    goToCart() {
        this.elements.getGoToCartButton().click()
    }//

}//class ProductTitle

export const ProductTilePage = new ProductTile()