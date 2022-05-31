/// <reference types="cypress" />

import { LandingPage } from "../page-objects/landingPage";
import { ProductPage } from "../page-objects/productpage";

describe("Test searching capabilities", () => {
  const landingPage = new LandingPage();
  const productPage = new ProductPage();
  const productCode = "hoodie";
  const validSearchParams = ["Pocket"]; //Edit this to test more search params
  const invalidSearchParams = [];

  // beforeEach(() => {
  //   landingPage.navigate();
  // });

  validSearchParams.map((searchParam) => {
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

    //ToDo: This test is failing because searching from secundary search bar always goes to search results page.
    // Search results POM and components are pending to be added.
    it("should search from product page using secundary search bar", () => {
      productPage.navigate(productCode);
      productPage.searchProductSecundary(searchParam);
      const productTitle = productPage.productDetails.productTitle();

      productTitle.should(($productTitle) => {
        const text = $productTitle.text().toLowerCase();
        const expectedText = searchParam.toLowerCase();
        expect(text).contain(expectedText);
      });
    });
  });
});
