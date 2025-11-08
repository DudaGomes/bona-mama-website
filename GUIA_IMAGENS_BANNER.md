# 🎨 Guia de Imagens para Banner Hero (Mobile vs Desktop)

## 📐 Resoluções Recomendadas

### **Desktop (src)**
- **Resolução ideal:** `1920x1080px` (Full HD)
- **Proporção:** 16:9 (landscape/horizontal)
- **Formato:** PNG ou JPG
- **Peso máximo:** 500KB (otimizado)

### **Mobile (srcMobile)**
- **Resolução ideal:** `1080x1920px` (9:16 - vertical/portrait)
- **Ou alternativa:** `1080x1350px` (4:5 - Instagram portrait)
- **Proporção:** Vertical (portrait)
- **Formato:** PNG ou JPG
- **Peso máximo:** 300KB (otimizado)

---

## 🎯 Especificações por Imagem

### **1. Banner Principal: "O sabor que lidera..."**

#### Desktop (`sabor-que-lidera-bona-mama.png`)
```
Dimensões: 1920x1080px
Layout: Horizontal
Elementos:
  - Texto no topo/centro
  - Produtos (pacotes) centralizados
  - Elementos decorativos nas laterais
```

#### Mobile (`sabor-que-lidera-bona-mama-mobile.png`) ⭐ CRIAR
```
Dimensões: 1080x1920px (ou 1080x1350px)
Layout: Vertical
Recomendações:
  ✅ Texto "O sabor que lidera..." no topo (1/4 superior)
  ✅ Produtos (pacotes) no centro (bem visíveis)
  ✅ Espaço respiratório maior
  ✅ Fonte maior e mais legível
  ✅ Menos elementos decorativos laterais
  ✅ Foco no conteúdo principal

Zonas de segurança:
  - Top: 150px (evitar corte do texto)
  - Bottom: 150px (evitar menu/botões)
  - Laterais: 50px cada
```

---

### **2. Banner Alho: "Mais do que tempero"**

#### Desktop (`pagina-imagem-alho.png`)
```
Dimensões: 1920x1080px
Layout: Horizontal
```

#### Mobile (`pagina-imagem-alho-mobile.png`) ⭐ CRIAR
```
Dimensões: 1080x1920px (ou 1080x1350px)
Layout: Vertical
Mesmas recomendações da primeira imagem
```

---

## 📱 Breakpoint (Ponto de Troca)

O sistema detecta automaticamente:
- **Mobile:** Telas com largura < 768px → Usa `srcMobile`
- **Desktop:** Telas com largura ≥ 768px → Usa `src`

---

## 🛠️ Como Criar as Imagens Mobile

### Opção 1: Photoshop/GIMP
1. Abra a imagem desktop original
2. **Criar novo documento:**
   - Largura: 1080px
   - Altura: 1920px (ou 1350px)
   - Resolução: 72 DPI
3. **Reestruturar elementos:**
   - Mover texto para topo
   - Aumentar tamanho do texto em 30-50%
   - Centralizar produtos verticalmente
   - Remover elementos laterais desnecessários
4. **Testar legibilidade:**
   - Textos mínimo 40px
   - Contraste alto
5. Salvar como PNG ou JPG otimizado

