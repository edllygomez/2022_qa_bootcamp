export const ProductTitle={

elements: {
getAddToCartButton: () => cy.get('.add_to_cart_button'),
getGoToCartButton: () => cy.get('li .added_to_cart'),
}, //elementsArray

addToCart: (index) => {
    ProductTitle.elements.getAddToCartButton().eq(index).click();
}, //
 goToCart: () => {
ProductTitle.elements.getGoToCartButton().click();
 }, //

}//function