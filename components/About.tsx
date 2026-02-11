import Image from 'next/image';
import { assetUrl } from '@/lib/basePath';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.imageWrap}>
          <Image
            src={assetUrl('/Logos/2.png')}
            alt="Amal Bakes"
            width={280}
            height={280}
            className={styles.logo}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>About Amal Bakes</h2>
          <p className={styles.text}>
            Amal Bakes brings you handcrafted cakes and cookies made with care and the finest ingredients.
            Whether it&apos;s a birthday, wedding, or a simple treat for yourself, we create sweets that
            look as good as they taste.
          </p>
          <p className={styles.text}>
            Every order is prepared with attention to detail and a passion for baking—because we believe
            every occasion deserves something special.
          </p>
        </div>
      </div>
    </section>
  );
}
