export class Orders {
    url = '/order-received/'

    elements = {
        getOrderHeader: () => cy.get('.entry-title'),
        getOrderMessage: () => cy.get('.woocommerce-notice')
    }

    validateOrderElements(){
        cy.url().should('include', this.url)
        this.elements.getOrderHeader().should('contain.text', 'Order received')
        this.elements.getOrderMessage().should('contain.text', 'Thank you. Your order has been received.')
    }

}

export const OrdersPage = new Orders()