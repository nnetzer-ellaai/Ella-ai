import { useState } from 'react';
import { v2Copy } from '../copy';

export default function V2FAQ() {
  const c = v2Copy.faq;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section dir="ltr" className="bg-white w-full py-[64px] md:py-[110px] px-5 md:px-0">
      <div className="w-full md:w-[90%] max-w-[1280px] mx-auto">
        <p className="font-OneZero-Apparat-Book text-[12px] md:text-[14px] text-blue tracking-[0.14em] uppercase mb-[14px] md:mb-[18px]">
          {c.eyebrow}
        </p>
        <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[48px] md:mb-[64px] max-w-[760px] text-darkGrey">
          {c.headline}
        </h2>

        <div className="flex flex-col divide-y divide-grey/40 max-w-[900px]">
          {c.items.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-[22px] md:py-[28px] text-left group"
                aria-expanded={open === i}
              >
                <span className="font-OneZero-Apparat-Medium text-[16px] md:text-[20px] leading-[140%] text-darkGrey group-hover:text-blue transition-colors">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 mt-1 text-darkGrey/50 text-[20px] leading-none transition-transform duration-200 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {open === i && (
                <p className="font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[160%] text-darkGrey/75 pb-[24px] md:pb-[32px] max-w-[820px]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
