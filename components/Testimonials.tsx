import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  { quote: 'The cake was exactly what I wanted—fresh, beautiful, and so delicious. Will order again!', name: '— A satisfied customer', stars: 5 },
  { quote: 'Ordered for my daughter\'s birthday. On time, gorgeous, and everyone asked where we got it from.', name: '— Happy parent', stars: 5 },
];

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

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.kicker}>What people say</p>
        <h2 className={styles.title}>Testimonials</h2>
        <ul className={styles.list}>
          {TESTIMONIALS.map((t, i) => (
            <li key={i} className={styles.item}>
              <StarRating count={t.stars} />
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <cite className={styles.name}>{t.name}</cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
