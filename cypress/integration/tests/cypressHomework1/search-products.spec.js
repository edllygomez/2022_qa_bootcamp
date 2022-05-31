///<reference types="Cypress"/>

import { SearchBarPage } from "../../pages/search-bar";
import { SearchResultsPage } from "../../pages/search-results";

describe('Search from search bar', () => {

    beforeEach(() => {
        cy.visit('http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/');
    })//beforeEach

    it('should search from the search bar and show matching results', () => {
      SearchBarPage.searchProduct('Hoodie');
      SearchResultsPage.checkResults('Hoodie');
    });//it

});//describe