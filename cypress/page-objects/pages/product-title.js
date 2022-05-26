export const ProductTitle ={
    elements: {
        getaddToCartBtn: () => cy.get('.add_to_cart_button'),
        getGoToCartBtn: ()=> cy.get('li.added_to_cart'),
    },

    addToCart:() => {
        ProductTitle.elements.getaddToCartBtn().eq(index).click();
    },

    goToCart: ()=>{
        ProductTitle.elements.getGoToCartBtn().click();
    },
}
