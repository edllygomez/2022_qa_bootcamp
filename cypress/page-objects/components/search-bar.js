
export class SearchBar
{
   elements = {
       getSearchField:() => cy.get('#woocommerce-product-search-field-0'),
   }
   
    searchProduct(product)
    {
        this.elements.getSearchField().type(product).type('{enter}');
    }
}

export const SearchBarPage = new SearchBar();
