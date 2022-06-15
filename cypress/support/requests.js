import { SecretsManager } from "../utils/secretsManager";

export class AppRequest {
  createProduct(productName) {
    const secretsManager = new SecretsManager();
    const data = {
      name: productName,
      type: "simple",
      regular_price: "21.99",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
      short_description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      categories: [
        {
          id: 9,
        },
        {
          id: 14,
        },
      ],
    };
    return cy
      .request({
        method: "POST",
        url: "/wp-json/wc/v3/products",
        auth: {
          user: secretsManager.adminUser,
          password: secretsManager.adminPassword,
        },
        body: data,
      })
      .its("body")
      .as("newProduct");
  }

  fetchProduct(productId) {
    const secretsManager = new SecretsManager();
    const data = {};
    return cy
      .request({
        method: "GET",
        url: `/wp-json/wc/v3/products/${productId}`,
        auth: {
          user: secretsManager.adminUser,
          password: secretsManager.adminPassword,
        },
        body: data,
      })
      .its("body")
      .as("body");
  }

  createProductReview(productID, reviewId) {
    const secretsManager = new SecretsManager();
    const data = {
      product_id: productID,
      review: `Loved the texture of the fabric2!${reviewId}`,
      reviewer: `John Doe2`,
      reviewer_email: `john.doe2@example.com`,
      rating: 5,
    };
    return cy
      .request({
        method: "POST",
        url: "/wp-json/wc/v3/products/reviews",
        auth: {
          user: secretsManager.adminUser,
          password: secretsManager.adminPassword,
        },
        body: data,
      })
      .its("body")
      .as("body");
  }

  listProductReview(reviewID) {
    const secretsManager = new SecretsManager();
    const data = {};
    return cy
      .request({
        method: "GET",
        url: `/wp-json/wc/v3/products/reviews/${reviewID}`,
        auth: {
          user: secretsManager.adminUser,
          password: secretsManager.adminPassword,
        },
        body: data,
      })
      .its("body")
      .as("body");
  }

  deleteProductReview(reviewId) {
    const secretsManager = new SecretsManager();
    const data = {
      force: true,
    };
    return cy
      .request({
        failOnStatusCode: false,
        method: "DELETE",
        url: `/wp-json/wc/v3/products/reviews/${reviewId}`,
        auth: {
          user: secretsManager.adminUser,
          password: secretsManager.adminPassword,
        },
        body: data,
      })
      .its("body")
      .as("body");
  }

  updateProductReview(rating, reviewId, uniqueID) {
    const secretsManager = new SecretsManager();
    const data = {
      rating: rating,
      review: `Hated the texture of the fabric! It is awful, I give it ${rating} stars ${uniqueID}`,
    };
    return cy
      .request({
        method: "PUT",
        url: `/wp-json/wc/v3/products/reviews/${reviewId}`,
        auth: {
          user: secretsManager.adminUser,
          password: secretsManager.adminPassword,
        },
        body: data,
      })
      .its("body")
      .as("body");
  }
}
