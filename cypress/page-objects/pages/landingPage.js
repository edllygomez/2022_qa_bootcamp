import { SearchBarComponent } from "../components/searchBarComponent";

export class LandingPage {
  searchBar = new SearchBarComponent();

  navigate() {
    cy.visit("http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/");
  }

  searchProduct(searchParam) {
    this.searchBar.searchProduct(searchParam);
  }
}
