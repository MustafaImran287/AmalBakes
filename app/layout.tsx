import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Amal Bakes | Cakes & Cookies',
  description: 'Handcrafted cakes and cookies by Amal Bakes. Order now for celebrations and everyday sweetness.',
  icons: {
    icon: '/Logos/1.png',
    apple: '/Logos/1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
