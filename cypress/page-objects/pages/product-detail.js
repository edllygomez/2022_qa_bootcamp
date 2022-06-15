export class ProductDetail {
  url = '/product/';

  elements = {
    getNameLbl: () => cy.get('.product_title'),
  }

  navigate(product){
    cy.visit(this.url + product);
  }
}

export const ProductDetailPage = new ProductDetail();