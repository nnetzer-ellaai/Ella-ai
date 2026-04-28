import React, { useState, useEffect } from 'react';
import ellaLogo from '../../assets/ella-logo.png';

type Props = {
  onContactClick: () => void;
  isModalOpen?: boolean;
  onDismiss?: () => void;
};

export default function StickyPopup({ onContactClick, isModalOpen = false, onDismiss }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    onDismiss?.();
  };

  if (!isVisible || isModalOpen || isDismissed) return null;

  return (
    <>
      {/* Desktop: compact card bottom-right */}
      <div
        className={`
          hidden md:block
          fixed bottom-8 right-8 z-40
          w-[300px]
          bg-[#E0DEEC] rounded-2xl shadow-2xl
          p-7
          transition-all duration-500
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}
      >
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-5 text-midGrey hover:text-darkGrey text-xl leading-none"
        >
          ×
        </button>
        <img src={ellaLogo} alt="Ella.AI" className="h-5 w-auto mb-4" />
        <h3 className="font-OneZero-Apparat-Medium text-[17px] text-darkGrey mb-1">
          See Ella in Action
        </h3>
        <p className="font-OneZero-Apparat-Book text-sm text-midGrey mb-5">
          Discover how Ella helps banks deliver AI banking at scale.
        </p>
        <button
          onClick={() => { onContactClick(); handleDismiss(); }}
          className="w-full bg-[#3E3E3E] text-white rounded-full py-2.5 font-OneZero-Apparat-Book text-sm hover:bg-darkGrey/80 transition-colors"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile: slim bottom bar */}
      <div
        className={`
          md:hidden
          fixed bottom-0 left-0 right-0 z-40
          bg-[#E0DEEC] border-t border-borderGrey
          px-5 py-4
          flex items-center justify-between gap-4
          transition-all duration-500
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
      >
        <p className="font-OneZero-Apparat-Book text-sm text-darkGrey">
          Ready to see Ella?
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => { onContactClick(); handleDismiss(); }}
            className="bg-[#3E3E3E] text-white rounded-full py-2 px-5 font-OneZero-Apparat-Book text-sm whitespace-nowrap"
          >
            Contact Us
          </button>
          <button onClick={handleDismiss} className="text-midGrey text-xl leading-none">
            ×
          </button>
        </div>
      </div>
    </>
  );
}
