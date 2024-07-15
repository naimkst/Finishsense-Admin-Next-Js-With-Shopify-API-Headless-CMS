import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function curentUrl(path: any) {
  if (path === "/login") {
    return true;
  }
}
// This function can be marked `async` if using `await` inside
export function middleware(req: any, res: any) {
  var accessToken: any = req.cookies.get("shopifyCustomerAccessToken");
  accessToken = accessToken?.value;
  console.log("middleware.ts=========", typeof accessToken);

  if (!accessToken || accessToken === undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const fetchCustomerDetails = async (accessToken: any) => {
    const storefrontEndpoint =
      "https://finishsense.myshopify.com/api/2024-07/graphql.json"; // Replace with your endpoint

    const query = `
      {
        customer(customerAccessToken: "${accessToken}") {
          id
          firstName
          lastName
          email
          phone
        }
      }
    `;

    try {
      const response = await fetch(storefrontEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            "97bfb5d62daae0f370a6caf752aae8d7", // Replace with your Storefront API token
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();

      if (result.errors) {
        console.log(
          result.errors.map((error: any) => error.message).join(", ")
        );
        return;
      }

      console.log(result?.data?.customer?.id);
    } catch (error: any) {
      console.log(`Failed to fetch customer details: ${error.message}`);
    }
  };

  const handleGetCustomerDetails = () => {
    if (!accessToken) {
      console.log("No access token found. Please log in.");
      return;
    }

    fetchCustomerDetails(accessToken);
  };

  // return NextResponse.redirect(new URL("/home", request.url));
  handleGetCustomerDetails();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/product/:path*"], // Match all routes
};
