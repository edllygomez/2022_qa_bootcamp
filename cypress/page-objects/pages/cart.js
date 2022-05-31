export class Cart {

    url = '/cart';
    title = 'Cart';

    elements = {
        getProductNameLink: () => cy.get('[data-title="Product"]'),
        getProductSubtotalLabel: () => cy.get('[data-title="Price"]'),
    }//elementsArray

}//Class

// cy.url().should('include', '/cart');
// cy.title().should('include', 'Cart');
//cy.contains('[data-title="Product"]', 'Hoodie with Logo').should('be.visible');
//cy.contains('[data-title="Price"]', "$45.00").should('be.visible');

export const CartPage = new Cart();