/// <reference types="cypress" />

import { productRequest } from '../support/requests/product';
import { ProductDetails } from '../pages/product-details';
import { v4 as uuid } from 'uuid';

describe('product test', () => {

    let productName = '';
    beforeEach(() => {
        productName = `Product-${uuid()}`;
        productRequest.createProduct(productName);
    });

    it('Create product and navigate to it', () => {
        ProductDetails.visit(productName);
    });

    it('Update a product and navigate to it', () => {
        ProductDetails.obtainID().then((id) => {
            productRequest.updateProduct(id, {description: 'This is a new description'});
            ProductDetails.visit(productName);
        });
    });

    it('Delete a product and navigate to it', () => {
        ProductDetails.visit(productName);
        ProductDetails.obtainID().then((id) => {
            productRequest.deleteProduct(id);
            ProductDetails.visit(productName);
        });
    });
});