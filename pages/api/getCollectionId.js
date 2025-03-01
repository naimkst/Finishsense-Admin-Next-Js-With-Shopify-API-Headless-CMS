export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Use Admin API (since Storefront API does not support collection metafields)
    const adminEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    // GraphQL Query
    const query = `
      query collection {
        collections(first: 40) {
          edges {
            node {
              title
              id
              handle
              image {
                height
                width
                url
              }
              products(first: 100) {
                edges {
                  node {
                    id
                    title
                    handle
                    vendor
                    featuredImage {
                      url
                      width
                      height
                    }
                    priceRange {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice{
                        amount
                        currencyCode
                      }
                    }
                    compareAtPriceRange {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    variants(first: 10) {
                      edges {
                        node {
                          id
                          sku
                          price {
                            amount
                            currencyCode
                          }
                          availableForSale
                          barcode
                          compareAtPrice {
                            amount
                            currencyCode
                          }
                          title
                        }
                      }
                    }
                  }
                }
              }
              metafield(namespace: "custom", key: "customer") {
                value
              }
            }
          }
        }
      }
    `;

    // Send Request to Shopify GraphQL API
    const response = await fetch(adminEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log("Shopify Response:", JSON.stringify(data, null, 2));

    // Handle Shopify API Errors
    if (data.errors) {
      return res
        .status(500)
        .json({ error: "Shopify API Error", details: data.errors });
    }

    // Return Collection Data
    res.status(200).json({ collections: data.data.collections });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
