import { ProductDetails } from "./components/ProductDetails";
import { SearchBar } from "../page-objects/components/searchBar";

export class ProductPage {
  productDetails = new ProductDetails();
  productCode;
  searchBar = new SearchBar();

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
