/// <reference types="cypress" />

import { appRequest } from "../support/requests";
import { ProductDetail, ProductReview } from "../page-objects/components/product-review";
import { v4 as uuid } from 'uuid'

describe('Add a product review'), () => {

    //Variables 
    const user = Cypress.env('username');
    const pass = Cypress.env('password');
    const productName = 'Belt';
    let reviewId = '';
    const newRating = Math.floor(Math.random() * 5) +1;
    console.log('new rating' + newRating)

    before(()=>{
        appRequest.setUser(user)
        appRequest.setPass(pass)

        const promise = appRequest.getProductID()
        promise.then(appRequest.createProductReview)
        ProductDetail.visit(productName)
    })

    // UPDATE 
    it('Update the review of the product'), () => {
        ProductDetail.getReviewID().then((id)  =>{
            reviewId = id
            appRequest.updateReview(id, newRating)
            ProductDetail.visit(productName)
            ProductDetail.clickReviewLink()

            ProductDetail.elements.getStarRatingLbl(reviewId).invoke('text').should('eq', newRating.toString())
            ProductDetail.elements.getNewReviewLbl(reviewId).invoke('text').should('contains', 'New Review')
        })
    }

    // DELETE 



};