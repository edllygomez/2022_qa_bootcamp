///<reference types="Cypress"/>

import { searchBar } from "../page-objects/components/search-bar";
import { productPage } from "../page-objects/pages/product-page";

describe('My test', () => {
    beforeEach(()=> {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    })

    it('should search by product', ()=> {
        searchBar.searchProduct('Logo');
        productPage.getProductTitle().should('contain.text', 'Logo');
    })
});