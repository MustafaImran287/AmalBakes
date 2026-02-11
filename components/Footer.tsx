import Image from 'next/image';
import styles from './Footer.module.css';

import { assetUrl } from '@/lib/basePath';

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/share/1J1gY6yrku/?mibextid=wwXIfr', icon: '/icons/icons8-facebook-96.png' },
  { label: 'Instagram', href: 'https://www.instagram.com/amal.bakes.2025?igsh=MXBqaG1mZHhxemFjNQ==', icon: '/icons/icons8-insta-96.png' },
];

const CONTACT = {
  phone: '+92 300 1234567',
  email: 'hello@amalbakes.com',
  cities: 'Rawalpindi & Islamabad',
  country: 'Pakistan',
  delivery: 'We deliver locally in Rawalpindi and Islamabad.',
};

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image src={assetUrl('/Logos/3.png')} alt="Amal Bakes" width={72} height={72} className={styles.logo} />
          <p className={styles.tagline}>Amal Bakes — Cakes & Cookies</p>
          <p className={styles.aboutDesc}>
            Handcrafted cakes and cookies from Rawalpindi & Islamabad. We bake fresh to order and deliver locally—because every celebration deserves something special.
          </p>
        </div>

        <div className={styles.contact}>
          <h3 className={styles.heading}>Contact & delivery</h3>
          <ul className={styles.contactList}>
            <li>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>{CONTACT.cities}, {CONTACT.country}</li>
            <li className={styles.deliveryNote}>{CONTACT.delivery}</li>
          </ul>
        </div>

        <div className={styles.social}>
          <h3 className={styles.heading}>Follow us</h3>
          <ul className={styles.socialList}>
            {SOCIAL.map(({ label, href, icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Image src={assetUrl(icon)} alt="" width={28} height={28} className={styles.socialIcon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Amal Bakes. Rawalpindi & Islamabad, Pakistan.</p>
      </div>
    </footer>
  );
}
