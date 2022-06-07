
export class ObjectPage {

    urlBelt = '/belt';
    
    
    elements ={    
    
        getProductNameBarLink: () => cy.get('[id="woocommerce-product-search-field-0"]'),
        getProductNameLbl: () => cy.get('[class="product_title entry-title"]'),
        // getProductNameLbl: () => cy.get('[.product_title.entry-title'),
        getProductSubtotalBarLbl: () => cy.get('[class="woocommerce-Price-amount amount"]'),
    }
    
    }
    
    
    
    
    
    export const SearchByObjectPage = new ObjectPage();
    
    