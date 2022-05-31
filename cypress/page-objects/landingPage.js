import { SearchBar } from "../page-objects/components/searchBar";

export class LandingPage {
  searchBar = new SearchBar();

  navigate() {
    cy.visit("http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/");
  }

  searchProduct(searchParam) {
    this.searchBar.searchProduct(searchParam);
  }
}
