// import { SearchBarComponent } from "../components/searchBarComponent";

export class CheckoutPage {
  showLoginPrompButton = cy.get(".showlogin");
  usernameLoginInput = cy.get("#username");
  passwordLoginInput = cy.get("#password");
  loginButton = cy.get(".woocommerce-form-login__submit");

  showCouponPrompButton = cy.get(".showcoupon");

  couponCodeInput = cy.get("#coupon_code");
  couponCodeApplyButton = cy.get(".checkout_coupon > p > button");

  proceedToCheckoutButton = cy.get(".checkout-button");
  itemsOnCart = cy.get(".shop_table > tbody");

  //   navigate() {
  //     cy.visit("http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/");
  //   }

  clickOnCheckoutButton() {
    this.proceedToCheckoutButton.click();
  }
}
