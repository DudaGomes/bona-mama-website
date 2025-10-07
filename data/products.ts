export interface Product {
  id: string
  nome: string
  peso: string
  imagem: string
  descricao: string
  categoria: "alho" | "amendoins" | "frutas-secas"
  ingredientes?: string
  selos?: string[]
}

export const products = {
  alhos: [
    {
      id: "alho-roxo-1",
      nome: "Alho Roxo",
      peso: "Peso líquido 180g",
      imagem: "/alho-roxo-bona-mama.jpg",
      descricao: "Alho roxo de alta qualidade, selecionado pela sua excelência e sabor marcante.",
      categoria: "alho" as const,
      ingredientes: "Alho roxo in natura",
      selos: ["Produto Natural", "Sem Conservantes"],
    },
    {
      id: "alho-roxo-2",
      nome: "Alho Roxo Premium",
      peso: "Peso líquido 200g",
      imagem: "/alho-roxo-premium.jpg",
      descricao: "Nossa linha premium de alho roxo, com bulbos maiores e mais aromáticos.",
      categoria: "alho" as const,
      ingredientes: "Alho roxo premium in natura",
      selos: ["Produto Natural", "Sem Conservantes", "Premium"],
    },
    {
      id: "alho-roxo-3",
      nome: "Alho Roxo Tradicional",
      peso: "Peso líquido 150g",
      imagem: "/alho-roxo-tradicional.jpg",
      descricao: "O clássico alho roxo que conquistou o coração dos brasileiros.",
      categoria: "alho" as const,
      ingredientes: "Alho roxo in natura",
      selos: ["Produto Natural", "Sem Conservantes"],
    },
  ],
  amendoins: [
    {
      id: "amendoim-casca-torrado",
      nome: "Amendoim com Casca e Torrado",
      peso: "Peso líquido 210g",
      imagem: "/amendoim-casca-torrado.jpg",
      descricao: "Amendoim crocante com casca, torrado para realçar o sabor natural.",
      categoria: "amendoins" as const,
      ingredientes: "Amendoim com casca torrado",
      selos: ["Alto em Proteína", "Fonte de Energia", "Sem Glúten"],
    },
    {
      id: "amendoim-cru-pele",
      nome: "Amendoim Cru com Pele",
      peso: "Peso líquido 200g",
      imagem: "/amendoim-cru-pele.jpg",
      descricao: "Amendoim cru com pele, perfeito para preparar suas receitas favoritas.",
      categoria: "amendoins" as const,
      ingredientes: "Amendoim cru com pele",
      selos: ["Alto em Proteína", "Produto Natural", "Sem Glúten"],
    },
    {
      id: "amendoim-torrado-salgado",
      nome: "Amendoim Torrado e Salgado",
      peso: "Peso líquido 200g",
      imagem: "/amendoim-torrado-salgado.jpg",
      descricao: "Amendoim torrado e levemente salgado, ideal para petiscar.",
      categoria: "amendoins" as const,
      ingredientes: "Amendoim torrado, sal",
      selos: ["Alto em Proteína", "Crocante", "Sem Glúten"],
    },
  ],
  frutasSecas: [
    {
      id: "uva-passa-preta",
      nome: "Uva Passa Preta",
      peso: "Peso líquido 150g",
      imagem: "/uva-passa-preta.jpg",
      descricao: "Uvas passas pretas selecionadas, doces e suculentas.",
      categoria: "frutas-secas" as const,
      ingredientes: "Uva passa preta",
      selos: ["Sem Açúcar Adicionado", "Rico em Fibras", "Antioxidante"],
    },
    {
      id: "ameixa-seca",
      nome: "Ameixa Seca",
      peso: "Peso líquido 180g",
      imagem: "/ameixa-seca.jpg",
      descricao: "Ameixas secas de alta qualidade, naturalmente doces.",
      categoria: "frutas-secas" as const,
      ingredientes: "Ameixa seca",
      selos: ["Sem Açúcar Adicionado", "Rico em Fibras", "Digestivo"],
    },
    {
      id: "damasco-seco",
      nome: "Damasco Seco",
      peso: "Peso líquido 150g",
      imagem: "/damasco-seco.jpg",
      descricao: "Damascos secos macios e saborosos, ricos em nutrientes.",
      categoria: "frutas-secas" as const,
      ingredientes: "Damasco seco",
      selos: ["Sem Açúcar Adicionado", "Rico em Vitamina A", "Antioxidante"],
    },
  ],
}
