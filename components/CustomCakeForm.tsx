'use client';

import { useState } from 'react';
import styles from './CustomCakeForm.module.css';

const WHATSAPP_NUMBER = '923365119740';

const FROSTING_OPTIONS = [
  { value: 'fresh-cream', label: 'Fresh Cream' },
  { value: 'buttercream', label: 'Buttercream' },
] as const;

const WEIGHT_OPTIONS = ['1 lb', '2 lb', '3 lb', '4 lb', '5 lb', 'Other (mention in customization)'];

function buildWhatsAppMessage(form: {
  flavour: string;
  weight: string;
  frosting: string;
  deliveryDate: string;
  deliveryTime: string;
  deliveryAddress: string;
  customization: string;
  receiverContact: string;
}) {
  const lines = [
    'Assalamualaikum! 🌹',
    'Welcome to Amal Bakes 🍰',
    "I'd like to order a custom cake. Here are my details:",
    '',
    'Cake Details:',
    `• Flavour: ${form.flavour || '—'}`,
    `• Weight: ${form.weight || '—'}`,
    `• Frosting: ${form.frosting || '—'}`,
    `• Delivery Date: ${form.deliveryDate || '—'}`,
    `• Delivery Time: ${form.deliveryTime || '—'}`,
    `• Delivery Address / Pinned location: ${form.deliveryAddress || '—'}`,
    `• Customization (details/pictures): ${form.customization || 'None'}`,
    `• Contact number of receiver (if needed): ${form.receiverContact || '—'}`,
    '',
    "Note: Delivery charges apply based on location. I'll pay for delivery when the cake arrives 😊",
    '',
    '👈 Please confirm pricing and availability. Thank you!',
  ];
  return lines.join('\n');
}

export default function CustomCakeForm() {
  const [flavour, setFlavour] = useState('');
  const [weight, setWeight] = useState('');
  const [frosting, setFrosting] = useState<string>(FROSTING_OPTIONS[0].value);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customization, setCustomization] = useState('');
  const [receiverContact, setReceiverContact] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const frostingLabel = FROSTING_OPTIONS.find((o) => o.value === frosting)?.label ?? frosting;
    const message = buildWhatsAppMessage({
      flavour: flavour.trim(),
      weight: weight.trim(),
      frosting: frostingLabel,
      deliveryDate: deliveryDate.trim(),
      deliveryTime: deliveryTime.trim(),
      deliveryAddress: deliveryAddress.trim(),
      customization: customization.trim(),
      receiverContact: receiverContact.trim(),
    });
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrap}>
        <p className={styles.kicker}>Made just for you</p>
        <h1 className={styles.title}>Order a custom cake</h1>
        <p className={styles.subtitle}>
          Tell us what you have in mind. We&apos;ll get back with pricing and confirmation.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.groupTitle}>Cake details</h2>
          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="custom-flavour" className={styles.label}>
                Flavour
              </label>
              <input
                id="custom-flavour"
                type="text"
                className={styles.input}
                placeholder="e.g. Chocolate, Vanilla, Red Velvet"
                value={flavour}
                onChange={(e) => setFlavour(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="custom-weight" className={styles.label}>
                Weight
              </label>
              <select
                id="custom-weight"
                className={styles.select}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              >
                <option value="">Select weight</option>
                {WEIGHT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.frostingGroup}>
            <span className={styles.label}>Frosting</span>
            <div className={styles.frostingOptions} role="group" aria-label="Frosting choice">
              {FROSTING_OPTIONS.map((opt) => (
                <label
                  key={opt.value}
                  className={`${styles.frostingCard} ${frosting === opt.value ? styles.frostingCardSelected : ''}`}
                >
                  <input
                    type="radio"
                    name="frosting"
                    value={opt.value}
                    checked={frosting === opt.value}
                    onChange={() => setFrosting(opt.value)}
                    className={styles.frostingInput}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <h2 className={styles.groupTitle}>Delivery</h2>
          <div className={styles.formGrid}>
            <div className={styles.field}>
              <label htmlFor="custom-date" className={styles.label}>
                Date
              </label>
              <input
                id="custom-date"
                type="date"
                className={styles.input}
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="custom-time" className={styles.label}>
                Time
              </label>
              <input
                id="custom-time"
                type="time"
                className={styles.input}
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="custom-address" className={styles.label}>
              Address or pinned location
            </label>
            <textarea
              id="custom-address"
              className={styles.textarea}
              placeholder="Full address or drop a pin 📍 and share the location"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              rows={3}
            />
          </div>

          <h2 className={styles.groupTitle}>Extra details</h2>
          <div className={styles.field}>
            <label htmlFor="custom-customization" className={styles.label}>
              Customization (design, message on cake, reference pics on WhatsApp)
            </label>
            <textarea
              id="custom-customization"
              className={styles.textarea}
              placeholder="Describe or we can discuss on chat…"
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
              rows={3}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="custom-receiver" className={styles.label}>
              Contact number of receiver (if different)
            </label>
            <input
              id="custom-receiver"
              type="tel"
              className={styles.input}
              placeholder="e.g. +92 300 1234567"
              value={receiverContact}
              onChange={(e) => setReceiverContact(e.target.value)}
            />
          </div>

          <p className={styles.note}>
            <strong className={styles.noteLead}>Note:</strong>{' '}
            <em className={styles.noteItalic}>Delivery charges apply based on your location.</em>{' '}
            <strong className={styles.noteBold}>You&apos;ll pay for delivery when your cake arrives.</strong> 😊
          </p>

          <button type="submit" className={styles.submitBtn}>
            Send details via WhatsApp
          </button>

          <div className={styles.helpBox}>
            <p className={styles.helpCta}>
              Still confused? <strong>Talk to our chief</strong> — we&apos;ll help you choose the perfect cake.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.helpLink}
            >
              Chat or call on WhatsApp
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
