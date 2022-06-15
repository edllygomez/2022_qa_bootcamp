class ProductRequest {
    createProduct(productName){
        const product = {
            name: productName,
            type: 'simple',
            regular_price: '21.99',
            description: 'Long description',
            short_description: 'short description',
            categories: [{ id: 16 }]
        };
        return cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products',
            auth: {
                user: Cypress.env('BOOTCAMP_EMAIL'),
                password: Cypress.env('BOOTCAMP_PASSWORD')
            },
            body: product,
        }).its('body')
        .as('newProduct');
    }

    updateProduct(id, productDetails) {
        return cy.request({
            method: 'PUT',
            url: `/wp-json/wc/v3/products/${id}`,
            auth: {
                user: Cypress.env('BOOTCAMP_EMAIL'),
                password: Cypress.env('BOOTCAMP_PASSWORD')
            },
            body: productDetails,
        });
    }

    deleteProduct(id) {
        return cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/${id}`,
            auth: {
                user: Cypress.env('BOOTCAMP_EMAIL'),
                password: Cypress.env('BOOTCAMP_PASSWORD')
            }
        });
    }
}

export const productRequest = new ProductRequest();