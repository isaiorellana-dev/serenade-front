"use client"

import { useState } from "react"
import logo from "../../../public/logo.png"
import menu from "../../../public/menu.svg"
import cart from "../../../public/shopping-cart.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import CartIcon from "./CartIcon"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <header className="dark:bg-accent2 bg-primary text-light dark:text-primary rounded-b-lg">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Móvil: botón Menu */}

        {/* Logo / Brand */}

        <Link href={"/"}>
          <Image src={logo} alt="serenade logo" className="h-7 w-auto" />
        </Link>

        {/* Móvil: carrito a la derecha */}
        <Link
          href={"/cart"}
          className="hover:text-accent4 dark:hover:text-light text-light dark:text-primary cursor-pointer transition-colors duration-200 ease-in-out"
          onClick={(e) => {
            e.preventDefault()

            if (pathname !== "/cart") {
              router.push("/cart")
            }
          }}
        >
          <CartIcon />
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          <Image src={menu} alt="menu" />
        </button>

        {/* Desktop: menú principal */}
        <ul className="hidden md:flex gap-8 items-center">
          <Link
            href={"/"}
            onClick={(e) => {
              e.preventDefault()
              if (pathname !== "/") {
                router.push("/")
              }
            }}
            className="hover:text-accent4 dark:hover:text-light text-light dark:text-primary cursor-pointer transition-colors duration-200 ease-in-out"
          >
            inicio
          </Link>

          <li className="relative group">
            <Link href={"/products"}>
              <span className="cursor-pointer hover:text-light text-light dark:text-primary">
                productos
              </span>
            </Link>
            <ul
              className="
              absolute left-0 top-full
              bg-primary dark:bg-accent2
              mt-0
              -translate-y-px
              shadow-lg
              rounded-b-lg
              opacity-0 group-hover:opacity-100
              invisible group-hover:visible
              overflow-hidden
              transition-opacity
            "
            >
              {["gorras", "vasos", "camisas", "tote-bags", "parches"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={"/products" + "#" + item}
                      key={item}
                      className="px-4 py-2 hover:text-accent4 dark:hover:text-light text-light dark:text-primary cursor-pointer whitespace-nowrap transition-colors duration-200 ease-in-out"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </li>

          <Link
            href={"/about"}
            className="hover:text-accent4 dark:hover:text-light text-light dark:text-primary cursor-pointer transition-colors duration-200 ease-in-out"
            onClick={(e) => {
              e.preventDefault()

              if (pathname !== "/about") {
                router.push("/about")
              }
            }}
          >
            quienes somos
          </Link>

          <Link
            href={"/cart"}
            className="hover:text-accent4 dark:hover:text-light text-light dark:text-primary cursor-pointer transition-colors duration-200 ease-in-out"
            onClick={(e) => {
              e.preventDefault()

              if (pathname !== "/cart") {
                router.push("/cart")
              }
            }}
          >
            {/* <Image src={cart} className="" alt="shopping cart" /> */}
            <CartIcon />
          </Link>
        </ul>
      </nav>

      {/* Móvil: menú colapsado */}
      {mobileMenuOpen && (
        // Fondo semitransparente que ocupa toda la pantalla
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-shadow p-5 fade-in"
          onClick={() => setMobileMenuOpen(false)} // cerrar al click fuera
        >
          <div
            className="relative bg-header-bg text-header-text p-6 rounded-lg shadow-md flex flex-col items-center gap-2.5 w-max dark:bg-accent2 dark:text-light bg-primary text-light "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-2 right-2 font-bold text-xl leading-none"
            >
              X
            </button>

            {/* Opciones centradas */}
            <Link
              href="/"
              className={`py-2  text-2xl ${pathname == "/" && "font-bold"}`}
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)

                if (pathname !== "/") {
                  router.push("/")
                }
              }}
            >
              {pathname == "/" && "> "}inicio
            </Link>

            <Link
              href="/about"
              className={`py-2  text-2xl ${
                pathname == "/products" && "font-bold"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)

                if (pathname !== "/products") {
                  router.push("/products")
                }
              }}
            >
              {pathname == "/products" && "> "}nuestros productos
            </Link>

            <Link
              href="/about"
              className={`py-2  text-2xl ${
                pathname == "/about" && "font-bold"
              }`}
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)

                if (pathname !== "/about") {
                  router.push("/about")
                }
              }}
            >
              {pathname == "/about" && "> "}quienes somos
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
