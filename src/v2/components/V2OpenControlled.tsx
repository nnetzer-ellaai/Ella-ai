import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2OpenControlled() {
  const c = v2Copy.openControlled;
  return (
    <V2Section eyebrow={c.eyebrow}>
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[32px] md:mb-[44px] max-w-[900px]">
        {c.headline}
      </h2>
      <p className="font-OneZero-Apparat-Book text-[16px] md:text-[22px] leading-[150%] text-darkGrey/85 max-w-[820px]">
        {c.body}
      </p>
    </V2Section>
  );
}
