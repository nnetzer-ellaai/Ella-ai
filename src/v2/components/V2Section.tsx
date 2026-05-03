import React from 'react';

type Props = {
  eyebrow?: string;
  bg?: 'white' | 'grey';
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function V2Section({ eyebrow, bg = 'white', children, className = '', id }: Props) {
  const bgClass = bg === 'grey' ? 'bg-[#F7F7F8]' : 'bg-white';
  return (
    <section
      id={id}
      dir="ltr"
      className={`${bgClass} w-full py-[64px] md:py-[110px] px-5 md:px-0 text-darkGrey ${className}`}
    >
      <div className="w-full md:w-[90%] max-w-[1280px] mx-auto">
        {eyebrow && (
          <p className="font-OneZero-Apparat-Book text-[12px] md:text-[14px] text-blue tracking-[0.14em] uppercase mb-[14px] md:mb-[18px]">
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
