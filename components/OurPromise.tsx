import Image from 'next/image';
import styles from './OurPromise.module.css';

const PROMISES = [
  {
    title: 'On-time delivery',
    description: 'We respect your occasion. Every order is planned and delivered when it matters—so your celebration stays exactly that.',
    icon: '/icons/icons8-delivery-100.png',
  },
  {
    title: '25+ designs',
    description: 'From classic to custom, our range grows with your imagination. Cakes and cookies that look as good as they taste.',
    icon: '/icons/icons8-gift-100.png',
  },
  {
    title: '50+ orders',
    description: 'Trust built one order at a time. We take every slice seriously and deliver the same care, every single time.',
    icon: '/icons/icons8-wedding-cake-100.png',
  },
  {
    title: 'Baked fresh',
    description: 'Nothing sits on a shelf. We bake to order with quality ingredients, so what you receive is always fresh and made for you.',
    icon: '/icons/icons8-cake-100.png',
  },
];

export default function OurPromise() {
  return (
    <section id="promise" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.kicker}>What we stand for</p>
        <h2 className={styles.title}>Our Promise</h2>
        <p className={styles.subtitle}>
          No shortcuts. Just honest ingredients, careful hands, and a commitment to every order.
        </p>
        <ul className={styles.grid}>
          {PROMISES.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.iconWrap}>
                <Image src={item.icon} alt="" width={48} height={48} className={styles.iconImg} />
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
