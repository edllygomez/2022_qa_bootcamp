# 2022_qa_bootcamp
This project incluedes some automated steps for the Place Order process of the selected application/wesite. This branch includes the required test cases to ensure the Place Order / Chechout of a product.

**Cypress version**: 10.0.2
**Base URL**: [http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/](http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/ "Base URL")

## Previous Configuration:
For a better use of the application, you have to create a `cypress.env.json` file on the root of the project and include the desire credentials as bellow.
```JSON
{
    "BOOTCAMP_EMAIL": "your_email",
    "BOOTCAMP_PASSWORD": "your_password"
}
```

## Execution Steps:
To execute cypress, you can use the following npx command:
```bash
npx cypress open
```

Once cypress is running, you have to: 
1. select the "E2E Testing" option on the cypress Dashbaord.
2. select the browser you want use to run your tests.
3. Click over the "Start E2E Testing in {browser}" button.
4. Once Cypress has run, execute the "checkout-product" spec file.

## Custom Commands:
This project contains some custom commands you can use to develop your test.

`cy,login(email, password)` - This custom command allows you to log into the application when the user proceeds to the checkout process. It receives and email and password credentials user on the login process.
>Note: if you do not specify the email and password, the system will use the credentials setted on the `cypress.env.json` file.

`cy.searchProduct('product_name')` - This custom command allows you to search a product from the main Search Bar component. It receives the name of the product as a parameter (`product_name`) to search into the application for the product name send as parameter.

`cy.secondSearchProduct('product_name')` - This custom command allows you to search a product from the Search Bar component located at the right side of the application. It receives the name of the product as a parameter (`product_name`) to search into the application for the product name send as parameter.
