///<reference types = "Cypress"/>
import{ searchItemPage} from '../page_Objects/components/pages/search_bar'

describe ('Search Item', ()=> {
    beforeEach( ()=>{
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
        
        
    });

    it ('Should search by item',()=>{
        const item = 'sunglasses'
        searchItemPage.ItemInput(item)
       
        
    })
    it ('Should redirect  to product page and url should contain the item',()=>{
        const item = 'sunglasses'
        searchItemPage.ItemInput(item)
        cy.location('pathname').should('contains','product/sunglasses/')
        
    })
    it ('Should the item be part of the results page',()=>{
        const item = 'sunglasses'
        searchItemPage.ItemInput(item)
        cy.get('.product_title.entry-title').first().should('have.text', 'Sunglasses')
        
    })


}
)