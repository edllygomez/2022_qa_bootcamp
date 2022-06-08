# 2022_qa_bootcamp

Author: Jorge Carmona

This repo contains the test to cover 4 differents test cases related with the following story:

"As a customer, I want to be able to complete an order after searching a product and adding it to the cart"

These are the list of the test:

* Should complete an order with default billing and shipping addresses without coupon
* Should complete an order with default billing and shipping addresses with a valid coupon
* Should complete an order changing billing address and using the same address for shipping
* Should complete an order changing billing address and using another address for shipping

Note: To run this suite properly you should add a cypress.env.json file in the root with this structure:

{
    "user": "your_username",
    "pass": "your_Password"
}

Besides that in this project were created the following custom commands:

* searchProduct
* viewCart
* logIn