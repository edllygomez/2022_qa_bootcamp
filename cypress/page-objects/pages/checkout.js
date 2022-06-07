export class Checkout {
    url = '/checkout';
    title = 'Checkout';

    elements = {
        getLoginLnk: () => cy.get('.showlogin'),
        getUsernameTxtBox: () => cy.get('#username'),
        getPasswordTxtBox: () => cy.get('#password'),
        getLoginBtn: () => cy.contains('button', 'Login'),
        getShippingAddressCheckbox: () => cy.get('input[id="ship-to-different-address-checkbox"]'),
        getTermsCheckBox: () => cy.get('input[id="terms"]'),
        getPlaceOrderBtn: () => cy.get('button[data-value="Place order"]'),
    }

    login(username, password) {
        this.elements.getLoginLnk().click();
        this.elements.getUsernameTxtBox().type(username)
        this.elements.getPasswordTxtBox().type(password + '{enter}')
    }

    acceptTermsAndConditions() {
        this.elements.getTermsCheckBox().click({force: true});
    }

    useSameBillingAddressForShipping() {
        this.elements.getShippingAddressCheckbox().click({force: true})
    }

    placeOrder() {
        this.elements.getPlaceOrderBtn().click({force: true});
    }
}

export const CheckoutPage = new Checkout();