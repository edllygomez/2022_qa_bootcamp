export class orderReceived {
    elements = {
        getTittleOrder:() => cy.get('h1.entry-title'),
        
       
    }
   

}
export const orderReceivedPage = new orderReceived();
