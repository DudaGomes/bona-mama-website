import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ProductsPage from "@/components/products-page"

export default function Produtos() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <ProductsPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
