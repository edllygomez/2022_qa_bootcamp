/// <reference types='Cypress'/>

import { ShopByCategoryPage } from '../page-objects/pages/shop-by-category'
import { ProductTitle } from '../page-objects/pages/product-tile'
import { CartPage } from '../page-objects/pages/cart'

describe('Search from Category', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should search by category and add product to cart', () => {
        ShopByCategoryPage.selectCategory('hoodies'); // Hace esto -> cy.get('ul li a[href*=hoodies]').click({force: true});
        ProductTitle.addToCart(0); // Hace esto -> cy.get('.add_to_cart_button').first().click();
        ProductTitle.goToCart(); // Hace esto -> cy.get('li .added_to_cart').click();
        cy.url().should('include', CartPage.url); // Hace esto -> cy.url().should('include', '/cart');
        cy.title().should('include', CartPage.title); // Hace esto -> cy.title().should('include', 'Cart');
        CartPage.elements.getProductNameLnk().invoke('text').should('contain', 'Hoodie with Logo'); // Hace esto -> cy.contains('[data-title="Product"]', 'Hoodie with Logo').should('be.visible');
        CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain', '$45.00'); // Hace esto -> cy.contains('[data-title="Price"]', '$45').should('be.visible');
    })

    it.only('should apply valid coupon', () => {
        ShopByCategoryPage.selectCategory('hoodies');
        ProductTitle.addToCart(0); 
        ProductTitle.goToCart(); 
        CartPage.applyCoupon('1461 off');
        CartPage.elements.getCouponMsg().should('contain.text', 'Coupon code applied successfully.');
        CartPage.elements.getCouponInfo().should('be.visible').and('contain.text', '1461 off');
    })

})