export class ProductDetailPage {
    url = '/product';
    elements = {
        getReviewLnk: () => cy.get('[href="#tab-reviews"'),
        getStarRatingLbl: (reviewID) => cy.get()

    };

    clickReviewLnk(){
        this.elements.getReviewLnk().click()
    }

    visit(productName){
    cy.visit(`this.url/${productName}`)
    }

    getReviewId() {
        return cy.get('@newProductReview').then((productReviewInfo) => {
            return productReviewInfo.id
        })
    }

};

export const ProductDetail = new ProductDetailPage();