export const PlaceOrder = {
    elements: {
        getCheckBox: () => cy.get('#terms'),
        getToPlaceOrderBtn: () => cy.get('#place_order'),
    },
    checkBox: () => {
        PlaceOrder.elements.getCheckBox().check();
        PlaceOrder.elements.getToPlaceOrderBtn().click();
    },
}