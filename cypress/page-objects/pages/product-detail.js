export class ProductDetail {
    url = '/product/';

    elements = {
        getNameLbl: () => cy.get('.product_title'),
    };

    navigate(productName) {
        cy.visit(this.url + productName);
    }

    visit(productName) {
        cy.visit(`this.url/${productName}`, {failOnStatusCode: false})
    }

    obtainProductId() {
        return cy.get('@newProduct').then((productInfo) => {
            console.log(productInfo);
            return productInfo.id;
        });
    }
    
    obtainProductName() {
        return cy.get('@retrievedProduct').then((productInfo) => {
            console.log(productInfo.name);
            return productInfo.name;
        });
    }
};

export const ProductDetailPage = new ProductDetail();