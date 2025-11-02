"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-20 px-4 bg-brand-beige/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-brand-orange">Entre em Contato</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand-black">Informações de Contato</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Tem dúvidas, sugestões ou quer fazer um pedido especial? Entre em contato conosco!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Email</h4>
                  <a href="mailto:sac@bonamama.com.br" className="text-brand-orange hover:underline">
                    sac@bonamama.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-1">Telefone</h4>
                  <a href="tel:+558699800-1330" className="text-brand-orange hover:underline block">
                    +55 86 99800-1330
                  </a>
                  <a href="tel:+558699924-1808" className="text-brand-orange hover:underline block">
                    +55 86 99924-1808
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-brand-black">Mande uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-semibold mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  required
                  value={formData.assunto}
                  onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand-orange text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-orange/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-semibold">Mensagem enviada com sucesso!</p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-center font-semibold">Erro ao enviar mensagem. Tente novamente.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
