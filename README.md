# 2022_qa_bootcamp
This README file includes the needed information to execute the gabriel_duran_cypress_three branch for the API Cypress Homework.

In this case, the test cases verify the different CRUD actions for product reviews as create, update, delete and list the different reviews of an specific product.
`Note: Some variables are hardcoded as we use an specific product (product_id=39).`

## Installation Process
This homework was designed to run on the Cypress 9.5.2 version. To install this version, you have to run the following command.
```npm install --save-dev cypress@9.5.2```

## Setup
Before running the cypress, you need to sed some Cypress environment variables to configure the API Authentication.

To do this, you need to create a cypress.env.json file and include the following environment variables with the API credentials needed to execute the different application requests.
```JSON
{
    "BOOTCAMP_EMAIL": "your_email",
    "BOOTCAMP_PASSWORD": "your_password"
}
```

Besides that, you need to create a cypress.json file to include the "baseUrl" used for the different Test Cases.
```JSON
{
    "baseUrl": "your_baseUrl",
    "requestBaseUrl": "api_Url",
    "experimentalSessionAndOrigin": true
}
```
`Note: In this case, the baseUrl and api_baseUrl are the same.`

## Execution Steps
To execute cypress, you need to run the following command:
```npx cypress open```

Once cypress is executed, select the `product-review` spec file to execute the different test cases related to the CRUD actions over product reviews.