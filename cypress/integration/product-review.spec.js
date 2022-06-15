/// <reference types="cypress" />

import { ProductDetails } from '../pages/product-details';
import { productReviewRequest } from '../support/requests/product-review';

describe('Product Reviews Test', () => {

    let productName = 'vneck-tee';
    beforeEach(() => {
        productReviewRequest.createReview('Nice tshirt!', 'Gabriel Duran');
        ProductDetails.visit(productName);
    });

    it('Create a product review and navigate to it', () => {
        ProductDetails.selectReviewsTab();
        ProductDetails.elements.getReviewAuthor().should('contain.text', 'Gabriel Duran');
        ProductDetails.elements.getReviewText().last().should('contain.text', 'Nice tshirt!');
        ProductDetails.obtainReviewID().then((id) => {
            productReviewRequest.deleteReview(id);
        });
    });

    it('Update a product review and navigate to it', () => {
        ProductDetails.selectReviewsTab();
        ProductDetails.obtainReviewID().then((id) => {
            productReviewRequest.updateReview(id, {review: 'New review description'});
            ProductDetails.visit(productName);
        });
        ProductDetails.elements.getReviewAuthor().should('contain.text', 'Gabriel Duran');
        ProductDetails.elements.getReviewText().last().should('contain.text', 'New review description');
        ProductDetails.obtainReviewID().then((id) => {
            productReviewRequest.deleteReview(id);
        });
    });

    it('Get all product review', () => {
        productReviewRequest.listProductReviews().then((response) => {
            expect(response.body).to.have.length(2);
        });
        ProductDetails.obtainReviewID().then((id) => {
            productReviewRequest.deleteReview(id);
        });
    });

    it('Delete a product review', () => {
        ProductDetails.elements.getReviewsTab().should('contain.text', '2');
        ProductDetails.obtainReviewID().then((id) => {
            productReviewRequest.deleteReview(id);
        });
        cy.reload();
        ProductDetails.elements.getReviewsTab().should('contain.text', '1');
    });
});