/// <reference types="cypress" />

import { ShopByCategoryPage } from '../page-objects/pages/shop-by-category'
import { ProductTilePage } from '../page-objects/pages/product-tile'

describe('Search from Search Bar', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Search from search bar and Validate that searched product exists', ()=> {
        ShopByCategoryPage.searchForProduct()
        ProductTilePage.validateSearchedProduct()
        
    })
})