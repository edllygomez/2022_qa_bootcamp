///<reference types="Cypress"/>

import { SearchBarPage } from "../../pages/search-bar"
import { SearchResultsPage } from "../../pages/search-results"
import { ProductDetailPage } from "../../pages/product-detail"

describe('Search from search bar', () => {
  let searchCriteria = 'Hoodie'

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })//beforeEach

  it('should show multiples results for a product', () => {
    cy.searchProduct(searchCriteria)
    SearchResultsPage.elements.getResultsTitleLabel().should('contain', `${searchCriteria}`)
    SearchResultsPage.elements.getProductTitleLink().each(($index) => {
      expect($index).to.contain(searchCriteria)
    })
  })//it should show multiples results for a product

  it('should show one result for a product', () => {
    SearchBarPage.searchProduct('belt')
    ProductDetailPage.elements.getNameLabel().invoke('text').should('match',/belt/i)
    ProductDetailPage.elements.getNameLabel().should(($div) => {
      let text = $div.text().toLowerCase()
      expect(text).to.contain('belt')
    })
  })//it should show one result for a product

  it('should show results when searched from a different product details page', () => {
    ProductDetailPage.navigate('tshirt')
    SearchBarPage.secondSearchProduct('Hoodie')
    SearchResultsPage.elements.getResultsTitleLabel().should('contain', 'Hoodie')
    SearchResultsPage.elements.getProductTitleLink().each(($element) => {
      expect($element).to.contain('Hoodie')
    })
  })//it should show results when searched from a different product details page

  it('should show a message when no results are found', () => {
    SearchBarPage.searchProduct('pants')
    SearchResultsPage.elements.getResultsTitleLabel().should('contain', 'pants')
    SearchResultsPage.elements.getNoResultsMessage().should('contain', 'No products were found matching your selection')
  })//it should show results when searched from a different product details page

})//describe