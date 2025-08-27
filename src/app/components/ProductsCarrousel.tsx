// "use client"

// import { useEffect, useState } from "react"
import { ApiResponse, Product } from "../types/products"
import ProductCard from "./ProductCard"

type ProductsCarrouselProps = {
  query: string
}

export default async function ProductsCarrousel({
  query,
}: ProductsCarrouselProps) {
  // const [products, setProducts] = useState<Product[]>([])

  const baseUrl = process.env.API_URL

  // useEffect(() => {
  const data = await fetch(baseUrl + query)

  const products: ApiResponse<Product[]> = await data.json()

  return (
    <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar">
      {products.data.map((p) => (
        <ProductCard
          id={p.id}
          key={p.id}
          name={p.name}
          imageUrls={p.image_urls}
          basePrice={p.base_price}
        />
      ))}
    </div>
  )
}
