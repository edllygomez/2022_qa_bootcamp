import { ShippingAddressComponent } from "../components/shippingAddressComponent";
import { BillingAddressComponent } from "../components/billingAddressComponent";

export class CheckoutPage {
  billingAddressComponent = new BillingAddressComponent();
  shippingAddressComponent = new ShippingAddressComponent();
  showLoginPrompButton = () => cy.get(".showlogin");
  usernameLoginInput = () => cy.get("#username");
  passwordLoginInput = () => cy.get("#password");
  loginButton = () => cy.get(".woocommerce-form-login__submit");
  shipToDifferentAddressCheckbox = () =>
    cy.get("#ship-to-different-address-checkbox");
  termsAndConditionsCheckbox = () => cy.get("#terms");

  showCouponPrompButton = () => cy.get(".showcoupon");

  couponCodeInput = () => cy.get("#coupon_code");
  couponCodeApplyButton = () => cy.get(".checkout_coupon > p > button");

  proceedToCheckoutButton = () => cy.get(".checkout-button");
  itemsOnCart = () => cy.get(".shop_table > tbody");

  total = () =>
    cy.get(".order-total > td > strong > .woocommerce-Price-amount");

  clickOnCheckoutButton() {
    this.proceedToCheckoutButton.click();
  }

  placeOrderButton = () => cy.get("#place_order");
}
