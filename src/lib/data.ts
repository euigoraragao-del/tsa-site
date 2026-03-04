export type Property = {
  slug: string;
  title: string;
  city: string;
  neighborhood: string;
  purpose: "Venda" | "Locação";
  priceLabel: string;
  area: number;
  beds: number;
  parking: number;
  featured?: boolean;
  image: string; // /images/...
  description: string;
  highlights: string[];
};

export const properties: Property[] = [
  {
    slug: "apto-reformado-pinheiros",
    title: "Apartamento reformado com planta inteligente",
    city: "São Paulo",
    neighborhood: "Pinheiros",
    purpose: "Venda",
    priceLabel: "R$ 950.000",
    area: 78,
    beds: 2,
    parking: 1,
    featured: true,
    image: "/images/hero.jpg",
    description:
      "Reforma completa com foco em valorização: layout otimizado, acabamentos premium e alta liquidez.",
    highlights: ["Reforma completa TSA", "Iluminação planejada", "Pronto para morar"],
  },
  {
    slug: "studio-vila-madalena-locacao",
    title: "Studio moderno para locação",
    city: "São Paulo",
    neighborhood: "Vila Madalena",
    purpose: "Locação",
    priceLabel: "R$ 3.200/mês",
    area: 35,
    beds: 1,
    parking: 0,
    featured: true,
    image: "/images/hero.jpg",
    description:
      "Studio com projeto funcional e estética contemporânea, ideal para locação premium.",
    highlights: ["Alta procura", "Perto do metrô", "Condomínio completo"],
  },
  {
    slug: "casa-contemporanea-alphaville",
    title: "Casa contemporânea com área gourmet",
    city: "Barueri",
    neighborhood: "Alphaville",
    purpose: "Venda",
    priceLabel: "R$ 3.500.000",
    area: 320,
    beds: 4,
    parking: 3,
    image: "/images/hero.jpg",
    description:
      "Projeto de valorização com integração social e acabamentos de alto padrão.",
    highlights: ["Projeto personalizado", "Reforma completa", "Alto padrão"],
  },
];

export type CaseStudy = {
  title: string;
  location: string;
  uplift: string;
  daysToRentOrSell: string;
  summary: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Apartamento Jardins — Reforma para liquidez",
    location: "São Paulo • Jardins",
    uplift: "+38% valorização estimada",
    daysToRentOrSell: "21 dias até venda",
    summary:
      "Reconfiguração de layout, padronização de acabamentos e estratégia de anúncio para acelerar a decisão do comprador.",
  },
  {
    title: "Studio — Locação premium",
    location: "São Paulo • Zona Oeste",
    uplift: "+22% no ticket de locação",
    daysToRentOrSell: "9 dias até locação",
    summary:
      "Melhorias de iluminação, marcenaria essencial e home staging para elevar percepção de valor e reduzir vacância.",
  },
];
