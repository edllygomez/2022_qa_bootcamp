import { SearchBarPage } from '../page-objects/components/search-bar'

describe('Search Product', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('search polo', ()=> {
        SearchBarPage.searchProduct("polo");

        cy.url().should('include', "/polo");
        cy.title().should('include', "Polo");
    })
})