### Opção 2: Canva (Mais Fácil)
1. Criar design → Dimensões customizadas: 1080x1920px
2. Escolher template "Instagram Story" ou "Mobile Banner"
3. Adicionar:
   - Fundo (mesma cor #f5e9b0)
   - Texto no topo
   - Imagens dos produtos
   - Elementos decorativos
4. Exportar → Baixar como PNG

### Opção 3: Figma
1. Frame 1080x1920px
2. Importar elementos da versão desktop
3. Reorganizar em layout vertical
4. Exportar como PNG/JPG

---

## 📏 Templates de Referência

### Layout Mobile Recomendado:
```
┌─────────────────────┐
│   [Logo opcional]   │ ← 100px
├─────────────────────┤
│                     │
│  O SABOR QUE LIDERA │ ← Texto grande
│ O AMENDOIM QUE      │   (150-300px do topo)
│    CONQUISTA        │
│                     │
├─────────────────────┤
│                     │
│   [Pacote 1]        │
│   [Pacote 2]        │ ← Produtos empilhados
│   [Pacote 3]        │   ou em grid 2x2
│                     │
├─────────────────────┤
│  [Elementos decor]  │ ← 150px do fundo
└─────────────────────┘
```

---

## ✅ Checklist antes de Publicar

### Imagem Desktop:
- [ ] Resolução 1920x1080px
- [ ] Texto legível no desktop
- [ ] Produtos bem posicionados
- [ ] Peso < 500KB
- [ ] Formato PNG ou JPG

### Imagem Mobile:
- [ ] Resolução 1080x1920px (ou 1080x1350px)
- [ ] Texto grande e legível
- [ ] Layout vertical
- [ ] Produtos centralizados
- [ ] Peso < 300KB
- [ ] Testado em celular real

---

## 📂 Onde Colocar as Imagens

Salve as imagens na pasta `public/`:

```
public/
  ├── sabor-que-lidera-bona-mama.png          ✅ (já existe)
  ├── sabor-que-lidera-bona-mama-mobile.png   ⭐ CRIAR E ADICIONAR
  ├── pagina-imagem-alho.png                  ✅ (já existe)
  └── pagina-imagem-alho-mobile.png           ⭐ CRIAR E ADICIONAR
```

---

## 🎨 Dicas de Design Mobile

### ✅ FAZER:
- Texto 50% maior que no desktop
- Usar fontes bold/extrabold
- Alto contraste (texto escuro em fundo claro)
- Espaçamento generoso
- Elementos centralizados
- Imagens de produtos grandes e claras

### ❌ EVITAR:
- Texto pequeno (<30px)
- Muitos elementos competindo por atenção
- Degradês complexos
- Sombras excessivas
- Texto próximo às bordas
- Elementos muito finos

---

## 🧪 Como Testar

1. **Adicione as imagens** na pasta `public/`
2. **Execute:** `pnpm dev:mobile`
3. **Teste no Chrome DevTools:**
   - F12 → Ctrl+Shift+M
   - Selecione "iPhone 12 Pro"
   - Recarregue a página
4. **Teste no celular real:**
   - Acesse: `http://SEU_IP:3000`
   - Verifique legibilidade
   - Teste em diferentes dispositivos

---

## 🔄 Exemplo de Uso (já configurado)

```typescript
// data/heroSlides.ts
export const heroSlides: HeroSlide[] = [
  {
    src: "/sabor-que-lidera-bona-mama.png",           // Desktop
    srcMobile: "/sabor-que-lidera-bona-mama-mobile.png", // Mobile
    alt: "Banner: O sabor que lidera. O amendoim que conquista.",
  },
  {
    src: "/pagina-imagem-alho.png",                   // Desktop
    srcMobile: "/pagina-imagem-alho-mobile.png",      // Mobile
    alt: "Banner: Mais do que tempero.",
  },
]
```

---

## 🎯 Dispositivos Mais Comuns (para testar)

| Dispositivo          | Resolução   | Proporção |
|----------------------|-------------|-----------|
| iPhone 14 Pro Max    | 430x932     | 9:19.5    |
| iPhone 14/13/12      | 390x844     | 9:19.5    |
| iPhone SE            | 375x667     | 9:16      |
| Samsung Galaxy S21   | 360x800     | 9:20      |
| Pixel 5              | 393x851     | 9:19.5    |

**Dica:** Se sua imagem for 1080x1920px (9:16), ela funcionará bem em todos!

---

## 💡 Ferramentas de Otimização

Depois de criar as imagens, otimize para web:

### Online (Grátis):
- **TinyPNG:** https://tinypng.com/
- **Squoosh:** https://squoosh.app/
- **Compressor.io:** https://compressor.io/

### Objetivo:
- Desktop: ~200-500KB
- Mobile: ~150-300KB

---

## 🚀 Próximos Passos

1. **Criar as 2 imagens mobile** seguindo as especificações
2. **Salvar na pasta `public/`** com os nomes exatos:
   - `sabor-que-lidera-bona-mama-mobile.png`
   - `pagina-imagem-alho-mobile.png`
3. **Testar no celular** usando `pnpm dev:mobile`
4. **Ajustar se necessário** (tamanho de texto, posição, etc)

---

## ❓ FAQ

**P: Preciso criar imagens novas ou posso adaptar as existentes?**
R: Recomendo criar novas otimizadas para vertical. Adaptar raramente fica bom.

**P: Posso usar a mesma imagem para mobile e desktop?**
R: Sim! Se não definir `srcMobile`, usará a `src` em ambos (com `objectFit: contain` no mobile).

**P: Qual formato usar: PNG ou JPG?**
R: PNG se tiver transparência ou texto nítido. JPG se for só fotos (menor tamanho).

**P: Como saber se ficou bom?**
R: Teste no celular real! Texto deve ser legível sem zoom.

---

## 📞 Suporte

Se precisar de ajuda com as imagens, considere:
- Contratar um designer no Fiverr/99designs
- Usar templates prontos do Canva
- Pedir ajuda em comunidades de design

**Boa sorte! 🎨📱**
