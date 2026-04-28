import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Form from './Form';
import ellaLogo from '../../assets/ella-logo.png';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
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

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full md:w-auto md:min-w-[480px] md:max-w-lg bg-[#E0DEEC] rounded-t-[40px] md:rounded-[40px] p-8 md:p-12 z-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-darkGrey/60 hover:text-darkGrey text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Logo */}
        <img src={ellaLogo} alt="Ella.AI" className="h-6 w-auto mb-6" />

        {/* Heading */}
        <h2 className="font-OneZero-Apparat-Book text-[28px] leading-tight text-darkGrey mb-1">
          Contact Us
        </h2>
        <p className="font-OneZero-Apparat-Book text-sm text-midGrey mb-8">
          Interested in Ella.AI for your bank? Leave your details and we'll be in touch.
        </p>

        {/* Form — modal mode strips its own wrapper/heading */}
        <Form setError={onClose} isModal />
      </div>
    </div>,
    document.body
  );
}
