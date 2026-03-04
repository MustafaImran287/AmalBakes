'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/basePath';
import styles from './LimitedOffers.module.css';

const WHATSAPP_NUMBER = '923365119740';

const RAMADAN_OFFER = {
  badge: 'Ramadan offer',
  title: 'Three Milk Caramel Cake',
  originalPrice: 1700,
  discountedPrice: 1530,
  discountPercent: 10,
  description: 'Three-milk sponge with caramel glaze. Perfect for iftar or gifting.',
  imagePath: '/cake%20products/Ramzan%20Cake.jpeg',
  imageAlt: 'Ramzan cake - Amal Bakes Ramadan offer',
};

function formatPrice(n: number) {
  return `Rs. ${n.toLocaleString()}`;
}

export default function LimitedOffers() {
  const whatsappMessage = `Hi, I'd like to order the Ramadan offer: Three milk caramel cake at ${formatPrice(RAMADAN_OFFER.discountedPrice)}.`;
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
          <p className={styles.sectionLabel}>Limited offer for Ramzan</p>
          <div className={styles.card}>
          <div className={styles.cardBody}>
            <div className={styles.content}>
              <span className={styles.badge}>{RAMADAN_OFFER.badge}</span>
              <h3 className={styles.productName}>{RAMADAN_OFFER.title}</h3>
              <div className={styles.priceRow}>
                <span className={styles.originalPrice}>{formatPrice(RAMADAN_OFFER.originalPrice)}</span>
                <span className={styles.discountBadge}>{RAMADAN_OFFER.discountPercent}% off</span>
              </div>
              <p className={styles.discountedPrice}>
                {formatPrice(RAMADAN_OFFER.discountedPrice)} <span className={styles.only}>only</span>
              </p>
              <p className={styles.description}>{RAMADAN_OFFER.description}</p>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                Order now
              </a>
            </div>
            <div className={styles.imageWrap}>
              <Image
                src={assetUrl(RAMADAN_OFFER.imagePath)}
                alt={RAMADAN_OFFER.imageAlt}
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
