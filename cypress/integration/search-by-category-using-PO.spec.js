/// <reference types="cypress" />

import { ShopByCategoryPage } from '../page-objects/pages/shop-by-category'
import { ProductTile } from '../page-objects/pages/product-tile'
import { CartPage } from '../page-objects/pages/cart'

describe('Search from Category', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should search by category and add product to cart', ()=> {
        ShopByCategoryPage.selectCategory('hoodies')

        ProductTile.addToCart()
        ProductTile.goToCart()

        cy.url().should('include', CartPage.url)
        cy.title().should('include', CartPage.title)
        
        CartPage.elements.getProductNameLnk().invoke('text').should('contain', 'Hoodie with Logo')
        CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain', '$45.00')
    })
})