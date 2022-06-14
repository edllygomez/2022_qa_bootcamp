export class ProductReview {
    url = '/product/'

    elements = {
        getReviewLink: () => cy.get('#tab-title-reviews'),
    }//elements array

    openReviews() {
        this.elements.getReviewLink().click()
    }//openReviews

    obtainReviewID() {
        return cy.get('@newProductReview').then((productReviewInfo) => {
            return productReviewInfo.id
        })
    }//obtainID


}//ProductReview class

export const ProductReviewPage = new ProductReview()