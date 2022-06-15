export class ProductDetailPage {
    url = '/product'
    elements = {
        getReviewLnk: () => cy.get('[href="#tab-reviews"]'),
        getStarRatingLbl: (reviewId) => cy.get(`#comment-${reviewId} .star-rating .rating`),
        getNewRevieLbl: (reviewId) => cy.get(`#comment-${reviewId} .description`),
    }

    clickReviewLink() {
        this.elements.getReviewLnk().click()
    }

    visit(productName) {
        //const productNameEscaped = cy.escapingProductName(productName)
        cy.visit(`this.url/${productName}`)
    }

    obtainProductReviewId() {
        return cy.get('@newProductReview').then((productReviewInfo) => {
            //console.log('reviewId: '+productReviewInfo.id)
            return productReviewInfo.id
        })
    }

}

export const ProductDetail = new ProductDetailPage()