/// <reference types="cypress" />

export class ResultsPage {

    url;
    title;
    capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

    elements = {
        getSummaryNameLbl: () => cy.get('.product_title.entry-title')
    }

    setUrlProductName(productName)  {
        this.url = '/' + `${productName[0].toLowerCase()}${productName.slice(1)}` + '/'
    }

    setTitleProductName(productName)  {
        this.title = productName
    }

}

export const resultsPage = new ResultsPage();