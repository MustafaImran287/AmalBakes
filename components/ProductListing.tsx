'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductListing.module.css';
import { ALL_PRODUCTS, formatPrice, getProductImageUrl, type ProductCategory } from '@/lib/products';

const FILTERS: { value: ProductCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'cakes', label: 'Cakes' },
  { value: 'cookies', label: 'Cookies' },
];

export default function ProductListing() {
  const [filter, setFilter] = useState<ProductCategory>('all');
  const [cart, setCart] = useState<{ id: string; title: string; price: number; qty: number }[]>([]);

  const filtered = filter === 'all'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter((p) => p.category === filter);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const whatsappOrderText = cart.length
    ? `Hi, I'd like to order:\n${cart.map((i) => `- ${i.title} x${i.qty} (${formatPrice(i.price * i.qty)})`).join('\n')}\nTotal: ${formatPrice(cartTotal)}`
    : '';

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrap}>
      {(cartCount > 0 || cart.length > 0) && (
        <div className={styles.topBar}>
          <div className={styles.topRight}>
            {cartCount > 0 && (
              <span className={styles.cartSummary}>
                Cart: {cartCount} item{cartCount !== 1 ? 's' : ''} ({formatPrice(cartTotal)})
              </span>
            )}
            {cart.length > 0 && (
              <a
                href={`https://wa.me/923205265991?text=${encodeURIComponent(whatsappOrderText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orderBtn}
              >
                Order via WhatsApp
              </a>
            )}
          </div>
        </div>
      )}

      <h1 className={styles.pageTitle}>All Products</h1>
      <p className={styles.pageSubtitle}>
        Cakes and cookies made with quality ingredients. Filter by category or browse all.
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

      <ul className={styles.grid}>
        {filtered.map((item) => (
          <li key={item.id} className={styles.card}>
            <div className={styles.cardImageWrap}>
              <Image
                src={getProductImageUrl(item)}
                alt={item.title}
                fill
                className={styles.cardImage}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardTitleRow}>
                <h2 className={styles.cardTitle}>{item.title}</h2>
                <p className={styles.cardPrice}>{formatPrice(item.price)}</p>
              </div>
              <p className={styles.cardDesc}>{item.description}</p>
              <Link href={`/products/${item.id}`} className={styles.selectBtn}>
                Select
              </Link>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
