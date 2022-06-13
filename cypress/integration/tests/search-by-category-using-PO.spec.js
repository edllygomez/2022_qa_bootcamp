///<reference types="Cypress"/>

import { ProductTilePage } from "../../pages/product-tile"
import { ShopByCategoryPage } from "../../pages/shop-by-category"
import { CartPage } from "../../pages/cart"

describe('Search from Category', () => {

    beforeEach(() => {
        cy.visit('/')
    })//beforeEach

    it('should search by category and add product to cart', () => {
        ShopByCategoryPage.selectCategory('hoodies')
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        cy.url().should('include', CartPage.url)
        cy.title().should('include', CartPage.title)
        CartPage.elements.getProductNameLink().invoke('text').should('contain', 'Hoodie with Logo')
        CartPage.elements.getProductSubtotalLabel().invoke('text').should('contain', '$45.00')
    })//should search by category and add product to cart

    it('should apply valid coupon', () => {
        ShopByCategoryPage.selectCategory('hoodies')
        ProductTilePage.addToCart(0)
        ProductTilePage.goToCart()
        CartPage.applyCoupon('1461 off')
        CartPage.elements.getCouponMessage().should('contain', 'Coupon code applied successfully.')
        CartPage.elements.getCouponInfo().should('be.visible').and('contain','1461 off')
    })//should apply valid coupon

})//describe