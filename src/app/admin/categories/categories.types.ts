export type Category = {
  created_at: string;
  id: number;
  imageUrl: string;
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  imagesUrl: string[];
  price: number ;
  heroImage: string;
  category: number;
  maxQuantity: number;
  created_at: string;
};

export type CategoryWithProducts = {
  created_at: string;
  id: number;
  imageUrl: string;
  name: string;
  products: Product[];
  slug: string;
};

export type CategoriesWithProductsResponse = CategoryWithProducts[];
