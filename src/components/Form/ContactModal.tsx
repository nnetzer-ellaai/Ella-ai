import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Form from './Form';
import ellaLogo from '../../assets/ella-logo.png';

type Variant = 'contact' | 'demo';

type Props = {
  open: boolean;
  onClose: () => void;
  variant?: Variant;
};

const content: Record<Variant, { heading: string; sub: string }> = {
  contact: {
    heading: 'Contact Us',
    sub: "Interested in Ella.AI for your bank? Leave your details and we'll be in touch.",
  },
  demo: {
    heading: 'Book a Demo',
    sub: "Schedule a 30-minute walkthrough with our team. We'll show Ella in action and discuss how it fits your bank.",
  },
};

export default function ContactModal({ open, onClose, variant = 'contact' }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const { heading, sub } = content[variant];

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full md:w-auto md:min-w-[480px] md:max-w-lg bg-[#E0DEEC] rounded-t-[40px] md:rounded-[40px] p-8 md:p-12 z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-darkGrey/60 hover:text-darkGrey text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        <img src={ellaLogo} alt="Ella.AI" className="h-6 w-auto mb-6" />

        <h2 className="font-OneZero-Apparat-Book text-[28px] leading-tight text-darkGrey mb-1">
          {heading}
        </h2>
        <p className="font-OneZero-Apparat-Book text-sm text-midGrey mb-8">
          {sub}
        </p>

        <Form setError={onClose} isModal />
      </div>
    </div>,
    document.body
  );
}
