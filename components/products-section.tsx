"use client"

import { useState } from "react"
import ProductCard from "./product-card"
import { products } from "@/data/products"

const categories = [
  { id: "alho", label: "Alho" },
  { id: "amendoins", label: "Amendoins" },
  { id: "frutas-secas", label: "Frutas Secas" },
]

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("amendoins")

  const getProductsByCategory = () => {
    switch (activeCategory) {
      case "alho":
        return products.alhos
      case "amendoins":
        return products.amendoins
      case "frutas-secas":
        return products.frutasSecas
      default:
        return products.amendoins
    }
  }

  const currentProducts = getProductsByCategory()

  return (
    <section className="wavy-pattern py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-white">PRODUTOS</h2>

        {/* Product carousel */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {currentProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} featured={index === 1} />
            ))}
          </div>
        </div>

        {/* Category label */}
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {categories.find((cat) => cat.id === activeCategory)?.label}
          </h3>
        </div>

        {/* Category dots */}
        <div className="flex justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                activeCategory === category.id ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ver ${category.label}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
