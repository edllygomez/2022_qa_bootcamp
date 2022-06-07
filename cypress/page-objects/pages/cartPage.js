// import { SearchBarComponent } from "../components/searchBarComponent";

export class CartPage {
  couponCodeInput = cy.get("#coupon_code");
  couponCodeApplyButton = cy.get(".coupon > button");
  proceedToCheckoutButton = cy.get(".checkout-button");
  itemsOnCart = cy.get(".shop_table > tbody");

  //   navigate() {
  //     cy.visit("http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/");
  //   }

  clickOnCheckoutButton() {
    this.proceedToCheckoutButton.click();
  }
}
