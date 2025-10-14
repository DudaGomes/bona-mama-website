export type HeroSlide = {
  src: string
  alt: string
  objectPosition?: string
  objectScale?: number
  objectScaleX?: number
  objectScaleY?: number
}

export const heroSlides: HeroSlide[] = [
  {
    src: "/sabor-que-lidera-bona-mama.png",
    alt: "Banner: O sabor que lidera. O amendoim que conquista.",
    // ajuste: descer levemente para mostrar a frase
    // move mais o ponto focal para baixo para que a frase fique totalmente visível
    objectPosition: "center 85%",
    // reduz os pacotes um pouco mais para abrir espaço para o slogan
    objectScale: 0.88,
    // estica horizontalmente para preencher as laterais sem criar faixas
    objectScaleX: 1.04,
    // manter escala vertical neutra (evita distorção exagerada)
    objectScaleY: 1.0,
  },
  {
    src: "/mais-do-que-tempero.png",
    alt: "Banner: Mais do que tempero.",
    // sem objectPosition definido -> usará 'center' por padrão
  },
]
