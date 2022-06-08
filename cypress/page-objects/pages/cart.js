export class Cart{
    elements = {
        //Add to cart
        getAddToCartByClassBtn: ()=>cy.get('.added_to_cart'),
        getProductName: ()=>cy.get('td.product-name'),
        /**url:'/cart',
        title:'Cart', */
        //Apply coupon
        getInputCouponByIdInp: ()=>cy.get('#coupon_code'),
        getApplyCouponByNameBtn: ()=>cy.get('button[name=apply_coupon]'),
    }

    //Methods
    //Add to cart methods
    addtoCart(){
        this.elements.getAddToCartByClassBtn().click();  
    }
    productValidation (){
        this.elements.getProductName().first().should('includes.text','Belt');
    } 

    //Apply coupon methods
    applyCoupon(){
        this.elements.getInputCouponByIdInp().type('1461 off');
        this.elements.getApplyCouponByNameBtn().click();
    }



    //apply coupon
    /**
     * cy.get('#coupon_code').type('1461 off');
     * cy.get('button[name=apply_coupon]').click() 
     */
}

export const cartPage = new Cart();
/**
 * cy.get('.added_to_cart').click();
    cy.url().should('include', '/cart');
    cy.get('td.product-name').first().should('includes.text','Belt');
 */

