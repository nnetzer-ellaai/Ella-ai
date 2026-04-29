import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2FutureProof() {
  const c = v2Copy.futureProof;
  return (
    <V2Section eyebrow={c.eyebrow}>
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[24px] md:mb-[28px] max-w-[900px]">
        {c.headline}
      </h2>
      <p className="font-OneZero-Apparat-Book text-[16px] md:text-[22px] leading-[150%] text-darkGrey/85 max-w-[820px] mb-[44px] md:mb-[64px]">
        {c.lead}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px]">
        {c.layers.map((l, i) => (
          <div
            key={i}
            className="bg-[#F7F7F8] rounded-[20px] p-[24px] md:p-[36px] flex flex-col gap-[10px] border border-darkGrey/5"
          >
            <h3 className="font-OneZero-Apparat-Medium text-[20px] md:text-[28px] leading-[120%] text-darkGrey">
              {l.title}
            </h3>
            <p className="font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[150%] text-darkGrey/80">
              {l.desc}
            </p>
          </div>
        ))}
      </div>
    </V2Section>
  );
}
