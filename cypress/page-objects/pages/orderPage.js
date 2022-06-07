export class OrderPage {
  page = () => cy.get("#page");
  orderDetailsBox = () => cy.get(".woocommerce-order");

  //   navigate() {
  //     cy.visit("http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/");
  //   }
}
