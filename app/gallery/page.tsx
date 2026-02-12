import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Gallery | Amal Bakes',
  description: 'A peek at our cakes, cookies and treats. Amal Bakes — handcrafted in Rawalpindi & Islamabad.',
};

export default function GalleryPage() {
  return (
    <>
      <NavBar />
      <main>
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
