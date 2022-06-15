import { v4 as uuid } from 'uuid'

class AppRequests {

    user = ''
    pass = ''
    name = 'Hoodie with Zipper'
    productId = ''

    setUser(userToTest) {
        this.user = userToTest
    }
    
    setPass(passToTest) {
        this.pass = passToTest
    }

    getProductId = () => {
        return new Promise((resolve, reject) => {

            let productName = 'Hoodie with Zipper'

            cy.request({
                method: 'GET',
                url: '/wp-json/wc/v3/products',
                auth: {
                    user: this.user,
                    password: this.pass
                },
                timeout: 2000,
            }).its('body')
            .then((body) => {
                body.forEach(element => {
                    console.log('Name: '+element.name)
                    if (element.name === productName) {
                        resolve(element.id)
                    }
                });
            })

        })

    }

    createProductReview(id) {

        const review = `Nice hoodie with zipper - Test ${uuid()}`
        const reviewer = `User Test - ${uuid()}`
        const reviewerEmail = `user-${uuid()}@domain.test`
        const rating = Math.floor(Math.random() * 5) + 1;

        console.log('review: '+review)
        console.log('reviewer: '+reviewer)
        console.log('reviewerEmail: '+reviewerEmail)
        console.log('rating: '+rating)

        const productReview = {
            product_id: `${id}`,
            review: review,
            reviewer: reviewer,
            reviewer_email: reviewerEmail,
            rating: rating
        }

        return cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products/reviews',
            auth: {
                user: Cypress.env('user'),
                password: Cypress.env('pass')
            },
            body: productReview,
        }).its('body')
        .as('newProductReview')
        
    }
    
    updateProductReview(productReviewId, newRating) {

        console.log('review to edit: '+productReviewId)

        const productReviewUpdated = {
            review: `New review - ${uuid()}`,
            rating: newRating
        }
      
        cy.request({
            method: 'PUT',
            url: `/wp-json/wc/v3/products/reviews/${productReviewId}`,
            auth: {
                user: this.user,
                password: this.pass
            },
            body: productReviewUpdated
        }).its('body')
    }
    
    deleteProductReview(productReviewId) {

        console.log('review to delete: '+productReviewId)
      
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/reviews/${productReviewId}`,
            auth: {
                user: this.user,
                password: this.pass
            }
        }).its('body')
    }
    
    listAllProductReviews() {
      
        return cy.request({
            method: 'GET',
            url: `/wp-json/wc/v3/products/reviews`,
            auth: {
                user: this.user,
                password: this.pass
            }
        }).its('body')
        .as('listProductReviews')
    }

}

export const appRequest = new AppRequests()