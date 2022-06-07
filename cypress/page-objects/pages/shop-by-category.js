export class ShopByCategory {
    elements = {
        getCategoryByTextLink: (category) => cy.get(`a[href*=${category}]`),
    }

    selectCategory(category) {
        this.elements.getCategoryByTextLink(category).click();
    }
}

export const shopByCategoryPage = new ShopByCategory();