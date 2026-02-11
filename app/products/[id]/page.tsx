import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductDetail from '@/components/ProductDetail';
import { ALL_PRODUCTS, getProductById } from '@/lib/products';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: 'Product | Amal Bakes' };
  return {
    title: `${product.title} | Amal Bakes`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();
  return (
    <>
      <NavBar />
      <main className="products-page">
        <ProductDetail product={product} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
