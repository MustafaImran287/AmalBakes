'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { assetUrl } from '@/lib/basePath';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Cart', href: '/cart' },
  { label: 'Contact', href: '/#footer' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useCart();

  return (
    <header id="home" className={styles.header}>
      <div className={styles.heroImage}>
        <div className={styles.heroImageInner}>
          <Image
            src={assetUrl('/hero-cake.png')}
            alt="Handcrafted cake with fresh flowers - Amal Bakes"
            fill
            priority
            className={styles.heroImg}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Amal Bakes</h1>
          <p className={styles.heroTagline}>Cakes & Cookies made with love</p>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="#home" className={styles.logoLink} aria-label="Amal Bakes Home">
            <Image
            src={assetUrl('/Logos/2.png')}
            alt="Amal Bakes"
            width={120}
            height={120}
            className={styles.logo}
            />
          </Link>

          <ul className={`${styles.navList} ${menuOpen ? styles.navListOpen : ''}`}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} onClick={() => setMenuOpen(false)} className={href === '/cart' ? styles.cartLink : undefined}>
                  {label}
                  {href === '/cart' && totalCount > 0 && (
                    <span className={styles.cartBadge} aria-label={`${totalCount} items in cart`}>
                      {totalCount > 99 ? '99+' : totalCount}
                    </span>
                  )}
                </Link>
              </li>
            ))}
            <li className={styles.ctaWrap}>
              <a
                href="https://wa.me/923365119740?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orderBtn}
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>

      </nav>
    </header>
  );
}
