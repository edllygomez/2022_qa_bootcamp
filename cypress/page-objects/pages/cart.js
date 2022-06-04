export class Cart {
    url = '/cart';
    title = 'Cart';

    elements = {
        getProductNameLink: () => cy.get(''),
    }

    applyCoupon(code) {

    }

}

export const cartPage = new Cart();