declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/nnetzer-ellaai';

export function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    // Fallback: open in new tab if script hasn't loaded yet
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  }
}
