export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  try {
    // Your Shopify Storefront API endpoint
    const storefrontEndpoint =
      "https://finishsense.myshopify.com/api/2024-07/graphql.json";

    // Your Storefront API access token
    const storefrontAccessToken = "97bfb5d62daae0f370a6caf752aae8d7";

    // GraphQL query to authenticate the customer
    const query = `
      mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
        customerAccessTokenCreate(input: $input) {
          customerAccessToken {
            accessToken
            expiresAt
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        email: email,
        password: password,
      },
    };

    const response = await fetch(storefrontEndpoint, {
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": "97bfb5d62daae0f370a6caf752aae8d7",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    if (data.data.customerAccessTokenCreate.userErrors.length) {
      res
        .status(400)
        .json({ errors: data.data.customerAccessTokenCreate.userErrors });
    } else {
      res.status(200).json({
        accessToken:
          data.data.customerAccessTokenCreate.customerAccessToken.accessToken,
        expiresAt:
          data.data.customerAccessTokenCreate.customerAccessToken.expiresAt,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
