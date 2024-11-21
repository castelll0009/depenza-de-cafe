export enum ProductCategory {
  Cratebox = "cratebox",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  [x: string]: string | number | null | undefined;
  id: number;
  name: string;
  slug: string;
  price: number;
  link_whatsapp: string;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
  units: number;
}

export const products: Product[] = [
  {
    id: 32,
    name: "VINERA EN PINO",
    slug: "vinera-en-pino",
    price: 12000,
    link_whatsapp: 'https://wa.link/cokis8',
    description: "Vinera en pino y tapa en triplex, para botella de 750ml medidas de 30*12*9cm de fondo",
    cover: "/vinera1.jpeg",
    coverCredits: "",
    category: ProductCategory.Cratebox,
    units: 12,
  },
  {
    id: 33,
    name: "CANASTA DE PICNIC",
    slug: "canasta-picnic",
    price: 6500,
    link_whatsapp: 'https://wa.link/nurreb',
    description: "Canasta de picnic medidas de 22*22*25 de altura.",
    cover: "/picnic.jpeg",
    coverCredits: "",
    category: ProductCategory.Cratebox,
    units: 12,
  },
  {
    id: 34,
    name: "CAJÓN CON TAPA CORREDIZA",
    slug: "cajon-madera",
    price: 9000,
    link_whatsapp: 'https://wa.link/b20359',
    description: "Cajon en pino y tapa corrediza, medidas de 25*25*9cm de fondo.",
    cover: "/cajon.jpeg",
    coverCredits: "",
    category: ProductCategory.Cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "BAÚL",
    slug: "baul-enpino",
    price: 9000,
    link_whatsapp: '',
    description: "baul en pino, medidas de 17*25*9cm de fondo.",
    cover: "/baul.jpeg",
    coverCredits: "",
    category: ProductCategory.Cratebox,
    units: 12,
  },
  {
    id: 36,
    name: "CAJÓN CON TAPA CORREDIZA",
    slug: "cajon-madera",
    price: 9000,
    link_whatsapp: '',
    description: "Cajon en pino y tapa en triplex con tapa corrediza, medidas de 25*25*9cm de fondo.",
    cover: "/cajon.jpeg",
    coverCredits: "",
    category: ProductCategory.Cratebox,
    units: 12,
  },
];
