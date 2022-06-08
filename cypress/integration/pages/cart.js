export class Cart {

    url = '/cart'
    title = 'Cart'

    elements = {
        getProductNameLink: () => cy.get('[data-title="Product"]'),
        getProductSubtotalLabel: () => cy.get('[data-title="Subtotal"]'),
        getCouponCodeText: () => cy.get('#coupon_code'),
        getApplyCouponButton: () => cy.contains('button', 'Apply coupon'),
        getCouponMessage: () => cy.get('[role=alert]'),
        getCouponInfo: () => cy.get('.cart-discount'),
        getCheckoutButton: () => cy.get('.checkout-button'),
    }//elementsArray

    applyCoupon(coupon) {
        this.elements.getCouponCodeText().clear().type(coupon)
        this.elements.getApplyCouponButton().click()
    }//applyCoupon

    proceedToCheckout() {
        this.elements.getCheckoutButton().click()
    }//proceedToCheckout

}//Class

export const CartPage = new Cart()