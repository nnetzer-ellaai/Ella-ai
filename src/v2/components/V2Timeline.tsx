import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Deploy in weeks',
    text: 'Ella connects to your core banking systems, learns your products and policies, and goes live. No heavy integration project. No multi-year roadmap.',
  },
  {
    number: '02',
    title: 'Serve your customers',
    text: 'Ella handles 85% of day-to-day interactions — service, sales, guidance, and execution. Personalised. Instant. Available 24/7.',
  },
  {
    number: '03',
    title: 'Grow with your data',
    text: 'Every interaction teaches Ella more about your customers. Conversion improves. Cost-to-serve drops. The intelligence compounds over time.',
  },
  {
    number: '04',
    title: 'Own the AI interface layer',
    text: 'As banking moves into AI assistants and external agents, Ella keeps your bank in the conversation — with your data, your policy, and your execution rails.',
  },
];

function TimelineItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="TLItem flex flex-row items-start gap-[20px] md:gap-[54px] w-full">
      <div className="TLItem w-[53px] h-[53px] md:w-[75px] md:h-[75px] bg-[#E0DEEC] rounded-full flex-shrink-0 flex items-center justify-center font-OneZero-Apparat-Book text-[22px] md:text-[32px] text-[transparent] border border-transparent z-10">
        {number}
      </div>
      <div className="flex flex-col pt-[10px] md:pt-[14px]">
        <p className="TLItem font-OneZero-Apparat-Book text-[24px] md:text-[38px] leading-[115%] text-[transparent] mb-[10px] md:mb-[14px]">
          {title}
        </p>
        <p className="TLItem font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[155%] text-[transparent] max-w-[560px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function V2Timeline() {
  const main = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate each text/number element to reveal on scroll
      gsap.utils.toArray<HTMLElement>('.TLItem').forEach((el) => {
        gsap.to(el, {
          color: '#3E3E3E',
          borderColor: '#3E3E3E',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: '+=100',
            scrub: true,
          },
        });
      });

      // Animate the vertical line growing downward
      gsap.set(lineRef.current, { height: 0 });
      gsap.to(lineRef.current, {
        height: window.innerWidth >= 768 ? 820 : 700,
        scrollTrigger: {
          trigger: lineRef.current,
          start: 'top 55%',
          end: '+=820',
          scrub: true,
        },
      });
    },
    { scope: main }
  );

  return (
    <section dir="ltr" className="bg-[#E0DEEC] w-full py-[64px] md:py-[110px] px-5 md:px-0">
      <div className="w-full md:w-[90%] max-w-[1280px] mx-auto">
        {/* Eyebrow */}
        <p className="font-OneZero-Apparat-Book text-[12px] md:text-[14px] text-blue tracking-[0.14em] uppercase mb-[14px] md:mb-[18px]">
          How it works
        </p>
        <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[56px] md:mb-[80px] max-w-[800px] text-darkGrey">
          From deployment to the infrastructure of AI banking.
        </h2>

        <div ref={main} className="relative flex flex-col gap-[48px] md:gap-[72px]">
          {/* Animated vertical line */}
          <div
            className="absolute left-[26px] md:left-[37px] top-[53px] md:top-[75px] w-[1px] bg-darkGrey z-0"
            ref={lineRef}
          />

          {steps.map((step) => (
            <TimelineItem key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
