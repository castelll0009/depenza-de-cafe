export enum ProductCategory {
  Shirts = "cafes",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 32,
    name: "Café del Monte Orgánico",
    slug: "cafe-del-monte-organico",
    price: 15000,
    description:
      "Disfruta del exquisito Café del Monte Orgánico, producido en la finca de doña Berliza. Este café es reconocido como el mejor de la región de Huila, Colombia.",
    cover: "https://i.ibb.co/TtrhsLS/Whats-App-Image-2024-06-23-at-03-34-25-1.jpg",
    coverCredits:
      "https://cafelab.pe/wp-content/uploads/2024/05/Namuk-coffee-cafe-arabe-1024x684.jpg",
    category: ProductCategory.Shirts,
  },
  {
    id: 18,
    name: "Café Quindío",
    slug: "cafe-quindio",
    price: 16000,
    description:
      "Experimenta el sabor único del Café Quindío, cultivado en el corazón del Eje Cafetero de Colombia. Este café ofrece una experiencia sensorial inigualable.",
    cover: "https://elbaristacoffeeshop.com/wp-content/uploads/2018/10/cafequindio5-600x600.jpg",
    coverCredits:
      "https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 21,
    name: "Café Pergamino",
    slug: "cafe-pergamino",
    price: 20000,
    description:
      "Descubre el Café Pergamino, una mezcla perfecta de granos seleccionados cuidadosamente para ofrecerte una taza de café rica y balanceada, ideal para cualquier momento del día.",
    cover: "https://elbaristacoffeeshop.com/wp-content/uploads/2020/09/Bolsa-Pergamino-Web-Ibague-Tolima-500-gr-1.jpg",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 49,
    name: "Café Mesa de los Santos",
    slug: "cafe-mesa-de-los-santos",
    price: 18000,
    description:
      "Prueba el Café Mesa de los Santos, cultivado con dedicación en una de las fincas más reconocidas de Colombia. Este café ofrece notas dulces y una acidez equilibrada.",
    cover: "https://elbaristacoffeeshop.com/wp-content/uploads/2020/09/cafe-bourbon-mesa-de-los-santos-340-gr.jpg",
    coverCredits:
      "https://unsplash.com/photos/6Nub980bI3I?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
];
