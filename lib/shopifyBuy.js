import Client from "shopify-buy";

export const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME,
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});
