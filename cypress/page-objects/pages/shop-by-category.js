//como clase
export class ShopByCategory{
    elements = {
        getCategoryByTextLnk:(productTitle)=> cy.get(`a[href*=${productTitle}]`),
    }

    selectCategory(category){
        this.elements.getCategoryByTextLnk(category).click();
    }
}


export const shopByCategoryPage = new ShopByCategory();