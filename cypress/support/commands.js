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

Cypress.Commands.add('login', (email = Cypress.env('BOOTCAMP_EMAIL'), password = Cypress.env('BOOTCAMP_PASSWORD')) => {
    cy.get('.showlogin').click();
    cy.get('#username').type(email, { log: false });
    cy.get('#password').type(password, { log: false });
    cy.get('.woocommerce-form-login__submit').click();
});

Cypress.Commands.add('searchProduct', (product) => {
    cy.get('#woocommerce-product-search-field-0').type(product + '{enter}');
});

Cypress.Commands.add('secondSearchProduct', (product) => {
    cy.get('#search-2 .search-field').type(product + '{enter}');
});