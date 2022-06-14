export class ProductDetailPage {
url='/review';

elements={

};

visit(ProductName){

    cy.visit(`this.url/${ProductName}`,{failOnStatusCode: false});
}

obtainID(){
    return cy.get('@newReview').then((ReviewInfo)=>{
        return ReviewInfo.id;
    });
}

obtainProduct(){
    return cy.get('@ProductCap').then((ProductInfo)=>{
        return ProductInfo.id;
    });
}


};


export const ProductDetail = new ProductDetailPage();