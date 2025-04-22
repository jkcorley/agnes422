import { crystallize } from "@/lib/crystallize";
import ProductCard from "@/components/ecommerce/ProductCard";

export default async function ProductsPage() {
  const data = await crystallize.query({
    query: `
      query {
        catalogue(path: "/") {
          children {
            id name path
            ... on Product {
              variants { price }
              images { url }
            }
          }
        }
      }
    `,
  });

  const products = data.catalogue.children.map((node: any) => ({
    id: node.id,
    name: node.name,
    price: node.variants[0]?.price || 0,
    image: node.images[0]?.url || "",
    handle: node.path,
  }));

  return (
    <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
