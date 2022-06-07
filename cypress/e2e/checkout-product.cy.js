///<reference types="Cypress"/>

import { billingDetailsForm } from "../page-objects/components/billing-form";
import { shippingForm } from "../page-objects/components/shipping-form";
import { cartPage } from "../page-objects/pages/cart";
import { checkoutPage } from "../page-objects/pages/checkout";
import { orderDetailsPage } from "../page-objects/pages/order-details";
import { productTitlePage } from "../page-objects/pages/product-title";

describe('Chechout a Product', () => {

    beforeEach(() => {
        cy.visit('/');
        productTitlePage.addProductToCart('hoodie');
        cartPage.applyCoupon('1461 off');
        cartPage.proceedToCheckout();
        cy.login().wait(1000);
    })

    it('should place order with default billing address', () => {
        billingDetailsForm.fillBillingAddress();
        shippingForm.fillShippingAddress();
        checkoutPage.acceptTermsAndConditions();
        checkoutPage.clickPlaceOrderBtn();
        orderDetailsPage.elements.getBillingAddress().should('contain.text', 'Luis Urena');
        orderDetailsPage.elements.getShippingAddress().should('contain.text', 'Luis Fernando Urena');
    })
  
    it('should place order with different billing address', () => {
        billingDetailsForm.fillBillingAddress('Gabriel', 'Duran', 'Costa Rica', 'Terrazas del Este', 'Quesada', 
            'Alajuela', '21001', '8888-8888', 'jduran@wearegap.com');
        checkoutPage.acceptTermsAndConditions();
        checkoutPage.clickPlaceOrderBtn();
        orderDetailsPage.elements.getBillingAddress().should('contain.text', 'Gabriel Duran');
        orderDetailsPage.elements.getBillingAddress().should('contain.text', 'Costa Rica');
        orderDetailsPage.elements.getBillingAddress().should('contain.text', 'Terrazas del Este');
        orderDetailsPage.elements.getBillingAddress().should('contain.text', 'Quesada');
        orderDetailsPage.elements.getBillingAddress().should('contain.text', '21001');
        orderDetailsPage.elements.getBillingAddress().should('contain.text', 'jduran@wearegap.com');
    })

    it('should place order with different shipping address', () => {
        shippingForm.fillShippingAddress('Gabriel', 'Duran', 'Costa Rica', 'Terrazas del Este', 'Quesada', 
            'Alajuela', '21001');
        checkoutPage.acceptTermsAndConditions();
        checkoutPage.clickPlaceOrderBtn();
        orderDetailsPage.elements.getShippingAddress().should('contain.text', 'Gabriel Duran');
        orderDetailsPage.elements.getShippingAddress().should('contain.text', 'Costa Rica');
        orderDetailsPage.elements.getShippingAddress().should('contain.text', 'Terrazas del Este');
        orderDetailsPage.elements.getShippingAddress().should('contain.text', 'Quesada');
        orderDetailsPage.elements.getShippingAddress().should('contain.text', '21001');
    })

    it('should place order with valid coupon', () => {
        checkoutPage.acceptTermsAndConditions();
        checkoutPage.clickPlaceOrderBtn();
        orderDetailsPage.getTableElementValue('Subtotal').should('contain.text', '$45.00');
        orderDetailsPage.getTableElementValue('Discount').should('contain.text', '-$27.00');
        orderDetailsPage.getTableElementValue('Total').should('contain.text', '$18.00');
    })
});