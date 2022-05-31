/// <reference types="Cypress"/>
import {SearcProductPage} from '../page-objects/Search-product'
import {ProductPage} from '../page-objects/product'
 
describe('Search Vneck', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Search a product', ()=> {
        //Search text
       
        SearcProductPage.startSearch('Vneck');
        //Verify the result
        ProductPage.elements.getProductSearch().invoke('text').should('contain','Vneck');
    

    })
})