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

  if (!accessToken || accessToken === undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const fetchCustomerDetails = async (accessToken: any) => {
    const storefrontEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}/graphql.json`; // Replace with your endpoint

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
          "X-Shopify-Storefront-Access-Token": `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`, // Replace with your Storefront API token
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
  matcher: ["/", "/product/:path*", "/order/:path*"], // Match all routes
};
