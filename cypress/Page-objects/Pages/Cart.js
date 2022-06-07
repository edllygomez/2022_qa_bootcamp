export class Cart{

url = '/cart';
title= 'Cart';

elements ={

    getProductNameLink: () => cy.get('[data-title="Product"]'),
    getProductSubtotalLbl: () => cy.get('[data-title="Subtotal"]'),

    //getters coupon 
    getCouponCodeTxt: () => cy.get('#coupon_code'),
    getApplyCouponBtn: () => cy.contains('button','Apply coupon'),
    getCouponMsg: () => cy.get('[role=alert]'),


    //get checkout 
   
}

applyCoupon(code){
this.elements.getCouponCodeTxt().clear().type(code);
this.elements.getApplyCouponBtn().click();

}

}



export const CartPage = new Cart();