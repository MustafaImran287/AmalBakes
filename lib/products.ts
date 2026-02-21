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
export const COOKIES_IMAGE_BASE_ROOT = '/cookies%20products';
export const COOKIES_IMAGE_BASE_DUMMY = '/cookies%20products/dummy%20images';
export const BROWNIE_IMAGE_BASE = '/brownie%20products';

export function getProductImageBase(product: Product): string {
  if (product.category === 'brownie') return BROWNIE_IMAGE_BASE;
  if (product.category === 'cookies') return COOKIES_IMAGE_BASE_DUMMY; // default for cookies
  return IMAGE_BASE;
}

/** For cookies: image can be a path from public, e.g. "cookies products/chocolate cookies.jpeg" (root) or "cookies products/dummy images/file.jpg". */
function buildCookieImageUrl(imagePathOrFilename: string): string {
  if (imagePathOrFilename.includes('/')) {
    return '/' + imagePathOrFilename.split('/').map((s) => encodeURIComponent(s)).join('/');
  }
  return `${COOKIES_IMAGE_BASE_DUMMY}/${encodeURIComponent(imagePathOrFilename)}`;
}

export function getProductImageUrl(product: Product, imageFilename?: string): string {
  const filename = imageFilename ?? product.image;
  if (product.category === 'cookies') return buildCookieImageUrl(filename);
  const base = getProductImageBase(product);
  return `${base}/${encodeURIComponent(filename)}`;
}

/** Returns full URLs for all product images (e.g. for slider). */
export function getProductImageUrls(product: Product): string[] {
  if (product.category === 'cookies') {
    const list = product.images?.length ? product.images : [product.image];
    return list.map((f) => buildCookieImageUrl(f));
  }
  const base = getProductImageBase(product);
  const list = product.images?.length ? product.images : [product.image];
  return list.map((f) => `${base}/${encodeURIComponent(f)}`);
}

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(n: number) {
  return `Rs. ${n.toLocaleString()}`;
}
