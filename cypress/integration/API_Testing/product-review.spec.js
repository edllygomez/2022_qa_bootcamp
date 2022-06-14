/// <reference types='Cypress'/>

import { appRequest } from '../../support/requests'
import { ProductDetailPage } from '../../page-objects/pages/product-detail';
import { ProductReviewPage } from '../../page-objects/pages/product-review';

describe('reviews tests',() => {

    context('CRUD on Product Reviews', () => {
        let product = '';
        let productID = 35;
        let reviewID;

        before(() => {
            
            appRequest.retrieveProduct(productID); 
            ProductDetailPage.obtainProductName().then((productName) => {
                product = productName;
            })
            
            appRequest.createProductReview(productID); 
            ProductReviewPage.obtainReviewId().then((id) => {
                 reviewID = id;
            })                    
        });

        it('should update a products review', () => {
            appRequest.updateProductReview(reviewID, {reviewer: 'Alasaba'})
            ProductDetailPage.navigate(product);            
        })

        it('should delete a products review', () => {
            appRequest.deleteProductReview(reviewID)
            ProductDetailPage.navigate(product);
        })

    });

});