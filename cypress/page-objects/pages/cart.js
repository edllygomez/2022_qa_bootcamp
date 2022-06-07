export class Cart {
    url = '/cart';
    title = 'Cart';

    elements = {
        getProductNameLink: () => cy.get('[data-title="Product"]'),
        getProductSubtotalLbl: () => cy.get('[data-title="Subtotal"]'),
        getCouponCodeText: () => cy.get('#coupon_code'),
        getApplyCouponBtn: () => cy.contains('button', 'Apply coupon'),
        getCouponMsg: () => cy.get('[role=alert]'),
        getCouponInfo: () => cy.get('.cart-discount'),
        getProceedToCheckoutBtn: () => cy.get('.checkout-button'),
    }

    applyCoupon(code) {
        this.elements.getCouponCodeText().clear().type(code);
        this.elements.getApplyCouponBtn().click();
    }

    proceedToCheckout() {
        this.elements.getProceedToCheckoutBtn().click();
    }
}

export const cartPage = new Cart();