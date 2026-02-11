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

export type ProductCategory = 'all' | 'cakes' | 'cookies';

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

const defaultIngredients = 'Wheat flour, sugar, butter, eggs, fresh cream, vanilla. May contain traces of nuts and dairy.';
const defaultNutritional = 'Per 100g (approx): Energy 350kcal, Fat 18g, Saturates 11g, Carbohydrate 42g, Sugars 28g, Protein 5g, Salt 0.3g.';

export const ALL_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Black Forest Fresh Cream',
    description: 'Chocolate sponge, fresh cream, cherries. Available in 1 lb or 2 lb.',
    category: 'cakes',
    price: 35,
    image: CAKE_IMAGES[0],
    images: [CAKE_IMAGES[0]],
    sizeServing: ['1 lb (4–6 servings)', '2 lb (8–12 servings)'],
    tabDescription: defaultTabDesc('Black Forest Fresh Cream'),
    tabIngredients: 'Chocolate sponge, fresh cream, cherries, cocoa, sugar. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '2',
    title: 'Vanilla Cake',
    description: 'Vanilla sponge with fresh cream. Classic and light.',
    category: 'cakes',
    price: 28,
    image: CAKE_IMAGES[1],
    images: [CAKE_IMAGES[1]],
    sizeServing: ['1 lb (4–6 servings)', '2 lb (8–12 servings)'],
    tabDescription: defaultTabDesc('Vanilla Cake'),
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '3',
    title: 'Strawberry Cake',
    description: 'Vanilla sponge, fresh cream, strawberry filling.',
    category: 'cakes',
    price: 32,
    image: CAKE_IMAGES[2],
    images: [CAKE_IMAGES[2]],
    sizeServing: ['1 lb (4–6 servings)', '2 lb (8–12 servings)'],
    tabDescription: defaultTabDesc('Strawberry Cake'),
    tabIngredients: 'Strawberry filling, vanilla sponge, fresh cream. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '4',
    title: 'Fudge Cake',
    description: 'Rich chocolate fudge and ganache. 1 lb or 2 lb.',
    category: 'cakes',
    price: 38,
    image: CAKE_IMAGES[3],
    images: [CAKE_IMAGES[3]],
    sizeServing: ['1 lb (4–6 servings)', '2 lb (8–12 servings)'],
    tabDescription: defaultTabDesc('Fudge Cake'),
    tabIngredients: 'Chocolate fudge, ganache, chocolate sponge. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '5',
    title: 'Biscoff Cake',
    description: 'Biscoff spread, caramel, speculoos. A crowd favourite.',
    category: 'cakes',
    price: 40,
    image: CAKE_IMAGES[4],
    images: [CAKE_IMAGES[4]],
    sizeServing: ['1 lb (4–6 servings)', '2 lb (8–12 servings)'],
    tabDescription: defaultTabDesc('Biscoff Cake'),
    tabIngredients: 'Biscoff spread, caramel, speculoos. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '6',
    title: 'Chocolate Truffle',
    description: 'Dark chocolate, cream, cocoa. Dense and indulgent.',
    category: 'cakes',
    price: 42,
    image: CAKE_IMAGES[5],
    images: [CAKE_IMAGES[5]],
    sizeServing: ['1 lb (4–6 servings)', '2 lb (8–12 servings)'],
    tabDescription: defaultTabDesc('Chocolate Truffle'),
    tabIngredients: 'Dark chocolate, cream, cocoa. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '7',
    title: 'Red Velvet',
    description: 'Classic red velvet with cream cheese frosting.',
    category: 'cakes',
    price: 36,
    image: CAKE_IMAGES[6],
    images: [CAKE_IMAGES[6]],
    sizeServing: ['1 lb (4–6 servings)', '2 lb (8–12 servings)'],
    tabDescription: defaultTabDesc('Red Velvet'),
    tabIngredients: 'Red velvet sponge, cream cheese frosting. ' + defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '8',
    title: 'Celebration Cake',
    description: 'Custom design for birthdays and milestones. Quote on request.',
    category: 'cakes',
    price: 55,
    image: CAKE_IMAGES[7],
    images: [CAKE_IMAGES[7]],
    sizeServing: ['1 lb', '2 lb', 'Custom (quote on request)'],
    tabDescription: defaultTabDesc('Celebration Cake'),
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '9',
    title: 'Chocolate Chip Cookies',
    description: 'Soft, chewy cookies packed with quality chocolate chips. A classic favourite—perfect with milk or as a treat. Available in box of 6 or 12.',
    category: 'cookies',
    price: 12,
    image: COOKIE_IMAGES[0],
    images: [COOKIE_IMAGES[0]],
    sizeServing: ['Box of 6', 'Box of 12'],
    tabDescription: defaultTabDesc('Chocolate Chip Cookies'),
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '10',
    title: 'Decorated Sugar Cookies',
    description: 'Hand-iced sugar cookies made for events and gifting. Beautiful designs, great taste. Order 6 or 12 for parties and special occasions.',
    category: 'cookies',
    price: 18,
    image: COOKIE_IMAGES[1],
    images: [COOKIE_IMAGES[1]],
    sizeServing: ['6 cookies', '12 cookies'],
    tabDescription: defaultTabDesc('Decorated Sugar Cookies'),
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '11',
    title: 'Biscotti & Treats',
    description: 'Crunchy biscotti and small sweet bites, ideal with coffee or tea. Jar and pack options for everyday snacking or gifting.',
    category: 'cookies',
    price: 10,
    image: COOKIE_IMAGES[2],
    images: [COOKIE_IMAGES[2]],
    sizeServing: ['Small pack', 'Large pack'],
    tabDescription: defaultTabDesc('Biscotti & Treats'),
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
  {
    id: '12',
    title: 'Cookie Box',
    description: 'Assorted cookie box with a mix of flavours and styles. Ideal for parties, corporate gifting, or a special treat at home.',
    category: 'cookies',
    price: 25,
    image: COOKIE_IMAGES[3],
    images: [COOKIE_IMAGES[3]],
    sizeServing: ['Standard box', 'Large box'],
    tabDescription: defaultTabDesc('Cookie Box'),
    tabIngredients: defaultIngredients,
    tabNutritional: defaultNutritional,
    reviews: [],
  },
];

export const IMAGE_BASE = '/cake%20products';
export const COOKIES_IMAGE_BASE = '/cookies%20products';

export function getProductImageUrl(product: Product): string {
  const base = product.category === 'cookies' ? COOKIES_IMAGE_BASE : IMAGE_BASE;
  return `${base}/${product.image}`;
}

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(n: number) {
  return `Rs. ${n.toLocaleString()}`;
}
