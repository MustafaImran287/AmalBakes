'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Products.module.css';
import { ALL_PRODUCTS, formatPrice, getProductImageUrl, type ProductCategory } from '@/lib/products';

const FILTERS: { value: ProductCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'cakes', label: 'Cakes' },
  { value: 'cookies', label: 'Cookies' },
];

export default function Products() {
  const [filter, setFilter] = useState<ProductCategory>('all');
  const filtered = filter === 'all'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) => p.category === filter);
  const oneRow = filtered.slice(0, 4);

  return (
    <section id="products" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <Image src="/Logos/3.png" alt="" width={80} height={80} className={styles.badgeImg} />
        </div>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.subtitle}>
          From celebration cakes to everyday cookies, each treat is made with quality ingredients and a personal touch.
        </p>

        <div className={styles.filterWrap}>
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`${styles.filterBtn} ${filter === value ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className={styles.previewGrid}>
          {oneRow.map((item) => (
            <li key={item.id} className={styles.previewCard}>
              <div className={styles.previewCardInner}>
                <div className={styles.previewImageWrap}>
                  <Image
                    src={getProductImageUrl(item)}
                    alt={item.title}
                    fill
                    className={styles.previewImage}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className={styles.previewBody}>
                  <div className={styles.previewTitleRow}>
                    <h3 className={styles.previewName}>{item.title}</h3>
                    <span className={styles.previewPrice}>{formatPrice(item.price)}</span>
                  </div>
                  <p className={styles.previewIngredients}>{item.description}</p>
                  <Link href={`/products/${item.id}`} className={styles.selectBtn} aria-label="Select">
                    Select
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.exploreWrap}>
          <Link href="/products" className={styles.exploreBtn}>
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
}
