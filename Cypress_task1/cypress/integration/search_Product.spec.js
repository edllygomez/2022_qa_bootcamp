///<reference types = "Cypress"/>
import{ searchProductPage} from '../page_Objects/components/pages/search_bar'
import{ resultProductPage} from '../page_Objects/components/pages/productResults'
import{ checkoutaProductPage} from '../page_Objects/components/pages/checkOut'

describe ('Search product', ()=> {
    beforeEach( ()=>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
        
        
    });

    it ('Should search by product',()=>{
        const product = 'sunglasses'
        searchProductPage.productInput(product)
       
        
    })
    it ('Should redirect  to product page and url should contain the product',()=>{
        const product = 'sunglasses'
        searchProductPage.productInput(product)
        cy.location('pathname').should('contains','product/sunglasses/')
        
    })
    it ('Should the product be part of the results page',()=>{
        const product = 'sunglasses'
        searchProductPage.productInput(product)
        resultProductPage.elements.getTittletById().first().should('have.text', 'Sunglasses')
      
    })
    it ('Should be able add to cart and go to Checkout page',()=>{
        const product = 'sunglasses'
        searchProductPage.productInput(product)
        resultProductPage.elements.getTittletById().first().should('have.text', 'Sunglasses').then(()=>{
            resultProductPage.addToCart();
            resultProductPage.viewCart();
            resultProductPage.checkOutView();
           checkoutaProductPage.elements.getCheckouTittleByClass().first().should('have.text', 'Checkout')
        })
        
      // checkoutaProductPage.elements.getCheckouTittleByClass().first().should('have.text', 'Checkout')
       // cy.location('pathname').should('contains','checkout')
        
    })


}
)