///<reference types="Cypress"/>

import { ProductDetailPage } from '../../../../pages/product-detail'
import { ProductReviewPage } from '../../../../pages/product-review'
import { productRequest } from '../../../../support/productRequests'
import { productReviewsRequest } from '../../../../support/productReviewsRequests'

describe('productReviews tests', () => {

    context('retrieve the product', () => {

        let productID = 38
        let productName = ''
        let productReviewID = ''

        before(() => {
            //preconditions go always on the before/beforeEach
            productRequest.retrieveProduct(productID)
            ProductDetailPage.obtainProductName().then((name) => {
                productName = name
            })
            productReviewsRequest.createProductReview(productID)
            ProductReviewPage.obtainReviewID().then((id) => {
                productReviewID = id
            })
        })//before

        it('Create a review and view it', () => {
            ProductDetailPage.navigate(productName)
            ProductReviewPage.openReviews()
        })//create product and navigate to it

        it('Update product review and view it', () => {
            productReviewsRequest.updateProductReview(productReviewID, { review: 'Updated by PUT' })
            ProductDetailPage.navigate(productName)
            ProductReviewPage.openReviews()
        })//Update product review and view it'

        it('Delete product review and view it', () => {
            ProductDetailPage.navigate(productName)
            ProductReviewPage.openReviews()
            productReviewsRequest.deleteProductReview(productReviewID)
            ProductDetailPage.navigate(productName)
            ProductReviewPage.openReviews()
        })//Delete product review and view it

        it('Check deleted status code', () => {
            productReviewsRequest.retrieveProductReview(productReviewID).then((response)=> {
                expect(response.data.status).to.eq(404)
            })
        })//Check deleted status code

    })//context

})//describe