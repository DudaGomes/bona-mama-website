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
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center rounded-t-3xl">
          <h2 className="text-2xl font-bold text-brand-orange">{product.nome}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative aspect-square max-w-md mx-auto mb-6">
            <Image src={product.imagem || "/placeholder.svg"} alt={product.nome} fill className="object-contain" />
          </div>

          <div className="space-y-4">
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
              <div>
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
  )
}
