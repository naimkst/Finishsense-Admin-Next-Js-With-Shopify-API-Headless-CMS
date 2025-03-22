export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { cartId, lineId, quantity } = req.body;

    if (!cartId || !lineId || typeof quantity !== "number") {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const shopifyEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    const query = `
      mutation updateCartLine($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
                      title
                      sku
                      image {
                        url
                        width
                        height
                      }
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        id
                        title
                        handle
                        vendor
                        tags
                        featuredImage {
                          url
                          width
                          height
                          altText
                        }
                        priceRange {
                          maxVariantPrice {
                            amount
                            currencyCode
                          }
                          minVariantPrice {
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
          userErrors {
            field
            message
          }
        }
      }
    `;

    const variables = {
      cartId,
      lines: [
        {
          id: lineId,
          quantity: quantity,
        },
      ],
    };

    const response = await fetch(shopifyEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const data = await response.json();
    console.log("Shopify Response:", JSON.stringify(data, null, 2));

    if (data.errors || data?.data?.cartLinesUpdate?.userErrors?.length) {
      return res.status(500).json({
        error: "Shopify API Error",
        details: data.errors || data?.data?.cartLinesUpdate?.userErrors,
      });
    }

    res.status(200).json({ data: data?.data?.cartLinesUpdate?.cart });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
