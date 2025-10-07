import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Vitor Gabriel de Souza",
    location: "Teresina, PI",
    rating: 5,
    text: "Acombinação do sabor crocante e tostado do amendoim com a cremosidade e doçura do açaí é simplesmente incrível!!",
    avatar: "/avatar-homem.jpg",
  },
  {
    id: 2,
    name: "Carol Neves",
    location: "Teresina, PI",
    rating: 5,
    text: "É o melhor de Teresina, não tem jeito!!",
    avatar: "/avatar-mulher.jpg",
  },
  {
    id: 3,
    name: "Mateo",
    location: "Teresina, PI",
    rating: 4.5,
    text: "Compro de olho fechado esse alho. Sucesso amg 🔥🔥🔥",
    avatar: "/avatar-jovem.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="wavy-pattern py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">O que dizem nossos clientes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
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
      </div>
    </section>
  )
}
