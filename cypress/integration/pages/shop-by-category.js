export class ShopByCategory {
    elements = {
        getCategoryByTextLink: (productTitle) => cy.get(`a[href*=${productTitle}]`),
    }//elementsArray

    selectCategory(category) {
        this.elements.getCategoryByTextLink(category).click();
    }//selectCategory

}//class

export const ShopByCategoryPage = new ShopByCategory();
