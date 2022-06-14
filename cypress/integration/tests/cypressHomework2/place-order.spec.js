///<reference types="Cypress"/>

import { ProductTilePage } from '../../../pages/product-tile'
import { CartPage } from '../../../pages/cart'
import { CheckoutPage } from '../../../pages/checkout'
import { OrderReceivedPage } from '../../../pages/order-received'

describe('Place an order', () => {
    let searchCriteria = 'Hoodie'
    let coupon = '1461 off'

    beforeEach(() => {
        cy.visit('/')
    })//beforeEach

    it('should search a product and add it to the cart', () => {
        cy.searchProduct(searchCriteria)
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        cy.url().should('include', CartPage.url)
        cy.title().should('include', CartPage.title)
        CartPage.elements.getProductNameLink().invoke('text').should('contain', 'Hoodie with Logo')
        CartPage.elements.getProductSubtotalLabel().invoke('text').should('contain', '$45.00')
    })//should search a product and add it to the cart

    it('should apply a valid coupon to the cart and proceed to checkout page', () => {
        cy.searchProduct(searchCriteria)
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        CartPage.applyCoupon(coupon)
        CartPage.elements.getCouponMessage().should('contain', 'Coupon code applied successfully.')
        CartPage.elements.getCouponInfo().should('be.visible').and('contain', '1461 off')
        CartPage.proceedToCheckout()
        CheckoutPage.verifyCheckoutElements()
    })//should search a product and add it to the cart

    it('should login with valid credentials, proceed to checkout and apply a valid coupon', () => {
        cy.searchProduct(searchCriteria)
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        CartPage.proceedToCheckout()
        CheckoutPage.verifyCheckoutElements()
        CheckoutPage.loginWithValidCredentials()
        CheckoutPage.applyValidCoupon()
    })//should login with valid credentials and apply a valid coupon

    it('should login, proceed to checkout, apply coupon and place an order with the same address', () => {
        cy.searchProduct(searchCriteria)
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        CartPage.proceedToCheckout()
        CheckoutPage.loginWithValidCredentials()
        CheckoutPage.applyValidCoupon()
        CheckoutPage.fillBillingDetailsForm()
        CheckoutPage.uncheckShipToDifferentAddress()
        CheckoutPage.placeOrderWithTerms()
        OrderReceivedPage.verifyOrderReceivedElements()
    })//should login, proceed to checkout, apply coupon and place an order with the same address

    it('should login, proceed to checkout, apply coupon and place an order with different address', () => {
        cy.searchProduct(searchCriteria)
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        CartPage.proceedToCheckout()
        CheckoutPage.loginWithValidCredentials()
        CheckoutPage.applyValidCoupon()
        CheckoutPage.fillBillingDetailsForm()
        CheckoutPage.fillShipToDifferentAddressForm()
        CheckoutPage.placeOrderWithTerms()
        OrderReceivedPage.verifyOrderReceivedElements()
    })//should login, proceed to checkout, apply coupon and place an order with different address

    it('should login, proceed to checkout, apply coupon, place an order with the same address without terms', () => {
        cy.searchProduct(searchCriteria)
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        CartPage.proceedToCheckout()
        CheckoutPage.loginWithValidCredentials()
        CheckoutPage.applyValidCoupon()
        CheckoutPage.fillBillingDetailsForm()
        CheckoutPage.uncheckShipToDifferentAddress()
        CheckoutPage.placeOrderWithoutTerms()
        OrderReceivedPage.verifyOrderReceivedElements()
    })//should login, proceed to checkout, apply coupon, place an order with the same address without terms

})//describe