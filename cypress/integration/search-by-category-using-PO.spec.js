///<reference types="Cypress"/>
import { ShopByCategoryPage } from '../page-objects/pages/shop-by-category'
import { ProductTilePage } from '../page-objects/pages/product-tile'
import { CartPage } from '../page-objects/pages/cart'

describe('Search from Category', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should search by category and add product to cart', () => {
    ShopByCategoryPage.selectCategory('hoodies');
    ProductTilePage.addToCart(0);
    ProductTilePage.goToCart();
    cy.url().should('include', CartPage.url);
    cy.title().should('include', CartPage.title);
    CartPage.elements.getProductNameLnk().invoke('text').should('contain', 'Hoodie with Logo');
    CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain', '$45.00');
  });

  it('should apply valid coupon', () => {
    ShopByCategoryPage.selectCategory('hoodies');
    ProductTilePage.addToCart(0);
    ProductTilePage.goToCart();
    CartPage.applyCoupon('1461 off');
    CartPage.elements.getCouponMsg().should('contain.text', 'Coupon code applied successfully.');
    CartPage.elements.getCouponInfo().should('be.visible').and('contain.text', '1461 off');
  });
});