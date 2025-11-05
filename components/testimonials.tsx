"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Vitor Gabriel de Souza",
    location: "Teresina - PI",
    rating: 5,
    text: "A combinação do sabor crocante e tostado do amendoim com a cremosidade e doçura do açaí é simplesmente incrível!!",
    avatar: "/avatar-homem.jpg",
  },
  {
    id: 2,
    name: "Carol Neves",
    location: "Teresina - PI",
    rating: 5,
    text: "É o melhor de Teresina, não tem jeito!!",
    avatar: "/avatar-mulher.jpg",
  },
  {
    id: 3,
    name: "Mateo",
    location: "Teresina - PI",
    rating: 4.5,
    text: "Compro de olhos fechados esse alho.🔥",
    avatar: "/avatar-jovem.jpg",
  },
  {
    id: 4,
    name: "Maria Castro",
    location: "Teresina - PI",
    rating: 5,
    text: "Esse alho é incrível de bom !!Meu pré-treino preferido 🤩🤩",
    avatar: "/avatar-mulher.jpg",
  },
  {
    id: 5,
    name: "Igor Burlan",
    location: "Teresina - PI",
    rating: 5,
    text: "A melhor que tem !",
    avatar: "/avatar-homem.jpg",
  },
  {
    id: 6,
    name: "Elizabeth Rodrigues",
    location: "Teresina - PI",
    rating: 5,
    text: "Só quem tem bom gosto saboreia o melhor amendoim Bona Mama",
    avatar: "/avatar-mulher.jpg",
  },
  {
    id: 7,
    name: "Juliana Mendes",
    location: "Teresina - PI ",
    rating: 5,
    text: "O sabor do amendoim é viciante! Levo sempre um pacotinho na bolsa, não fico sem!",
    avatar: "/avatar-mulher.jpg",
  },
  {
    id: 8,
    name: "Ricardo Nogueira",
    location: "Timon - MA",
    rating: 5,
    text: "Esse alho deixa qualquer receita melhor! Aroma e sabor incríveis, bem caseiro!",
    avatar: "/avatar-homem.jpg",
  },
  {
    id: 9,
    name: "Paula Santana",
    location: "Teresina - PI",
    rating: 5,
    text: "Uva passa docinha do jeito certo, perfeita pra misturar com castanhas!",
    avatar: "/avatar-mulher.jpg",
  },
   {
    id: 10,
    name: "Caio Araújo",
    location: "Parnaíba - PI",
    rating: 5,
    text: "Comprei por indicação e agora não troco mais! Amendoim torrado perfeito!",
    avatar: "/avatar-homem.jpg",
  },
   {
    id: 11,
    name: "Fernanda Luz",
    location: "Teresina - PI",
    rating: 5,
    text: "Alho roxo da Bona Mama é o segredo do tempero aqui de casa. Qualidade absurda!",
    avatar: "/avatar-homem.jpg",
  },
   {
    id: 12,
    name: "Marcos Vieira",
    location: "Teresina - PI",
    rating: 5,
    text: "Textura, sabor e crocância impecáveis. Dá pra sentir que é feito com carinho!",
    avatar: "/avatar-homem.jpg",
  },


]

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">O que dizem nossos clientes</h2>

        <div className="relative">
          {/* Botão Anterior */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-brand-orange hover:text-white transition-all duration-300"
            aria-label="Depoimentos anteriores"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Grid de depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`w-6 h-6 ${
                        index < Math.floor(testimonial.rating)
                          ? "fill-brand-orange text-brand-orange"
                          : index < testimonial.rating
                            ? "fill-brand-orange/50 text-brand-orange"
                            : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/20 flex items-center justify-center overflow-hidden">
                    <span className="text-brand-orange font-bold text-xl">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-brand-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-brand-orange hover:text-white transition-all duration-300"
            aria-label="Próximos depoimentos"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores de página */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
