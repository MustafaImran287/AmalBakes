import styles from './News.module.css';

const NEWS_ITEMS = [
  {
    date: 'Feb 2025',
    title: 'New seasonal flavours',
    excerpt: 'We’ve added limited-time vanilla pineapple and chocolate caramel to the menu. Order your favourite before the season ends.',
  },
  {
    date: 'Jan 2025',
    title: 'Valentine’s orders open',
    excerpt: 'Book your heart-shaped cakes and cookie boxes for Valentine’s Day. We deliver in Rawalpindi and Islamabad.',
  },
  {
    date: 'Dec 2024',
    title: 'Holiday delivery schedule',
    excerpt: 'Place your Christmas and New Year orders in advance. We’ll share delivery slots so your celebrations are covered.',
  },
];

export default function News() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Latest News</h1>
        <p className={styles.subtitle}>
          Updates, seasonal offers and delivery news from Amal Bakes.
        </p>
        <ul className={styles.list}>
          {NEWS_ITEMS.map((item, i) => (
            <li key={i} className={styles.item}>
              <p className={styles.itemDate}>{item.date}</p>
              <h2 className={styles.itemTitle}>{item.title}</h2>
              <p className={styles.itemExcerpt}>{item.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
