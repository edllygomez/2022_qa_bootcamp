/// <reference types="cypress" />

//small util class to easily manage secrets using cypress env variables and as-a

export class SecretsManager {
  adminUser = Cypress.env().adminUser;
  adminPassword = Cypress.env().adminPassword;
  testCoupon1 = Cypress.env().testCoupon1;
}
