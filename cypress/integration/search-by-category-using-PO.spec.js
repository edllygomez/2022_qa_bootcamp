///<reference types="Cypress"/>

import { ProductTitle } from "../page-objects/pages/product-title";
import { ShopByCategoryPage } from "../page-objects/pages/shop-by-category";
import { CartPage } from '../page-objects/pages/cart';

describe('Search from Category', () => {

    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    })//beforeEach

    it('should search by category and add product to cart', () => {
        ShopByCategoryPage.selectCategory('hoodies');
        ProductTitle.addToCart(0);
        ProductTitle.goToCart();
        cy.url().should('include', CartPage.url);
        cy.title().should('include', CartPage.title);
        CartPage.elements.getProductNameLink().invoke('text').should('contain', 'Hoodie with Logo');
        CartPage.elements.getProductSubtotalLabel().invoke('text').should('contain', '$45.00');
    });//it

});//describe