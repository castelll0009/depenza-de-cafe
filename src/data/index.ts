export enum ProductCategory {
  cratebox = "cajitas",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
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
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Vinera en pino y tapa en triplex, para botella de 750ml medidas de 30*12*9cm de fondo",
    cover: "/vinera1.jpeg",
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 33,
    name: "CANASTA DE PICNIC",
    slug: "canasta-de-picnic",
    price: 6500,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Canasta de picnic medidas de 22*22*25 de altura.",
    cover: "/picnic.jpeg", // Actualiza la URL de la imagen de la caja mediana
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 34,
    name: "CAJON CON TAPA CORREDIZA",
    slug: "cajon-madera",
    price: 9000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Cajon en pino y tapa en triplex con tapa corrediza, medidas de 25*25*9cm de fondo.",
    cover: "/cajon.jpeg", // Actualiza la URL de la imagen de la caja extra grande
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "CAJON CON TAPA Y DIVISIONES",
    slug: "cajones-en-madera",
    price: 12000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Cajon para galletas en pino con tapa corrediza y divisiones por 4, medidas de 25*25*9cm.",
    cover: "/cajon2.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "EXAGONAL",
    slug: "caja-exagonal",
    price: 7500,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Caja exagonal, medida de 27*27*8cm de fondo.",
    cover: "/exagonal.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "SOPORTE PARA CELULAR",
    slug: "max-crate-box",
    price: 15000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Soporte pata todo tipo de celular mobil medidas de 17*8cm.",
    cover: "/soporte.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 100,
  },
  {
    id: 35,
    name: "BAUL",
    slug: "baul-pirata",
    price: 12000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Baul en pino y triplex, medidas de 25*12*9cm sin accesorio",
    cover: "/baul.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "CORAZON",
    slug: "Corazon-en-madera",
    price: 8000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Caja en forma de corazon medidas de 30*28*7cm de fondo.",
    cover: "/corazon.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "HUACAL",
    slug: "huacal-en-madera",
    price: 6000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Guacal en madera pequeño, medidas de 30*22*8cm de fondo.",
    cover: "/guacal.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "GUACAL GRANDE",
    slug: "guacal-en-madera",
    price: 8000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Guacal en madera grande, medidas de 27*22*8cm de fondo.",
    cover: "/guacal2.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "CAJON HUACAL",
    slug: "cajon-en-madera",
    price: 8000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Caja en forma de corazon medidas de 30*27*7cm de fondo",
    cover: "/cajonguacal.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "CAJON HUACAL",
    slug: "huacal-en-madera",
    price: 9000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Cajon en madera tipo guacal con accesorios, medidas de 30*22*8cm de fondo.",
    cover: "/cajonguacal2.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "BANDEJA",
    slug: "bandeja-en-madera",
    price: 6500,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "Caja tipo bandeja, medidas de 27*27*7cm de fondo.",
    cover: "/bandeja3.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "BANDEJA GRANDE",
    slug: "bandeja-en-madera",
    price: 8000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "bandeja grande, medidas de 27*37*7cm de fondo.",
    cover: "/bandejagran.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "MESA PARA DESAYUNO",
    slug: "mesa-en-madera",
    price: 15000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "mesa para desayunos con patas plegables, medidas de 37*27*30*5cm de fondo.",
    cover: "/mesa.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 12,
  },
  {
    id: 35,
    name: "JOYERO",
    slug: "joyero-en-mdf",
    price: 25000,
    link_whatsapp: 'https://wa.link/nzv300',
    description: "joyero en mdf, madera o triplex, medidas de 40*40",
    cover: "/joyero.jpeg", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 1,
  },

  ]
  
