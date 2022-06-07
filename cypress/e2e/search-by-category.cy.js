///<reference types="Cypress"/>

import { shopByCategoryPage } from "../page-objects/pages/shop-by-category";
import { productTitlePage } from "../page-objects/pages/product-title";
import { cartPage } from "../page-objects/pages/cart";

describe('Search by Category', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('should search by category and add product to cart', () => {
    shopByCategoryPage.selectCategory('hoodies');
    productTitlePage.addToCart();
    productTitlePage.goToCart();
    cy.url().should('include', cartPage.url);
    cy.title().should('include', cartPage.title);
    cartPage.elements.getProductNameLink().invoke('text').should('contain', 'Hoodie with Logo');
    cartPage.elements.getProductSubtotalLbl().invoke('text').should('contain', '$45.00');
  })

  it('should apply valid coupon', () => {
    shopByCategoryPage.selectCategory('hoodies');
    productTitlePage.addToCart();
    productTitlePage.goToCart();
    cartPage.applyCoupon('1461 off');
    cartPage.elements.getCouponMsg().should('contain.text', 'Coupon code applied successfully.');
    cartPage.elements.getCouponInfo().should('be.visible').and('contain.text', '1461 off');
  })
})
