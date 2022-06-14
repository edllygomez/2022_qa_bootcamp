class ProductReview {
    url = '/products/reviews/';

    elements = {
        // UI Elements
    }

 
    obtainReviewId() {
        return cy.get('@newProductReview').then((reviewInfo) => {
            return reviewInfo.id;
        });
    }
}

export const ProductReviewPage = new ProductReview();