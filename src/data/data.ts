// src/data.ts
export type Product = {
  name: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Producto 1",
    description: "Descripción del Producto 1",
    image: "/path/to/image1.jpg", // Asegúrate de que esta ruta sea accesible
  },
  {
    name: "Producto 2",
    description: "Descripción del Producto 2",
    image: "/path/to/image2.jpg", // Asegúrate de que esta ruta sea accesible
  },
  {
    name: "Producto 3",
    description: "Descripción del Producto 3",
    image: "/path/to/image3.jpg", // Asegúrate de que esta ruta sea accesible
  },
];
