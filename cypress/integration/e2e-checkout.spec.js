/// <reference types="cypress" />

import { ProductPage } from "../page-objects/pages/productpage";
import { OrderPage } from "../page-objects/pages/OrderPage";
import { CartPage } from "../page-objects/pages/cartPage";
import { CheckoutPage } from "../page-objects/pages/checkoutPage";
import { SecretsManager } from "../utils/secretsManager";

//TODO mock up current state of cart, and checkout to avoid reloading all previous pages (items on cart are stored on a cookie)
describe("Positive TCs for checkout user flow", () => {
  const secretsManager = new SecretsManager();
  const adminUserName = secretsManager.adminUser;
  const testCoupon = secretsManager.testCoupon1;
  const adminPassword = secretsManager.adminPassword;
  const productPage = new ProductPage();
  const orderPage = new OrderPage();
  const cart = new CartPage();
  const checkout = new CheckoutPage();
  const cartAmount = 5;
  const validSearchParams = ["Hoodie with Pocket"]; //Edit this to test more search params
  //const invalidSearchParams = []; //Placeholder for future negative tests
  const productCode = "Hoodie-with-pocket";
  const price = 35;
  const couponSuccessAssertion = "successfully";
  const successfullOrderAssertion = "received";
  const couponDiscount = 0.6;

  beforeEach(() => {
    productPage.navigate(productCode);
  });
  describe("Test for cart page", () => {
    it("should be able to add a custom amount on cart", () => {
      productPage.changeCartAmount(cartAmount);
      productPage.addToCart();
      productPage.navBar.cartItemsCount().contains(cartAmount);
      productPage.alertBanner
        .message()
        .contains(validSearchParams[0], { matchCase: false });
      productPage.alertBanner.clickOnLink();
      cy.url().should("include", "/cart/");
    });
    it("should be able to add one item to cart using slide down banner", () => {
      productPage.scrollBotton();
      productPage.addOneUsingSlideDownBanner();
      productPage.navBar.cartItemsCount().contains(1);
      productPage.alertBanner
        .message()
        .contains(validSearchParams[0], { matchCase: false });
      productPage.alertBanner.clickOnLink();
      cy.url().should("include", "/cart/");
    });

    it("should be able to see items added to cart on cart", () => {
      productPage.changeCartAmount(cartAmount);
      productPage.addToCart();
      productPage.alertBanner.clickOnLink();
      cart.cart
        .cartItemsTable()
        .contains(validSearchParams[0], { matchCase: false });
      cart.cart.cartItemsTable().should("contain", cartAmount);
      cart.cart.cartItemsTable().should("contain", price);
      cart.cart.cartItemsTable().should("contain", cartAmount * price);
    });

    it("should be able to apply a coupon on cart", () => {
      productPage.changeCartAmount(cartAmount);
      productPage.addToCart();
      productPage.alertBanner.clickOnLink();
      cart.cart.couponCodeInput().type(testCoupon);
      cart.cart.couponCodeApplyButton().click();
      cart.alertBanner.message().should("contain", couponSuccessAssertion);
      cart.cart
        .totalOnCart()
        .should(
          "contain",
          cartAmount * price - cartAmount * price * couponDiscount
        );
      cart.cart.proceedToCheckoutButton().click();
      checkout
        .total()
        .should(
          "contain",
          cartAmount * price - cartAmount * price * couponDiscount
        );
    });
  });
  describe("Test for checkout page", () => {
    it("should be able to checkout with stored user info using coupon on checkout", () => {
      productPage.changeCartAmount(cartAmount);
      productPage.addToCart();
      productPage.alertBanner.clickOnLink();
      cart.cart.proceedToCheckoutButton().click();
      checkout.showLoginPrompButton().click();
      checkout.usernameLoginInput().type(adminUserName);
      checkout.passwordLoginInput().type(adminPassword);
      checkout.loginButton().click().wait(1000);
      checkout.showCouponPrompButton().click();
      checkout.couponCodeInput().type(testCoupon);
      checkout.couponCodeApplyButton().click();
      cy.get("#terms").click();
      checkout.placeOrderButton().click();
      orderPage.orderDetailsBox().should("contain", validSearchParams[0]);
      orderPage.orderDetailsBox().should("contain", cartAmount * price);
      orderPage.page().should("contain", successfullOrderAssertion);
    });

    it("should be able to checkout with stored user info without coupon the stored different shipping address", () => {
      productPage.changeCartAmount(cartAmount);
      productPage.addToCart();
      productPage.alertBanner.clickOnLink();
      cart.cart.proceedToCheckoutButton().click();
      checkout.showLoginPrompButton().click();
      checkout.usernameLoginInput().type(adminUserName);
      checkout.passwordLoginInput().type(adminPassword);
      checkout.loginButton().click().wait(1000);
      checkout.shipToDifferentAddressCheckbox().check();
      cy.get("#terms").click();
      checkout.placeOrderButton().click();
      orderPage.orderDetailsBox().should("contain", validSearchParams[0]);
      orderPage.orderDetailsBox().should("contain", cartAmount * price);
      orderPage.page().should("contain", successfullOrderAssertion);
    });

    it("should be able to checkout with changing stored billing and shipping address", () => {
      productPage.changeCartAmount(cartAmount);
      productPage.addToCart();
      productPage.alertBanner.clickOnLink();
      cart.cart.proceedToCheckoutButton().click();
      checkout.showLoginPrompButton().click();
      checkout.usernameLoginInput().type(adminUserName);
      checkout.passwordLoginInput().type(adminPassword);
      checkout.loginButton().click().wait(1000);
      checkout.shipToDifferentAddressCheckbox().check();
      checkout.billingAddressComponent.clearAll();
      checkout.billingAddressComponent.changeBillingAddress();
      checkout.shippingAddressComponent.clearAll();
      checkout.shippingAddressComponent.changeBillingAddress();
      cy.get("#terms").click();
      checkout.placeOrderButton().click();
      orderPage.orderDetailsBox().should("contain", validSearchParams[0]);
      orderPage.orderDetailsBox().should("contain", cartAmount * price);
      orderPage.page().should("contain", successfullOrderAssertion);

      //TODO check the billing and shipping addesses
    });
  });
});
