export class Cart{
    url = '/cart';
    elements = {
        //Add to cart
        getAddToCartByClassBtn: ()=>cy.get('.added_to_cart'),
        getProductName: ()=>cy.get('td.product-name'),
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
}

export const cartPage = new Cart();


