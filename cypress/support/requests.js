class AppRequest{


    getProduct(product_id){
        const ProductCap ={
            "id": 30,
            "name": "Cap",
            "slug": "cap",
            "permalink": "http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/product/cap/",
            "date_created": "2019-05-24T09:32:35",
            "date_created_gmt": "2019-05-24T09:32:35",
            "date_modified": "2022-06-13T18:34:11",
            "date_modified_gmt": "2022-06-13T18:34:11",
            "type": "simple",
            "status": "publish",
            "featured": false,
            "catalog_visibility": "visible",
            "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
            "short_description": "",
            "sku": "",
            "price": "16",
            "regular_price": "18",
            "sale_price": "16",
            "date_on_sale_from": null,
            "date_on_sale_from_gmt": null,
            "date_on_sale_to": null,
            "date_on_sale_to_gmt": null,
            "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>18.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>16.00</span></ins>",
            "on_sale": true,
            "purchasable": true,
            "total_sales": 91,
            "virtual": false,
            "downloadable": false,
            "downloads": [],
            "download_limit": -1,
            "download_expiry": -1,
            "external_url": "",
            "button_text": "",
            "tax_status": "taxable",
            "tax_class": "",
            "manage_stock": false,
            "stock_quantity": null,
            "stock_status": "instock",
            "backorders": "no",
            "backorders_allowed": false,
            "backordered": false,
            "sold_individually": false,
            "weight": "",
            "dimensions": {
                "length": "",
                "width": "",
                "height": ""
            },
            "shipping_required": true,
            "shipping_taxable": true,
            "shipping_class": "",
            "shipping_class_id": 0,
            "reviews_allowed": true,
            "average_rating": "5.00",
            "rating_count": 20,
            "related_ids": [
                3507,
                3502,
                3512,
                3466,
                3516
            ],
            "upsell_ids": [],
            "cross_sell_ids": [],
            "parent_id": 0,
            "purchase_note": "",
            "categories": [
                {
                    "id": 16,
                    "name": "Accessories",
                    "slug": "accessories"
                }
            ],
            "tags": [],
            "images": [
                {
                    "id": 12,
                    "date_created": "2019-05-24T09:32:35",
                    "date_created_gmt": "2019-05-24T09:32:35",
                    "date_modified": "2019-05-24T09:32:35",
                    "date_modified_gmt": "2019-05-24T09:32:35",
                    "src": "http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-content/uploads/2019/05/cap.jpg",
                    "name": "Cap",
                    "alt": ""
                }
            ],
            "attributes": [],
            "default_attributes": [],
            "variations": [],
            "grouped_products": [],
            "menu_order": 0,
            "meta_data": [
                {
                    "id": 82,
                    "key": "_customize_changeset_uuid",
                    "value": "4958f7dc-1b8f-4209-ac07-55aebc336cd5"
                }
            ],
            "_links": {
                "self": [
                    {
                        "href": "http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/products/30"
                    }
                ],
                "collection": [
                    {
                        "href": "http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/products"
                    }
                ]
            }

        };
        return cy.request({
            method: 'GET',
            url: '/wp-json/wc/v3/products/30',
            auth:{
                //cyprees.env.json min 54
                user:'automation',
                password: 'automation'
            },
            body: ProductCap,
        }).its('body').as('ProductCap');

    }









    createReview(product_id){
        const review ={
            "product_id": product_id,
            "review": "Nice cap automation test Valery CM ",
            "reviewer": "Valery  Doe",
            "reviewer_email": "valery.doe@example.com",
            "rating": 5

        };
        return cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products/reviews',
            auth:{
                user:  Cypress.env('username'),
                password: Cypress.env('password')
            },
            body: review,
        }).its('body').as('newReview');

    }


    
    updateReview(productID, ReviewDetails){
        
        return cy.request({
         method: 'PUT',
         url: `/wp-json/wc/v3/products/reviews/${productID}`,
     
         auth:{
          user:  Cypress.env('username'),
          password: Cypress.env('password')
          
            
         },
         body: ReviewDetails,
     
        });


    }

    deleteReview(productID, force){

        
        cy.request({
       
        method: 'DELETE',
        url:`/wp-json/wc/v3/products/reviews/${productID }`,
        auth:{
            user:  Cypress.env('username'),
            password: Cypress.env('password')
        },
    
       })
    
    
       }
    



};

export const AppRequestPage = new AppRequest();