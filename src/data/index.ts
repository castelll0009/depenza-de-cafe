export enum ProductCategory {
  cratebox = "crate boxes",
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
    name: "S-Crate Box",
    slug: "s-crate-box",
    price: 18000,
    link_whatsapp: 'https://wa.link/3n0fk2',
    description: "Esta box es increíble, tiene lo mínimo para asegurar la diversión con un grupo de panas. Procura llevar contigo un bote de agua ><",
    cover: "https://i.ibb.co/TtrhsLS/Whats-App-Image-2024-06-23-at-03-34-25-1.jpg",
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 6,
  },
  {
    id: 33,
    name: "M-Crate Box",
    slug: "m-crate-box",
    price: 30000,
    link_whatsapp: 'https://wa.link/3n0fk2',
    description: "Perfecta para una tarde inolvidable con amigos. La M-Crate Box incluye una selección equilibrada para asegurar una experiencia placentera y compartida. No olvides llevar tus snacks favoritos.",
    cover: "https://i.ibb.co/XYZ.png", // Actualiza la URL de la imagen de la caja mediana
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 9,
  },
  {
    id: 34,
    name: "XL-Crate Box",
    slug: "xl-crate-box",
    price: 50000,
    link_whatsapp: 'https://wa.link/3n0fk2',
    description: "La XL-Crate Box es ideal para grandes eventos o celebraciones. Con 50 unidades, esta caja garantiza que todos en la fiesta tengan una experiencia premium. ¡Asegúrate de tener suficiente espacio para compartir!",
    cover: "https://i.ibb.co/XYZ.png", // Actualiza la URL de la imagen de la caja extra grande
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 50,
  },
  {
    id: 35,
    name: "Max-Crate Box",
    slug: "max-crate-box",
    price: 100000,
    link_whatsapp: 'https://wa.link/3n0fk2',
    description: "Para los eventos más grandes, la Max-Crate Box es la opción definitiva. Con un máximo de 100 unidades, esta caja está diseñada para aquellos que buscan llevar su experiencia al siguiente nivel. Perfecta para festivales y grandes reuniones.",
    cover: "https://i.ibb.co/XYZ.png", // Actualiza la URL de la imagen de la caja máxima
    coverCredits: "",
    category: ProductCategory.cratebox,
    units: 100,
  }
];
