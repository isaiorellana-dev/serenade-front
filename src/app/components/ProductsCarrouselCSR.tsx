"use client"

import { useEffect, useState } from "react"
import { ApiResponse, Product } from "../types/products"
import ProductCard from "./ProductCard"

type ProductsCarrouselProps = {
  query: string
  excludeId?: number
}

export default function ProductsCarrouselCSR({
  query,
  excludeId,
}: ProductsCarrouselProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch(baseUrl + query)
        if (!res.ok) throw new Error("Error al obtener productos")
        const data: ApiResponse<Product[]> = await res.json()
        setProducts(data.data)
      } catch {
        setError("No fue posible retornar los productos")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [baseUrl, query])

  if (loading) return <p>Cargando...</p>
  if (error) return <p className="text-red-500">{error}</p>

  // 🔹 filtramos si excludeId existe
  const filteredProducts = excludeId
    ? products.filter((p) => p.id !== excludeId)
    : products

  return (
    <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar scroll-color">
      {filteredProducts.map((p) => (
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
