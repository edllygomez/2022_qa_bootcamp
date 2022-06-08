/// <reference types="cypress" />

import { resultsPage } from "../page-objects/pages/results";
import { cartPage } from "../page-objects/pages/cart"
import { checkoutPage } from "../page-objects/pages/checkout";

describe('Complete an order', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should complete an order with default billing and shipping addresses without coupon', () => {
        const productToSearch = 'Beanie'
        let user = Cypress.env('user')
        let pass = Cypress.env('pass')
        cy.searchProduct(productToSearch)
        resultsPage.clickAddToCartBtn()
        cy.viewCart()
        cartPage.clickProceedToCheckoutBtn()
        checkoutPage.clickLoginLink()
        cy.logIn(user, pass)
        checkoutPage.clickLoginBtn()
        checkoutPage.clickAcceptTermsCheck()
        checkoutPage.clickPlaceOrderBtn()

        // Assertions
        checkoutPage.elements.getEntryTitleLbl().invoke('text').should('contain', 'Order received')
        checkoutPage.elements.getThankYouLbl().invoke('text').should('contain', 'Thank you. Your order has been received.')
        checkoutPage.elements.getOrderDetailsLbl().invoke('text').should('contain', 'Order details')
    })

    it('Should complete an order with default billing and shipping addresses with a valid coupon', () => {
        const productToSearch = 'Beanie'
        const couponCode = '1461 off'
        let user = Cypress.env('user')
        let pass = Cypress.env('pass')
        cy.searchProduct(productToSearch)
        resultsPage.clickAddToCartBtn()
        cy.viewCart()
        cartPage.typeCouponCode(couponCode)
        cartPage.clickCouponCodeBtn()
        cartPage.clickProceedToCheckoutBtn()
        checkoutPage.clickLoginLink()
        cy.logIn(user, pass)
        checkoutPage.clickLoginBtn()
        checkoutPage.clickAcceptTermsCheck()
        checkoutPage.clickPlaceOrderBtn()

        // Assertions
        checkoutPage.elements.getEntryTitleLbl().invoke('text').should('contain', 'Order received')
        checkoutPage.elements.getThankYouLbl().invoke('text').should('contain', 'Thank you. Your order has been received.')
        checkoutPage.elements.getOrderDetailsLbl().invoke('text').should('contain', 'Order details')
        checkoutPage.elements.getDiscountLbl().invoke('text').should('contain', 'Discount')
    })
    
    it('Should complete an order changing billing address and using the same address for shipping', () => {
        
        // Test Values
        const productToSearch = 'Beanie'
        const couponCode = '1461 off'
        let user = Cypress.env('user')
        let pass = Cypress.env('pass')

        // Steps
        cy.searchProduct(productToSearch)
        resultsPage.clickAddToCartBtn()
        cy.viewCart()
        cartPage.typeCouponCode(couponCode)
        cartPage.clickCouponCodeBtn()
        cartPage.clickProceedToCheckoutBtn()
        checkoutPage.clickLoginLink()
        cy.logIn(user, pass)
        checkoutPage.clickLoginBtn()
        checkoutPage.clickBillCountryDdw()
        checkoutPage.enterBillAddress1('Test address 1')
        checkoutPage.enterBillAddress2('Test address 2')
        checkoutPage.enterBillCity('Test City 1')
        checkoutPage.enterBillState('Test State 1')
        checkoutPage.enterBillPostCode('111111')
        checkoutPage.uncheckToDiffShippingAdd()
        checkoutPage.clickAcceptTermsCheck()
        checkoutPage.clickPlaceOrderBtn()

        // Assertions
        checkoutPage.elements.getEntryTitleLbl().invoke('text').should('contain', 'Order received')
        checkoutPage.elements.getThankYouLbl().invoke('text').should('contain', 'Thank you. Your order has been received.')
        checkoutPage.elements.getOrderDetailsLbl().invoke('text').should('contain', 'Order details')
        checkoutPage.elements.getDiscountLbl().invoke('text').should('contain', 'Discount')
    })
    
    it('Should complete an order changing billing address and using another address for shipping', () => {
        
        // Test Values
        const productToSearch = 'Beanie'
        const couponCode = '1461 off'
        let user = Cypress.env('user')
        let pass = Cypress.env('pass')
        let billingAdd1 = 'Test address 1'
        let billingAdd2 = 'Test address 2'
        let ShippingAdd1 = 'Test address 3'
        let ShippingAdd2 = 'Test address 4'

        // Steps
        cy.searchProduct(productToSearch)
        resultsPage.clickAddToCartBtn()
        cy.viewCart()
        cartPage.typeCouponCode(couponCode)
        cartPage.clickCouponCodeBtn()
        cartPage.clickProceedToCheckoutBtn()
        checkoutPage.clickLoginLink()
        cy.logIn(user, pass)
        checkoutPage.clickLoginBtn()
        checkoutPage.clickBillCountryDdw()
        checkoutPage.enterBillAddress1(billingAdd1)
        checkoutPage.enterBillAddress2(billingAdd2)
        checkoutPage.enterBillCity('Test City 1')
        checkoutPage.enterBillState('Test State 1')
        checkoutPage.enterBillPostCode('111111')
        //checkoutPage.uncheckToDiffShippingAdd()

        checkoutPage.clickShipCountryDdw()
        checkoutPage.enterShipAddress1(ShippingAdd1)
        checkoutPage.enterShipAddress2(ShippingAdd2)
        checkoutPage.enterShipCity('Test City 2')
        checkoutPage.enterShipState('Test State 2')
        checkoutPage.enterShipPostCode('222222')

        checkoutPage.clickAcceptTermsCheck()
        checkoutPage.clickPlaceOrderBtn()

        // Assertions
        checkoutPage.elements.getEntryTitleLbl().invoke('text').should('contain', 'Order received')
        checkoutPage.elements.getThankYouLbl().invoke('text').should('contain', 'Thank you. Your order has been received.')
        checkoutPage.elements.getOrderDetailsLbl().invoke('text').should('contain', 'Order details')
        checkoutPage.elements.getDiscountLbl().invoke('text').should('contain', 'Discount')
        
        // Billing address sent is displayed into order details
        checkoutPage.elements.getBillingAdd1Lbl(billingAdd1).invoke('text').should('contain', billingAdd1)

        // Shipping address sent is displayed into order details
        checkoutPage.elements.getShippingAdd1Lbl(ShippingAdd1).invoke('text').should('contain', ShippingAdd1)
        
    })
    


})