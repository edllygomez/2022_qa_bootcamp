export class ShopByCategory{
    elements = {
        getCategoryByTextLnk: (productTitle) => cy.get(`a[href*=${productTitle}]`),
    };

    selectCategory(category) {
        this.elements.getCategoryByTextLnk(category).click({force: true});
    }   
}

export const ShopByCategoryPage = new ShopByCategory();