const { faker } = require('@faker-js/faker');
export class Checkout {
    url = '/checkout'
    title = 'Checkout'

    elements = {
        //Click here to login
        getTitle: () => cy.get('.entry-title'),
        getClickHereToLoginLink: () => cy.get('.showlogin'),
        getUsernameField: () => cy.get('#username'),
        getPasswordField: () => cy.get('#password'),
        getRememberMeCheckbox: () => cy.get('#rememberme'),
        getLoginButton: () => cy.get('[name="login"]'),
        getLostPasswordLink: () => cy.get('a[href*="lost-password"]'), //probar si funciona
        //after login
        getUsernameText: () => cy.get('.display-name'),
        //Click here to enter your code
        getClikHereToEnterCodeLink: () => cy.get('.showcoupon'),
        getCouponCodeField: () => cy.get('#coupon_code'),
        getApplyCouponButton: () => cy.get('[name="apply_coupon"]'),
        getCouponMessage: () => cy.get('.woocommerce-message'),
        //BillingDetails
        getCheckoutForm: () => cy.get('[name="checkout"]'),
        getFirstNameField: () => cy.get('#billing_first_name'),
        getLastNameField: () => cy.get('#billing_last_name'),
        getCompanyField: () => cy.get('#billing_company'),
        getCountryDropdown: () => cy.get('#billing_country'),
        getHouseNumberField: () => cy.get('#billing_address_1'),
        getAppartmentField: () => cy.get('#billing_address_2'),
        getTownField: () => cy.get('#billing_city'),
        getStateDropdown: () => cy.get('#billing_state'),//dropdown only if US selected on Country, otherwise is a text field
        getZipField: () => cy.get('#billing_postcode'),
        getPhoneField: () => cy.get('#billing_phone'),
        getEmailField: () => cy.get('#billing_email'),
        getShipDifferentAdressCheckbox: () => cy.get('#ship-to-different-address-checkbox'),//checked by default
        //Ship to a different address?
        getShipFirstNameField: () => cy.get('#shipping_first_name'),
        getShipLastNameField: () => cy.get('#shipping_last_name'),
        getShipCompanyField: () => cy.get('#shipping_company'),
        getShipCountryDropdown: () => cy.get('#shipping_country'),
        getShipHouseNumberField: () => cy.get('#shipping_address_1'),
        getShipAppartmentField: () => cy.get('#shipping_address_2'),
        getShipTownField: () => cy.get('#shipping_city'),
        getShipStateDropdown: () => cy.get('#shipping_state'),//dropdown only if US selected on Country, otherwise is a text field
        getShipZipField: () => cy.get('#shipping_postcode'),
        getShipOrderNotesTextArea: () => cy.get('#order_comments'),
        //Your order
        getCheckPaymentRadioButton: () => cy.get('#payment_method_cheque'),
        getCashDeliveryRadioButton: () => cy.get('#payment_method_cod'),
        getTermsCheckbox: () => cy.get('#terms'),
        getPlaceOrderButton: () => cy.get('#place_order'),
        getTermsConditionsLink: () => cy.get('.woocommerce-terms-and-conditions-link'),
        getErrorMessage: () => cy.get('.woocommerce-error'),
    }//elementsArray

    verifyCheckoutElements() {
        cy.url().should('include', this.url)//
        this.elements.getTitle().should('contain', 'Checkout')
        this.elements.getClickHereToLoginLink().should('contain', 'Click here to login')
        this.elements.getClikHereToEnterCodeLink().should('contain', 'Click here to enter your code')
        this.elements.getCheckoutForm().should('be.visible')
    }//verifyCheckoutElements

    loginWithValidCredentials() {
        this.elements.getClickHereToLoginLink().click()
        this.elements.getUsernameField().type(Cypress.env('username'))
        this.elements.getPasswordField().type(Cypress.env('password'))
        this.elements.getLoginButton().click()
        this.elements.getUsernameText().should('be.visible').and('contain', Cypress.env('username'))
    }//loginWithValidCredentials

    applyValidCoupon() {
        this.elements.getClikHereToEnterCodeLink().click()
        this.elements.getCouponCodeField().type('1461 off')
        this.elements.getApplyCouponButton().click()
        this.elements.getCouponMessage().should('contain', 'Coupon code applied successfully.')
    }//applyValidCoupon

    fillBillingDetailsForm() {
        this.elements.getFirstNameField().clear().type(faker.name.firstName())
        this.elements.getLastNameField().clear().type(faker.name.lastName())
        this.elements.getCompanyField().clear().type(faker.company.companyName())
        this.elements.getCountryDropdown().select('CR', { force: true })
        this.elements.getHouseNumberField().clear().type(faker.address.buildingNumber())
        this.elements.getAppartmentField().clear().type(faker.address.secondaryAddress())
        this.elements.getTownField().clear().type(faker.address.city())
        this.elements.getStateDropdown().clear().type(faker.address.state())
        this.elements.getPhoneField().clear().type(faker.phone.phoneNumber('####-####'))
        this.elements.getEmailField().clear().type(faker.internet.email('Yeimy', 'Huertas', 'example.fakerjs.dev'))
    }//fillBillingDetailsForm

    fillShipToDifferentAddressForm() {
        this.elements.getShipFirstNameField().clear().type(faker.name.firstName())
        this.elements.getShipLastNameField().clear().type(faker.name.lastName())
        this.elements.getShipCompanyField().clear().type(faker.company.companyName())
        this.elements.getShipCountryDropdown().select('CR', { force: true })
        this.elements.getShipHouseNumberField().clear().type(faker.address.buildingNumber())
        this.elements.getShipAppartmentField().clear().type(faker.address.secondaryAddress())
        this.elements.getShipTownField().clear().type(faker.address.city())
        this.elements.getShipStateDropdown().clear().type(faker.address.state())
        this.elements.getShipZipField().clear().type(faker.address.zipCode())
        this.elements.getShipOrderNotesTextArea().clear().type('Yeimy Huertas Test')
    }//fillShipToDifferentAddressForm

    placeOrderWithTerms() {
        this.elements.getTermsCheckbox().click()
        this.elements.getPlaceOrderButton().click()
    }//placeOrderWithTerms

    placeOrderWithoutTerms() {
        this.elements.getPlaceOrderButton().click()
        this.elements.getErrorMessage().should('contain', 'Please read and accept the terms and conditions to proceed with your order.')
        this.elements.getTermsCheckbox().click()
        this.elements.getPlaceOrderButton().click()
    }//placeOrderWithTerms

    uncheckShipToDifferentAddress() {
        this.elements.getShipDifferentAdressCheckbox().click()
    }//uncheckShipToDifferentAddress

}//Class Checkout

export const CheckoutPage = new Checkout()