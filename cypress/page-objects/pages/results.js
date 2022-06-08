/// <reference types="cypress" />

export class ResultsPage {

    elements = {
        getAddToCartBtn: () => cy.get('[name="add-to-cart"]')
    }

    clickAddToCartBtn() {
        this.elements.getAddToCartBtn().click()
    }

}

export const resultsPage = new ResultsPage();