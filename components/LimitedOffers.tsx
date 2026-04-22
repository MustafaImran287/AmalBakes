'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/basePath';
import styles from './LimitedOffers.module.css';

const WHATSAPP_NUMBER = '923365119740';

const LIMITED_OFFER = {
  badge: 'Special offer',
  title: 'Dusty rose vintage floral buttercream',
  originalPrice: 1700,
  discountedPrice: 1530,
  discountPercent: 10,
  description:
    'Pearl and vintage-style florals in dusty rose tones — an elegant buttercream finish. Perfect for gifting or your next celebration.',
  imagePath: '/cake%20products/dusty-rose-pearl-vintage-floral-buttercream-cake.jpeg',
  imageAlt: 'Dusty rose vintage floral buttercream cake — Amal Bakes limited offer',
};

function formatPrice(n: number) {
  return `Rs. ${n.toLocaleString()}`;
}

export default function LimitedOffers() {
  const whatsappMessage = `Hi, I'd like to order the limited offer: ${LIMITED_OFFER.title} at ${formatPrice(LIMITED_OFFER.discountedPrice)}.`;
  const orderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="limited-offers" className={styles.section}>
      <div className={styles.decorOverlay} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.decorLeft} aria-hidden>
          <Image
            src={assetUrl('/decor-1.png')}
            alt=""
            width={120}
            height={160}
            className={styles.decorImage}
          />
        </div>
        <div className={styles.cardBlock}>
          <p className={styles.sectionLabel}>Limited offer</p>
          <div className={styles.card}>
          <div className={styles.cardBody}>
            <div className={styles.content}>
              <span className={styles.badge}>{LIMITED_OFFER.badge}</span>
              <h3 className={styles.productName}>{LIMITED_OFFER.title}</h3>
              <div className={styles.priceRow}>
                <span className={styles.originalPrice}>{formatPrice(LIMITED_OFFER.originalPrice)}</span>
                <span className={styles.discountBadge}>{LIMITED_OFFER.discountPercent}% off</span>
              </div>
              <p className={styles.discountedPrice}>
                {formatPrice(LIMITED_OFFER.discountedPrice)} <span className={styles.only}>only</span>
              </p>
              <p className={styles.description}>{LIMITED_OFFER.description}</p>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                Order now
              </a>
            </div>
            <div className={styles.imageWrap}>
              <Image
                src={assetUrl(LIMITED_OFFER.imagePath)}
                alt={LIMITED_OFFER.imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 280px"
                priority={false}
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
