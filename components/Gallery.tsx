'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/basePath';
import styles from './Gallery.module.css';

const GALLERY_IMAGES = [
  { src: '/cake%20products/delicious-cake-with-fruits-cream.jpg', alt: 'Cake with fruits and cream' },
  { src: '/cake%20products/delicious-cake-with-strawberries.jpg', alt: 'Cake with strawberries' },
  { src: '/cake%20products/elegant-eco-food-concept-with-flowers-cake.jpg', alt: 'Cake with flowers' },
  { src: '/cake%20products/diana-light-OYKZNEwdZus-unsplash.jpg', alt: 'Celebration cake' },
  { src: '/cake%20products/jasmine-bartel-8LtrMQfeDkQ-unsplash.jpg', alt: 'Birthday cake' },
  { src: '/cake%20products/jonathan-borba-jJ-_AO2C4gw-unsplash.jpg', alt: 'Chocolate cake' },
  { src: '/cookies%20products/top-view-mix-cookies-with-chocolate-gingerbread-cookies-table.jpg', alt: 'Cookies assortment' },
  { src: '/cookies%20products/view-baked-cookies-done-by-vegan-bakery.jpg', alt: 'Fresh baked cookies' },
  { src: '/cookies%20products/plate-sweeties-jar-biscuits.jpg', alt: 'Biscuits and treats' },
  { src: '/cookies%20products/top-view-sweet-biscuits-with-nuts-presents-light-table.jpg', alt: 'Sweet biscuits' },
  { src: '/cake%20products/monika-grabkowska-2B-XGHpredg-unsplash.jpg', alt: 'Cake slice' },
  { src: '/hero-cake.png', alt: 'Amal Bakes hero' },
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
          {GALLERY_IMAGES.map((img, i) => (
            <li key={i} className={styles.item}>
              <Image
                src={assetUrl(img.src)}
                alt={img.alt}
                fill
                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
