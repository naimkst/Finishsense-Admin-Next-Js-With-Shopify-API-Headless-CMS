export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const storefrontEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    // GraphQL Query
    const query = `
      query productRecommendations($productId: ID!) {
        productRecommendations(productId: $productId) {
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
          }
          compareAtPriceRange {
            maxVariantPrice{
              amount
              currencyCode
            }
            minVariantPrice{
              amount
              currencyCode
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                sku
                price{
                  amount
                  currencyCode
                }
                availableForSale
                barcode
                compareAtPrice{
                  amount
                  currencyCode
                }
                title
              }
            }
          }
        }
      }
    `;

    const variables = {
      productId: "gid://shopify/Product/9504791757092",
    };

    const response = await fetch(storefrontEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();
    console.log("Shopify Response:", JSON.stringify(data, null, 2));

    // Handle Shopify API Errors
    if (data.errors) {
      return res
        .status(500)
        .json({ error: "Shopify API Error", details: data.errors });
    }

    // Return Product Recommendations
    res.status(200).json({ recommendations: data.data.productRecommendations });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
