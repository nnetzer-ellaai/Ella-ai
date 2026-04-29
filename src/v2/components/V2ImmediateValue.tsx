import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2ImmediateValue() {
  const c = v2Copy.immediateValue;
  return (
    <V2Section eyebrow={c.eyebrow}>
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[40px] md:mb-[60px] max-w-[900px]">
        {c.headline}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] md:gap-x-[60px] gap-y-[28px] md:gap-y-[40px]">
        {c.bullets.map((b, i) => (
          <div
            key={i}
            className="border-t border-darkGrey/15 pt-[20px] md:pt-[28px] flex flex-col gap-[10px]"
          >
            <h3 className="font-OneZero-Apparat-Medium text-[20px] md:text-[26px] leading-[120%] text-darkGrey">
              {b.title}
            </h3>
            <p className="font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[150%] text-darkGrey/80 max-w-[460px]">
              {b.body}
            </p>
          </div>
        ))}
      </div>
      <p className="font-OneZero-Apparat-Medium italic text-[18px] md:text-[24px] leading-[140%] text-blue mt-[44px] md:mt-[64px]">
        {c.closer}
      </p>
    </V2Section>
  );
}
