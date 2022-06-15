# 2022_qa_bootcamp

Author: Jorge Carmona

This repo contains the test to cover 4 differents test cases related with the following story:

"As a service, I want to be able to create, modify, delete and list a product review."

These are the list of the test:

* Before method to get the product id from the product name and create a review for it
* Update the product review
* List all product reviews
* Delete the product review

Note: To run this suite properly you should add a cypress.env.json file in the root with this structure:

{
    "user": "your_username",
    "pass": "your_Password"
}

Besides that in this project were created the following custom commands:

* escapingProductName