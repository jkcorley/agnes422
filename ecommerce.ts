export interface CartItem { id: string; name: string; price: number; quantity: number; }

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function addToCart(item: CartItem) {
  if (typeof window === "undefined") return;
  const cart = getCartItems();
  const index = cart.findIndex(i => i.id === item.id);
  if (index > -1) {
    cart[index].quantity += item.quantity;
  } else {
    cart.push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
