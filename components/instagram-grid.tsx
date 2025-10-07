"use client"

import { useState } from "react"
import Image from "next/image"

const instagramPosts = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250925-WA0035-OlwzQETzJwuKxZBbgeVOUjhOk6aNXP.jpg",
    alt: "Post Instagram Bona Mama 1",
  },
  {
    id: 2,
    image: "/amendoim-bona-mama.jpg",
    alt: "Post Instagram Bona Mama 2",
  },
  {
    id: 3,
    image: "/alho-bona-mama.jpg",
    alt: "Post Instagram Bona Mama 3",
  },
  {
    id: 4,
    image: "/frutas-secas-bona-mama.jpg",
    alt: "Post Instagram Bona Mama 4",
  },
]

export default function InstagramGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-black">Siga-nos no Instagram</h2>
        <p className="text-center text-xl text-brand-orange font-semibold mb-12">@bonamamaoficial</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <div
              key={post.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-square">
            <Image
              src={instagramPosts[selectedImage].image || "/placeholder.svg"}
              alt={instagramPosts[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
