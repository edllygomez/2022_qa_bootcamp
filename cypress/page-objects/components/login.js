export class Login{
    
    elements={
        getLoginbtnByclassbtn: ()=>cy.get('.showlogin'),
        getUsernameinpByidinp: ()=>cy.get('#username'),
        getPasswordinpByidinp: ()=>cy.get('#password'),
        getSubmitbtnByclassbtn: ()=>cy.get('.woocommerce-button'),

    }

    //Methods
    userLogin(){
        this.elements.getLoginbtnByclassbtn().click();
        this.elements.getUsernameinpByidinp().click().type('automation');
        this.elements.getPasswordinpByidinp().click().type('automation');
        this.elements.getSubmitbtnByclassbtn().click();
    }
}

export const logingPage = new Login();