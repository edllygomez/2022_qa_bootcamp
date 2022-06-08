export class resultProduct {
    elements = {
        getTittletById:() => cy.get('.product_title.entry-title'),
        getAddToCartById :() => cy.get('[class="single_add_to_cart_button button alt"]'),
        getViewCartById:() => cy.get('li .cart-contents'),
        getCheckOutById:() => cy.get('[class="checkout-button button alt wc-forward"]')
       
    }
   
    addToCart (){
        this.elements.getAddToCartById().click()
        
    }
    viewCart (){
        this.elements.getViewCartById().click()
        
    }
    checkOutView (){
        this.elements.getCheckOutById().click()
        
    }
}
export const resultProductPage = new resultProduct();
