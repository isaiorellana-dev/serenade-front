import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="md:flex md:px-8 md:py-10 md:flex-row md:gap-9 flex-col items-start flex p-4 gap-2">
        <Image
          width={570}
          height={387}
          className="max-w-96 rounded-lg shadow-md w-full"
          src="https://res.cloudinary.com/dkwdijf8x/image/upload/v1748280390/caps_ikftey.png"
          alt="serenade caps"
        />
        <div>
          <h1 className="font-title text-title">
            Regala complicidad: comparte estilo con tu alma gemela.
          </h1>
          <p>
            Regala un accesorio que no solo complementa su look, sino que
            también simboliza el vínculo inquebrantable que los une, haciendo de
            cada día una celebración de amor y complicidad.
          </p>
        </div>
      </section>
      <section className="md:flex md:px-8 md:py-10 md:flex-row md:gap-9 flex-col items-start flex p-4 gap-2">
        <Image
          src="https://res.cloudinary.com/dkwdijf8x/image/upload/v1748283419/products_qowcju.png"
          width={555}
          height={372}
          className="max-w-96 rounded-lg shadow-md w-full md:order-last"
          alt="serenade products"
        />
        <div>
          <h1 className="font-title text-title">
            Explora nuestros productos personalizados
          </h1>
          <p>
            Parches bordados, Tote bags, Camisas, Hoodies, Gorras, Llaveros y
            más, todo personalizado con tus personajes y artistas favoritos.
          </p>
        </div>
      </section>
      <section className="md:flex md:px-8 md:py-10 md:flex-row md:gap-9 flex-col items-start flex p-4 gap-2">
        <Image
          width={540}
          height={498}
          src="https://res.cloudinary.com/dkwdijf8x/image/upload/v1748282985/shipping_k9ujor.png"
          alt="shipping serenade"
        />
        <div>
          <h1 className="font-title text-title">
            Pide en linea y recibe el producto en tu casa.
          </h1>
          <p>
            Hacemos envíos a todo el país en solo 3 a 4 días, con un costo que
            nunca supera los 100 lempiras. Para realizar tu pedido, solo
            necesitas pagar el 50% del total como anticipo. ¡Así de fácil y
            accesible!
          </p>
        </div>
      </section>
    </main>
  )
}
