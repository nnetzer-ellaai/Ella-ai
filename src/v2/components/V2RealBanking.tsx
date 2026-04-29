import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2RealBanking() {
  const c = v2Copy.realBanking;
  return (
    <V2Section eyebrow={c.eyebrow}>
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[32px] md:mb-[48px] max-w-[900px]">
        {c.headline}
      </h2>
      <div className="flex flex-col gap-[18px] md:gap-[22px] max-w-[820px]">
        {c.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-OneZero-Apparat-Book text-[16px] md:text-[22px] leading-[150%] text-darkGrey/85"
          >
            {p}
          </p>
        ))}
      </div>
      <p className="font-OneZero-Apparat-Medium italic text-[18px] md:text-[26px] leading-[140%] text-blue mt-[36px] md:mt-[52px]">
        {c.pullQuote}
      </p>
    </V2Section>
  );
}
