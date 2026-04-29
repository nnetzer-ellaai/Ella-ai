import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2FinancialBrain() {
  const c = v2Copy.financialBrain;
  return (
    <V2Section eyebrow={c.eyebrow} bg="grey">
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[32px] md:mb-[48px] max-w-[900px]">
        {c.headline}
      </h2>
      <p className="font-OneZero-Apparat-Book text-[16px] md:text-[22px] leading-[150%] text-darkGrey/85 max-w-[820px]">
        {c.body}
      </p>
      <p className="font-OneZero-Apparat-Medium italic text-[18px] md:text-[26px] leading-[140%] text-blue mt-[28px] md:mt-[40px]">
        {c.pullQuote}
      </p>
    </V2Section>
  );
}
