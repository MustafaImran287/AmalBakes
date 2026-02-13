import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CustomCakeForm from '@/components/CustomCakeForm';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Custom Cake | Amal Bakes',
  description: 'Order a custom cake — flavour, weight, frosting, delivery. Fill in your details and we\'ll get back with pricing. Rawalpindi & Islamabad.',
};

export default function CustomCakePage() {
  return (
    <>
      <NavBar />
      <main>
        <CustomCakeForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
