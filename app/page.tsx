import Header from '@/components/Header';
import LimitedOffers from '@/components/LimitedOffers';
import Products from '@/components/Products';
import OurPromise from '@/components/OurPromise';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Products />
        <LimitedOffers />
        <OurPromise />
        <About />
        <Testimonials />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
}
