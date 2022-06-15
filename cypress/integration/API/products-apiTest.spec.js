/// <reference types="cypress" />

import { AppRequest } from "../../support/requests";
import { ProductPage } from "../../page-objects/pages/productpage";
import { v4 as uuid } from "uuid";

describe("product test1", () => {
  const productPage = new ProductPage();
  const appRequest = new AppRequest();
  context("tests1", () => {
    let productName;
    beforeEach(() => {
      productName = `Product${uuid()}`;
      appRequest.createProduct(productName);
    });
    it("Should create a product and navigate to it", () => {
      productPage.navigate(productName);
    });
  });
});
