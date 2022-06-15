/// <reference types="cypress" />

import { AppRequest } from "../../support/requests";
import { ProductPage } from "../../page-objects/pages/productpage";
import { v4 as uuid } from "uuid";

describe("reviews tests", () => {
  const productPage = new ProductPage();
  const appRequest = new AppRequest();

  context("CRUD tests on product reviews", () => {
    let productName;
    const productId = 37;
    let reviewID;
    let uniqueID;
    const newRating = 2;
    const updatedReview = `Hated the texture of the fabric! It is awful, I give it ${newRating} stars `;

    beforeEach(() => {
      uniqueID = uuid();
      appRequest.fetchProduct(productId).then((body) => {
        productName = body.name;
      });
      appRequest.createProductReview(productId, uniqueID).then((body) => {
        reviewID = body.id;
      });
    });

    afterEach(() => {
      appRequest.deleteProductReview(reviewID);
    });

    it("Should create a product review and navigate to it", () => {
      productPage.navigate(productName);
      productPage.getReviews().should("include.text", uniqueID);
    });

    it("Should update a product review and navigate to it", () => {
      appRequest.updateProductReview(newRating, reviewID, uniqueID);
      productPage.navigate(productName);
      productPage.getReviews().should("include.text", updatedReview + uniqueID);
    });

    it("Should delete a product review and can't navigate to it", () => {
      appRequest.deleteProductReview(reviewID);
      productPage.navigate(productName);
      productPage.getReviews().should("not.contain", uniqueID);
    });

    it("Should list a product review", () => {
      appRequest.listProductReview(reviewID).then((body) => {
        expect(body.review).contain(uniqueID);
      });
      productPage.navigate(productName);
      productPage.getReviews().should("include.text", uniqueID);
    });
  });
});
