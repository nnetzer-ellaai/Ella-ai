import { useEffect, useRef, useState } from 'react';
import V2Section from './V2Section';
import { v2Copy } from '../copy';

// Parses a stat value string into its numeric part, prefix, and suffix
// e.g. "−60%" → { num: 60, prefix: '−', suffix: '%' }
// e.g. "5×"  → { num: 5,  prefix: '',  suffix: '×' }
// e.g. "+15%" → { num: 15, prefix: '+', suffix: '%' }
// e.g. "85%"  → { num: 85, prefix: '',  suffix: '%' }
function parseValue(val: string) {
  const match = val.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
  if (!match) return { num: 0, prefix: '', suffix: val };
  return { num: parseInt(match[2], 10), prefix: match[1], suffix: match[3] };
}

function AnimatedStat({ value }: { value: string }) {
  const { num, prefix, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 40;
          const increment = num / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= num) {
              setCount(num);
              clearInterval(interval);
            } else {
              setCount(Math.round(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num]);

  return (
    <h3
      ref={ref}
      className="font-OneZero-Apparat-Book text-[64px] md:text-[88px] leading-[90%] text-darkGrey tabular-nums"
    >
      {prefix}{count}{suffix}
    </h3>
  );
}

export default function V2KPIs() {
  const c = v2Copy.kpis;
  return (
    <V2Section eyebrow={c.eyebrow} bg="grey">
      <h2 className="font-OneZero-Apparat-Light text-[36px] md:text-[58px] leading-[105%] mb-[12px] md:mb-[20px] max-w-[900px]">
        {c.headline}
      </h2>
      <p className="font-OneZero-Apparat-Book text-[13px] md:text-[15px] tracking-[0.08em] text-blue uppercase mb-[40px] md:mb-[64px]">
        {c.proof}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] md:gap-x-[90px] gap-y-[44px] md:gap-y-[64px]">
        {c.stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-[12px] text-left">
            <AnimatedStat value={s.value} />
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
