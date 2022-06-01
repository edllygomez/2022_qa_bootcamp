///<reference types="Cypress"/>
describe('Search elements', ()=>{
    beforeEach(() =>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    })
    const busqueda = 'cap';
    it('Should search any item in the page',()=>{
        //Look for the search field and Typing the element for to search
        cy.get('#masthead > div.col-full > div.site-search > div')
        .type('Cap {enter}');        
        //Validate if the item is searched
        cy.get('.product_title').should('include', 'Cap');        
    })
});