/// <reference types="cypress" />

import { appRequest } from '../support/requests'
import { ProductDetail } from '../page-objects/pages/product-details'
import { v4 as uuid } from 'uuid'

describe('Product test', () => {

    // Variables and Constants
    const user = Cypress.env('user')
    const pass = Cypress.env('pass')
    const productNameEscaped = 'Hoodie-with-Zipper'
    let reviewId = ''
    const newRating = Math.floor(Math.random() * 5) + 1;
    console.log('new rating: '+newRating)

    // Get the product Id given the product name and create a review

    /**************************** IMPORTANT ***************************/
    // NOTE: The API to create products only return the last 10 products
    // If there are a lot of mock data our products could be not in this
    // list, generating an error in the script to get the product ID
    /**************************** IMPORTANT ***************************/
    before(() => {
        appRequest.setUser(user)
        appRequest.setPass(pass)
        
        const promise = appRequest.getProductId()
        promise.then(appRequest.createProductReview)
        ProductDetail.visit(productNameEscaped)
    })
    
    // Update the product review to the product (Hoodie with Zipper)
    it('Update the product review', () => {
        ProductDetail.obtainProductReviewId().then((id) => {
            reviewId = id
            appRequest.updateProductReview(id, newRating)
            ProductDetail.visit(productNameEscaped)
            ProductDetail.clickReviewLink()

            // Validate if product review was updated successful
            ProductDetail.elements.getStarRatingLbl(reviewId).invoke('text').should('eq', newRating.toString())
            ProductDetail.elements.getNewRevieLbl(reviewId).invoke('text').should('contains', 'New review')
        })
    })

    // List all product reviews to the product (Hoodie with Zipper)    
    it('List all product reviews', () => {
        appRequest.listAllProductReviews()
        ProductDetail.visit(productNameEscaped)
        ProductDetail.clickReviewLink()

    })
    
    // Delete the product review to the product (Hoodie with Zipper)
    it('Delete the product review', () => {
        appRequest.deleteProductReview(reviewId)
        ProductDetail.visit(productNameEscaped)
        ProductDetail.clickReviewLink()
        
    })

})