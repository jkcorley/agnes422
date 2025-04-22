export async function handleVoiceIntent(intentId: string, payload: any) {
  switch (intentId) {
    case "search_product": {
      const resp = await fetch(`/api/search?query=${encodeURIComponent(payload.query)}`);
      const products = await resp.json();
      return { type: "search_results", data: products };
    }
    case "add_to_cart": {
      const { name } = payload;
      return { type: "confirmation", data: { message: `Added ${name} to cart.` } };
    }
    case "checkout":
      return { type: "checkout", data: null };
    default:
      return { type: "text", data: `Sorry, I didn't understand: ${intentId}` };
  }
}
