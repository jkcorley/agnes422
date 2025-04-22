import { NextResponse } from "next/server";
import { crystallize } from "@/lib/crystallize";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  const data = await crystallize.query({query: `
    query search($query: String!) {
      catalogue(path: "/") {
        search: search(query: $query, first: 10) {
          edges {
            node {
              ... on Product {
                id name
                variants { price }
                images { url }
              }
            }
          }
        }
      }
    }
  `, variables: { query }});
  const products = data.catalogue.search.edges.map((edge: any) => ({
    id: edge.node.id,
    name: edge.node.name,
    price: edge.node.variants[0]?.price,
    image: edge.node.images[0]?.url,
  }));
  return NextResponse.json(products);
}
