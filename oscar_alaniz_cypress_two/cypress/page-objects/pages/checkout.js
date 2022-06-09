export const Checkout = {
    Elements: {
        getProceedToCheckoutBtn: () => cy.get('.checkout-button'),
    },
    ProceedToCheckoutBtn: () => {
        Checkout.Elements.getProceedToCheckoutBtn().click();
    }
}