class AppRequests{
    createReview(reviewDescription,reviewerName,reviewerEmail,user, password){
        const review ={
        "product_id": 28,
        "review": reviewDescription,
        "reviewer": reviewerName,
        "reviewer_email": reviewerEmail,
        "rating": 4
    };
    return cy.request({
        method:'POST',
        url:'/wp-json/wc/v3/products/reviews',
        auth: {
            user: user,
            password:password,
        },
        body: review,
    }).its('body')
     .as('newReview');
  }
    updateReview(reviewId, reviewDetail,user,password){
      return cy.request({
       method:'PUT',
       url:`/wp-json/wc/v3/products/reviews/${reviewId}`,
       auth: {
        user: user,
        password:password,
    },
       body: reviewDetail,
   })
 } 
    deleteReview(reviewId,user,password){
     cy.request({
     method:'DELETE',
     url:`/wp-json/wc/v3/products/reviews/${reviewId}`,
     auth: {
        user: user,
        password:password,
    },
 })
} 
   

}
export const  appRequestPage = new AppRequests();
