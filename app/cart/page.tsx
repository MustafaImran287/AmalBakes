import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CartView from '@/components/CartView';

export const metadata: Metadata = {
  title: 'Cart | Amal Bakes',
  description: 'Your basket. Send your order via WhatsApp.',
};

export default function CartPage() {
  return (
    <>
      <NavBar />
      <main className="cart-page">
        <CartView />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
