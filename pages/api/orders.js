const Shopify = require("shopify-api-node");

const shopifyApiNode = new Shopify({
  shopName: `${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}`,
  accessToken: `${process.env.NEXT_PUBLIC_SHOPIFY_PRIVATE_ACCESS_TOKEN}`,
});

export default async function orders(req, res) {
  try {
    const orders = shopifyApiNode.order
      .list({ limit: 150 })
      .then((orders) => res.status(200).json(orders))
      .catch((err) => res.status(500).json({ error: err }));
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
}
