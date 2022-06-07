import { CartComponent } from "../components/cartComponent";
import { AlertBanner } from "../components/alertBanner";

export class CartPage {
  cart = new CartComponent();
  alertBanner = new AlertBanner();

  //   navigate() {
  //     cy.visit("http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/");
  //   }

  // clickOnCheckoutButton() {
  //   this.proceedToCheckoutButton().click();
  // }
}
