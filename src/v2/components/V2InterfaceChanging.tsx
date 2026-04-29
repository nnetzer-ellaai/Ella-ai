import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2InterfaceChanging() {
  const c = v2Copy.interfaceChanging;
  return (
    <V2Section eyebrow={c.eyebrow} bg="grey">
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[36px] md:mb-[52px] max-w-[900px]">
        {c.headline}
      </h2>
      <div className="flex flex-col gap-[18px] md:gap-[24px] max-w-[820px]">
        {c.paragraphs.map((p, i) => (
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
