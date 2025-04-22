"use client";
import { useEffect, useState } from "react";
import CartItem from "@/components/ecommerce/CartItem";
import { getCartItems } from "@/utils/ecommerce";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setItems(getCartItems());
  }, []);

  if (items.length === 0) {
    return <p className="p-8">Your cart is empty.</p>;
  }

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems: items }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <p className="mt-6 text-xl">Total: ${total.toFixed(2)}</p>
      <button onClick={handleCheckout} className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
        Checkout
      </button>
    </main>
  );
}
