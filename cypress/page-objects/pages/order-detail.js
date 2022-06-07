export class OrderDetails {
    
    elements = {
        getConfirmationTitle: () => cy.get('.entry-title'),
    }

}

export const OrderDetailsPage = new OrderDetails();