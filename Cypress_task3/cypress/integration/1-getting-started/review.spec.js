///<reference types = "Cypress"/>

import{ appRequestPage}from '../../support/request';
import{ reviewDetailPage}from '../pages/review-detail'
//autogenera numeros al azar
import{v4 as uuid} from 'uuid';

describe ('CRUD product review test cases', ()=>{
    let reviewDescription ='';
    let reviewerName ='';
    let reviewerEmail ='';
   // let reviewRating ='';   "rating": 4
    let user = Cypress.env('user')
    let password = Cypress.env('password')
    
    context('Test1', () =>{
        beforeEach(()=>{

        reviewDescription =`Review-${uuid()}`;
        reviewerName = `Adriana Castelblanco-${uuid()}`;
        reviewerEmail = `A.Castelblanco-${uuid()}@gaptest.com`;
        appRequestPage.createReview(reviewDescription,reviewerName,reviewerEmail, user, password);
        })
        
         it ('create a review for a product',()=>{
           reviewDetailPage.visit(reviewDescription);
       
         });

         it ('Update a review for a product',()=>{
                reviewDetailPage.obtainId().then((id)=>{
                appRequestPage.updateReview(id,{review:'this is update for Test',reviewer:'Katerin Junco',reviewer_email:'reviewtesting@testing.com'},user,password);
                reviewDetailPage.visit(reviewDescription);
            })
          });

          it ('Delete product review',()=>{
                reviewDetailPage.obtainId().then((id)=>{
                appRequestPage.deleteReview(id, user,password);
                reviewDetailPage.visit(reviewDescription);
              })
            });

    });
});