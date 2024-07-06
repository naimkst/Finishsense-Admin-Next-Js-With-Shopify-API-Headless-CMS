import "@shopify/shopify-api/adapters/web-api";
import { createAdminApiClient } from "@shopify/admin-api-client";

export const shopify = createAdminApiClient({
  storeDomain: "finishsense.myshopify.com",
  apiVersion: "2024-04",
  accessToken: "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",
});
