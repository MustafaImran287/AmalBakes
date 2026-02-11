'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { Product } from '@/lib/products';
import { formatPrice, getProductImageUrl } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductDetail.module.css';

const TABS = [
  { id: 'description', label: 'Description' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'ingredients', label: 'Ingredients & Allergy Advice' },
  { id: 'nutritional', label: 'Nutritional Information' },
] as const;

type TabId = (typeof TABS)[number]['id'];

export default function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizeServing[0] ?? '');
  const [message, setMessage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabId>('description');

  const handleAddToBasket = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity,
      size: selectedSize || undefined,
      message: message.trim() || undefined,
      image: getProductImageUrl(product),
    });
    router.push('/cart');
  };

  const tabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p className={styles.tabParagraph}>{product.tabDescription}</p>;
      case 'reviews':
        return product.reviews.length ? (
          <ul className={styles.reviewList}>
            {product.reviews.map((r, i) => (
              <li key={i}>
                <strong>{r.author}</strong> — {r.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.tabParagraph}>No reviews yet. Be the first to review!</p>
        );
      case 'ingredients':
        return <p className={styles.tabParagraph}>{product.tabIngredients}</p>;
      case 'nutritional':
        return <p className={styles.tabParagraph}>{product.tabNutritional}</p>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrap}>
        <div className={styles.panels}>
          <div className={styles.leftPanel}>
            <div className={styles.imageWrap}>
              <Image
                src={getProductImageUrl(product)}
                alt={product.title}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div className={styles.rightPanel}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <p className={styles.productPrice}>{formatPrice(product.price)}</p>
            <p className={styles.productDesc}>{product.description}</p>

            <div className={styles.field}>
              <label className={styles.label}>Size &amp; serving</label>
              <select
                className={styles.select}
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {product.sizeServing.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Personalized message on cake</label>
              <textarea
                className={styles.textarea}
                placeholder="e.g. Happy Birthday!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Quantity</label>
              <div className={styles.quantityWrap}>
                <button
                  type="button"
                  className={styles.qtyBtn}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button
                  type="button"
                  className={styles.qtyBtn}
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className={styles.addToBasket}
              onClick={handleAddToBasket}
            >
              Add to basket
            </button>
          </div>
        </div>

        <section className={styles.tabsSection}>
          <div className={styles.tabList} role="tablist">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                className={`${styles.tab} ${activeTab === id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className={styles.tabContent} role="tabpanel">
            {tabContent()}
          </div>
        </section>
      </div>
    </div>
  );
}
