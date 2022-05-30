export class ShopByCategory{

    elements = {
        getCategoryByTextLink: (productTitle) => cy.get(`a[href*=${productTitle}]`),
        getSearchProduct: () => cy.get('#woocommerce-product-search-field-0'),
    }

    selectCategory(category){
        this.elements.getCategoryByTextLink(category).click()
    }

    searchForProduct(productName){
        this.elements.getSearchProduct().type(`${productName}{enter}`)
    }
}

export const ShopByCategoryPage = new ShopByCategory()
