// src/data.ts

export interface Product {
  name: string;
  image: string;   // Asegúrate de incluir esta propiedad
  description: string;
}

export const products: Product[] = [
  {
    name: 'Producto 1',
    image: '/path/to/image1.jpg', // Asegúrate de que la propiedad image esté definida aquí
    description: 'Descripción del producto 1.',
  },
  {
    name: 'Producto 2',
    image: '/path/to/image2.jpg', // Asegúrate de que la propiedad image esté definida aquí
    description: 'Descripción del producto 2.',
  },
  // Agrega más productos según sea necesario
];
