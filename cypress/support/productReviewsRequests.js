import { v4 as uuid } from 'uuid'

class ProductReviewsRequests {

    createProductReview(productID) {
        const productReview = {
            product_id: productID,
            review: `Review-${uuid()}`,
            reviewer: "Yeimy User",
            reviewer_email: "yeimy@test.com",
            rating: "5"
        }//const productReview
        return cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products/reviews',
            auth: {
                user: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: productReview,
        }).its('body')
            .as('newProductReview')
    }//createProductReview

    updateProductReview(productReviewID, productReviewDetails) {
        cy.request({
            method: 'PUT',
            url: `/wp-json/wc/v3/products/reviews/${productReviewID}`,
            auth: {
                user: Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: productReviewDetails,
        })//cy.request
    }//updateProductReview

    deleteProductReview(productReviewID) {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/reviews/${productReviewID}?force=true`,
            auth: {
                user: Cypress.env('username'),
                password: Cypress.env('password')
            }
        })//cy.request
    }//deleteProduct

    retrieveProductReview(productReviewID) {
        return cy.request({
            method: 'GET',
            url: `/wp-json/wc/v3/products/reviews/${productReviewID}`,
            failOnStatusCode: false,
            auth: {
                user: Cypress.env('username'),
                password: Cypress.env('password')
            }
        }).its('body')
            .as('getProductReviewResponse')
    }//retrieveProductReview

}//class

export const productReviewsRequest = new ProductReviewsRequests()