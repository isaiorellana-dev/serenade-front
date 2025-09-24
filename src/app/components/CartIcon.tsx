"use client"
import Image from "next/image"
import cart from "../../../public/shopping-cart.svg"
import { useCart } from "@/app/context/CartContext"
function CartIcon() {
  const { items } = useCart()

  return (
    <div className="relative">
      {items.length > 0 && (
        <span className="absolute bg-accent1 -right-2 -top-1.5 rounded-full text-center w-4 h-4  pt-[1px] leading-none text-sm">
          {items.length}
        </span>
      )}

      <Image src={cart} className="" alt="shopping cart" />
    </div>
  )
}

export default CartIcon
