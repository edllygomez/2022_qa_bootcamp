/// <reference types="cypress" />

import { LandingPage } from "../page-objects/pages/landingPage";
import { ProductPage } from "../page-objects/pages/productpage";
import { SearchResultsPage } from "../page-objects/pages/searchResultsPage";

describe("Test searching capabilities", () => {
  const landingPage = new LandingPage();
  const productPage = new ProductPage();
  const searchResultsPage = new SearchResultsPage();

  const productCode = "hoodie";
  const validSearchParams = ["Pocket"]; //Edit this to test more search params
  //const invalidSearchParams = []; //Placeholder for future negative tests

  validSearchParams.map((searchParam) => {
    describe(`Tests using ${searchParam} as search parameter`, () => {
      it("should search from landing page using main search bar", () => {
        landingPage.navigate();
        landingPage.searchProduct(searchParam);
        const productTitle = productPage.productDetails.productTitle();

        productTitle.should(($productTitle) => {
          const text = $productTitle.text().toLowerCase();
          const expectedText = searchParam.toLowerCase();
          expect(text).contain(expectedText);
        });
      });

      it("should search from product page using main search bar", () => {
        productPage.navigate(productCode);
        productPage.searchProduct(searchParam);
        const productTitle = productPage.productDetails.productTitle();

        productTitle.should(($productTitle) => {
          const text = $productTitle.text().toLowerCase();
          const expectedText = searchParam.toLowerCase();
          expect(text).contain(expectedText);
        });
      });

      it("should search from product page using secundary search bar", () => {
        productPage.navigate(productCode);
        productPage.searchProductSecundary(searchParam);
        const searchResultsHeader =
          searchResultsPage.resultsCarousel.searchHeader();

        searchResultsHeader.should(($searchResultsHeader) => {
          const text = $searchResultsHeader.text().toLowerCase();
          const expectedText = searchParam.toLowerCase();
          expect(text).contain(expectedText);
        });

        const searchResultsArticles =
          searchResultsPage.resultsCarousel.searchResults();

        searchResultsArticles.should(($searchResultsArticles) => {
          const text = $searchResultsArticles.text().toLowerCase();
          const expectedText = searchParam.toLowerCase();
          expect(text).contain(expectedText);
        });
      });
    });
  });
});
