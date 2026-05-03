import { useEffect, useState, useRef } from 'react';
import ellaLogo from '../../assets/ella-logo.png';
import ellaDesk from '../../assets/desk/2_c.mp4';
import { openCalendly } from '../../utils/calendly';

const NAV_LINKS = [
  { label: 'Live Today', href: '#v2-built-running' },
  { label: 'The Platform', href: '#v2-future-proof' },
  { label: 'Get Started', href: '#v2-lead-form' },
];

export default function V2Nav() {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Play/pause video with modal open state
  useEffect(() => {
    if (demoOpen) {
      videoRef.current?.play().catch(() => {});
      document.body.style.overflow = 'hidden';
    } else {
      videoRef.current?.pause();
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [demoOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDemoOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
            {/* Watch Demo link */}
            <button
              onClick={() => setDemoOpen(true)}
              className={`font-OneZero-Apparat-Book text-[14px] transition-colors flex items-center gap-1.5 ${
                stuck ? 'text-darkGrey hover:text-blue' : 'text-white/80 hover:text-white'
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
                <polygon points="5.5,4.5 10,7 5.5,9.5" fill="currentColor"/>
              </svg>
              Watch Demo
            </button>
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
            {/* Watch Demo in mobile drawer */}
            <button
              onClick={() => { setMenuOpen(false); setDemoOpen(true); }}
              className="font-OneZero-Apparat-Book text-[16px] text-darkGrey text-left py-1 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="shrink-0">
                <circle cx="7" cy="7" r="6.5" stroke="currentColor"/>
                <polygon points="5.5,4.5 10,7 5.5,9.5" fill="currentColor"/>
              </svg>
              Watch Demo
            </button>
            <button
              onClick={() => { openCalendly(); setMenuOpen(false); }}
              className="font-OneZero-Apparat-Book text-[15px] bg-darkGrey text-white rounded-3xl py-3 mt-1"
            >
              Book a demo
            </button>
          </div>
        )}
      </nav>

      {/* Fullscreen demo modal */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onClick={() => setDemoOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setDemoOpen(false)}
            className="absolute top-5 right-6 text-white/80 hover:text-white text-4xl leading-none z-10 transition-colors"
            aria-label="Close demo"
          >
            ×
          </button>

          <video
            ref={videoRef}
            src={ellaDesk}
            className="w-full h-full object-contain"
            playsInline
            controls
            loop
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
