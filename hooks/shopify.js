import Client from "shopify-buy";

const ADMIN_ACCESS_TOKEN = "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";
const STOREFRONT_ACCESS_TOKEN = "6eac1f5d00ae8aa3b155238040b7119b";
const DOMAIN = "finishsense.myshopify.com";
const API_KEY = "ea50017ec933739164288a96febd6a03";
const API_SECRET_KEY = "292169b227b204adc849c7a45e672f6a";

// Initializing a client to return content in the store's primary language
export const client = Client.buildClient({
  domain: DOMAIN,
  storefrontAccessToken: STOREFRONT_ACCESS_TOKEN,
});

// Initializing a client to return translated content
// const clientWithTranslatedContent = Client.buildClient({
//   domain: "your-shop-name.myshopify.com",
//   storefrontAccessToken: "your-storefront-access-token",
//   language: "ja-JP",
// });
