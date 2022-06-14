///<reference types ="cypress"/>

import {AppRequestPage} from '../support/requests';
import {ProductDetail} from '../Pages/product-detail';
import {v4 as uuid} from 'uuid';
//libreria uuid crea nombres aleatorios
let ProductName ='cap';



describe('porduct test', ()=>{

    context('test 1', ()=>{

        let ProductName ='cap';
        let IncrementalId

        beforeEach(function() {
              //SEARCH PRODUCT
              AppRequestPage.getProduct(ProductName);
              ProductDetail.obtainProduct().then((id)=>{
               AppRequestPage.createReview(id).then(($IncrementalId)=>{
                IncrementalId = $IncrementalId
            });
               
              

              

                cy.log(IncrementalId);

               })
          })
      

        it('Create review and navigate to it',() =>{
            
            cy.log(IncrementalId);
            ProductDetail.visit(ProductName);
            
            
          
        });

        it('Update Review and navigate to it ',() =>{

           ProductDetail.obtainID().then((id)=>{
           ProductDetail.visit(ProductName);
           AppRequestPage.updateReview(id,{review: 'testing update'});

         //  AppRequestPage.updateReview(IncrementalId,{review: 'testing update'});
         //IncrementalId is sending an object instead of id 
                
            })
          
          });

          //afterEach
          it('Delete Review and navigate to it ',() =>{
            let force=true;
            ProductDetail.visit(ProductName);
            ProductDetail.obtainID().then((id)=>{
                AppRequestPage.deleteReview(id, force);
                ProductDetail.visit(ProductName);
            })
          
          });







    });





});