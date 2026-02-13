'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/basePath';
import styles from './Gallery.module.css';

const GALLERY_IMAGES = [
  { src: '/cake%20products/Basoc%20Vanilla.jpeg', alt: 'Basic Vanilla' },
  { src: '/cake%20products/Vanilla%20pineapple.jpeg', alt: 'Vanilla Pineapple' },
  { src: '/cake%20products/Vanilla%20oreo.jpeg', alt: 'Vanilla Oreo' },
  { src: '/cake%20products/Three%20milk.jpeg', alt: 'Three Milk' },
  { src: '/cake%20products/Lotus.jpeg', alt: 'Lotus' },
  { src: '/cake%20products/Chocolate%20fudge.jpeg', alt: 'Chocolate Fudge' },
  { src: '/cake%20products/Chocolate%20caramel.jpeg', alt: 'Chocolate Caramel' },
  { src: '/cake%20products/Chocolate%20oreo.jpeg', alt: 'Chocolate Oreo' },
  { src: '/cookies%20products/top-view-mix-cookies-with-chocolate-gingerbread-cookies-table.jpg', alt: 'Cookies' },
  { src: '/cookies%20products/view-baked-cookies-done-by-vegan-bakery.jpg', alt: 'Cookies' },
  { src: '/cookies%20products/plate-sweeties-jar-biscuits.jpg', alt: 'Biscuits' },
  { src: '/cookies%20products/top-view-sweet-biscuits-with-nuts-presents-light-table.jpg', alt: 'Sweet treats' },
  { src: '/hero-cake.png', alt: 'Amal Bakes' },
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
