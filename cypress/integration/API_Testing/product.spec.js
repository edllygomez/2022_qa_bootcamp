/// <reference types='Cypress'/>

import { appRequest } from '../../support/requests'
import { ProductDetailPage } from '../../page-objects/pages/product-detail';
import {v4 as uuid} from 'uuid';

describe('product tests',() => {

    context('tests 1', () => {
        let productName = '';
        beforeEach(() => {
            productName = `Product-${uuid()}`;
            appRequest.createProduct(productName);
        });

        it('should create a product and navigate to it', () => {
            ProductDetailPage.visit(productName);
        });

        it('should update a product and navigate to it', () => {
            ProductDetailPage.obtainProductId().then((id) => {
                appRequest.updateProduct(id, {description: 'This is a new description'});
                ProductDetailPage.visit(productName);
            });
        });

        it.only('should delete a product and navigate to it', () => {
            ProductDetailPage.visit(productName);
            ProductDetailPage.obtainProductId().then((id) => {
                appRequest.deleteProduct(id);
                ProductDetailPage.visit(productName);
            })         
        });

    });

});