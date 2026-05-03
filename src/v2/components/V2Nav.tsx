import { useEffect, useState } from 'react';
import ellaLogo from '../../assets/ella-logo.png';
import { openCalendly } from '../../utils/calendly';

const NAV_LINKS = [
  { label: 'Live Today', href: '#v2-built-running' },
  { label: 'The Platform', href: '#v2-future-proof' },
  { label: 'Get Started', href: '#v2-lead-form' },
];

export default function V2Nav() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          stuck
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#v2-hero" onClick={(e) => { e.preventDefault(); scrollTo('#v2-hero'); }}>
            <img
              src={ellaLogo}
              alt="Ella.AI"
              className={`h-[20px] md:h-[26px] w-auto transition-opacity duration-300 ${stuck ? 'opacity-100' : 'opacity-0'}`}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-OneZero-Apparat-Book text-[14px] transition-colors ${
                  stuck ? 'text-darkGrey hover:text-blue' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={openCalendly}
            className={`hidden md:block font-OneZero-Apparat-Book text-[14px] rounded-3xl py-2 px-5 transition-all duration-300 ${
              stuck
                ? 'bg-darkGrey text-white hover:bg-darkGrey/80'
                : 'bg-white/20 text-white border border-white/40 hover:bg-white/30'
            }`}
          >
            Book a demo
          </button>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-[5px] p-1 ${stuck ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] transition-all duration-200 ${stuck ? 'bg-darkGrey' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-200 ${stuck ? 'bg-darkGrey' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] transition-all duration-200 ${stuck ? 'bg-darkGrey' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-grey px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-OneZero-Apparat-Book text-[16px] text-darkGrey text-left py-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { openCalendly(); setMenuOpen(false); }}
              className="font-OneZero-Apparat-Book text-[15px] bg-darkGrey text-white rounded-3xl py-3 mt-1"
            >
              Book a demo
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
