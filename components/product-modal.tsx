"use client"

import { useEffect } from "react"
import Image from "next/image"
import type { Product } from "@/data/products"
import { X } from "lucide-react"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full h-[90vh] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixo */}
        <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-3xl flex-shrink-0">
          <h2 className="text-2xl font-bold text-brand-orange">{product.nome}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo com grid - imagem fixa e descrição com scroll */}
        <div className="flex-1 min-h-0">
          <div className="grid md:grid-cols-2 h-full gap-0">
            {/* Coluna da imagem - fixa */}
            <div className="flex items-center justify-center p-6 bg-gray-50">
              <div className="relative w-full aspect-square max-w-sm">
                <Image 
                  src={product.imagem || "/placeholder.svg"} 
                  alt={product.nome} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>

            {/* Coluna do conteúdo - com scroll */}
            <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 80px)' }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-orange mb-2">Peso</h3>
                  <p className="text-gray-700">{product.peso}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-orange mb-2">Descrição</h3>
                  <p className="text-gray-700 leading-relaxed">{product.descricao}</p>
                </div>

                {product.ingredientes && (
                  <div>
                    <h3 className="text-lg font-bold text-brand-orange mb-2">Ingredientes</h3>
                    <p className="text-gray-700 leading-relaxed">{product.ingredientes}</p>
                  </div>
                )}

                {product.selos && product.selos.length > 0 && (
                  <div className="pb-6">
                    <h3 className="text-lg font-bold text-brand-orange mb-2">Selos</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.selos.map((selo, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-semibold"
                        >
                          {selo}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
