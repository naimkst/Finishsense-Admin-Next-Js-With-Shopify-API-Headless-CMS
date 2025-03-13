import { parse } from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse cookies from request headers
    const cookies = parse(req.headers.cookie || "");
    const userEmail = cookies.userEmail; // Get user email from cookies

    if (!userEmail) {
      return res.status(400).json({ error: "User email not found in cookies" });
    }

    // Shopify Admin API Endpoint
    const shopifyEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    // GraphQL Query for fetching customer data
    const query = `
      query getCustomerByEmail($email: String!) {
        customerByIdentifier(identifier: {emailAddress: $email}) {
          id
          email
          firstName
          lastName
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
            name
            longitude
            latitude
          }
          defaultAddress {
            address1
            address2
            city
            country
            zip
            province
            phone
            name
            longitude
            latitude
          }
          orders(first: 50) {
            edges {
              node {
                lineItems(first: 50) {
                  edges {
                    node {
                      title
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const variables = { email: userEmail };

    // Make API request to Shopify Admin GraphQL
    const response = await fetch(shopifyEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_PRIVATE_ACCESS_TOKEN, // Admin API Token
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    // Log the full response for debugging
    console.log("Shopify Response:", JSON.stringify(data, null, 2));

    // Handle errors from Shopify API
    if (data.errors) {
      return res
        .status(500)
        .json({ error: "Shopify API Error", details: data.errors });
    }

    // Check if customer data is missing
    if (!data.data || !data.data.customerByIdentifier) {
      return res.status(404).json({ error: "Customer not found" });
    }

    // Return customer data
    res.status(200).json({ customer: data.data.customerByIdentifier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
