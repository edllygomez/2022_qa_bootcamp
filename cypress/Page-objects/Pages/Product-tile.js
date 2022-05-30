export const ProductTile ={

    elements: {
        
        getAddToCartBtn: () => cy.get('.add_to_cart_button'),
        getGoToCartBtn: () => cy.get('li .added_to_cart'),
    },


    addToCart:()=>{
        ProductTile.elements.getAddToCartBtn().first().click();
    },

    goToCart: ()=>{
        ProductTile.elements.getGoToCartBtn().click();
    },

}