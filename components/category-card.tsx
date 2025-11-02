"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  name: string
  image: string
  categoryId: string
}

export default function CategoryCard({ name, image, categoryId }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/produtos?categoria=${categoryId}`}>
      <div
        className={`relative transition-all duration-300 cursor-pointer ${
          isHovered ? "scale-110 z-10" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="rounded-3xl p-6">
          <div className="relative aspect-square">
            <Image src={image} alt={name} fill className="object-contain" />
          </div>
          <h3 className="text-2xl font-bold text-center mt-6 text-white">{name}</h3>
        </div>
      </div>
    </Link>
  )
}
