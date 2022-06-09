export const Login = {
    elements: {
        getToLogin: () => cy.get('.showlogin'),
        getToUsername: () => cy.get('#username'),
        getToPassword: () => cy.get('#password'),
        getToLoginBtn: () => cy.get('.woocommerce-form-login__submit'),
    },

    clickLogin: () => {
        Login.elements.getToLogin().click();
        Login.elements.getToUsername().type('automation');
        Login.elements.getToPassword().type('automation');
        Login.elements.getToLoginBtn().click();
    },
}