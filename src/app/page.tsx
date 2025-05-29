import Image from "next/image"
import ig from "../../public/instagram.svg"
import fb from "../../public/facebook.svg"

export default function Home() {
  return (
    <main>
      <section className="md:flex md:px-8 md:py-10 md:flex-row md:gap-9 flex-col items-start flex p-4 gap-2">
        <Image
          width={570}
          height={387}
          className="max-w-96 rounded-lg shadow-md w-full fade-in-img"
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
          className="max-w-96 rounded-lg shadow-md w-full md:order-last fade-in-img"
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
          className="fade-in-img"
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
      <section className="md:flex md:px-8 md:py-10 md:flex-row md:gap-9 flex-col items-start flex p-4 gap-2">
        <Image
          src="https://res.cloudinary.com/dkwdijf8x/image/upload/v1748444074/posts_jnqfga.png"
          width={810}
          height={681}
          alt="serenade social media"
          className="md:order-last fade-in-img"
        />
        <div className="">
          <h1 className="font-title text-title">
            Siguenos en nuestras redes sociales.
          </h1>
          <p>
            En nuestras redes sociales te mantenemos al día con nuevos
            productos, promociones, giveaways y los eventos en los que
            participamos. También compartimos el proceso detrás de cada pedido,
            desde la creación del diseño hasta el resultado final.
          </p>
          <div className="bg-primary dark:bg-accent2 p-2 rounded-lg w-fit flex gap-1.5 relative shadow-md mt-2">
            <span className="text-accent4 dark:text-primary">Enlaces:</span>
            <a href="https://www.instagram.com/serenade.hn" target="_blank">
              <Image
                src={ig}
                alt="instagram serenade"
                className="hover:scale-105 transition-all"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61567475505515"
              target="_blank"
            >
              <Image
                src={fb}
                alt="facebook serenade"
                className="hover:scale-105 transition-all"
              />
            </a>
          </div>
          {/* <ul>
            <li className="pl-2.5">
              <a href="" className="text-accent2 underline">
                Instagram
              </a>
            </li>
            <li className="pl-2.5">
              <a href="" className="text-accent2 underline">
                Facebook
              </a>
            </li>
          </ul> */}
        </div>
      </section>
    </main>
  )
}
