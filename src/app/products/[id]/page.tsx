"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"

type Product = {
  id: number
  name: string
  description: string
  type: string
  tags: string[]
  base_price: number
  image_urls: string[]
  created_at: string
  updated_at: string
}
type loading = "pending" | "success" | "error"

type ApiResponse<T> = {
  status: string
  data: T
  meta?: string
}

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [mainImage, setMainImage] = useState<string>("")
  const [loading, setLoading] = useState<loading>("pending")
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      try {
        const res = await fetch(`${baseUrl}/products/${id}`)
        if (!res.ok) {
          setLoading("error")
          return
        }

        const json: ApiResponse<Product> = await res.json()
        setProduct(json.data)
        setMainImage(json.data.image_urls[0])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading("success")
      }
    }

    fetchProduct()
  }, [id])

  if (loading == "pending")
    return (
      <main>
        <section className="w-full">
          <div className="max-w-5xl mx-auto p-4 rounded-lg flex flex-wrap justify-center">
            <div className="w-full max-w-[360px] flex gap-2">
              <div className="w-[15%] h-[66px] skeleton skeleton-image rounded-lg aspect-4/5 animate-pulse"></div>
              <div className="skeleton animate-pulse skeleton-image w-[85%] rounded-lg max-w-[360px] aspect-4/5"></div>
            </div>

            <div className="flex flex-wrap content-start w-full max-w-[420px] p-2">
              <div className="flex gap-4 max-w-[420px]">
                <div className="overflow-hidden w-[85%] rounded-lg">
                  <div className="skeleton animate-pulse skeleton-image w-full h-full rounded-lg"></div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full max-w-[420px]">
                <div className="skeleton animate-pulse h-8 w-3/4"></div>

                <div className="skeleton animate-pulse h-4 w-full"></div>
                <div className="skeleton animate-pulse h-4 w-5/6"></div>
                <div className="skeleton animate-pulse h-4 w-4/5"></div>

                <div className="skeleton animate-pulse h-6 w-1/3"></div>

                <div className="mt-2">
                  <div className="skeleton animate-pulse h-5 w-16 inline-block mr-2"></div>
                  <div className="skeleton animate-pulse h-8 w-20 inline-block"></div>
                </div>

                <div className="mt-2">
                  <div className="skeleton animate-pulse h-5 w-20 inline-block mr-2"></div>
                  <div className="skeleton animate-pulse h-8 w-16 inline-block"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  if (!product) return notFound()

  return (
    <main>
      {/* Product details */}
      <section className="flex flex-wrap justify-center gap-2 w-full p-2">
        <div className="flex gap-2 w-full max-w-[420px] transition-all ">
          <div className="w-[15%]">
            {product.image_urls.map((url) => (
              <Image
                key={url}
                src={url}
                alt={product.name}
                width={62}
                height={76}
                className={`${
                  mainImage == url && "border-2 border-accent2"
                } w-full rounded-lg mb-2 cursor-pointer hover:border-2 hover:border-accent2 transition-all`}
                onClick={(e) => {
                  e.preventDefault()
                  setMainImage(url)
                }}
              />
            ))}
          </div>
          <div className="overflow-hidden w-[85%] aspect-4/5 rounded-lg">
            <Image
              src={mainImage}
              alt={product.name}
              className="rounded-lg max-w-none w-full h-auto hover:scale-150 transition-all aspect-4/5 object-cover"
              width={350}
              height={450}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-[420px] md:w-1/2">
          <h2 className="font-title">{product.name}</h2>
          <p>{product.description}</p>
          <span className="font-bold text-accent2">
            Precio: {product.base_price} Lps
          </span>
          {["shirt", "hoodie"].includes(product.type) && (
            <div>
              <label
                htmlFor=""
                className="inline mr-4 text-primary dark:text-light"
              >
                Talla:
              </label>
              <select name="size" id="" className="bg-accent2 inline">
                {/* <option value="">Select an option</option> */}
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
              </select>
            </div>
          )}
          {/* <div>
            <label
              htmlFor=""
              className="inline mr-4 text-primary dark:text-light"
            >
              Cantidad:
            </label>
            <input
              type="number"
              name=""
              id=""
              defaultValue={1}
              className="text-primary px-2 inset-border rounded-lg bg-accent4 max-w-16"
            />
          </div> */}
        </div>
      </section>

      {/* Related products */}
      <section></section>
    </main>
  )
}
