"use client"

import { useState } from "react"
import Image from "next/image"
import ProductModal from "./product-modal"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div
        className={`relative transition-all duration-300 cursor-pointer ${
          featured ? "scale-100" : "scale-90 opacity-80"
        } ${isHovered ? "scale-105 z-10" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="relative aspect-square">
            <Image src={product.imagem || "/placeholder.svg"} alt={product.nome} fill className="object-contain" />
          </div>
          <h3 className="text-xl font-bold text-center mt-4 text-brand-black">{product.nome}</h3>
          <p className="text-center text-gray-600 mt-2">{product.peso}</p>
        </div>
      </div>

      <ProductModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
