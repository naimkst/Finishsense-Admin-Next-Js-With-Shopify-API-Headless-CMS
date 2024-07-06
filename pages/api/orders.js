const Shopify = require("shopify-api-node");

const shopifyApiNode = new Shopify({
  shopName: "finishsense.myshopify.com",
  accessToken: "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",
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
