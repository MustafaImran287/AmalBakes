'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { Product } from '@/lib/products';
import {
  BUTTERCREAM_SURCHARGE_PER_POUND,
  CAKE_THEMES,
  THEME_SURCHARGE,
  formatPrice,
  getProductImageUrl,
  getProductImageUrls,
} from '@/lib/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductDetail.module.css';

const TABS = [
  { id: 'description', label: 'Description' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'ingredients', label: 'Ingredients & Allergy Advice' },
  { id: 'nutritional', label: 'Nutritional Information' },
] as const;

type TabId = (typeof TABS)[number]['id'];

function getPoundsFromSize(size: string): number {
  if (!size || !size.toLowerCase().includes('pound')) return 1;
  const num = parseInt(size, 10);
  return Number.isNaN(num) || num < 1 ? 1 : num;
}

export default function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizeServing[0] ?? '');
  const [frosting, setFrosting] = useState<'fresh-cream' | 'butter-cream'>('fresh-cream');
  const [themeId, setThemeId] = useState('');
  const [message, setMessage] = useState('');
  const [chefNotes, setChefNotes] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabId>('description');
  const [slideIndex, setSlideIndex] = useState(0);

  const imageUrls = getProductImageUrls(product);
  const isCakeByPound = product.category === 'vanilla-cakes' || product.category === 'chocolate-cakes';

  /**
   * On cakes the arrows browse themes: the product's own photos first (no theme),
   * then every theme. On cookies and brownies they just browse the product photos.
   */
  const slides = isCakeByPound
    ? [
        ...imageUrls.map((url) => ({ themeId: '', url })),
        ...CAKE_THEMES.map((t) => ({ themeId: t.id, url: getProductImageUrl(product, t.image) })),
      ]
    : imageUrls.map((url) => ({ themeId: '', url }));
  const hasSlider = slides.length > 1;

  /** Writes the theme to state and the URL so the link can be copied and shared. */
  const applyTheme = (id: string) => {
    setThemeId(id);
    const url = new URL(window.location.href);
    if (id) url.searchParams.set('theme', id);
    else url.searchParams.delete('theme');
    window.history.replaceState(null, '', url.toString());
  };

  const goToSlide = (i: number) => {
    const next = (i + slides.length) % slides.length;
    setSlideIndex(next);
    if (isCakeByPound) applyTheme(slides[next].themeId);
  };

  const changeTheme = (id: string) => {
    applyTheme(id);
    const i = slides.findIndex((s) => s.themeId === id);
    if (i >= 0) setSlideIndex(i);
  };

  // A shared link like /products/6/?theme=football opens on that theme.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('theme');
    if (!fromUrl || !CAKE_THEMES.some((t) => t.id === fromUrl)) return;
    setThemeId(fromUrl);
    const i = slides.findIndex((s) => s.themeId === fromUrl);
    if (i >= 0) setSlideIndex(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pounds = getPoundsFromSize(selectedSize);
  const pricePerPound =
    product.price + (isCakeByPound && frosting === 'butter-cream' ? BUTTERCREAM_SURCHARGE_PER_POUND : 0);
  const selectedTheme = isCakeByPound ? CAKE_THEMES.find((t) => t.id === themeId) : undefined;
  const unitPrice =
    isCakeByPound ? pricePerPound * pounds + (selectedTheme ? THEME_SURCHARGE : 0) : product.price;
  const totalPrice = unitPrice * quantity;

  const handleAddToBasket = () => {
    addItem({
      productId: product.id,
      title: product.title,
      price: unitPrice,
      quantity,
      size: selectedSize || undefined,
      frosting: isCakeByPound ? (frosting === 'butter-cream' ? 'Butter cream' : 'Fresh cream') : undefined,
      theme: selectedTheme ? selectedTheme.label : undefined,
      message: message.trim() || undefined,
      chefNotes: chefNotes.trim() || undefined,
      image: selectedTheme
        ? getProductImageUrl(product, selectedTheme.image)
        : getProductImageUrl(product),
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
              <li key={i} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewAvatar} aria-hidden>{r.author.charAt(0).toUpperCase()}</span>
                  <div className={styles.reviewMeta}>
                    <span className={styles.reviewAuthor}>{r.author}</span>
                    {typeof r.rating === 'number' && (
                      <span className={styles.reviewStars} aria-label={`${r.rating} out of 5 stars`}>
                        {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                      </span>
                    )}
                  </div>
                </div>
                <p className={styles.reviewText}>{r.text}</p>
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
                src={slides[slideIndex]?.url ?? getProductImageUrl(product)}
                alt={selectedTheme ? `${selectedTheme.label} theme example` : product.title}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {hasSlider && (
                <>
                  <button
                    type="button"
                    className={styles.sliderPrev}
                    onClick={() => goToSlide(slideIndex - 1)}
                    aria-label={isCakeByPound ? 'Previous theme' : 'Previous image'}
                  >
                    <svg className={styles.sliderIcon} viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M15 6 L9 12 L15 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={styles.sliderNext}
                    onClick={() => goToSlide(slideIndex + 1)}
                    aria-label={isCakeByPound ? 'Next theme' : 'Next image'}
                  >
                    <svg className={styles.sliderIcon} viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M9 6 L15 12 L9 18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* Dots suit a handful of photos; the theme list is far too long for them. */}
                  {slides.length <= 4 && (
                    <div className={styles.sliderDots}>
                      {slides.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`${styles.sliderDot} ${i === slideIndex ? styles.sliderDotActive : ''}`}
                          onClick={() => goToSlide(i)}
                          aria-label={`Go to image ${i + 1}`}
                          aria-current={i === slideIndex}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className={styles.rightPanel}>
            <h1 className={styles.productTitle}>
              {selectedTheme ? `${product.title} — ${selectedTheme.label} theme` : product.title}
            </h1>
            <div className={styles.priceBlock}>
              <p className={styles.productPrice}>{formatPrice(totalPrice)}</p>
              <p className={styles.productPriceNote}>{formatPrice(unitPrice)} each × {quantity}</p>
            </div>
            <p className={styles.productDesc}>
              {selectedTheme
                ? `${product.description} Decorated in our ${selectedTheme.label} theme.`
                : product.description}
            </p>

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

            {isCakeByPound && (
              <div className={styles.field}>
                <label className={styles.label}>Frosting</label>
                <select
                  className={styles.select}
                  value={frosting}
                  onChange={(e) => setFrosting(e.target.value as 'fresh-cream' | 'butter-cream')}
                >
                  <option value="fresh-cream">Fresh cream</option>
                  <option value="butter-cream">
                    Butter cream (+{formatPrice(BUTTERCREAM_SURCHARGE_PER_POUND)} per pound)
                  </option>
                </select>
              </div>
            )}

            {isCakeByPound && (
              <div className={styles.field}>
                <label className={styles.label}>Theme</label>
                <select
                  className={styles.select}
                  value={themeId}
                  onChange={(e) => changeTheme(e.target.value)}
                >
                  <option value="">No theme (plain finish)</option>
                  {CAKE_THEMES.map((t) => (
                    <option key={t.id} value={t.id}>
                      {`${t.label} (+${formatPrice(THEME_SURCHARGE)})`}
                    </option>
                  ))}
                </select>
                <p className={styles.themeNote}>
                  Themes shown are examples of our work. Request any changes in your WhatsApp
                  message when you order.
                </p>
              </div>
            )}

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
              <label className={styles.label} htmlFor="chef-notes">
                Additional notes for our chef
              </label>
              <textarea
                id="chef-notes"
                className={styles.textarea}
                placeholder="e.g. less sweet, no nuts, specific colours, delivery timing"
                value={chefNotes}
                onChange={(e) => setChefNotes(e.target.value)}
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
                {id === 'reviews' && product.reviews.length > 0
                  ? `${label} (${product.reviews.length})`
                  : label}
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
