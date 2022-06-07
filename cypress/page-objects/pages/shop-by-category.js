export class ShopByCategory{
     productName = 'Zipper'

    elements = {
        getCategoryByTextLink: (productTitle) => cy.get(`a[href*=${productTitle}]`),
        getSearchProduct: () => cy.get('#woocommerce-product-search-field-0'),
    }

    selectCategory(category){
        this.elements.getCategoryByTextLink(category).click()
    }

    searchForProduct(){
        this.elements.getSearchProduct().type(`${this.productName}{enter}`)
    }
}

export const ShopByCategoryPage = new ShopByCategory()
