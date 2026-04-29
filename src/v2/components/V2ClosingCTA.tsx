import { v2Copy } from '../copy';

type Props = {
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
};

export default function V2ClosingCTA({ onPrimaryCta, onSecondaryCta }: Props) {
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
        <div className="flex flex-col md:flex-row gap-[14px] md:gap-[20px] items-center justify-center mt-[40px] md:mt-[56px]">
          <button
            onClick={onPrimaryCta}
            className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-darkGrey bg-white rounded-3xl py-[14px] px-8 hover:bg-white/90 transition-colors"
          >
            {c.primaryCta}
          </button>
          <button
            onClick={onSecondaryCta}
            className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-white border border-white/40 rounded-3xl py-[14px] px-8 hover:bg-white/10 transition-colors"
          >
            {c.secondaryCta} →
          </button>
        </div>
      </div>
    </section>
  );
}
