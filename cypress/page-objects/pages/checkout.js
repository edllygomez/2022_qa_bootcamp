export class Checkout{
    
    
    elements={
        getCheckoutbtnByclassBtn: ()=>cy.get('.checkout-button'),

    }

    //Methods
    checkoutbtn(){
        this.elements.getCheckoutbtnByclassBtn().click();
    }
   
}

//cy.get('.checkout-button').click();
export const checkoutPage = new Checkout();