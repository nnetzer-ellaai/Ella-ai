import React from "react";
import ellaLogo from "../../assets/ella-logo.png";
import { CONTACT_EMAIL } from "../../constants/constants";

const LINKEDIN_URL = "https://il.linkedin.com/company/ellaai-ai";

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

type Props = {
  hidePartnerCredit?: boolean;
  showLocation?: boolean;
};

export default function Footer({ hidePartnerCredit = false, showLocation = false }: Props) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white border-t border-[#E5E5EA] py-10 px-5 md:px-[4.5rem]">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start">

        <div className="flex flex-col gap-3">
          <img className="w-[7.5rem] md:w-36" src={ellaLogo} alt="Ella.AI Logo" />
          <p className="font-OneZero-Apparat-Book text-xs text-midGrey max-w-[200px] leading-snug">
            The AI banker for financial institutions.
          </p>
          {showLocation && (
            <p className="font-OneZero-Apparat-Book text-xs text-midGrey">Tel Aviv, Israel</p>
          )}
          {!hidePartnerCredit && (
            <p className="font-OneZero-Apparat-Book text-xs text-midGrey">Design partner: ONE ZERO Bank</p>
          )}
        </div>

        <nav className="flex flex-col gap-3 md:gap-2">
          <p className="font-OneZero-Apparat-Medium text-xs text-darkGrey uppercase tracking-wider mb-1">
            Navigation
          </p>
          {[
            { label: 'How it Works', id: 'how-it-works' },
            { label: 'Impact', id: 'impact' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-OneZero-Apparat-Book text-sm text-midGrey hover:text-darkGrey transition-colors text-left"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="font-OneZero-Apparat-Medium text-xs text-darkGrey uppercase tracking-wider mb-1">
            Get in Touch
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-OneZero-Apparat-Book text-sm text-midGrey hover:text-darkGrey transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-OneZero-Apparat-Book text-sm text-midGrey hover:text-blue transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#E5E5EA] flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <p className="font-OneZero-Apparat-Book text-xs text-midGrey">
          © {new Date().getFullYear()} Ella.AI. All rights reserved.
        </p>
        <a
          href="/privacy-policy"
          className="font-OneZero-Apparat-Book text-xs text-midGrey hover:text-darkGrey transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
