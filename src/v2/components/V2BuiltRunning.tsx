import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2BuiltRunning() {
  const c = v2Copy.builtRunning;
  return (
    <V2Section eyebrow={c.eyebrow}>
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[64px] leading-[100%] md:leading-[110%] mb-[28px] md:mb-[40px] max-w-[900px]">
        {c.headline}
      </h2>
      <div className="flex flex-col gap-[18px] md:gap-[22px] max-w-[820px]">
        {c.body.map((p, i) => (
          <p
            key={i}
            className="font-OneZero-Apparat-Book text-[16px] md:text-[22px] leading-[150%] text-darkGrey/85"
          >
            {p}
          </p>
        ))}
      </div>
    </V2Section>
  );
}
