///<reference types="Cypress"/>

import { ProductRequestPage } from '../../../support/productRequests'
import { ProductDetailPage } from '../../../pages/product-detail'
import { v4 as uuid } from 'uuid'

describe('product tests', () => {

    context('tests 1', () => {
        let productName = ''
        beforeEach(() => {
            //preconditions go always on the beforeEach
            productName = `Product-${uuid()}`
            ProductRequestPage.createProduct(productName)
        })//beforeEach

        it('Create product and navigate to it', () => {
            ProductDetailPage.navigate(productName)
        })//create product and navigate to it

        it('Update product and navigate to it', () => {
            ProductDetailPage.obtainID().then((id) => {
                ProductRequestPage.updateProduct(id, { description: 'Yeimy description' })
                //the calls to the API go always first than the actions to be executed on it
                ProductDetailPage.navigate(productName)
            })
        })//Update product and navigate to it

        it.only('Delete product and navigate to it', () => {
            ProductDetailPage.navigate(productName)
            ProductDetailPage.obtainID().then((id) => {
                ProductRequestPage.deleteProduct(id)
                ProductDetailPage.navigate(productName)
            })
        })//Update product and navigate to it

    })//context=sets/suit of tests, each can have its own beforeEach and afterEach 

})//describe