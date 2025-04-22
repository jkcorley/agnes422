import { crystallize } from "@/lib/crystallize";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }: { params: { handle: string } }) {
  const data = await crystallize.query({
    query: `
      query product($path: String!) {
        catalogue(path: $path) {
          id name description
          variants { price }
          images { url }
        }
      }
    `,
    variables: { path: `/${params.handle}` },
  });

  const product = data.catalogue;
  if (!product) notFound();
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      {product.images[0] && <img src={product.images[0].url} alt={product.name} className="w-64 h-64 object-cover" />}
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 font-bold">${product.variants[0]?.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Add to Cart</button>
    </main>
  );
}
