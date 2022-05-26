///<reference types="Cypress"/>
import { ProductTitle } from '../page-objects/pages/product-title';
import {shopByCategoryPage} from '../page-objects/pages/shop-by-category';
import {CartPage} from '../page-objects/pages/cart';
describe('Search from Category', ()=>{
    beforeEach(() =>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });

    it('should search by category and add product to cart', ()=>{
        //go to categories and select 1 (Hoodies)
        shopByCategoryPage.selectCategory('hoodies');
        ProductTitle.addToCart(0);
        ProductTitle.goToCart();
        CartPage.elements.getProductNameLnk().invoke('text').should('contain', 'Hoddie with Logo');
        CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain', '$45.00');
    });
});