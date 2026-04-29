import { v2Copy } from '../copy';

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
        <div className="flex justify-center mt-[40px] md:mt-[56px]">
          <button
            onClick={onPrimaryCta}
            className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-darkGrey bg-white rounded-3xl py-[14px] px-8 hover:bg-white/90 transition-colors"
          >
            {c.primaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
