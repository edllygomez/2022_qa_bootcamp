///<reference types="Cypress"/>


import { ShopByCategoryPage} from '../Page-objects/Pages/Category'
import { ProductTile} from '../Page-objects/Pages/Product-tile'
import { CartPage} from '../Page-objects/Pages/Cart'
import { PageLoginPage} from '../Page-objects/Pages/LoginPage'
import { OrderPage, PageOrderPage} from '../Page-objects/Pages/OrderPage'



describe('Happypath searching and buying products ' , () =>{

    beforeEach(()=>{
    cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    });


it('Should search by category', () => {
  
ShopByCategoryPage.selectCategory('hoodies');
ProductTile.addToCart();
ProductTile.goToCart();
cy.url().should('include',CartPage.url);
cy.title().should('include',CartPage.title);
CartPage.elements.getProductNameLink().invoke('text').should('contain','\n\t\t\t\t\t\tHoodie with Logo\t\t\t\t\t\t');
CartPage.elements.getProductSubtotalLbl().invoke('text').should('contain','$45.00');

});


  
it('Should apply Coupon', () => {
  
  ShopByCategoryPage.selectCategory('hoodies');
  ProductTile.addToCart();
  ProductTile.goToCart();
   CartPage.applyCoupon('1461 off');
   CartPage.elements.getCouponMsg().should('contain.text','Coupon code applied successfully.');

 
  });

  


  it("Login with valid credentials", function () {
         
      ShopByCategoryPage.selectCategory('hoodies');
      ProductTile.addToCart();
      ProductTile.goToCart();
      CartPage.applyCoupon('1461 off');
      CartPage.elements.getCouponMsg().should('contain.text','Coupon code applied successfully.');
      //To access to the login page 
     cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/checkout/');
     cy.get('.showlogin').click();

     cy.fixture('credentials').then(testdata => {
      cy.get('[id="username"]').clear();
      PageLoginPage.elements.getUsertName().type(testdata.username);
      cy.get('#password').clear();
      PageLoginPage.elements.getPasswordName().type(testdata.password);
      cy.get('[class="woocommerce-button button woocommerce-form-login__submit"]').click()
      //Access to checkout page 
      cy.get('#terms').check({ force: true
      }).should('be.checked');
     
  });

    });

  
    it  ('Verify order received ', () => {
    cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/checkout/order-received/3548/?key=wc_order_ZSidbWoN8eZnX');
    PageOrderPage.elements.getOrderLbl().invoke('text').should('contain','Order received');
    PageOrderPage.elements.getOrderSubtotalLbl().invoke('text').should('contain','$45.00');
    PageOrderPage.elements.getOrderNumberLbl().invoke('text').should('contain','3548');
    PageOrderPage.elements.getOrderTotalLbl().invoke('text').should('contain','$18.00');
    PageOrderPage.elements.getPaymentMethodLbl().invoke('text').should('contain','Check payments');
  

    });


 
    });













