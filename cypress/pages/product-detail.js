export class ProductDetail {
    url = '/product/'

    elements = {
        getNameLabel: () => cy.get('.product_title'),
    }//elements array

    navigate(productName) {
        cy.visit(`this.url/${productName}`,{failOnStatusCode:false})
    }//navigate method

    obtainID(){
        return cy.get('@newProduct').then((productInfo)=> {
            console.log(productInfo)
            return productInfo.id
        })
    }//obtainID

}//ProductDetail class

export const ProductDetailPage = new ProductDetail()