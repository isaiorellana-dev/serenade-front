import Image from "next/image"
import send from "../../../public/send.png"

export default function Page() {
  return (
    <main>
      <section className="md:flex md:px-8 md:py-4 md:flex-row flex-col items-center flex p-4 gap-10">
        <div className="">
          <h1 className="font-title text-title">
            Cada regalo puede contar una historia
          </h1>
          <p>
            Tu historia, la de tus amigos, familia o pareja, a través de
            momentos, películas, series o artistas favoritos.
          </p>
        </div>
        <div className="w-max">
          {/* <img src={Image} alt="serenade gift" /> */}
          <Image
            src="https://res.cloudinary.com/dkwdijf8x/image/upload/v1747932408/gift_cyh5xf.png"
            width={489}
            height={443}
            alt="gift"
            className="w-80 fade-in-img"
          />
        </div>
      </section>
      <section className="flex flex-col items-center md:px-8 md:py-4 p-4 gap-10">
        <p>
          Somos un equipo de dos universitarios que disfrutamos de la
          creatividad al diseñar productos que conectan con la personalidad de
          nuestros clientes. Con Serenade, hemos creado un proyecto que nos
          permite explotar y hacer crecer nuestras habilidades, pero también
          dándole al cliente un espacio para que deje su huella en cada
          artículo.
        </p>
        <Image
          className="w-full rounded-lg shadow-md fade-in-img"
          width={1374}
          height={580}
          src="https://res.cloudinary.com/dkwdijf8x/image/upload/v1747932407/expopier_z6fkdc.jpg"
          alt="expopier 2024 serenade"
        />
        <p>
          Queremos que te sientas libre de contarnos tus ideas, por más locas o
          personales que sean. Si tienes un diseño en mente, escríbenos y
          haremos lo posible para convertirlo en algo único.
        </p>
        <a
          href="https://wa.me/+50433541719"
          target="_blank"
          className="w-fit px-2 py-1 rounded-lg font-semibold flex gap-2 button"
        >
          Contactanos
          <Image src={send} alt="send button" className="fade-in-img" />
        </a>

        <Image
          src={
            "https://res.cloudinary.com/dkwdijf8x/image/upload/v1748551673/crafting_flm8iu.png"
          }
          width={656}
          height={568}
          alt="serenade crafting"
          className="md:hidden max-w-80"
        />
      </section>
    </main>
    // </ViewTransition>
  )
}
