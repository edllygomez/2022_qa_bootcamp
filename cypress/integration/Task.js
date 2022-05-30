///<reference types="Cypress"/>

describe('this is a test search by category ' , () =>{

    //beforeeach se cubren precondiciones el before solo se hace una vez el befoeach se corre antes de cada uno de los test 

    beforeEach(()=>{

        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    
    })
// este es el comando para decir que es un test it

it('should search by category',()=>{
    //go to category
cy.get('a[href*=hoodies]').click();
  //select the first title 
cy.get('.add_to_cart_button').first().click();
  //go to cart & validate 
cy.get('li.added_to_cart_button').click();
cy.url().should('include','/cart');
cy.title().should('include','Cart');
cy.contains('[data-title="Product"]','Hoodie with Logo').should('be.visible');




});

});