'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { assetUrl } from '@/lib/basePath';
import styles from './NavBar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/#about' },
  { label: 'Cart', href: '/cart' },
  { label: 'Contact', href: '/#footer' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useCart();

  return (
    <header className={styles.navBar}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.logoLink} aria-label="Amal Bakes Home">
            <Image
              src={assetUrl('/Logos/2.png')}
              alt="Amal Bakes"
              width={56}
              height={56}
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
                href="https://wa.me/1234567890?text=Hi%2C%20I%20would%20like%20to%20place%20an%20order."
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
