'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/basePath';
import styles from './Gallery.module.css';

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/cake%20products/Basoc%20Vanilla.jpeg',
    alt: 'Basic Vanilla cake',
    title: 'Basic Vanilla',
    description: 'Classic vanilla sponge with fresh cream — simple and elegant for any occasion.',
  },
  {
    src: '/cake%20products/Vanilla%20pineapple.jpeg',
    alt: 'Vanilla Pineapple cake',
    title: 'Vanilla Pineapple',
    description: 'Light vanilla layers with pineapple and fresh cream for a tropical twist.',
  },
  {
    src: '/cake%20products/Vanilla%20oreo.jpeg',
    alt: 'Vanilla Oreo cake',
    title: 'Vanilla Oreo',
    description: 'Vanilla sponge loaded with Oreo pieces and smooth fresh cream.',
  },
  {
    src: '/cake%20products/Three%20milk.jpeg',
    alt: 'Three Milk cake',
    title: 'Three Milk',
    description: 'Tres leches–style soak — rich, moist, and a customer favourite.',
  },
  {
    src: '/cake%20products/Lotus.jpeg',
    alt: 'Lotus cake',
    title: 'Lotus',
    description: 'Lotus biscuit spread and caramel with vanilla — a crowd-pleaser.',
  },
  {
    src: '/cake%20products/Chocolate%20fudge.jpeg',
    alt: 'Chocolate Fudge cake',
    title: 'Chocolate Fudge',
    description: 'Dense chocolate fudge and ganache for serious chocolate lovers.',
  },
  {
    src: '/cake%20products/Chocolate%20caramel.jpeg',
    alt: 'Chocolate Caramel cake',
    title: 'Chocolate Caramel',
    description: 'Chocolate sponge layered with silky caramel.',
  },
  {
    src: '/cake%20products/Chocolate%20oreo.jpeg',
    alt: 'Chocolate Oreo cake',
    title: 'Chocolate Oreo',
    description: 'Chocolate cake with Oreo and hazelnut notes — nutty and indulgent.',
  },
  {
    src: '/cake%20products/amal-bakes-mint-green-branded-round-cake.jpeg',
    alt: 'Branded celebration cake',
    title: 'Branded celebration cake',
    description: 'Custom round cake with branded buttercream — your colours, your moment.',
  },
  {
    src: '/cake%20products/dusty-rose-pearl-vintage-floral-buttercream-cake.jpeg',
    alt: 'Vintage floral buttercream cake',
    title: 'Dusty rose vintage floral',
    description: 'Pearl details and vintage-style florals in soft dusty rose tones.',
  },
  {
    src: '/cake%20products/happy-birthday-shahzaib-mint-green-cake.jpeg',
    alt: 'Mint green birthday cake',
    title: 'Mint green birthday cake',
    description: 'Fresh mint-toned buttercream with a personalised birthday message.',
  },
  {
    src: '/cake%20products/minimalist-cream-bento-cake-brown-accents.jpeg',
    alt: 'Minimalist bento cake',
    title: 'Minimalist bento cake',
    description: 'Small bento-style cake with cream finish and modern brown accents.',
  },
  {
    src: '/cake%20products/nikkah-mubarak-amber-adeel-gold-roses.jpeg',
    alt: 'Nikkah celebration cake',
    title: 'Nikkah Mubarak gold roses',
    description: 'Celebration cake with gold accents and roses for your special day.',
  },
  {
    src: '/cake%20products/spiderman-3rd-birthday-cake.jpeg',
    alt: 'Spider-Man themed birthday cake',
    title: 'Spider-Man birthday cake',
    description: 'Themed buttercream cake — perfect for little heroes’ birthdays.',
  },
  {
    src: '/cake%20products/three-month-bear-milestone-cake.jpeg',
    alt: 'Baby milestone cake with bear',
    title: 'Baby milestone bear cake',
    description: 'Soft colours and cute bear details for baby milestones.',
  },
  {
    src: '/cake%20products/welcome-home-mr-mrs-cake.jpeg',
    alt: 'Welcome home celebration cake',
    title: 'Welcome home Mr & Mrs',
    description: 'Elegant lettering and florals for homecomings and couples.',
  },
  {
    src: '/cake%20products/yellow-rose-mauve-floral-buttercream-marble.jpeg',
    alt: 'Floral marble buttercream cake',
    title: 'Yellow rose mauve marble',
    description: 'Marbled buttercream with yellow roses and romantic mauve tones.',
  },
  {
    src: '/cake%20products/Ramzan%20Cake.jpeg',
    alt: 'Ramadan cake',
    title: 'Ramadan special',
    description: 'Seasonal design — ideal for iftar gatherings and gifting.',
  },
  {
    src: '/brownie%20products/chocolate%20brownie-1.jpeg',
    alt: 'Chocolate fudge brownie',
    title: 'Chocolate fudge brownie',
    description: 'Rich, chewy squares baked fresh — per piece.',
  },
  {
    src: '/brownie%20products/chocolate%20brownie-2.jpeg',
    alt: 'Chocolate brownie close-up',
    title: 'Brownie selection',
    description: 'Deep cocoa flavour with a fudgy centre.',
  },
  {
    src: '/brownie%20products/chocolate%20brownie-3.jpeg',
    alt: 'Chocolate brownie stack',
    title: 'Brownie stack',
    description: 'Perfect with tea or as a party tray add-on.',
  },
  {
    src: '/cookies%20products/chocolate%20cookies.jpeg',
    alt: 'Chocolate cookies',
    title: 'Chocolate cookies',
    description: 'Crisp, rich chocolate cookies — baked to order per piece.',
  },
  {
    src: '/cookies%20products/dummy%20images/top-view-mix-cookies-with-chocolate-gingerbread-cookies-table.jpg',
    alt: 'Assorted cookies',
    title: 'Cookie assortment',
    description: 'Mix of styles — great for gifts and dessert tables.',
  },
  {
    src: '/cookies%20products/dummy%20images/view-baked-cookies-done-by-vegan-bakery.jpg',
    alt: 'Fresh baked cookies',
    title: 'Fresh baked cookies',
    description: 'Golden, buttery cookies straight from the oven.',
  },
  {
    src: '/cookies%20products/dummy%20images/plate-sweeties-jar-biscuits.jpg',
    alt: 'Biscuits and sweet treats',
    title: 'Sweet biscuits',
    description: 'Classic biscuit textures for everyday treats.',
  },
  {
    src: '/cookies%20products/dummy%20images/top-view-sweet-biscuits-with-nuts-presents-light-table.jpg',
    alt: 'Nutty sweet biscuits',
    title: 'Nutty sweet biscuits',
    description: 'Crunchy biscuits with nut notes — lovely for sharing.',
  },
  {
    src: '/hero-cake.png',
    alt: 'Amal Bakes signature cake',
    title: 'Amal Bakes',
    description: 'Handcrafted cakes and cookies — Rawalpindi & Islamabad, made with love.',
  },
];

export default function Gallery() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Gallery</h1>
        <p className={styles.subtitle}>
          A peek at our cakes, cookies and treats. All made fresh to order.
        </p>
        <ul className={styles.grid}>
          {GALLERY_IMAGES.map((img) => (
            <li key={img.src} className={styles.item} tabIndex={0}>
              <Image
                src={assetUrl(img.src)}
                alt={img.alt}
                fill
                className={styles.image}
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
              />
              <div className={styles.hoverPanel}>
                <h3 className={styles.hoverTitle}>{img.title}</h3>
                <p className={styles.hoverDesc}>{img.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
