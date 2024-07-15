import "@shopify/shopify-api/adapters/web-api";
import { createAdminApiClient } from "@shopify/admin-api-client";

export const shopify = createAdminApiClient({
  storeDomain: "finishsense.myshopify.com",
  apiVersion: "2024-07",
  accessToken: "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",
});
