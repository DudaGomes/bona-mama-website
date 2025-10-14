export interface Product {
  id: string
  nome: string
  peso: string
  imagem: string
  descricao: string
  categoria: "alho" | "amendoins" | "frutas-secas" | "castanhas"
  ingredientes?: string
  selos?: string[]
}

export const products = {
  alhos: [
    {
      id: "alho-roxo-1",
      nome: "Alho Roxo",
      peso: "Peso líquido 180g",
      imagem: "/alho roxo.png",
      descricao: "Alho roxo de alta qualidade, selecionado pela sua excelência e sabor marcante.",
      categoria: "alho" as const,
      ingredientes: "Alho roxo in natura",
      selos: ["Produto Natural", "Sem Conservantes"],
    },
  ],
  amendoins: [
    {
      id: "amendoim-cru",
      nome: "Amendoim Cru",
      peso: "Peso líquido 200g",
      imagem: "/amendoim-cru.png",
      descricao: "Amendoim cru natural, perfeito para preparar suas receitas favoritas.",
      categoria: "amendoins" as const,
      ingredientes: "Amendoim cru",
      selos: ["Alto em Proteína", "Produto Natural", "Sem Glúten"],
    },
    {
      id: "amendoim-salgado",
      nome: "Amendoim Salgado",
      peso: "Peso líquido 200g",
      imagem: "/amendoim-salgado.png",
      descricao: "Amendoim salgado crocante, ideal para petiscar.",
      categoria: "amendoins" as const,
      ingredientes: "Amendoim, sal",
      selos: ["Alto em Proteína", "Crocante", "Sem Glúten"],
    },
    {
      id: "amendoim-torrado-casca",
      nome: "Amendoim Torrado com Casca",
      peso: "Peso líquido 100g",
      imagem: "/amendoim-torrado-com-casca-100g.png",
      descricao: "Amendoim torrado com casca, crocante e saboroso.",
      categoria: "amendoins" as const,
      ingredientes: "Amendoim com casca torrado",
      selos: ["Alto em Proteína", "Fonte de Energia", "Sem Glúten"],
    },
  ],
  frutasSecas: [
    {
      id: "banana-passa",
      nome: "Banana Passa",
      peso: "Peso líquido 150g",
      imagem: "/03-banana-passa.png",
      descricao: "Banana passa natural, doce e nutritiva.",
      categoria: "frutas-secas" as const,
      ingredientes: "Banana passa",
      selos: ["Sem Açúcar Adicionado", "Rico em Potássio", "Natural"],
    },
    {
      id: "uva-passa",
      nome: "Uva Passa",
      peso: "Peso líquido 150g",
      imagem: "/04-uva-passa.png",
      descricao: "Uvas passas selecionadas, doces e suculentas.",
      categoria: "frutas-secas" as const,
      ingredientes: "Uva passa",
      selos: ["Sem Açúcar Adicionado", "Rico em Fibras", "Antioxidante"],
    },
    {
      id: "tamara-jumbo",
      nome: "Tâmara Jumbo",
      peso: "Peso líquido 200g",
      imagem: "/14-tamara-jumbo.png",
      descricao: "Tâmaras jumbo premium, grandes e saborosas.",
      categoria: "frutas-secas" as const,
      ingredientes: "Tâmara",
      selos: ["Sem Açúcar Adicionado", "Rico em Fibras", "Premium"],
    },
    {
      id: "ameixa-sem-semente",
      nome: "Ameixa sem Semente",
      peso: "Peso líquido 180g",
      imagem: "/ameixa-sem-semente.png",
      descricao: "Ameixas sem semente de alta qualidade, naturalmente doces.",
      categoria: "frutas-secas" as const,
      ingredientes: "Ameixa sem semente",
      selos: ["Sem Açúcar Adicionado", "Rico em Fibras", "Digestivo"],
    },
  ],
  castanhas: [
    {
      id: "castanha-caju",
      nome: "Castanha de Caju",
      peso: "Peso líquido 150g",
      imagem: "/castanha-de-caju.png",
      descricao: "Castanha de caju premium, crocante e saborosa.",
      categoria: "castanhas" as const,
      ingredientes: "Castanha de caju",
      selos: ["Rico em Proteína", "Fonte de Gorduras Boas", "Premium"],
    },
  ],
}
