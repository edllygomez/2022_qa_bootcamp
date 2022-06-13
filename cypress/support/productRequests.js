class ProductRequests {

    createProduct(productName) {
        const product = {
            name: productName,
            type: "simple",
            regular_price: "21.99",
            description: "test test test",
            short_description: "test",
            categories: [
                {
                    id: 16
                }]
        }//const product
        return cy.request({ //return because we will need the response to be saved
            method: 'POST',
            url: '/wp-json/wc/v3/products',
            auth: {
                user: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: product,
        }).its('body')
            .as('newProduct')//global variable where the response will be saved
    }//createProduct

    updateProduct(productID, productDetails) {
        cy.request({
            method: 'PUT',
            url: `/wp-json/wc/v3/products/${productID}`,
            auth: {
                user: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: productDetails,
        })//cy.request
    }//updateProduct

    deleteProduct(productID) {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/${productID}`,
            auth: {
                user: Cypress.env('username'),
                password: Cypress.env('password')
            }
        })//cy.request
    }//updateProduct

}//class

export const ProductRequestPage = new ProductRequests()