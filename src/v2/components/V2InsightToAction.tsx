import V2Section from './V2Section';
import { v2Copy } from '../copy';

export default function V2InsightToAction() {
  const c = v2Copy.insightToAction;
  return (
    <V2Section eyebrow={c.eyebrow} bg="grey">
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[32px] md:mb-[44px] max-w-[900px]">
        {c.headline}
      </h2>
      <div className="flex flex-col gap-[20px] max-w-[820px]">
        <p className="font-OneZero-Apparat-Book text-[16px] md:text-[22px] leading-[150%] text-darkGrey/85">
          {c.bodyLead}
        </p>
        <p className="font-OneZero-Apparat-Medium text-[20px] md:text-[30px] leading-[140%] text-blue">
          {c.flow}
        </p>
        <p className="font-OneZero-Apparat-Book text-[16px] md:text-[22px] leading-[150%] text-darkGrey/85">
          {c.bodyTail}
        </p>
      </div>
    </V2Section>
  );
}
