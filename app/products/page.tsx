import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ProductListing from '@/components/ProductListing';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Products | Amal Bakes',
  description: 'Browse our cakes and cookies. Black Forest, Vanilla, Strawberry, Fudge, Biscoff and more. Order via WhatsApp.',
};

export default function ProductsPage() {
  return (
    <>
      <NavBar />
      <main className="products-page">
        <ProductListing />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
