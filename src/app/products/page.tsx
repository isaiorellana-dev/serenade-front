import ProductCard from "../components/ProductCard"
import { ApiResponse, Product } from "../types/products"

export default async function Page() {
  const baseUrl = process.env.API_URL

  const data = await fetch(baseUrl + "/products")

  const products: ApiResponse<Product[]> = await data.json()

  return (
    <main>
      <section className="py-2" id="gorras">
        <h1 className="font-title text-title text-center">Nuestras Gorras</h1>

        <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar">
          {products.data
            .filter((p) => p.type == "cap")
            .map((p) => (
              <ProductCard
                key={p.name}
                id={p.id}
                name={p.name}
                imageUrls={p.image_urls}
                basePrice={p.base_price}
              />
            ))}
        </div>
      </section>
      <section className="py-2" id="tote-bags">
        <h1 className="font-title text-title text-center">
          Nuestras Tote Bags
        </h1>
        <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar">
          {products.data
            .filter((p) => p.type == "tote")
            .map((p) => (
              <ProductCard
                key={p.name}
                id={p.id}
                name={p.name}
                imageUrls={p.image_urls}
                basePrice={p.base_price}
              />
            ))}
        </div>
      </section>
      <section className="py-2" id="camisas">
        <h1 className="font-title text-title text-center">Nuestras Camisas</h1>
        <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar">
          {products.data
            .filter((p) => p.type == "shirt")
            .map((p) => (
              <ProductCard
                key={p.name}
                id={p.id}
                name={p.name}
                imageUrls={p.image_urls}
                basePrice={p.base_price}
              />
            ))}
        </div>
      </section>
      {/* <section className="py-2">
          <h1 className="font-title text-title text-center">Nuestros Hoodies</h1>
          <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar">
            {products.data
              .filter((p) => p.type == "hoodie")
              .map((p) => (
                <ProductCard
                  key={p.name}
                  id={p.id}
                  name={p.name}
                  imageUrls={p.image_urls}
                  basePrice={p.base_price}
                />
              ))}
          </div>
        </section> */}
      <section className="py-2" id="parches">
        <h1 className="font-title text-title text-center">Nuestros Parches</h1>

        <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar">
          {products.data
            .filter((p) => p.type == "patch")
            .map((p) => (
              <ProductCard
                key={p.name}
                id={p.id}
                name={p.name}
                imageUrls={p.image_urls}
                basePrice={p.base_price}
              />
            ))}
        </div>
      </section>
      <section className="py-2">
        <h1 className="font-title text-title text-center" id="vasos">
          Nuestros Vasos
        </h1>
        <div className="flex w-full gap-8 px-4 py-2 overflow-x-scroll no-scrollbar">
          {products.data
            .filter((p) => p.type == "mug")
            .map((p) => (
              <ProductCard
                key={p.name}
                id={p.id}
                name={p.name}
                imageUrls={p.image_urls}
                basePrice={p.base_price}
              />
            ))}
        </div>
      </section>
    </main>
  )
}
