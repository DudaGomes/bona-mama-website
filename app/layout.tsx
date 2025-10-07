import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bona Mama - O sabor que lidera. O amendoim que conquista.",
  description: "Produtos naturais, nutritivos e cheios de sabor. Alho, amendoim e frutas secas de qualidade.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="font-sans">{children}</body>
    </html>
  )
}
