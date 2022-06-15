import { AlertBanner } from "../components/alertBanner";
import { NavBar } from "../components/navBarComponent";
import { ProductDetailsComponent } from "../components/productDetailsComponent";
import { SearchBarComponent } from "../components/searchBarComponent";
import { SlideDownBanner } from "../components/slideDownBannerComponent";

export class ProductPage {
  productDetails = new ProductDetailsComponent();
  productCode;
  searchBar = new SearchBarComponent();
  alertBanner = new AlertBanner();
  navBar = new NavBar();
  slideDownBanner = new SlideDownBanner();

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

  changeCartAmount(number) {
    this.productDetails.changeCartAmount(number);
  }

  addToCart() {
    this.productDetails.addToCart();
  }

  clickOnAlertLink() {
    this.alertBanner.clickOnLink();
  }

  navigateToCartUsingNavBar() {
    this.navBar.clickOnCart();
  }

  scrollBotton() {
    cy.scrollTo("bottom");
  }
  addOneUsingSlideDownBanner() {
    this.slideDownBanner.addToCart();
  }

  getReviews() {
    cy.get("#tab-title-reviews > a").click();
    return cy.get("#comments > ol > li .description");
  }

  getRating() {
    cy.get("#tab-title-reviews > a").click();
    return cy.get("#comments > ol > li .rating");
  }
}
