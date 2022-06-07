export class Checkout {
    url = '/checkout/'

    elements = {
        getHeaderLbl: () => cy.get('.entry-title'),
        getClickHereLoginLnk: () => cy.get('.showlogin'),
        getUsernameField: () => cy.get('#username'),
        getPasswordField: () => cy.get('#password'),
        getLoginBtn: () => cy.get('[name="login"]'),
        getCouponLnk: () => cy.get('.showcoupon'),
        getCouponField: () => cy.get('#coupon_code'),
        getCouponBtn: () => cy.get('[name="apply_coupon"]'),
        getCouponMessage: () => cy.get('.woocommerce-message'),
        getUsernameTxt: () => cy.get('.display-name'),
        getPlaceOrderBtn: () => cy.get('#place_order'),
        getTermsMessage: () => cy.get('.woocommerce-error'),
        getTermsCheckbox: () => cy.get('#terms'),
        getDifferentShipmentCheckbox: () => cy.get('#ship-to-different-address-checkbox'),
    }

    defaultFormElements = {
        getFirstNameField: () => cy.get('#billing_first_name'),
        getLastNameField: () => cy.get('#billing_last_name'),
        getCompanyNameField: () => cy.get('#billing_company'),
        getCountryRegionDropdown: () => cy.get('#billing_country'),
        getHouseNumberField: () => cy.get('#billing_address_1'),
        getApartmentField: () => cy.get('#billing_address_2'),
        getTownCityField: () => cy.get('#billing_city'),
        getStateCountryField: () => cy.get('#billing_state'),
        getZipCodeField: () => cy.get('#billing_postcode'),
        getPhoneField: () => cy.get('#billing_phone'),
        getEmailAddressField: () => cy.get('#billing_email'),
    }

    diffentShipmentFormElements = {
        getFirstNameField: () => cy.get('#shipping_first_name'),
        getLastNameField: () => cy.get('#shipping_last_name'),
        getCompanyNameField: () => cy.get('#shipping_company'),
        getCountryRegionDropdown: () => cy.get('#shipping_country'),
        getHouseNumberField: () => cy.get('#shipping_address_1'),
        getApartmentField: () => cy.get('#shipping_address_2'),
        getTownCityField: () => cy.get('#shipping_city'),
        getStateCountryField: () => cy.get('#shipping_state'),
        getZipCodeField: () => cy.get('#shipping_postcode'),
        getOrderNotes: () => cy.get('#order_comments'),
    }

    validatePageElements(){
        this.elements.getHeaderLbl().should('have.text', 'Checkout')
        this.elements.getClickHereLoginLnk().should('have.text', 'Click here to login')
        cy.url().should('include', this.url)
    }

    loginWithValidCredentias(){
        this.elements.getClickHereLoginLnk().click()
        this.elements.getUsernameField().type('automation')
        this.elements.getPasswordField().type('automation')
        this.elements.getLoginBtn().click()
        this.elements.getUsernameTxt().first().should('be.visible').and('have.text', 'automation')
    }

    applyValidCoupon(){
        this.elements.getCouponLnk().click()
        this.elements.getCouponField().type('1461 off')
        this.elements.getCouponBtn().click()
        this.elements.getCouponMessage().should('contain.text', 'Coupon code applied successfully.')
    }

    fillDefaultForm(){
        this.defaultFormElements.getFirstNameField().clear().type('Jafeth')
        this.defaultFormElements.getLastNameField().clear().type('Briceno')
        this.defaultFormElements.getCompanyNameField().clear().type('GAP')
        this.defaultFormElements.getCountryRegionDropdown().select('CR', {force:true})
        this.defaultFormElements.getHouseNumberField().clear().type('1994')
        this.defaultFormElements.getApartmentField().clear().type('18')
        this.defaultFormElements.getTownCityField().clear().type('San Blas')
        this.defaultFormElements.getStateCountryField().clear().type('Guanacaste')
        this.defaultFormElements.getZipCodeField().clear().type('40104')
        this.defaultFormElements.getPhoneField().clear().type('8899-2211')
        this.defaultFormElements.getEmailAddressField().clear().type('Jafeth@test.com')
    }

    fillDiffentShipmentForm(){
        this.diffentShipmentFormElements.getFirstNameField().clear().type('Carlos')
        this.diffentShipmentFormElements.getLastNameField().clear().type('Jaen')
        this.diffentShipmentFormElements.getCompanyNameField().clear().type('GAP2')
        this.diffentShipmentFormElements.getCountryRegionDropdown().select('CR', {force:true})
        this.diffentShipmentFormElements.getHouseNumberField().clear().type('1996')
        this.diffentShipmentFormElements.getApartmentField().clear().type('28')
        this.diffentShipmentFormElements.getTownCityField().clear().type('Sardinal')
        this.diffentShipmentFormElements.getStateCountryField().clear().type('Guanacaste')
        this.diffentShipmentFormElements.getZipCodeField().clear().type('40106')
        this.diffentShipmentFormElements.getOrderNotes().clear().type('To my brother')
    }

    clickPlaceOrder(){
        this.elements.getPlaceOrderBtn().click()
        this.elements.getTermsMessage().should('contain.text', 'Please read and accept the terms and conditions to proceed with your order.')
        this.elements.getTermsCheckbox().click()
        this.elements.getPlaceOrderBtn().click()
    }

    uncheckDifferentAddress(){
        this.elements.getDifferentShipmentCheckbox().click()
    }

}

export const CheckoutPage = new Checkout()