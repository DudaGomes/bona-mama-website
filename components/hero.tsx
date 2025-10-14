"use client"

import { useState } from "react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250925-WA0031-GTxG0VQWgJCZXVtemToKvDb8t7g2i4.jpg",
    alt: "Amendoim Bona Mama",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250925-WA0029-Lc00qVgQa89wBUmUGbQvRtpGwRj9Cu.jpg",
    alt: "Alho Bona Mama",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250925-WA0033-xXuFjaP58bpTHmQFmOBxGcy3bZC62W.jpg",
    alt: "Frutas Secas Bona Mama",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative wavy-pattern min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Organic shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-beige rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-blue rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-brand-beige rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Curved slogan - moved down */}
        <div className="text-center mb-12 mt-12 md:mt-20 lg:mt-28">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)] leading-tight tracking-tight">
            <span className="block transform -rotate-2">O SABOR QUE LIDERA.</span>
            <span className="block transform rotate-1">O AMENDOIM QUE CONQUISTA.</span>
          </h1>
        </div>

        {/* Product carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={heroSlides[currentSlide].image || "/placeholder.svg"}
              alt={heroSlides[currentSlide].alt}
              fill
              className="object-contain float-animation"
              priority
            />
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-3 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
