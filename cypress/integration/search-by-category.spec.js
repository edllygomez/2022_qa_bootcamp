/// <reference types='Cypress'/>

describe('Search from Category', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should search by category and add product to cart', () => {
        // Go to Categories and select 1 (Hoodies)
        cy.get('ul li a[href*=hoodies]').click({force: true});
        // Select the first title/product => add to cart
        cy.get('.add_to_cart_button').first().click();
        // Go to cart and validate
        cy.get('li .added_to_cart').click();
        cy.url().should('include', '/cart');
        cy.title().should('include', 'Cart');
        cy.contains('[data-title="Product"]', 'Hoodie with Logo').should('be.visible');
        cy.contains('[data-title="Price"]', '$45').should('be.visible');

    })

})