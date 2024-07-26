import { shopify } from "@/lib/shopify";

export default async function hello(req, res) {
  const operation = `
    query OrdersQuery {
      orders(first: 100) {
        edges {
          node {
            id
            name
            confirmationNumber
            unpaid
            subtotalPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
            totalPriceSet {
              presentmentMoney {
                amount
                currencyCode
              }
            }
            subtotalLineItemsQuantity
            billingAddress {
              address1
              address2
              city
              company
              coordinatesValidated
              country
              zip
              timeZone
              provinceCode
              province
              phone
              firstName
              lastName
              id
              latitude
              longitude
              name
            }
            customer {
              addresses {
                address1
                address2
                city
                company
                country
                firstName
                lastName
                id
                name
                phone
                province
                provinceCode
                zip
                latitude
                longitude
              }
            }
            email
            transactions {
              accountNumber
              amountSet {
                presentmentMoney {
                  amount
                  currencyCode
                }
              }
              authorizationCode
              authorizationExpiresAt
            }
            unpaid
            restockable
            poNumber
            phone
            fulfillable
            fullyPaid
            note
            lineItems(first: 10) {
              edges {
                node {
                  sku
                  product {
                    title
                    hasOutOfStockVariants
                    featuredImage {
                      height
                      width
                      altText
                      url
                    }
                    vendor
                    tags
                    status
                    isGiftCard
                    handle
                    priceRangeV2 {
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                  }
                  id
                  name
                  currentQuantity
                  vendor
                  isGiftCard
                  name
                  quantity
                  totalDiscountSet {
                    presentmentMoney {
                      amount
                      currencyCode
                    }
                  }
                  title
                  image {
                    url
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const { data, errors, extensions } = await shopify.request(operation);
    res.status(200).json({ data: data?.orders, errors: errors });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
