"use client"

import CategoryCard from "./category-card"

const categories = [
  {
    id: "amendoins",
    name: "Amendoins",
    image: "/0111.png",
  },
  {
    id: "alho",
    name: "Alho",
    image: "/alhooo.png",
  },
  {
    id: "frutas-secas",
    name: "Frutas Secas",
    image: "/frutas-secas.png",
  },
]

export default function ProductsSection() {
  return (
    <section 
      className="wavy-pattern py-20 px-4"
      style={{ 
        backgroundImage: "url('/fundo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-white">PRODUTOS</h2>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              categoryId={category.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
