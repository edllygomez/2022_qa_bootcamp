/// <reference types='Cypress'/>

import { CartPage } from '../page-objects/pages/cart'
import { CheckoutPage } from '../page-objects/pages/checkout'
import { OrderDetailsPage } from '../page-objects/pages/order-detail'
import { ProductTitle } from '../page-objects/pages/product-tile'
import { ShippingAddressPage } from '../page-objects/pages/shipping-address'
import { ShopByCategoryPage } from '../page-objects/pages/shop-by-category'

describe('Complete an order', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('should complete an order applying a coupon', () => {
        ShopByCategoryPage.selectCategory('hoodies');
        ProductTitle.addToCart(0); 
        ProductTitle.goToCart(); 
        CartPage.applyCoupon('1461 off');
        CartPage.elements.getCouponMsg().should('contain.text', 'Coupon code applied successfully.');
        CartPage.elements.getCouponInfo().should('be.visible').and('contain.text', '1461 off');
        CartPage.proceedToCheckout();
        CheckoutPage.login(Cypress.env('username'), Cypress.env('password'));
        CheckoutPage.acceptTermsAndConditions();
        CheckoutPage.placeOrder();
        OrderDetailsPage.elements.getConfirmationTitle().should('contain.text', 'Order received');
    })
    
    it('should complete an order without applying a coupon', () => {
        ShopByCategoryPage.selectCategory('hoodies');
        ProductTitle.addToCart(0); 
        ProductTitle.goToCart(); 
        CartPage.proceedToCheckout();
        CheckoutPage.login(Cypress.env('username'), Cypress.env('password'));
        CheckoutPage.acceptTermsAndConditions();
        CheckoutPage.placeOrder();
        OrderDetailsPage.elements.getConfirmationTitle().should('contain.text', 'Order received');
    })

    it('should complete an order with the same shipping address as the billing address', () => {
        ShopByCategoryPage.selectCategory('hoodies');
        ProductTitle.addToCart(0); 
        ProductTitle.goToCart(); 
        CartPage.proceedToCheckout();
        CheckoutPage.login(Cypress.env('username'), Cypress.env('password'));
        CheckoutPage.acceptTermsAndConditions();
        CheckoutPage.useSameBillingAddressForShipping();
        CheckoutPage.placeOrder();
        OrderDetailsPage.elements.getConfirmationTitle().should('contain.text', 'Order received');
    })

    it('should complete an order with a different shipping address', () => {
        ShopByCategoryPage.selectCategory('hoodies');
        ProductTitle.addToCart(0); 
        ProductTitle.goToCart(); 
        CartPage.proceedToCheckout();
        CheckoutPage.login(Cypress.env('username'), Cypress.env('password'));
        ShippingAddressPage.setFirstName('Ronulfo');
        ShippingAddressPage.setLastName('León')
        ShippingAddressPage.setStreetAddress('Barrio Mónaco')
        ShippingAddressPage.setState('Limón')
        CheckoutPage.acceptTermsAndConditions();
        CheckoutPage.placeOrder();
        OrderDetailsPage.elements.getConfirmationTitle().should('contain.text', 'Order received');
    })


})
