/// <reference types="cypress" />

import { LandingPage } from "../page-objects/pages/landingPage";
import { ProductPage } from "../page-objects/pages/productpage";
import { SearchResultsPage } from "../page-objects/pages/searchResultsPage";

describe("Test searching capabilities", () => {
  const landingPage = new LandingPage();
  const productPage = new ProductPage();
  const searchResultsPage = new SearchResultsPage();

  // const productCode = "hoodie";
  const validSearchParams = ["Pocket"]; //Edit this to test more search params
  //const invalidSearchParams = []; //Placeholder for future negative tests

  it.only("should search from landing page using main search bar", () => {
    landingPage.navigate();
    landingPage.searchProduct(validSearchParams[0]);
    const productTitle = productPage.productDetails.productTitle();

    productTitle.should(($productTitle) => {
      const text = $productTitle.text().toLowerCase();
      const expectedText = validSearchParams[0].toLowerCase();
      expect(text).contain(expectedText);
    });

    productPage.changeCartAmount(5);
    productPage.addToCart();

    productPage.alertBanner.clickOnLink();
  });
});
