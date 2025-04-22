import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${encodeURIComponent(product.handle)}`} className="block border p-4 rounded hover:shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="mt-1">${product.price}</p>
    </Link>
  );
}
