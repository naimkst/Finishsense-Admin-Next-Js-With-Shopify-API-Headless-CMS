// const Shopify = require("shopify-api-node");

// import "@shopify/shopify-api/adapters/web-api";
// import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";

// export const shopify = new Shopify({
//   shopName: DOMAIN,
//   apiKey: API_KEY,
//   password: API_SECRET_KEY,
// });

// export const shopify = new Shopify({
//   shopName: DOMAIN,
//   accessToken: ADMIN_ACCESS_TOKEN,
// });

// export const shopify = new Shopify({
//   STOREFRONT_ACCESS_TOKEN,
//   ApiVersion,
// });

import { shopifyApi, ApiVersion } from "@shopify/shopify-api";
import { restResources } from "@shopify/shopify-api/rest/admin/2024-04";
import "@shopify/shopify-api/adapters/web-api";
import { MemorySessionStorage } from "@shopify/shopify-app-session-storage-memory";
import { createAdminApiClient } from "@shopify/admin-api-client";

// export const shopify = shopifyApi({
//   apiKey: "ea50017ec933739164288a96febd6a03",
//   apiSecretKey: "292169b227b204adc849c7a45e672f6a",
//   privateAppStorefrontAccessToken: "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",
//   scopes: ["read_products"],
//   hostName: "finishsense.myshopify.com",
//   apiVersion: ApiVersion.April24,
//   sessionStorage: new MemorySessionStorage(),
//   restResources,
// });

export const shopify = createAdminApiClient({
  storeDomain: "finishsense.myshopify.com",
  apiVersion: "2024-04",
  accessToken: "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",
});
