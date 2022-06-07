export class LoginPage{


    
    elements ={
    
        getCheckoutBTN: () => cy.contains('button','.checkout-button'),
        getShowLoginBTN: () => cy.contains('button','.showlogin'),
        getUsertName: () => cy.get('[id="username"]'),
        getPasswordName: () => cy.get('#password'),
    

    }
    
  
    
AddUserName(username){
    this.elements.getUsertName().clear().type(username);
 

    //this.elements.getApplyCouponBtn().click();
    
    }


        
AddPassword(password){
  
    this.elements.getPasswordName().clear.type(password);
    }


    
    }
    
    
    
    export const PageLoginPage = new LoginPage();