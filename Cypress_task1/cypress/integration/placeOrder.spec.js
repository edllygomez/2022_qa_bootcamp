///<reference types = "Cypress"/>
import{ searchProductPage} from '../page_Objects/components/pages/search_bar'
import{ resultProductPage} from '../page_Objects/components/pages/productResults'
import{ checkoutaProductPage} from '../page_Objects/components/pages/checkOut'
import{ orderReceivedPage} from '../page_Objects/components/pages/orderPage'

describe ('Search product', ()=> {
    beforeEach( ()=>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
        
        
    });

    it ('Should be able add to cart and go to Checkout page',()=>{
        const product = 'sunglasses'
        searchProductPage.productInput(product)
        resultProductPage.elements.getTittletById().first().should('have.text', 'Sunglasses').then(()=>{
            resultProductPage.addToCart();
            resultProductPage.viewCart();
            resultProductPage.checkOutView();
           checkoutaProductPage.elements.getCheckouTittleByClass().first().should('have.text', 'Checkout')
        })
    })

    it ('Should be able to place a order with logged user and billing details and without select ship address',()=>{
            const product = 'sunglasses'
            searchProductPage.productInput(product)
            resultProductPage.elements.getTittletById().first().should('have.text', 'Sunglasses').then(()=>{
                resultProductPage.addToCart();
                resultProductPage.viewCart();
                resultProductPage.checkOutView();
               // checkoutaProductPage.elements.getCheckouTittleByClass().first().should('have.text', 'Checkout')
                checkoutaProductPage.elements.getLoginLink().first().should('have.text', 'Click here to login').then(()=>{
                checkoutaProductPage.loginCheckOut();
                checkoutaProductPage.billingDetailsForm();
                checkoutaProductPage.shipSelection();
                checkoutaProductPage.placeOrder();
                orderReceivedPage.elements.getTittleOrder().should('have.text', 'Order received')

                })
               

            })
        
    })
    
    it ('Should be able to place a order with logged user and billing details and  different ship address info',()=>{
        const product = 'sunglasses'
        searchProductPage.productInput(product)
        resultProductPage.elements.getTittletById().first().should('have.text', 'Sunglasses').then(()=>{
            resultProductPage.addToCart();
            resultProductPage.viewCart();
            resultProductPage.checkOutView();
            checkoutaProductPage.elements.getCheckouTittleByClass().first().should('have.text', 'Checkout')
            checkoutaProductPage.elements.getLoginLink().first().should('have.text', 'Click here to login').then(()=>{
            checkoutaProductPage.loginCheckOut();
            checkoutaProductPage.billingDetailsForm();
            checkoutaProductPage.ShippingDetailsForm();
            checkoutaProductPage.placeOrder();
            orderReceivedPage.elements.getTittleOrder().should('have.text', 'Order received')

            })
           

        })
    
})

it ('Should be able to place a order with logged user and billing details and  same ship address info',()=>{
    const product = 'sunglasses'
    searchProductPage.productInput(product)
    resultProductPage.elements.getTittletById().first().should('have.text', 'Sunglasses').then(()=>{
        resultProductPage.addToCart();
        resultProductPage.viewCart();
        resultProductPage.checkOutView();
        checkoutaProductPage.elements.getCheckouTittleByClass().first().should('have.text', 'Checkout')
        checkoutaProductPage.elements.getLoginLink().first().should('have.text', 'Click here to login').then(()=>{
        checkoutaProductPage.loginCheckOut();
        checkoutaProductPage.billingDetailsForm();
        checkoutaProductPage.placeOrder();
        orderReceivedPage.elements.getTittleOrder().should('have.text', 'Order received')

        })
       

    })

})
it ('Should not be able to place a order with wrong credentials',()=>{
    const product = 'sunglasses'
    searchProductPage.productInput(product)
    resultProductPage.elements.getTittletById().first().should('have.text', 'Sunglasses').then(()=>{
        resultProductPage.addToCart();
        resultProductPage.viewCart();
        resultProductPage.checkOutView();
        checkoutaProductPage.elements.getCheckouTittleByClass().first().should('have.text', 'Checkout')
        checkoutaProductPage.elements.getLoginLink().first().should('have.text', 'Click here to login').then(()=>{
        checkoutaProductPage.loginCheckOutInvalid();
        
        })
       

    })

})

    

})