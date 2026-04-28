import React, { useEffect, useState } from 'react';
import { MIN_DESKTOP_WIDTH } from '../../constants/constants';

type Props = {
  onContactClick: () => void;
  onDemoClick?: () => void;
  isModalOpen?: boolean;
};

export default function FloatingCTA({ onContactClick, onDemoClick, isModalOpen = false }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.screen.width >= MIN_DESKTOP_WIDTH);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    const handleResize = () => {
      setIsDesktop(window.screen.width >= MIN_DESKTOP_WIDTH);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible || isModalOpen) return null;

  if (isDesktop) {
    return (
      <button
        onClick={onContactClick}
        className="fixed bottom-8 right-8 z-40 bg-blue text-white rounded-full py-3 px-6 font-OneZero-Apparat-Book shadow-lg hover:bg-blue/90 transition-all duration-300"
        aria-label="Contact Us"
      >
        Contact Us
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-grey px-4 py-3 flex gap-2">
      <button
        onClick={onContactClick}
        className="flex-1 bg-blue text-white rounded-full py-3 font-OneZero-Apparat-Book text-sm hover:bg-blue/90 transition-colors"
      >
        Contact Us
      </button>
      {onDemoClick && (
        <button
          onClick={onDemoClick}
          className="flex-1 text-blue border border-blue rounded-full py-3 font-OneZero-Apparat-Book text-sm hover:bg-blue/5 transition-colors"
        >
          See Demo
        </button>
      )}
    </div>
  );
}
