export class Cart {
  url = '/cart';
  title = 'Cart';

  elements = {
    getProductNameLnk: () => cy.get('[data-title="Product"]'),
    getProductSubtotalLbl: () => cy.get('[data-title="Subtotal"]'),
    getCouponCodeTxt: () => cy.get('#coupon_code'),
    getApplyCouponBtn: () => cy.contains('button', 'Apply coupon'),
    getCouponMsg: () => cy.get('[role=alert]'),
    getCouponInfo: () => cy.get('.cart-discount'),
  }

  applyCoupon(code) {
    this.elements.getCouponCodeTxt().clear().type(code);
    this.elements.getApplyCouponBtn().click();
  }
}

export const CartPage = new Cart();