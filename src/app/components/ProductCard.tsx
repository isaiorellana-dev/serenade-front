import Image from "next/image"
import Link from "next/link"

type productCardProps = {
  id: number
  name: string
  basePrice: number
  imageUrls: string[]
}

export default function ProductCard({
  name,
  id,
  basePrice,
  imageUrls,
}: productCardProps) {
  return (
    <Link
      href={"/products/" + id}
      className="flex flex-col gap-2 min-w-3xs max-w-2xs h-auto p-2 bg-ligth shadow rounded-lg "
    >
      <Image
        src={imageUrls[0]}
        alt={name}
        width={250}
        height={312}
        className="rounded-lg w-full aspect-4/5 object-cover"
      />
      <div className="flex flex-col justify-between  h-full">
        <div className="w-full flex justify-between items-start gap-1">
          <p className="dark:text-light text-md leading-5 font-semibold">
            {name}
          </p>
          {/* <div className="add-button hover:scale-105 transition-all cursor-pointer w-[22px] h-[22px]"></div> */}
        </div>
        <span className="text-accent2 dark:text-accent4">{basePrice} Lps.</span>
      </div>
    </Link>
  )
}
