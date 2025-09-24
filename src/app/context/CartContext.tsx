// context/CartContext.tsx
"use client"

import { createContext, useContext, useState, useEffect } from "react"

type CartItem = {
  productId: number
  name: string
  unitPrice: number
  quantity: number
  imageUrl: string
  attributes: Record<string, string | number | boolean>
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (
    productId: number,
    attributes?: Record<string, string | number | boolean>
  ) => void
  updateQuantity: (
    productId: number,
    attributes: Record<string, string | number | boolean>,
    quantity: number
  ) => void
  sendCartToWhatsApp: (phone: string) => string
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // hidratar desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) setItems(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  // función para comparar atributos
  const isSameAttributes = (
    a: Record<string, string | number | boolean>,
    b: Record<string, string | number | boolean>
  ) => {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if (aKeys.length !== bKeys.length) return false
    return aKeys.every((key) => a[key] === b[key])
  }

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.productId === item.productId &&
          isSameAttributes(i.attributes, item.attributes)
      )

      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId &&
          isSameAttributes(i.attributes, item.attributes)
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }

      return [...prev, item]
    })
  }

  const removeFromCart = (
    productId: number,
    attributes: Record<string, string | number | boolean> = {}
  ) => {
    console.log("deleting", productId, attributes)
    setItems((prev) =>
      prev.filter(
        (i) =>
          !(
            i.productId === productId &&
            isSameAttributes(i.attributes, attributes)
          )
      )
    )
  }

  const updateQuantity = (
    productId: number,
    attributes: Record<string, string | number | boolean>,
    quantity: number
  ) => {
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && isSameAttributes(i.attributes, attributes)
          ? { ...i, quantity }
          : i
      )
    )
  }

  const sendCartToWhatsApp = (
    phone: string,
    productDefaults: Record<number, { defaultColor?: string }> = {}
  ) => {
    if (items.length === 0) return ""

    const formattedItems = items
      .map((i, idx) => {
        const parts: string[] = []

        // cantidad y nombre
        let line = `${idx + 1}. ${i.quantity}x ${i.name}`

        // atributos
        if (i.attributes?.size) {
          parts.push(`*talla*: ${i.attributes.size}`)
        }

        if (i.attributes?.color) {
          const defaultColor = productDefaults[i.productId]?.defaultColor
          if (!defaultColor || i.attributes.color !== defaultColor) {
            parts.push(`*color*: ${i.attributes.color}`)
          }
        }

        if (parts.length > 0) {
          line += `, ${parts.join(", ")}.`
        } else {
          line += `.`
        }

        return line
      })
      .join("\n")

    const total = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)

    const message = `*Nuevo pedido:*\n\n${formattedItems}\n\nTotal: *$${total}*`

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    return url
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        sendCartToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
