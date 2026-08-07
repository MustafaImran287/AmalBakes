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

/** Recently added flavours (ids in data/products.json). Used for home spotlight and “New” badges. */
export const NEW_DESIGN_PRODUCT_IDS = new Set<string>(['27']);

/**
 * Prices in data/products.json are the fresh cream rate per pound.
 * Choosing butter cream adds this much per pound (e.g. Chocolate Fudge 1600 → 1900).
 */
export const BUTTERCREAM_SURCHARGE_PER_POUND = 300;

/** Flat add-on per cake when a decoration theme is chosen. "No theme" keeps the base price. */
export const THEME_SURCHARGE = 500;

/** `baseProductId` is the flavour a theme is showcased on in listings (customers can change it). */
export type CakeTheme = { id: string; label: string; image: string; baseProductId: string };

/** Decoration themes offered on cakes. `image` files live in public/cake products. */
export const CAKE_THEMES: CakeTheme[] = [
  { id: 'football', label: 'Football / jersey', image: 'Chocolate fudge buttercream ronaldo theme customized cake.jpeg', baseProductId: '6' },
  { id: 'doll', label: 'Doll / cartoon', image: 'Chocolate fudge buttercream dora theme customized cake.jpeg', baseProductId: '6' },
  { id: 'butterfly', label: 'Butterfly & character', image: 'Chocolate fudge buttercream customized cake.jpeg', baseProductId: '6' },
  { id: 'vintage-cherry', label: 'Vintage with cherries', image: 'Chocolate fudge Vintage theme cherry cake.jpeg', baseProductId: '6' },
  { id: 'vintage-ribbon', label: 'Vintage with ribbon bows', image: 'Chocolate fudge vintage cake.jpeg', baseProductId: '6' },
  { id: 'umrah', label: 'Umrah Mubarak', image: 'Pineapple cake umrah theme.jpeg', baseProductId: '2' },
  { id: 'spiderman', label: 'Superhero', image: 'spiderman-3rd-birthday-cake.jpeg', baseProductId: '1' },
  { id: 'baby-milestone', label: 'Baby milestone bear', image: 'three-month-bear-milestone-cake.jpeg', baseProductId: '1' },
  { id: 'nikkah', label: 'Nikkah Mubarak', image: 'nikkah-mubarak-amber-adeel-gold-roses.jpeg', baseProductId: '1' },
  { id: 'welcome-home', label: 'Welcome home', image: 'welcome-home-mr-mrs-cake.jpeg', baseProductId: '1' },
  { id: 'vintage-floral', label: 'Vintage floral (dusty rose)', image: 'dusty-rose-pearl-vintage-floral-buttercream-cake.jpeg', baseProductId: '1' },
  { id: 'floral-marble', label: 'Floral marble', image: 'yellow-rose-mauve-floral-buttercream-marble.jpeg', baseProductId: '1' },
  { id: 'minimalist', label: 'Minimalist bento', image: 'minimalist-cream-bento-cake-brown-accents.jpeg', baseProductId: '1' },
  { id: 'mint-green', label: 'Mint green birthday', image: 'happy-birthday-shahzaib-mint-green-cake.jpeg', baseProductId: '1' },
  { id: 'branded', label: 'Branded / logo', image: 'amal-bakes-mint-green-branded-round-cake.jpeg', baseProductId: '1' },
  { id: 'ramzan', label: 'Ramzan', image: 'Ramzan Cake.jpeg', baseProductId: '1' },
];

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

/** A card on the products listing: either a flavour, or a theme shown on its base flavour. */
export type ListingCard = {
  key: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  href: string;
  category: ProductCategory;
  isNew: boolean;
};

function productCard(p: Product): ListingCard {
  return {
    key: `p-${p.id}`,
    title: p.title,
    description: p.description,
    price: p.price,
    imageUrl: getProductImageUrl(p),
    href: `/products/${p.id}`,
    category: p.category,
    isNew: NEW_DESIGN_PRODUCT_IDS.has(p.id),
  };
}

/** Themed designs link to their flavour with the theme already selected, so nothing contradicts. */
function themeCard(theme: CakeTheme, base: Product): ListingCard {
  return {
    key: `t-${theme.id}`,
    title: `${base.title} — ${theme.label} theme`,
    description: `Our ${theme.label} theme on ${base.title}. Colours, toppers and wording are made to your order.`,
    price: base.price + THEME_SURCHARGE,
    imageUrl: `${IMAGE_BASE}/${encodeURIComponent(theme.image)}`,
    href: `/products/${base.id}?theme=${theme.id}`,
    category: base.category,
    isNew: false,
  };
}

/** Themed designs first (they show what we can do), then the plain flavours and treats. */
export function getListingCards(): ListingCard[] {
  const themes: ListingCard[] = [];
  for (const theme of CAKE_THEMES) {
    const base = getProductById(theme.baseProductId);
    if (base) themes.push(themeCard(theme, base));
  }
  return [...themes, ...sortNewestFirst(ALL_PRODUCTS).map(productCard)];
}

export function formatPrice(n: number) {
  return `Rs. ${n.toLocaleString()}`;
}
