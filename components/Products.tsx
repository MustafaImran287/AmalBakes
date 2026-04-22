'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Products.module.css';
import {
  ALL_PRODUCTS,
  NEW_DESIGN_PRODUCT_IDS,
  formatPrice,
  getProductImageUrl,
  type Product,
  type ProductCategory,
} from '@/lib/products';
import { assetUrl } from '@/lib/basePath';

const FILTERS: { value: ProductCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'vanilla-cakes', label: 'Vanilla Cakes' },
  { value: 'chocolate-cakes', label: 'Chocolate Cakes' },
  { value: 'cookies', label: 'Cookies' },
  { value: 'brownie', label: 'Brownie' },
];

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function productsForFilter(category: ProductCategory): Product[] {
  return category === 'all' ? [...ALL_PRODUCTS] : ALL_PRODUCTS.filter((p) => p.category === category);
}

/** Home grid: surface new celebration cakes first, then fill from the shuffled list (no extra randomness). */
function homePreviewRow(displayList: Product[], filter: ProductCategory): Product[] {
  const prioritize = filter === 'all' || filter === 'vanilla-cakes';
  if (!prioritize) {
    return displayList.slice(0, 4);
  }

  const newTarget = filter === 'all' ? 3 : 2;
  const out: Product[] = [];
  const used = new Set<string>();

  for (const p of displayList) {
    if (out.length >= newTarget) break;
    if (NEW_DESIGN_PRODUCT_IDS.has(p.id)) {
      out.push(p);
      used.add(p.id);
    }
  }
  for (const p of displayList) {
    if (out.length >= 4) break;
    if (!used.has(p.id)) {
      out.push(p);
      used.add(p.id);
    }
  }
  return out.slice(0, 4);
}

export default function Products() {
  const [filter, setFilter] = useState<ProductCategory>('all');
  const [displayList, setDisplayList] = useState<Product[]>(() => [...ALL_PRODUCTS]);

  useEffect(() => {
    setDisplayList(shuffleArray(productsForFilter('all')));
  }, []);

  const changeFilter = (value: ProductCategory) => {
    setFilter(value);
    setDisplayList(shuffleArray(productsForFilter(value)));
  };

  const oneRow = useMemo(() => homePreviewRow(displayList, filter), [displayList, filter]);

  return (
    <section id="products" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <Image src={assetUrl('/Logos/3.png')} alt="" width={80} height={80} className={styles.badgeImg} />
        </div>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.subtitle}>
          From celebration cakes to everyday cookies, each treat is made with quality ingredients and a personal touch.
          {(filter === 'all' || filter === 'vanilla-cakes') && (
            <span className={styles.subtitleAccent}> New celebration designs are highlighted below.</span>
          )}
        </p>

        <div className={styles.filterWrap}>
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`${styles.filterBtn} ${filter === value ? styles.filterBtnActive : ''}`}
              onClick={() => changeFilter(value)}
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
                  {NEW_DESIGN_PRODUCT_IDS.has(item.id) && (
                    <span className={styles.newBadge}>New</span>
                  )}
                  <Image
                    src={getProductImageUrl(item)}
                    alt={item.title}
                    fill
                    className={styles.previewImage}
                    sizes="(max-width: 399px) 100vw, (max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
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
