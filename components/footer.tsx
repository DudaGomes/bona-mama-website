import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">Bona Mama</h3>
            <p className="text-gray-300 leading-relaxed">
              Feitos para viver bons momentos. Qualidade e sabor desde 2005.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#inicio" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-300 hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-orange">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>sac@bonamama.com.br</li>
              <li>+55 86 99800-1330</li>
              <li>+55 86 99924-1808</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bona Mama. Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
