/// <reference types="cypress" />

import { appRequest } from "../../support/requests";
// import { ProductDetail } from
import { v4 as uuid } from "uuid";

describe("product test", () => {
  context("tests1", () => {
    let productName;
    beforeEach(() => {
      productName = `Product+${uuid()}`;
      appRequest.createProduct(productName);
    });
  });

  context("product tests", () => {});

  context("product tests", () => {});

  context("product tests", () => {});
});
