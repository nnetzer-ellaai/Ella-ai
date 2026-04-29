import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2KPIs() {
  const c = v2Copy.kpis;
  return (
    <V2Section eyebrow={c.eyebrow} bg="grey">
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[40px] md:mb-[64px] max-w-[900px]">
        {c.headline}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] md:gap-x-[90px] gap-y-[44px] md:gap-y-[64px]">
        {c.stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-[12px] text-left">
            <h3 className="font-OneZero-Apparat-Book text-[64px] md:text-[88px] leading-[90%] text-darkGrey">
              {s.value}
            </h3>
            <p className="font-OneZero-Apparat-Medium text-[18px] md:text-[26px] leading-[120%] text-darkGrey">
              {s.label}
            </p>
            <p className="font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[150%] text-darkGrey/75 max-w-[420px]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </V2Section>
  );
}
