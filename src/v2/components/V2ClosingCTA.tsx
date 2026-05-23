import { v2Copy } from '../copy';

const LINKEDIN_URL = 'https://il.linkedin.com/company/ellaai-ai';

type Props = {
  onPrimaryCta: () => void;
};

export default function V2ClosingCTA({ onPrimaryCta }: Props) {
  const c = v2Copy.closing;
  return (
    <section
      dir="ltr"
      className="w-full bg-darkGrey text-white py-[80px] md:py-[140px] px-5 md:px-0"
    >
      <div className="w-full md:w-[90%] max-w-[1200px] mx-auto text-center">
        <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[64px] leading-[110%] max-w-[920px] mx-auto">
          {c.headlineLine1}
          <br />
          {c.headlineLine2}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-[40px] md:mt-[56px]">
          <button
            onClick={onPrimaryCta}
            className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-darkGrey bg-white rounded-3xl py-[14px] px-8 hover:bg-white/90 transition-colors"
          >
            {c.primaryCta}
          </button>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-white/70 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            Follow us on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
