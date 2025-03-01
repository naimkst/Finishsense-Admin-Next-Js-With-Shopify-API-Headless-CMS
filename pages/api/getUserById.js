export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { customerId } = req.body; // Extract customerId from request body

    if (!customerId) {
      return res.status(400).json({ error: "Customer ID is required" });
    }

    console.log("Customer ID:", customerId);

    // Shopify Admin API Endpoint
    const shopifyEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/admin/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`;

    // GraphQL Query to fetch customer by ID
    const query = `
      query getCustomerById($id: ID!) {
        customerByIdentifier(identifier: { id: $id }) {
          id
          email
          displayName
          verifiedEmail
          firstName
          lastName
        }
      }
    `;

    const variables = { id: String(customerId) }; // Convert ID to Shopify GID format

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

    // Log the response for debugging
    console.log("Shopify Response:", JSON.stringify(data, null, 2));

    // Handle API Errors
    if (data.errors) {
      return res
        .status(500)
        .json({ error: "Shopify API Error", details: data.errors });
    }

    // Check if customer data exists
    if (!data.data || !data.data.customerByIdentifier) {
      return res.status(404).json({ error: "Customer not found" });
    }

    // Return customer data
    res.status(200).json({ customer: data.data.customerByIdentifier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
