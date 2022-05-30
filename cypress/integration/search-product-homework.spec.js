/// <reference types="cypress" />

import { ShopByCategoryPage } from '../page-objects/pages/shop-by-category'
import { ProductTile } from '../page-objects/pages/product-tile'

describe('Search from Category', () => {

    const productName = 'Zipper'

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should search by category and add product to cart', ()=> {
        ShopByCategoryPage.searchForProduct(productName)
        ProductTile.validateSearchedProduct(productName)
    })
})