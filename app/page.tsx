import Header from "@/components/header"
import Hero from "@/components/hero"
import ProductsSection from "@/components/products-section"
import Testimonials from "@/components/testimonials"
import InstagramGrid from "@/components/instagram-grid"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="produtos">
          <ProductsSection />
        </section>
        <section id="sobre" className="py-20 px-4 bg-brand-beige/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-orange">Sobre Nós</h2>
            <div className="prose prose-lg mx-auto text-center space-y-6">
              <p className="text-lg leading-relaxed">
                Desde 2005, a Bona Mama nasceu com um propósito: levar qualidade e sabor para a mesa dos brasileiros.
                Tudo começou com o alho roxo, escolhido pela sua excelência, e hoje seguimos crescendo com uma linha
                completa de produtos naturais, nutritivos e cheios de sabor. Nossa missão é clara: promover saúde
                através de alimentos que unem praticidade, carinho e qualidade.
              </p>
              <p className="text-lg leading-relaxed">
                O que nos diferencia é que não vendemos apenas alho e amendoim. Vendemos momentos de conexão, afeto e
                bem-estar. Cada produto é pensado para transformar o simples ato de comer em uma experiência especial.
              </p>
              <p className="text-lg leading-relaxed">
                Estamos sempre próximos de nossos clientes, construindo confiança a cada entrega e reforçando valores
                que guiam nossa jornada: qualidade, dedicação e proximidade.
              </p>
              <p className="text-lg leading-relaxed">
                O futuro é ainda mais promissor: expandir para novos supermercados, lançar nosso próprio e-commerce e
                consolidar a Bona Mama como referência em produtos saudáveis, acessíveis e marcantes.
              </p>
              <p className="text-xl font-bold text-brand-orange mt-8">Bona Mama — feitos para viver bons momentos.</p>
            </div>
          </div>
        </section>
        <Testimonials />
        <InstagramGrid />
        <section id="contato">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
