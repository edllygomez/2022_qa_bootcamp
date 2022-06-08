/// <reference types="cypress" />

export class CartPage {

    elements = {
        getCouponCodeTxt: () => cy.get('#coupon_code'),
        getApplyCouponBtn: () => cy.get('[name="apply_coupon"]'),
        getProceedToCheckoutBtn: () => cy.get('.checkout-button.button.alt.wc-forward')
    }
    
    clickProceedToCheckoutBtn() {
        this.elements.getProceedToCheckoutBtn().click()
    }

    typeCouponCode(coupon) {
        this.elements.getCouponCodeTxt().type(coupon)
    }
    
    clickCouponCodeBtn() {
        this.elements.getApplyCouponBtn().click()
    }

}

export const cartPage = new CartPage();