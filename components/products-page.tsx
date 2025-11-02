"use client"

import { useState, useMemo, useEffect } from "react"
import ProductCard from "./product-card"
import { products } from "@/data/products"
import { Search } from "lucide-react"
import { useSearchParams } from "next/navigation"

const categories = [
  { id: "todos", label: "Todos" },
  { id: "alho", label: "Alho" },
  { id: "amendoins", label: "Amendoins" },
  { id: "frutas-secas", label: "Frutas Secas" },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoriaUrl = searchParams.get("categoria")
  
  const [activeCategory, setActiveCategory] = useState("todos")
  const [searchQuery, setSearchQuery] = useState("")

  // Set initial category from URL parameter
  useEffect(() => {
    if (categoriaUrl && categories.some(cat => cat.id === categoriaUrl)) {
      setActiveCategory(categoriaUrl)
    }
  }, [categoriaUrl])

  const allProducts = useMemo(() => {
    return [...products.alhos, ...products.amendoins, ...products.frutasSecas]
  }, [])

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    // Filter by category
    if (activeCategory !== "todos") {
      filtered = filtered.filter((product) => product.categoria === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) => product.nome.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    return filtered
  }, [allProducts, activeCategory, searchQuery])

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-5xl md:text-6xl font-black text-center mb-12 text-brand-orange">Produtos</h1>

      {/* Filters */}
      <div className="mb-12 space-y-6">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-brand-orange text-white scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Products grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  )
}
