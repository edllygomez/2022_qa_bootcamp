///<reference types="Cypress"/>
import {selectElementByCategoryPage} from '../page-objects/pages/select-element-by-category'
import{cartPage} from '../page-objects/pages/cart'
import{checkoutPage} from '../page-objects/pages/checkout'
import{logingPage} from '../page-objects/components/login'
describe('Shopping process', ()=>{
    beforeEach(() =>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    })
    
    it('should complete successfully the shopping process (select by category)',()=>{
        //Search product
            //Select by category
            selectElementByCategoryPage.selectCategory();
            cy.url().should('include', '/accessories'); 
            selectElementByCategoryPage.selectProduct();
            //go to cart
            cartPage.addtoCart();
            cy.url().should('include', '/cart');
            cartPage.productValidation();
            //apply coupon
            cartPage.applyCoupon();
            //validation if the coupon code is applied
            cy.get('tr.cart-discount th').should('include.text', `Coupon: 1461 off`);

            //Checkout
            checkoutPage.checkoutbtn();
            cy.title().should('includes', 'Checkout');

            //Login
            logingPage.userLogin();
            

            //Get billing details
            //cy.get('#billing_email').invoke('text');
            cy.get('#billing_email');

            //search by search box
            //cy.get('#woocommerce-product-search-field-0').click().type('cap{enter}');
            //search by rigth search box
            cy.get('#terms').click({force:true});
            //cy.get('input[name="terms"]').click();
            cy.get('#place_order').click();
            //order confirmation
            //cy.title().should('includes', 'Order received');
            cy.contains('.woocommerce-table__line-item a', 'Belt').should('be.visible');
            //cy.contains('.woocommerce-order-overview__email', '@email', {timeout:40000}).should('be.visible');
            cy.get('.woocommerce-customer-details--email').should('contain.text', `email403@gap.com`);
    })
});