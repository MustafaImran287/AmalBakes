import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import News from '@/components/News';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Latest News | Amal Bakes',
  description: 'Updates, seasonal offers and delivery news from Amal Bakes. Cakes and cookies in Rawalpindi & Islamabad.',
};

export default function NewsPage() {
  return (
    <>
      <NavBar />
      <main>
        <News />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
