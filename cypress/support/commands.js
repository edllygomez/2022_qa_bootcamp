// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('searchProduct', (productName) => {
    cy.get('#woocommerce-product-search-field-0')
        .type(productName)
        .type('{enter}')
});

Cypress.Commands.add('viewCart', () => {
    cy.get('.cart-contents').click()
});

Cypress.Commands.add('logIn', (user, pass) => {
    cy.get('#username').type(user)
    cy.get('#password').type(pass)
});

Cypress.Commands.add('escapingProductName', (productName) => {
    console.log('product Name: '+productName)
    return productName.replaceAll(' ', '-');
});