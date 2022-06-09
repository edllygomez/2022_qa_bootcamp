export class Cart {
    url = '/cart';
    title = 'Cart';
    elements = {
        getProductNameLnk: () => cy.get('[data-title="Product"]'),
        getProductSubTotalLbl: () => cy.get('[data-title="Subtotal"]'),
    }
}

//cy.url().should('include', '/cart');
//cy.title().should('include','Cart');
//cy.contains('[data-title="Product"]', 'Hoodie with Logo').should('be.visible');
//cy.contains('[data-title="Price"]', "$45.00").should('be.visible');

export const CartPage = new Cart();