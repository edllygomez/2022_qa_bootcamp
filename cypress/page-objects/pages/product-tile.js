export const ProductTilePage = {
  elements: {
    getAddToCartBtn: () => cy.get('.add_to_cart_button'),
    getGoToCartBtn: () => cy.get('li .added_to_cart'),
  },

  addToCart:(index) => {
    ProductTilePage.elements.getAddToCartBtn().eq(index).click();
  },

  goToCart: () => {
    ProductTilePage.elements.getGoToCartBtn().click();
  },
}