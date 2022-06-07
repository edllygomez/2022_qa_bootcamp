export class OrderDetails {
    elements = {
        getBillingAddress: () => cy.get('.woocommerce-column--billing-address'),
        getShippingAddress: () => cy.get('.woocommerce-column--shipping-address'),
        getTableElement: (element) => cy.get('.woocommerce-table--order-details tfoot tr').contains(element),
    }

    getTableElementValue(element){
        return this.elements.getTableElement(element).parent().within(() => {
            cy.get('td');
        })
    }
}

export const orderDetailsPage = new OrderDetails();