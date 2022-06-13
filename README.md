## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Credentials](#credentials)
## General Info
***
Cypress project from scratch to learn about cypress and best practices.
## Screenshot
There are no screenshots yet.
## Technologies
***
A list of technologies used within the project:
* [Node JS](https://nodejs.org/en/): Version 17.1.0
* [NPM](https://www.npmjs.com/): Version 8.12.1 . This gets installed with Node JS, just check the version after installation
* [Visual Studio Code](https://code.visualstudio.com/): Version 1.67
* [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker/v/6.3.1): Version 6.3.1
## Installation / Run
***
Follow this steps to install/run the tests
```
$ git clone https://github.com/edllygomez/2022_qa_bootcamp.git
$ git checkout Yeimy_Huertas_cypress_two
$ npm install cypress
$ npm i @faker-js/faker@6.3.1
$ npx cypress open
```
## Credentials
***
The base url and credentials are stored in the cypress.env.json which is included in the gitignore so will not be push to the repository.
In order to run the tests you will need to create the file and add the information. E.G.
{
    "baseUrl": "http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/",
    "username": "usernamehere",
    "password": "passwordhere"
}