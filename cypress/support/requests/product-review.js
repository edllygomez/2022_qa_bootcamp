class ProductReviewRequest {
    createReview(reviewText, reviewer, rating = 5) {
        const review = {
            product_id: 39,
            review: reviewText,
            reviewer: reviewer,
            reviewer_email: 'jduran@example.com',
            rating: rating
        };
        return cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products/reviews',
            auth: {
                user: Cypress.env('BOOTCAMP_EMAIL'),
                password: Cypress.env('BOOTCAMP_PASSWORD')
            },
            body: review,
        }).its('body')
        .as('newReview');
    }

    updateReview(id, reviewDetails) {
        return cy.request({
            method: 'PUT',
            url: `/wp-json/wc/v3/products/reviews/${id}`,
            auth: {
                user: Cypress.env('BOOTCAMP_EMAIL'),
                password: Cypress.env('BOOTCAMP_PASSWORD')
            },
            body: reviewDetails,
        });
    }

    deleteReview(id) { // { force: true}
        return cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/reviews/${id}`,
            auth: {
                user: Cypress.env('BOOTCAMP_EMAIL'),
                password: Cypress.env('BOOTCAMP_PASSWORD')
            }
        });
    }

    listProductReviews() {
        return cy.request({
            method: 'GET',
            url: '/wp-json/wc/v3/products/reviews?product=39',
            auth: {
                user: Cypress.env('BOOTCAMP_EMAIL'),
                password: Cypress.env('BOOTCAMP_PASSWORD')
            }
        });
    }
}

export const productReviewRequest = new ProductReviewRequest();