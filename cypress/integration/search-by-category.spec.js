/// <reference types="cypress" />

describe('Search from Category', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Should search by category and add product to cart', ()=> {
        // Go to Categories and select one (Hoddies)
        cy.get('a[href*=hoodies]').click()
        // Select the first tile/product => Add to cart
        cy.get('[data-product_id="32"]').click()
        
        // Go to cart & Validate
        cy.get('li .added_to_cart').click()
        cy.url().should('include', '/cart/')
        cy.title().should('include', 'Cart')
        cy.contains('[data-title="Product"]', 'Hoodie with Logo').should('be.visible')
        cy.contains('[data-title="Price"]', '$45.00').should('be.visible')
    })
})