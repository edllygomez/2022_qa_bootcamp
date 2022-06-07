/// <reference types="cypress" />

import { ProductTilePage } from '../page-objects/pages/product-tile'
import { CartPage } from '../page-objects/pages/cart'
import { CheckoutPage } from '../page-objects/pages/checkout'
import { OrdersPage } from '../page-objects/pages/orders'

describe('Search from Category', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should search by category and add product to cart', ()=> {
        cy.searchForProduct('hoodie')

        ProductTilePage.addToCart()
        ProductTilePage.goToCart()

        cy.url().should('include', CartPage.url)
        cy.title().should('include', CartPage.title)
        
        CartPage.elements.getProductNameLnk().invoke('text').should('contain', 'Hoodie with Logo')
        CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain', '$45.00')
    })

    it('Should apply a valid coupon', ()=> {
        cy.searchForProduct('hoodie')
        ProductTilePage.addToCart()
        ProductTilePage.goToCart()
        CartPage.applyCoupon('1461 off')
        CartPage.elements.getCouponMsg().should('contain.text', 'Coupon code applied successfully.')
        CartPage.elements.getCartDiscountInfo().should('be.visible').and('contain.text', '1461 off')
        CartPage.clickProceedToCheckout()
        CheckoutPage.validatePageElements()
        CheckoutPage.loginWithValidCredentias()
    })

    it('Should Login with Valid Credentials and Apply a coupon', ()=> {
        cy.searchForProduct('hoodie')
        ProductTilePage.addToCart()
        ProductTilePage.goToCart()
        CartPage.clickProceedToCheckout()
        CheckoutPage.validatePageElements()
        CheckoutPage.loginWithValidCredentias()
        CheckoutPage.applyValidCoupon()
    })

    it('Should Login with Valid Credentials, apply coupon and place order with default shipping address ', ()=> {
        cy.searchForProduct('hoodie')
        ProductTilePage.addToCart()
        ProductTilePage.goToCart()
        CartPage.clickProceedToCheckout()
        CheckoutPage.validatePageElements()
        CheckoutPage.loginWithValidCredentias()
        CheckoutPage.applyValidCoupon()
        CheckoutPage.fillDefaultForm()
        CheckoutPage.uncheckDifferentAddress()
        CheckoutPage.clickPlaceOrder()
        OrdersPage.validateOrderElements()
    })

    it('Shipping to a different address', ()=> {
        cy.searchForProduct('hoodie')
        ProductTilePage.addToCart()
        ProductTilePage.goToCart()
        CartPage.clickProceedToCheckout()
        CheckoutPage.validatePageElements()
        CheckoutPage.loginWithValidCredentias()
        CheckoutPage.fillDiffentShipmentForm()
        CheckoutPage.clickPlaceOrder()
        OrdersPage.validateOrderElements()
    })
})