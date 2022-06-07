/// <reference types="cypress" />

export class CartComponent {
  couponCodeInput = () => cy.get("#coupon_code");
  couponCodeApplyButton = () => cy.get(".coupon > button");
  proceedToCheckoutButton = () => cy.get(".checkout-button");
  itemsOnCart = () => cy.get(".woocommerce-cart-form__cart-item cart_item");
  cartItemsTable = () => cy.get(".shop_table");
  totalOnCart = () => cy.get('[data-title="Total"]');

  clickOnCheckoutButton() {
    this.proceedToCheckoutButton().click();
  }
}
