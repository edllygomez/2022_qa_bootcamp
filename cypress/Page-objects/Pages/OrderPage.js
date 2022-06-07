export class OrderPage{

    url = '/order-received';
    title= 'Order received';
    
    elements ={
    
        getOrderLbl: () => cy.get('[class="entry-title"]'),
        getOrderSubtotalLbl: () => cy.get('[class="woocommerce-Price-amount amount"]'),
        getOrderNumberLbl: () => cy.get('[class="woocommerce-order-overview__order order"]'),
        getOrderTotalLbl: () => cy.get('[class="woocommerce-Price-amount amount"]'),
        getPaymentMethodLbl: () => cy.get('[class="woocommerce-order-overview__payment-method method"]'),

      //need to ask how handle li,td,tr..
    
 
    }
    
   
    
    }
    
    
    
    export const PageOrderPage = new OrderPage();