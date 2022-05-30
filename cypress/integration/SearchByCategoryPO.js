///<reference types="Cypress"/>

import { ShopByCategoryPage} from '../Page-objects/Pages/Shop-by-category'
import { ProductTile} from '../Page-objects/Pages/Product-tile'
import { CartPage} from '../Page-objects/Pages/Cart'
import { SearchByObjectPage} from '../Page-objects/Pages/Search-by-object'

describe('this is a test search by  ' , () =>{

    beforeEach(()=>{
    cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    })



it('should search by category', () => {
  
ShopByCategoryPage.selectCategory('hoodies');
ProductTile.addToCart();
ProductTile.goToCart();

cy.url().should('include',CartPage.url);
cy.title().should('include',CartPage.title);
CartPage.elements.getProductNameLink().invoke('text').should('contain','\n\t\t\t\t\t\tHoodie with Logo\t\t\t\t\t\t');
CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain','$45.00');


});





it(' Search in the bar by object ', () => {



  SearchByObjectPage.elements.getProductNameBarLink().type('Belt{enter}');
  SearchByObjectPage.elements.getProductNameLbl().invoke('text').should('contain','Belt');
  cy.url().should('include',SearchByObjectPage.urlBelt);
  SearchByObjectPage.elements.getProductSubtotalBarLbl().invoke('text').should('contain','$55.00');
  
  
  
  //cy.get('[id="woocommerce-product-search-field-0"]').type('Belt{enter}');
  //cy.contains('[class="product_title entry-title"]','Belt').should('be.visible');
  //cy.url().should('include','/belt');
  //cy.contains('[class="woocommerce-Price-amount amount"]','$45.00').should('be.visible');

});



});