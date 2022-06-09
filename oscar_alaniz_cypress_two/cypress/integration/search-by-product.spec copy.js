///<reference types="Cypress"/> 
//autocompletes de cypress
import {ShopByProductPage} from '../page-objects/pages/shop-by-product'
import {ProductTile} from '../page-objects/pages/product-tile'
import {CartPage} from  '../page-objects/pages/cart'
import { Checkout } from '../page-objects/pages/checkout'
import { Login } from '../page-objects/components/login'
import {PlaceOrder} from '../page-objects/components/place-order'

describe('Search by product', ()=>{

    beforeEach (()=>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');

    })

    it('should search by product and add product to card', ()=>{
        // Go to search bar and enter the product 
        ShopByProductPage.enterProduct('Hoodie');

        //product-title
        ProductTile.addToCart(0);
        ProductTile.goToCart();
        
        //Add to cart 
        cy.url().should('include', CartPage.url);
        cy.title().should('include', CartPage.title);
        CartPage.elements.getProductNameLnk().invoke('text').should('contain','Hoodie with Logo');
        CartPage.elements.getProductSubTotalLbl().invoke('text').should('contain', '$45.00');

        //Proceed to checkout button
        Checkout.ProceedToCheckoutBtn();

        //LOGIN
        Login.clickLogin();

        //Place the order 
        PlaceOrder.checkBox();
    });  
    
})