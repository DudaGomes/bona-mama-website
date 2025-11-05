import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ProductsPage from "@/components/products-page"

export default function Produtos() {
  return (
    <>
      <Header />
      <main 
        className="min-h-screen pt-24"
        style={{ 
          backgroundImage: "url('/fundo-produtos.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <Suspense fallback={<div className="container mx-auto max-w-7xl px-4 py-12 text-center">Carregando produtos...</div>}>
          <ProductsPage />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
