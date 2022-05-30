/// <reference types="cypress" />

import { ShopByCategoryPage } from '../page-objects/pages/shop-by-category'
import { ProductTile } from '../page-objects/pages/product-tile'

describe('Search from Search Bar', () => {

    const productName = 'Zipper'

    beforeEach(() => {
        cy.visit('/')
    })

    it('Search from search bar and Validate that searched product exists', ()=> {
        ShopByCategoryPage.searchForProduct(productName)
        ProductTile.validateSearchedProduct(productName)
    })
})