export class checkoutaProduct {
    elements = {
        getCheckouTittleByClass: () => cy.get('h1.entry-title'),
        getLoginLink: () => cy.get('.showlogin'),
        getUserNameInput: () => cy.get('#username'),
        getPasswordInput: () => cy.get('#password'),
        getRememberCheckbox: () => cy.get('#rememberme'), 
        getLoginButton: () => cy.get('[name="login"]'),
        getLoginUserid: () => cy.get('.display-name'),
        getCouponCodeLink: () => cy.get('.showcoupon'),
        getFirstNameInput: () => cy.get('#billing_first_name'),
        getLastNameInput: () => cy.get('#billing_last_name'),
        getCompanyInput: () => cy.get('#billing_company'),
        getCountrySelection: () => cy.get('#select2-billing_country-container','#billing_country'),
        getStreetAddressInput: () => cy.get('#billing_address_1'),
        getStreetAdressaptInput: () => cy.get('#billing_address_2'),
        getCityInput: () => cy.get('#billing_city'),
        getStateSelection: () => cy.get('#shipping_state'),
        getZipInput: () => cy.get('#billing_postcode'),
        getPhoneInput: () => cy.get('#billing_phone'),
        getEmailInput: () => cy.get('#billing_email'),
        //
       // Ship Elements
        getShipDiffAdrrCheckB: () => cy.get('#ship-to-different-address-checkbox'),
        getFirstNameShipInput: () => cy.get('#shipping_first_name'),
        getLastNameShipInput: () => cy.get('#shipping_last_name'),
        getCompanyShipInput: () => cy.get('#shipping_company'),
        getCountryShipSelection: () => cy.get('#select2-shipping_country-container','#billing_country'),
        getStreetShipAddressInput: () => cy.get('#shipping_address_1'),
        getStreetAdressaptShipInput: () => cy.get('#shipping_address_2'),
        getCityShipInput: () => cy.get('#shipping_city'),
        getStateShipSelection: () => cy.get('#shipping_state'),
        getZipShipInput: () => cy.get('#shipping_postcode'),
        getPaymentRadioBtn: () => cy.get('#payment_method_cheque'),
        getTermsCondCheckBox: () => cy.get('#terms'),
        getPlaceOrderBtn: () => cy.get('#place_order'),

    // Exeception message
        getErrorMessage: () => cy.get('.woocommerce-error li'),

     }


    loginCheckOut() {
        this.elements.getLoginLink().click();
        this.elements.getUserNameInput().type('')
        this.elements.getPasswordInput().type('')
        this.elements.getLoginButton().click();
        this.elements.getLoginUserid().first().should('be.visible').and('have.text', 'automation')
    }

    loginCheckOutInvalid() {
        this.elements.getLoginLink().click();
        this.elements.getUserNameInput().type('')
        this.elements.getPasswordInput().type('')
        this.elements.getLoginButton().click();
        this.elements.getErrorMessage().first().should('be.visible').and('contain.text', 'Unknown username. Check again or try your email address.')
    }

    billingDetailsForm() {
        this.elements.getFirstNameInput().clear().type('Adriana');
        this.elements.getLastNameInput().clear().type('Castel');
        this.elements.getCompanyInput().clear().type('SecureGap');
        this.elements.getStreetAddressInput().clear().type('Av 100 Viva');
        this.elements.getStreetAdressaptInput().clear().type('Apto');
        this.elements.getCityInput().clear().type('Ramiriqui');
        this.elements.getStateSelection().clear().type('Cundi');
        this.elements.getZipInput().clear().type('30555' );
        this.elements.getPhoneInput().clear().type('312444444');
        this.elements.getEmailInput().clear().type('acastelblanco@gap.com');
        }

    shipSelection() {
        this.elements.getShipDiffAdrrCheckB().click();
        }

    placeOrder() {
        this.elements.getTermsCondCheckBox().click();
        this.elements.getPlaceOrderBtn().click();
        }

    ShippingDetailsForm() {
        this.elements.getFirstNameInput().clear().type('Katerin');
        this.elements.getLastNameInput().clear().type('Junc');
        this.elements.getCompanyInput().clear().type('GapTest');
        this.elements.getStreetAddressInput().clear().type('Street 80');
        this.elements.getStreetAdressaptInput().clear().type('House');
        this.elements.getCityInput().clear().type('Jene');
        this.elements.getStateSelection().clear().type('Bogots');
        this.elements.getZipInput().clear().type('30456' );
        
        }
}



    export const checkoutaProductPage = new checkoutaProduct();
