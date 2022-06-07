export class Cart {

    url = '/cart';
    title = 'Cart';

    elements = {
        getProductNameLink: () => cy.get('[data-title="Product"]'),
        getProductSubtotalLabel: () => cy.get('[data-title="Subtotal"]'),
        getCouponCodeText: () => cy.get('#coupon_code'),
        getApplyCouponButton: () => cy.contains('button', 'Apply coupon'),
        getCouponMessage: () => cy.get('[role=alert]'),
        getCouponInfo: () => cy.get('.cart-discount'),
    }//elementsArray

    applyCoupon(code) {
        this.elements.getCouponCodeText().clear().type(code);
        this.elements.getApplyCouponButton().click();
    }//applyCoupon

}//Class

export const CartPage = new Cart();