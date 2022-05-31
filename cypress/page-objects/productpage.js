import { ProductDetailsComponent } from "./components/productDetailsComponent";
import { SearchBarComponent } from "./components/searchBarComponent";

export class ProductPage {
  productDetails = new ProductDetailsComponent();
  productCode;
  searchBar = new SearchBarComponent();

  navigate(productCode = "hoodie") {
    cy.visit(
      `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/product/${productCode}/`
    );
  }

  searchProduct(searchParam) {
    this.searchBar.searchProduct(searchParam);
  }

  searchProductSecundary(searchParam) {
    this.searchBar.searchProductSecundary(searchParam);
  }
}
