import {v4 as uuid} from 'uuid';

class AppRequest {
    

    // --------------------------------PRODUCT REQUESTS--------------------------------

    retrieveProduct(productID) {
        return cy.request({
            method: 'GET',
            url: `/wp-json/wc/v3/products/${productID}`,
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            }
        }).its('body')
        .as('retrievedProduct')
    }
    
    createProduct(productName){
        const product = {
            name: productName,
            type: 'simple',
            regular_price: '21.99',
            description: 'Exercitation tempor esse laboris Lorem non excepteur commodo tempor reprehenderit.',
            short_description: 'Exercitation tempor esse laboris',
            categories: [
                {
                    id: 16
                }]
        };
        return cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products',
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: product,
        }).its('body')
        .as('newProduct')
    }
    
    updateProduct(productID, productDetails) {
        cy.request({
            method: 'PUT',
            url: `/wp-json/wc/v3/products/${productID}`,
            auth: { 
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: productDetails            
        })
    }

    deleteProduct(productID) {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/${productID}`,
            auth: { 
                username: Cypress.env('username'),
                password: Cypress.env('password')
            }
        })
    }


    // --------------------------------PRODUCT REVIEW REQUESTS--------------------------------

    createProductReview(productID) {
        const review = {
            product_id: productID,
            review: `Review-${uuid()}`,
            reviewer: "Juan López",
            reviewer_email: "juan.lopez@example.com",
            rating: 5
        };
        return cy.request({
            method: 'POST',
            url: `/wp-json/wc/v3/products/reviews`,
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: review,
        }, {failOnStatusCode: false}).its('body')
        .as('newProductReview')
    }

    updateProductReview(reviewID, reviewDetails) {
        cy.request({
            method: 'PUT',
            url: `/wp-json/wc/v3/products/reviews/${reviewID}`,
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: reviewDetails
        }, {failOnStatusCode: false})
    }

    deleteProductReview(reviewID) {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/reviews/${reviewID}`,
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
        })
    }
}

export const appRequest = new AppRequest();