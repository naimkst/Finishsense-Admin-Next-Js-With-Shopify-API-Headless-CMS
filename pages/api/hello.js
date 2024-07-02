import { shopify } from "@/lib/nodeAPi";
import { gql, request } from "graphql-request";

export default async function hello(req, res) {
  const id = req.body?.id;
  const operation = `
  query ProductQuery($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      metafield(namespace: "custom", key: "specifications") {
        id
        value
      }
      metafields(namespace: "custom", first: 10){
        edges{
          node{
            id
            key
            value
          }
        }
      }
      title
      id
      featuredImage{
        url
      }
      priceRangeV2{
        maxVariantPrice{
          amount
          currencyCode
        }
      }
      compareAtPriceRange{
        maxVariantCompareAtPrice{
          amount
          currencyCode
        }
      }
      vendor
      hasOutOfStockVariants
      description
      descriptionHtml
      handle
      category{
        fullName
        name
        id
      }
       collections(first: 10){
        edges{
          node{
            handle
            title
            id
          }
        }
      }
      tags
      status
        variants(first: 10){
        edges{
          node{
            id
            sku
            price
            availableForSale
            barcode
            compareAtPrice
            title
          }
        }
      }
    }
  }
`;

  const { data, errors, extensions } = await shopify.request(operation, {
    variables: {
      handle: id,
    },
  });
  console.log("@@@@@@@@@@@@@@@", data);
  res.status(200).json({ data: data?.productByHandle, errors: errors });
}
