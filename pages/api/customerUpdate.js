export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { input } = req.body; // ✅ Get form data from frontend request

    if (!input || !input.id) {
      return res.status(400).json({ error: "Customer ID is required" });
    }

    // Shopify Admin API Endpoint
    const shopifyEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    const updateMutation = `
      mutation customerUpdate($input: CustomerInput!) {
        customerUpdate(input: $input) {
          customer {
            id
            firstName
            lastName
            email
            phone
            createdAt
            updatedAt
            numberOfOrders
            tags
            displayName
            addresses {
              address1
              address2
              city
              country
              zip
              province
              phone
            }
            defaultAddress {
              address1
              address2
              city
              country
              zip
              province
              phone
            }
            metafields(first: 100) {
              edges {
                node {
                  namespace
                  key
                  value
                  type
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

    // ✅ Send GraphQL Request to Shopify
    const response = await fetch(shopifyEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_PRIVATE_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query: updateMutation, variables: { input } }),
    });

    const data = await response.json();

    // Handle API errors
    if (data.errors || data.data.customerUpdate.userErrors.length > 0) {
      return res.status(400).json({
        error: "Error updating customer",
        details: data.data.customerUpdate.userErrors,
      });
    }

    // ✅ Return Updated Customer Data
    res.status(200).json({
      suscess: true,
      message: "Customer updated successfully",
      customer: data.data.customerUpdate.customer,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
