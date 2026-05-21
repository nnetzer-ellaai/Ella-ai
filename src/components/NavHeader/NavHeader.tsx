import { useState, useEffect } from 'react';
import ellaLogo from '../../assets/ella-logo.png';

type Props = {
  onBookDemoClick: () => void;
};

export default function NavHeader({ onBookDemoClick }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-[4.5rem] h-16 flex items-center justify-between">
        <img src={ellaLogo} alt="Ella.AI" className="h-5 w-auto" />

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('how-it-works')}
            className={`font-OneZero-Apparat-Book text-sm transition-colors ${isScrolled ? 'text-darkGrey hover:text-blue' : 'text-darkGrey/80 hover:text-darkGrey'}`}
          >
            How it Works
          </button>
          <button
            onClick={() => scrollTo('impact')}
            className={`font-OneZero-Apparat-Book text-sm transition-colors ${isScrolled ? 'text-darkGrey hover:text-blue' : 'text-darkGrey/80 hover:text-darkGrey'}`}
          >
            Impact
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className={`font-OneZero-Apparat-Book text-sm transition-colors ${isScrolled ? 'text-darkGrey hover:text-blue' : 'text-darkGrey/80 hover:text-darkGrey'}`}
          >
            Contact
          </button>
        </nav>

        <button
          onClick={onBookDemoClick}
          className="bg-blue text-white rounded-full py-2 px-5 font-OneZero-Apparat-Book text-sm hover:bg-blue/90 transition-colors shadow-sm"
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
}
