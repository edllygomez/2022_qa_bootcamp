///<reference types="Cypress"/>

import { searchBarComponent } from "../page-objects/components/search-bar";
import { productDetailPage } from "../page-objects/pages/product-detail";
import { searchResultsPage } from "../page-objects/pages/search-results";

describe('Search by Product', () => {

    beforeEach(() => {
      cy.visit('/');
    })
  
    it('should show multiple coincidences for a product', () => {
    //   searchBarComponent.searchProduct('Hoodie');
      cy.searchProduct('Hoodie');
      searchResultsPage.elements.getResultsTitleLbl().should('contain.text', 'Hoodie');
      searchResultsPage.elements.getProductLinks().each(($element) => {
        expect($element).to.contain('Hoodie');
      });
    })

    it('should show one coincidences for a product', () => {
      searchBarComponent.searchProduct('belt');
      productDetailPage.elements.getNameLbl().invoke('text').should('match', /belt/i);
      productDetailPage.elements.getNameLbl().should(($div) => {
        let text = $div.text().toLowerCase();
        expect(text).to.contain('belt');
      });
    })

    it('should show results when searched from different product details page', () => {
      productDetailPage.navigate('tshirt');
      searchBarComponent.secondSearchProduct('Hoodie');
      searchResultsPage.elements.getResultsTitleLbl().should('contain.text', 'Hoodie');
      searchResultsPage.elements.getProductLinks().each(($element) => {
        expect($element).to.contain('Hoodie');
      });
    })

    it('should show a message when no results are found', () => {
      searchBarComponent.searchProduct('pants');
      searchResultsPage.elements.getResultsTitleLbl().should('contain.text', 'Hoodie');
      searchResultsPage.elements.getNoResultsMsg()
      .should('contain.text', 'No products were found matching your selection.');
    })
  })