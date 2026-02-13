'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/products';
import { assetUrl } from '@/lib/basePath';
import styles from './CartView.module.css';

const WHATSAPP_NUMBER = '923365119740';

function buildWhatsAppMessage(
  items: { title: string; quantity: number; price: number; size?: string; frosting?: string; message?: string }[],
  totalPrice: number,
  deliveryAddress?: string
) {
  const lines = items.map(
    (i) =>
      `• ${i.title} x${i.quantity} — ${formatPrice(i.price * i.quantity)}${i.size ? ` (${i.size})` : ''}${i.frosting ? ` — Frosting: ${i.frosting}` : ''}${i.message ? ` — Message: ${i.message}` : ''}`
  );
  let msg = `Hi, I'd like to order from Amal Bakes:\n\n${lines.join('\n')}\n\nTotal: ${formatPrice(totalPrice)}`;
  if (deliveryAddress?.trim()) {
    msg += `\n\nDelivery address: ${deliveryAddress.trim()}`;
  }
  return msg;
}

export default function CartView() {
  const { items, removeItem, updateQuantity, totalCount, totalPrice, clearCart } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const whatsappMessage = items.length ? buildWhatsAppMessage(items, totalPrice, deliveryAddress) : '';

  if (items.length === 0) {
    return (
      <div className={styles.pageWrapper}>
      <div className={styles.empty}>
        <p className={styles.emptyText}>Your basket is empty.</p>
        <Link href="/products" className={styles.shopLink}>
          Browse products
        </Link>
      </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
    <div className={styles.wrap}>
      <h1 className={styles.title}>Your basket</h1>
      <p className={styles.subtitle}>
        {totalCount} item{totalCount !== 1 ? 's' : ''} — {formatPrice(totalPrice)}
      </p>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.row}>
            {item.image && (
              <div className={styles.rowThumb}>
                <Image
                  src={item.image!.startsWith('/') ? item.image! : assetUrl(`/cake%20products/${encodeURIComponent(item.image!)}`)}
                  alt={item.title}
                  fill
                  className={styles.rowThumbImg}
                  sizes="80px"
                />
              </div>
            )}
            <div className={styles.rowMain}>
              <span className={styles.rowTitle}>{item.title}</span>
              {item.size && <span className={styles.rowMeta}>Size: {item.size}</span>}
              {item.frosting && <span className={styles.rowMeta}>Frosting: {item.frosting}</span>}
              {item.message && <span className={styles.rowMeta}>Message: {item.message}</span>}
              <span className={styles.rowPrice}>{formatPrice(item.price * item.quantity)}</span>
            </div>
            <div className={styles.rowActions}>
              <div className={styles.qtyWrap}>
                <button
                  type="button"
                  className={styles.qtyBtn}
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className={styles.qtyValue}>{item.quantity}</span>
                <button
                  type="button"
                  className={styles.qtyBtn}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => removeItem(item.id)}
                aria-label="Remove"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <div className={styles.addressField}>
          <label htmlFor="delivery-address" className={styles.addressLabel}>
            Where do you want it delivered?
          </label>
          <textarea
            id="delivery-address"
            className={styles.addressInput}
            placeholder="e.g. House 123, Street name, Sector/Area, Rawalpindi or Islamabad"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            rows={3}
          />
        </div>
        <p className={styles.total}>
          Total: <strong>{formatPrice(totalPrice)}</strong>
        </p>
        <p className={styles.deliveryNote}>
          <strong className={styles.noteLead}>Note:</strong>{' '}
          <em className={styles.noteItalic}>Delivery charges apply based on your location.</em>{' '}
          <strong className={styles.noteBold}>You&apos;ll pay for delivery when your cake arrives.</strong>
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sendOrderBtn}
          onClick={() => clearCart()}
        >
          Send order via WhatsApp
        </a>
      </div>
    </div>
    </div>
  );
}
