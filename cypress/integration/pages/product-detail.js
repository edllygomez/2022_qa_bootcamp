export class ProductDetail {
    url = '/product/'

    elements = {
        getNameLabel: () => cy.get('.product_title'),
    }//elements array

    navigate(product) {
        //cy.visit(this.url + product);
        cy.visit(Cypress.env('baseUrl')+this.url+product)
    }//navatigate method

}//ProductDetail class

export const ProductDetailPage = new ProductDetail()