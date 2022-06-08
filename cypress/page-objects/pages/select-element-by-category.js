export class SelectElementByCategory{
    url='/accessories';
    elements = {
        getCategoryByTextLnk: ()=>cy.get(`a[href*=accessories]`),
        getProductByIdLnk: ()=> cy.get('a[data-product_id="29"]'),
        
    }
    //methods
    selectCategory(){
        this.elements.getCategoryByTextLnk().click();
    }
    selectProduct(){
        this.elements.getProductByIdLnk().click();
    }

}

export const selectElementByCategoryPage = new SelectElementByCategory();
/*-cy.get('a[href*=accessories]').click();
cy.url().should('include', '/accessories');
-cy.get('a[data-product_id="29"]').click();**/