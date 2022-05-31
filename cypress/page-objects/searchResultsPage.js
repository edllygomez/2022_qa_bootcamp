import { ResultsCarouselComponent } from "./components/resultsCarouselComponent";
import { SearchBarComponent } from "./components/searchBarComponent";

export class SearchResultsPage {
  resultsCarousel = new ResultsCarouselComponent();
  searchParam;
  searchBar = new SearchBarComponent();

  navigate(searchParam = "hoodie") {
    cy.visit(
      `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/?s=${searchParam}/`
    );
  }

  searchProduct(searchParam) {
    this.searchBar.searchProduct(searchParam);
  }

  searchProductSecundary(searchParam) {
    this.searchBar.searchProductSecundary(searchParam);
  }
}
