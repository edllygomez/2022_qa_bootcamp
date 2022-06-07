export class Checkout {
    url = '/checkout';
    title = 'Checkout';

    elements = {
        getPlaceOrderBtn: () => cy.get('#place_order'),
        getTermsAndConditionsChkbx: () => cy.get('#terms'),
    }

    navigate() {
        cy.visit(this.url);
    }

    acceptTermsAndConditions() {
        this.elements.getTermsAndConditionsChkbx().click();
    }

    clickPlaceOrderBtn() {
        this.elements.getPlaceOrderBtn().click();
    }
}

export const checkoutPage = new Checkout();