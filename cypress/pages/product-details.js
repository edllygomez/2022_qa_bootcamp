export class ProductDetailPage {
    url = '/product';
    elements = {
        getReviewsTab: () => cy.get('#tab-title-reviews'),
        getReviewAuthor: () => cy.get('.woocommerce-review__author'),
        getReviewText: () => cy.get('.comment-text .description p'),
    }

    visit(productName) {
        cy.visit(`this.url/${productName}`, { failOnStatusCode: false });
    }

    selectReviewsTab() {
        this.elements.getReviewsTab().click();
    }

    obtainID() {
        return cy.get('@newProduct').then((productInfo) => {
            return productInfo.id;
        });
    }

    obtainReviewID() {
        return cy.get('@newReview').then((reviewInfo) => {
            return reviewInfo.id;
        });
    }
}

export const ProductDetails = new ProductDetailPage();