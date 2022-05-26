export class Cart{
    url='/cart';
    title='Cart';

    elements = {
        getProductName: ()=> cy.get('[data-title="Product"]'),
        getProductSubtotalLbl: ()=> cy.get('[data-title="Subtotal"]'),
    }
}

