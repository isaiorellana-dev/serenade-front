"use client"

import { useCart } from "@/app/context/CartContext"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, sendCartToWhatsApp } =
    useCart()

  const total = items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  )

  if (items.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-xl font-semibold">Tu carrito está vacío 🛒</h1>
        <Link href="/products" className="text-blue-500 underline">
          Seguir comprando
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Carrito de compras</h1>

      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li
            key={`${item.productId}-${item.attributes.color}-${item.attributes.size}`}
            className="flex py-4"
          >
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={80}
              height={100}
              className="rounded mr-2 aspect-4/5 object-cover w-[80px] h-[100px]"
            />
            <div className="flex-1">
              <p className="font-bold">{item.name}</p>
              {/* <p className="text-sm text-gray-500">
                {item.quantity} x L.{item.unitPrice.toFixed(2)}
              </p> */}

              {item.attributes.size && <p>Size: {item.attributes.size}</p>}
              {item.attributes.color && (
                <div className="flex gap-1.5 items-center">
                  <p>Color:</p>
                  <div
                    className={`${
                      ["black", "white"].includes(
                        item.attributes.color.toString()
                      )
                        ? "bg-" + item.attributes.color
                        : "bg-" + item.attributes.color + "-500"
                    }
                    ${
                      item.attributes.color == "white" &&
                      "bg-" + item.attributes.color
                    }

                    w-4 h-4 rounded-sm`}
                  ></div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold">
                L.{(item.unitPrice * item.quantity).toFixed(2)}
              </p>
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(
                    item.productId,
                    item.attributes,
                    Number(e.target.value)
                  )
                }
                className="text-primary px-2 inset-border rounded-lg bg-accent4 max-w-14"
              />
              <button
                onClick={() => removeFromCart(item.productId, item.attributes)}
                className="text-accent3 hover:underline"
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center border-t border-accent1 pt-4">
        <span className="text-lg text-accent2 font-semibold">Total:</span>
        <span className="text-xl text-accent2 font-bold">
          L.{total.toFixed(2)}
        </span>
      </div>

      <div className="mt-6 text-right">
        <a
          href={sendCartToWhatsApp("+50495497605")}
          target="_blank"
          className="bg-accent4 text-primary px-6 py-2 rounded hover:border-accent1 hover:border-2 transition-all"
        >
          Ordenar en Whatsapp
        </a>
      </div>
    </div>
  )
}
