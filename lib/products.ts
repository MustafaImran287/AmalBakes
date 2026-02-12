const CAKE_IMAGES = [
  'delicious-cake-with-fruits-cream.jpg',
  'delicious-cake-with-strawberries.jpg',
  'elegant-eco-food-concept-with-flowers-cake.jpg',
  'diana-light-OYKZNEwdZus-unsplash.jpg',
  'ellie-ellien-Rejlvd47WjI-unsplash.jpg',
  'jasmine-bartel-8LtrMQfeDkQ-unsplash.jpg',
  'jonathan-borba-jJ-_AO2C4gw-unsplash.jpg',
  'monika-grabkowska-2B-XGHpredg-unsplash.jpg',
];

const COOKIE_IMAGES = [
  'top-view-mix-cookies-with-chocolate-gingerbread-cookies-table.jpg',
  'view-baked-cookies-done-by-vegan-bakery.jpg',
  'plate-sweeties-jar-biscuits.jpg',
  'top-view-sweet-biscuits-with-nuts-presents-light-table.jpg',
];

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

const defaultTabDesc = (title: string) =>
  `${title} is made with care and quality ingredients. Our cakes and treats are baked fresh to order. The food colourings we use are food-grade and safe. Please note they may cause temporary stains on skin and surfaces; these are harmless and should come off with regular washing.`;

const priceDisclaimer = ' These rates are for standard cakes. Prices may vary according to customization.';

const defaultIngredients = 'Wheat flour, sugar, butter, eggs, fresh cream, vanilla. May contain traces of nuts and dairy.';
const defaultNutritional = 'Per 100g (approx): Energy 350kcal, Fat 18g, Saturates 11g, Carbohydrate 42g, Sugars 28g, Protein 5g, Salt 0.3g.';

export const ALL_PRODUCTS: Product[] = [
  // Vanilla Cakes (per lb)
  {
    id: '1',
    title: 'Basic Vanilla',
    description: 'Classic vanilla sponge with fresh cream. Simple and delicious.',
    category: 'vanilla-cakes',
    price: 1300,
    image: CAKE_IMAGES[0],
    images: [CAKE_IMAGES[0]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Basic Vanilla') + priceDisclaimer,
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '2',
    title: 'Vanilla Pineapple',
    description: 'Vanilla sponge with fresh cream and pineapple. Tropical and light.',
    category: 'vanilla-cakes',
    price: 1400,
    image: CAKE_IMAGES[1],
    images: [CAKE_IMAGES[1]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Vanilla Pineapple') + priceDisclaimer,
    tabIngredients: 'Pineapple, vanilla sponge, fresh cream. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '3',
    title: 'Vanilla Oreo',
    description: 'Vanilla sponge with Oreo and fresh cream.',
    category: 'vanilla-cakes',
    price: 1400,
    image: CAKE_IMAGES[2],
    images: [CAKE_IMAGES[2]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Vanilla Oreo') + priceDisclaimer,
    tabIngredients: 'Oreo, vanilla sponge, fresh cream. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '4',
    title: 'Three Milk',
    description: 'Tres leches–style vanilla cake soaked in three milks. Rich and moist.',
    category: 'vanilla-cakes',
    price: 1700,
    image: CAKE_IMAGES[3],
    images: [CAKE_IMAGES[3]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Three Milk') + priceDisclaimer,
    tabIngredients: 'Vanilla sponge, three-milk soak, fresh cream. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '5',
    title: 'Lotus',
    description: 'Lotus biscuit and caramel with vanilla. A crowd favourite.',
    category: 'vanilla-cakes',
    price: 2000,
    image: CAKE_IMAGES[4],
    images: [CAKE_IMAGES[4]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Lotus') + priceDisclaimer,
    tabIngredients: 'Lotus spread, caramel, vanilla sponge. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  // Chocolate Cakes (per lb)
  {
    id: '6',
    title: 'Chocolate Fudge',
    description: 'Rich chocolate fudge and ganache. Dense and indulgent.',
    category: 'chocolate-cakes',
    price: 1500,
    image: CAKE_IMAGES[5],
    images: [CAKE_IMAGES[5]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Chocolate Fudge') + priceDisclaimer,
    tabIngredients: 'Chocolate fudge, ganache, chocolate sponge. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '7',
    title: 'Chocolate Caramel',
    description: 'Chocolate cake with caramel. Sweet and smooth.',
    category: 'chocolate-cakes',
    price: 1900,
    image: CAKE_IMAGES[6],
    images: [CAKE_IMAGES[6]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Chocolate Caramel') + priceDisclaimer,
    tabIngredients: 'Chocolate sponge, caramel, fresh cream. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '8',
    title: 'Chocolate Oreo / Hazelnut',
    description: 'Chocolate cake with Oreo and hazelnut. Nutty and chocolatey.',
    category: 'chocolate-cakes',
    price: 1800,
    image: CAKE_IMAGES[7],
    images: [CAKE_IMAGES[7]],
    sizeServing: ['1 pound', '2 pound'],
    tabDescription: defaultTabDesc('Chocolate Oreo / Hazelnut') + priceDisclaimer,
    tabIngredients: 'Oreo, hazelnut, chocolate sponge. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  // Cookies (per piece)
  {
    id: '9',
    title: 'Classic Cookie',
    description: 'Classic cookie, buttery and crisp. Per piece.',
    category: 'cookies',
    price: 200,
    image: COOKIE_IMAGES[0],
    images: [COOKIE_IMAGES[0]],
    sizeServing: ['Per piece'],
    tabDescription: defaultTabDesc('Classic Cookie'),
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '10',
    title: 'Double Chocolate Cookie',
    description: 'Chocolate cookie with chocolate chips. Per piece.',
    category: 'cookies',
    price: 220,
    image: COOKIE_IMAGES[1],
    images: [COOKIE_IMAGES[1]],
    sizeServing: ['Per piece'],
    tabDescription: defaultTabDesc('Double Chocolate Cookie'),
    tabIngredients: 'Chocolate, cocoa, chocolate chips. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '11',
    title: 'Red Velvet Cookie',
    description: 'Red velvet cookie with cream cheese flavour. Per piece.',
    category: 'cookies',
    price: 220,
    image: COOKIE_IMAGES[2],
    images: [COOKIE_IMAGES[2]],
    sizeServing: ['Per piece'],
    tabDescription: defaultTabDesc('Red Velvet Cookie'),
    tabIngredients: 'Red velvet, cream cheese flavour. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  // Brownie (per piece)
  {
    id: '12',
    title: 'Chocolate Fudge Brownie',
    description: 'Chocolate fudge brownie. Rich and chewy. Per piece.',
    category: 'brownie',
    price: 250,
    image: COOKIE_IMAGES[3],
    images: [COOKIE_IMAGES[3]],
    sizeServing: ['Per piece'],
    tabDescription: defaultTabDesc('Chocolate Fudge Brownie'),
    tabIngredients: 'Chocolate, cocoa, butter. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
];

import { basePath } from './basePath';

export const IMAGE_BASE = '/cake%20products';
export const COOKIES_IMAGE_BASE = '/cookies%20products';

export function getProductImageUrl(product: Product): string {
  const useCookiesBase = product.category === 'cookies' || product.category === 'brownie';
  const base = useCookiesBase ? COOKIES_IMAGE_BASE : IMAGE_BASE;
  const path = `${base}/${product.image}`;
  return basePath ? `${basePath}${path}` : path;
}

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(n: number) {
  return `Rs. ${n.toLocaleString()}`;
}
