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

/** Celebration / custom cakes (ids in data/products.json). Used for home spotlight and “New” badges. */
export const NEW_DESIGN_PRODUCT_IDS = new Set<string>([
  '16', '17', '18', '19', '20', '21', '22', '23', '24',
  '25', '26', '27', '28', '29', '30', '31', '32',
]);

/**
 * Prices in data/products.json are the fresh cream rate per pound.
 * Choosing butter cream adds this much per pound (e.g. Chocolate Fudge 1600 → 1900).
 */
export const BUTTERCREAM_SURCHARGE_PER_POUND = 300;

/**
 * Listing order: newest designs first (highest id within NEW_DESIGN_PRODUCT_IDS),
 * then the rest of the catalogue in its existing order. Does not mutate the input.
 */
export function sortNewestFirst(products: Product[]): Product[] {
  const isNew = (p: Product) => NEW_DESIGN_PRODUCT_IDS.has(p.id);
  const newest = products.filter(isNew).sort((a, b) => Number(b.id) - Number(a.id));
  const rest = products.filter((p) => !isNew(p));
  return [...newest, ...rest];
}

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
