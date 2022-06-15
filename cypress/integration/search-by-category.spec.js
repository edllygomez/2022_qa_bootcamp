///<reference types="Cypress"/>

describe('Search from Category', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should search by category and add product to cart', () => {
    cy.get('a[href*=hoodies]').click();
    cy.get('.add_to_cart_button').first().click();
    cy.get('li .added_to_cart').click();
    cy.url().should('include', '/cart');
    cy.title().should('include','Cart');
    cy.contains('[data-title="Product"]', 'Hoodie with Logo').should('be.visible');
    cy.contains('[data-title="Subtotal"]', "$45.00").should('be.visible');
  });
});