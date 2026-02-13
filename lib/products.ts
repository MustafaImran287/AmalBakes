import productsData from '@/data/products.json';

export type ProductCategory = 'all' | 'vanilla-cakes' | 'chocolate-cakes' | 'cookies' | 'brownie';

export type Product = {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  price: number;
  image: string;
  images: string[];
  sizeServing: string[];
  tabDescription: string;
  tabIngredients: string;
  tabNutritional: string;
  reviews: { author: string; text: string; rating: number }[];
};

const data = productsData as { products: Product[] };
export const ALL_PRODUCTS: Product[] = data.products;

export const IMAGE_BASE = '/cake%20products';
export const COOKIES_IMAGE_BASE = '/cookies%20products';

export function getProductImageUrl(product: Product): string {
  const useCookiesBase = product.category === 'cookies' || product.category === 'brownie';
  const base = useCookiesBase ? COOKIES_IMAGE_BASE : IMAGE_BASE;
  return `${base}/${encodeURIComponent(product.image)}`;
}

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(n: number) {
  return `Rs. ${n.toLocaleString()}`;
}
