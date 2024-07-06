import shopify from "../../lib/shopify";

export default async function handler(req, res) {
  const { handle } = "handle=vorbestellung-von-pulldog-ii";

  try {
    const product = await shopify.rest.Product.all({
      handle,
      limit: 1,
    });

    res.status(200).json({ error: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
}
