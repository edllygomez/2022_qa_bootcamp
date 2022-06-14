export class OrderReceived {

    url = '/order-received/'

    elements = {
        //Order received
       getOrderReceivedTitle: () => cy.get('.entry-title'),
        getOrderReceivedMessage: () => cy.get('.woocommerce-notice'),
        //Order over view
        getOrderOverViewUl: () => cy.get('.woocommerce-order-overview '),
        //Order details
        getOrderDetailsTitle: () => cy.get('.woocommerce-order-details'),
        getOrderDetailsTable: () => cy.get('.woocommerce-table'),
        getBillingAddressSection: () => cy.get('.woocommerce-column--1'),
        getShippingAddressSection: () => cy.get('.woocommerce-column--2'),
        getEditLink: () => cy.get('.post-edit-link'),
    }//elements

    verifyOrderReceivedElements() {
        //assertions should be done in the test not in the page
        cy.url().should('include', this.url)
        this.elements.getOrderReceivedTitle().should('contain', 'Order received')
        this.elements.getOrderReceivedMessage().should('contain', 'Thank you. Your order has been received.')
        this.elements.getOrderOverViewUl().should('be.visible')
        this.elements.getOrderDetailsTitle().should('contain', 'Order details')
        this.elements.getOrderDetailsTable().should('be.visible')
        this.elements.getBillingAddressSection().should('be.visible')
        this.elements.getShippingAddressSection().should('be.visible')
        this.elements.getEditLink().should('be.visible')
    }//verifyOrderReceivedInformation

}//class OrderReceived

export const OrderReceivedPage = new OrderReceived()