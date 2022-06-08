///<reference types="Cypress"/>
import {selectElementByCategoryPage} from '../page-objects/pages/select-element-by-category'


describe('Shopping process', ()=>{
    beforeEach(() =>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    })
    
    it('should complete successfully the shopping process (select by category)',()=>{
        //Search product
            //Select by category
            selectElementByCategoryPage.selectCategory();
            //cy.get('a[href*=accessories]').click();
            cy.url().should('include', '/accessories');
            selectElementByCategoryPage.selectProduct();
            //cy.get('a[data-product_id="29"]').click();
            //go to cart
            cy.get('.added_to_cart').click();
            cy.url().should('include', '/cart');
            cy.get('td.product-name').first().should('includes.text','Belt');
            //apply coupon
            cy.get('#coupon_code').type('1461 off');
            cy.get('button[name=apply_coupon]').click();
            //validate id the coupon code is applied
            cy.get('tr.cart-discount th').should('include.text', `Coupon: 1461 off`);

            //Checkout
            cy.get('.checkout-button').click();
            cy.title().should('includes', 'Checkout');
            //Login
            cy.get('.showlogin').click();
            //this one can be change to secret
            cy.get('#username').click().type('automation'); //OJO
            cy.get('#password').click().type('automation');
            cy.get('.woocommerce-button').click();
            //search by search box
            //cy.get('#woocommerce-product-search-field-0').click().type('cap{enter}');
            //search by rigth search box
            cy.get('#terms').click({force:true});
            //cy.get('input[name="terms"]').click();
            cy.get('#place_order').click();
            //order confirmation
            //cy.title().should('includes', 'Order received');
            cy.contains('.woocommerce-order-overview__email', 'Jafeth@test.com', {timeout:40000}).should('be.visible');
            cy.get('.woocommerce-customer-details--email').should('include.text', 'Jafeth@test.com')
            
        //Add to cart
            //add element to the shopping car on the home page

            //add search's element


        //View cart
            //When the selection process is finish

            //on the header
        //Apply coupon
            //On the cart page

            //On the checkout page
        //valide if the coupon is applied
            //On the cart page

            //On the checkout page
        //login

        //fill billing details

        //fill shipping details 
            /*
            four options
            1. Using default
            2. adding new information 
            3. using the same adress for both 

            **/
        //validate the order
    })
});