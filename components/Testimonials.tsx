'use client';

import { useState, useEffect, useMemo } from 'react';
import { ALL_PRODUCTS } from '@/lib/products';
import styles from './Testimonials.module.css';

type TestimonialItem = {
  quote: string;
  name: string;
  productTitle: string;
  stars: number;
};

function getTestimonials(): TestimonialItem[] {
  const list: TestimonialItem[] = [];
  for (const product of ALL_PRODUCTS) {
    if (!product.reviews?.length) continue;
    for (const r of product.reviews) {
      list.push({
        quote: r.text,
        name: r.author,
        productTitle: product.title,
        stars: typeof r.rating === 'number' ? r.rating : 5,
      });
    }
  }
  return list;
}

function StarRating({ count }: { count: number }) {
  return (
    <span className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={styles.star} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

const AUTO_ADVANCE_MS = 5000;
const PER_PAGE = 3;

export default function Testimonials() {
  const testimonials = useMemo(() => getTestimonials(), []);
  const pageCount = Math.max(1, Math.ceil(testimonials.length / PER_PAGE));
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (pageCount <= 1) return;
    const id = setInterval(() => {
      setPage((prev) => (prev + 1) % pageCount);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [pageCount]);

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.kicker}>What people say</p>
          <h2 className={styles.title}>Testimonials</h2>
          <p className={styles.empty}>Reviews from our customers will appear here.</p>
        </div>
      </section>
    );
  }

  const start = page * PER_PAGE;
  const visible = testimonials.slice(start, start + PER_PAGE);

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.kicker}>What people say</p>
        <h2 className={styles.title}>Testimonials</h2>

        <div className={styles.sliderWrap}>
          <ul className={styles.row} key={page}>
            {visible.map((t, i) => (
              <li key={`${page}-${i}`} className={styles.item}>
                <StarRating count={t.stars} />
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <cite className={styles.name}>— {t.name}</cite>
                <span className={styles.product}>{t.productTitle}</span>
              </li>
            ))}
          </ul>

          {pageCount > 1 && (
            <div className={styles.dots}>
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${i === page ? styles.dotActive : ''}`}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={i === page}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
