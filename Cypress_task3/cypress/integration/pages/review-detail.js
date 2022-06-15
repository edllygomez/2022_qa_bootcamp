export class reviewDetail{
    url = '/product';
    elements = {

    };
    visit(reviewDescription){
        cy.visit('this.url/beanie');
    }
     
    obtainId(){
        return cy.get('@newReview').then((reviewInfo) =>{
            console.log(reviewInfo);
            return reviewInfo.id;
        });
    }
};

export const reviewDetailPage = new reviewDetail();