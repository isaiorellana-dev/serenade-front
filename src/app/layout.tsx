import type { Metadata } from "next"
import { Public_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { unstable_ViewTransition as ViewTransition } from "react"

const publicSans = Public_Sans({
  // variable: "--font-public-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Serenade HN",
  description: "Honest work in progress",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} antialiased`}>
        <Header />
        <ViewTransition name="main">{children}</ViewTransition>

        <Footer />
      </body>
    </html>
  )
}
