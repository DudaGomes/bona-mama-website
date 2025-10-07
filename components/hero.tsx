"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    image: "/mais-do-que-tempero.png",
    alt: "Mais do que tempero - Bona Mama",
  },
  {
    id: 2,
    image: "/lidera-e-conquista-bona-mama.png",
    alt: "Lidera e conquista - Bona Mama",
  },
  {
    id: 3,
    image: "/sabor-que-lidera-bona-mama.png",
    alt: "Sabor que lidera - Bona Mama",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play carousel every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full">
      {/* Product carousel - Full width, fixed height */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={heroSlides[currentSlide].image || "/placeholder.svg"}
          alt={heroSlides[currentSlide].alt}
          fill
          className="object-cover"
          priority
        />
        
        {/* Carousel dots positioned over the image */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex justify-center gap-3">
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
