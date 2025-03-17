export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { cartId, variantId, quantity } = req.body;

    if (!cartId || !variantId || !quantity) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    // Shopify Storefront API Endpoint
    const shopifyEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    // GraphQL Mutation to Add Item to Cart
    const query = `
      mutation addToCart($cartId: ID!, $variantId: ID!, $quantity: Int!) {
        cartLinesAdd(
          cartId: $cartId
          lines: [{ merchandiseId: $variantId, quantity: $quantity }]
        ) {
          cart {
      id
      checkoutUrl
      cost {
        subtotalAmount {
          amount
          currencyCode
        }
        totalAmount {
          amount
          currencyCode
        }
      }
      totalQuantity
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                availableForSale
                compareAtPrice {
                  amount
                  currencyCode
                }
                image {
                  height
                  id
                  url
                  width
                }
                price {
                  amount
                  currencyCode
                }
                quantityAvailable
                unitPrice {
                  amount
                  currencyCode
                }
                title
                sku
                product {
                  id
                  availableForSale
                  featuredImage{
                    altText
                    id
                    url
                    height
                    width
                  }
                  handle
                  vendor
                  tags
                  title
                  priceRange{
                    maxVariantPrice{
                      amount
                      currencyCode
                    }
                    minVariantPrice{
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
            cost {
              subtotalAmount {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
              amountPerQuantity {
                amount
                currencyCode
              }
              compareAtAmountPerQuantity {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
        }
      }
    `;

    // Send Request to Shopify GraphQL API
    const response = await fetch(shopifyEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables: { cartId, variantId, quantity },
      }),
    });

    const data = await response.json();
    console.log("Shopify Response:", JSON.stringify(data, null, 2));

    // Handle Shopify API Errors
    if (data.errors) {
      return res
        .status(500)
        .json({ error: "Shopify API Error", details: data.errors });
    }

    // Return Updated Cart Data
    res.status(200).json({ data: data?.data?.cartLinesAdd?.cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
