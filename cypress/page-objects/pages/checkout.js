/// <reference types="cypress" />

export class CheckoutPage {

    elements = {
        getLoginLink: () => cy.get('.showlogin'),
        getLoginBtn: () => cy.get('[name="login"]'),
        getPlaceOrderBtn: () => cy.get('[name="woocommerce_checkout_place_order"]'),
        getAcceptTermsCheck: () => cy.get('#terms'),
        getEntryTitleLbl: () => cy.get('h1.entry-title'),
        getThankYouLbl: () => cy.get('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received'),
        getOrderDetailsLbl: () => cy.get('.woocommerce-order-details__title'),
        getDiscountLbl: () => cy.contains('Discount'),
        
        // Billing address
        getBillCountryDdw: () => cy.get('#billing_country'),
        getBillAddress1: () => cy.get('#billing_address_1'),
        getBillAddress2: () => cy.get('#billing_address_2'),
        getBillCity: () => cy.get('#billing_city'),
        getBillState: () => cy.get('#billing_state'),
        getBillPostCode: () => cy.get('#billing_postcode'),

        // Shipping address
        getShipCountryDdw: () => cy.get('#shipping_country'),
        getShipAddress1: () => cy.get('#shipping_address_1'),
        getShipAddress2: () => cy.get('#shipping_address_2'),
        getShipCity: () => cy.get('#shipping_city'),
        getShipState: () => cy.get('#shipping_state'),
        getShipPostCode: () => cy.get('#shipping_postcode'),
        
        getCheckToDiffAddressCheck: () => cy.get('#ship-to-different-address-checkbox'),

        getBillingAdd1Lbl: (billAdd1) => cy.contains(billAdd1),
        getShippingAdd1Lbl: (shipAdd1) => cy.contains(shipAdd1),

    }
    
    clickLoginLink() {
        this.elements.getLoginLink().click()
    }
    
    clickLoginBtn() {
        this.elements.getLoginBtn().click()
    }
    
    clickAcceptTermsCheck() {
        cy.wait(1000)
        this.elements.getAcceptTermsCheck().click()
    }

    clickPlaceOrderBtn() {
        this.elements.getPlaceOrderBtn().should('be.visible').click()
        cy.wait(1000)
    }
    
    clickBillCountryDdw() {
        cy.wait(1000)
        this.elements.getBillCountryDdw()
            .select('CO', { force: true })
            .invoke('val')
            .should('eq', 'CO')
    }

    enterBillAddress1(address) {
        this.elements.getBillAddress1().clear().type(address)
    }

    enterBillAddress2(address) {
        this.elements.getBillAddress2().clear().type(address)
    }

    enterBillCity(city) {
        this.elements.getBillCity().clear().type(city)
    }

    enterBillState(state) {
        this.elements.getBillState().clear().type(state)
    }

    enterBillPostCode(postCode) {
        this.elements.getBillPostCode().clear().type(postCode)
    }
    
    uncheckToDiffShippingAdd() {
        this.elements.getCheckToDiffAddressCheck().uncheck()
    }

    clickShipCountryDdw() {
        //cy.wait(1000)
        this.elements.getShipCountryDdw()
            .select('CO', { force: true })
            .invoke('val')
            .should('eq', 'CO')
    }

    enterShipAddress1(address) {
        this.elements.getShipAddress1().clear().type(address)
    }

    enterShipAddress2(address) {
        this.elements.getShipAddress2().clear().type(address)
    }

    enterShipCity(city) {
        this.elements.getShipCity().clear().type(city)
    }

    enterShipState(state) {
        this.elements.getShipState().clear().type(state)
    }

    enterShipPostCode(postCode) {
        this.elements.getShipPostCode().clear().type(postCode)
    }
    
    uncheckToDiffShippingAdd() {
        this.elements.getCheckToDiffAddressCheck().uncheck()
    }

}

export const checkoutPage = new CheckoutPage();