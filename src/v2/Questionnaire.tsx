import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ellaLogo from '../assets/ella-logo.png';
import { openCalendly } from '../utils/calendly';

const WEB3FORMS_KEY = 'be7811f2-035e-4d36-ac87-7af1f74e045d';

type CheckboxGroupProps = {
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
  max?: number;
};

function CheckboxGroup({ options, selected, onChange, max }: CheckboxGroupProps) {
  const toggle = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter((v) => v !== opt));
    } else {
      if (max && selected.length >= max) return;
      onChange([...selected, opt]);
    }
  };
  return (
    <div className="flex flex-col gap-3 mt-4">
      {options.map((opt) => {
        const checked = selected.includes(opt);
        const disabled = !checked && !!max && selected.length >= max;
        return (
          <label
            key={opt}
            className={`flex items-start gap-3 cursor-pointer group ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
          >
            <span
              className={`mt-[2px] w-5 h-5 shrink-0 rounded border transition-colors flex items-center justify-center ${
                checked
                  ? 'bg-[#2D68F3] border-[#2D68F3]'
                  : 'border-[#CBCBCB] group-hover:border-[#2D68F3]'
              }`}
              onClick={() => !disabled && toggle(opt)}
            >
              {checked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span
              className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-[#3E3E3E] leading-snug select-none"
              onClick={() => !disabled && toggle(opt)}
            >
              {opt}
            </span>
          </label>
        );
      })}
    </div>
  );
}

type RadioGroupProps = {
  options: string[];
  selected: string;
  onChange: (val: string) => void;
};

function RadioGroup({ options, selected, onChange }: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {options.map((opt) => {
        const checked = selected === opt;
        return (
          <label key={opt} className="flex items-start gap-3 cursor-pointer group">
            <span
              className={`mt-[2px] w-5 h-5 shrink-0 rounded-full border transition-colors flex items-center justify-center ${
                checked ? 'border-[#2D68F3]' : 'border-[#CBCBCB] group-hover:border-[#2D68F3]'
              }`}
              onClick={() => onChange(opt)}
            >
              {checked && <span className="w-2.5 h-2.5 rounded-full bg-[#2D68F3]" />}
            </span>
            <span
              className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-[#3E3E3E] leading-snug select-none"
              onClick={() => onChange(opt)}
            >
              {opt}
            </span>
          </label>
        );
      })}
    </div>
  );
}

type QuestionCardProps = {
  number: number;
  question: string;
  hint?: string;
  children: React.ReactNode;
};

function QuestionCard({ number, question, hint, children }: QuestionCardProps) {
  return (
    <div className="border border-[#E5E7EB] rounded-2xl p-6 md:p-8 bg-white">
      <p className="font-OneZero-Apparat-Book text-[12px] text-[#2D68F3] tracking-widest uppercase mb-2">
        {String(number).padStart(2, '0')}
      </p>
      <h3 className="font-OneZero-Apparat-Medium text-[17px] md:text-[19px] text-[#0A0A0A] leading-snug">
        {question}
      </h3>
      {hint && (
        <p className="font-OneZero-Apparat-Book text-[13px] text-[#9CA3AF] mt-1">{hint}</p>
      )}
      {children}
    </div>
  );
}

export default function Questionnaire() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  const [q1, setQ1] = useState<string[]>([]);
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState<string[]>([]);
  const [q5, setQ5] = useState<string[]>([]);
  const [q6, setQ6] = useState('');
  const [q7, setQ7] = useState('');
  const [q8, setQ8] = useState<string[]>([]);
  const [q9, setQ9] = useState('');
  const [q10, setQ10] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | false>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);

    const answers = [
      `Name: ${name || '(not provided)'}`,
      `Company: ${company || '(not provided)'}`,
      `Email: ${email || '(not provided)'}`,
      '',
      `1. Business impact priority:\n${q1.length ? q1.map((v) => `  • ${v}`).join('\n') : '  (skipped)'}`,
      `2. Daily inbound tickets / calls to handle: ${q2 || '(skipped)'}`,
      `3. Customer-facing agents / bankers: ${q3 || '(skipped)'}`,
      `4. Highest inquiry channels:\n${q4.length ? q4.map((v) => `  • ${v}`).join('\n') : '  (skipped)'}`,
      `5. Hardest journeys to scale:\n${q5.length ? q5.map((v) => `  • ${v}`).join('\n') : '  (skipped)'}`,
      `6. % customers with personalized guidance: ${q6 || '(skipped)'}`,
      `7. First AI priority: ${q7 || '(skipped)'}`,
      `8. Available customer data:\n${q8.length ? q8.map((v) => `  • ${v}`).join('\n') : '  (skipped)'}`,
      `9. Biggest challenge:\n  ${q9 || '(skipped)'}`,
      `10. Expected business outcome:\n  ${q10 || '(skipped)'}`,
    ].join('\n\n');

    const payload = {
      access_key: WEB3FORMS_KEY,
      name: name || 'Anonymous',
      email: email || 'noreply@ellaai.ai',
      company,
      message: answers,
      subject: `Pre-Meeting Questionnaire — ${company || 'Unknown company'}`,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body: new URLSearchParams(payload as Record<string, string>).toString(),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('Web3Forms error:', data);
        setSubmitError(data.message || 'Unknown error');
      }
    } catch (err) {
      console.error('Submit failed:', err);
      setSubmitError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    'font-OneZero-Apparat-Book w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[15px] text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2D68F3] transition-colors';

  return (
    <>
      <Helmet>
        <title>Pre-Meeting Questionnaire — Ella.AI</title>
        <meta name="description" content="Help us understand your needs before our meeting." />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="max-w-[760px] mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            <img src={ellaLogo} alt="Ella.AI" className="h-[20px] w-auto" />
          </a>
          <a
            href="/"
            className="font-OneZero-Apparat-Book text-[13px] text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
          >
            ← Back to site
          </a>
        </div>
      </nav>

      <main className="min-h-screen bg-[#F9FAFB] pt-24 pb-20 px-5">
        <div className="max-w-[760px] mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-14 h-14 rounded-full bg-[#2D68F3]/10 flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12L9.5 16.5L19 7" stroke="#2D68F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 className="font-OneZero-Apparat-Medium text-[28px] md:text-[36px] text-[#0A0A0A] mb-3">
                {name ? `Thank you, ${name.split(' ')[0]}` : 'Thank you'}
              </h1>
              <p className="font-OneZero-Apparat-Book text-[16px] text-[#6B6B6B] max-w-[420px] mx-auto mb-10">
                Your responses are on their way. We'll review them before our meeting and come prepared with
                relevant examples and benchmarks.
              </p>
              <button
                onClick={openCalendly}
                className="font-OneZero-Apparat-Book text-[15px] bg-[#0A0A0A] text-white rounded-3xl py-3 px-8 hover:bg-[#0A0A0A]/80 transition-colors"
              >
                Book a demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot — bots fill this, real users don't */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {/* Header */}
              <div className="mb-10">
                <p className="font-OneZero-Apparat-Book text-[12px] text-[#2D68F3] tracking-widest uppercase mb-3">
                  Ella.AI
                </p>
                <h1 className="font-OneZero-Apparat-Light text-[32px] md:text-[44px] text-[#0A0A0A] leading-tight mb-3">
                  Pre-Meeting Questionnaire
                </h1>
                <p className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-[#6B6B6B] max-w-[520px]">
                  A few quick questions to help us tailor our conversation to what matters most for your
                  organization. All questions are optional — answer as many as you'd like.
                </p>
              </div>

              {/* Contact info */}
              <div className="border border-[#E5E7EB] rounded-2xl p-6 md:p-8 bg-white mb-5">
                <p className="font-OneZero-Apparat-Medium text-[14px] text-[#0A0A0A] mb-5 uppercase tracking-wide">
                  Your details
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputBase}
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={inputBase}
                  />
                  <div className="md:col-span-2">
                    <input
                      type="email"
                      placeholder="Work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputBase}
                    />
                  </div>
                </div>
              </div>

              {/* Questions */}
              <div className="flex flex-col gap-5">
                <QuestionCard number={1} question="What would create the biggest business impact for your organization in the next 12 months?">
                  <CheckboxGroup
                    options={[
                      'Reduce service and operational costs',
                      'Increase customer engagement and digital interactions',
                      'Grow AUM and investment activity',
                      'Increase product sales and conversion rates',
                      'Improve customer satisfaction (CSAT/NPS)',
                      'Increase advisor / banker productivity',
                    ]}
                    selected={q1}
                    onChange={setQ1}
                  />
                </QuestionCard>

                <QuestionCard
                  number={2}
                  question="Approximately how many inbound customer tickets or calls does your team handle per day?"
                >
                  <RadioGroup
                    options={['Less than 100', '100–500', '500–2,000', '2,000–10,000', 'More than 10,000']}
                    selected={q2}
                    onChange={setQ2}
                  />
                </QuestionCard>

                <QuestionCard
                  number={3}
                  question="Approximately how many customer-facing agents, advisors, or bankers do you have?"
                >
                  <RadioGroup
                    options={['Fewer than 50', '50–200', '200–1,000', '1,000–5,000', 'More than 5,000']}
                    selected={q3}
                    onChange={setQ3}
                  />
                </QuestionCard>

                <QuestionCard number={4} question="Which channels generate the highest customer inquiry volume today?">
                  <CheckboxGroup
                    options={[
                      'Phone calls',
                      'Email',
                      'Mobile app chat / messaging',
                      'Relationship managers / advisors',
                      'Branches',
                    ]}
                    selected={q4}
                    onChange={setQ4}
                  />
                </QuestionCard>

                <QuestionCard number={5} question="Which customer journeys are hardest to scale today?" hint="Select up to 3">
                  <CheckboxGroup
                    options={[
                      'Customer service',
                      'Wealth management',
                      'Financial guidance',
                      'Customer onboarding',
                      'Product recommendations',
                      'Relationship management',
                      'Customer retention',
                    ]}
                    selected={q5}
                    onChange={setQ5}
                    max={3}
                  />
                </QuestionCard>

                <QuestionCard number={6} question="What percentage of customers currently receive personalized financial or investment guidance?">
                  <RadioGroup
                    options={['Less than 5%', '5–20%', '20–50%', 'More than 50%']}
                    selected={q6}
                    onChange={setQ6}
                  />
                </QuestionCard>

                <QuestionCard number={7} question="If AI could help in one area first, where would you start?">
                  <RadioGroup
                    options={[
                      'Customer support automation',
                      'Personalized financial guidance',
                      'Wealth advisory at scale',
                      'Proactive customer engagement',
                      'Sales and product recommendations',
                      'Employee / banker copilot',
                    ]}
                    selected={q7}
                    onChange={setQ7}
                  />
                </QuestionCard>

                <QuestionCard number={8} question="Which customer data could potentially be available to an AI solution?">
                  <CheckboxGroup
                    options={[
                      'Account balances',
                      'Transactions',
                      'Investments',
                      'Loans / mortgages',
                      'CRM / customer profile data',
                      'Not sure yet',
                    ]}
                    selected={q8}
                    onChange={setQ8}
                  />
                </QuestionCard>

                <QuestionCard number={9} question="What is the biggest customer-facing challenge you would like to solve in the next 12 months?">
                  <textarea
                    rows={4}
                    placeholder="Share as much or as little as you'd like…"
                    value={q9}
                    onChange={(e) => setQ9(e.target.value)}
                    className={`${inputBase} mt-4 resize-none`}
                  />
                </QuestionCard>

                <QuestionCard number={10} question="If this initiative is highly successful, what business outcome would you expect to achieve?">
                  <textarea
                    rows={4}
                    placeholder="Share as much or as little as you'd like…"
                    value={q10}
                    onChange={(e) => setQ10(e.target.value)}
                    className={`${inputBase} mt-4 resize-none`}
                  />
                </QuestionCard>
              </div>

              {/* Submit */}
              <div className="mt-8">
                {submitError && (
                  <p className="font-OneZero-Apparat-Book text-[14px] text-red-500 mb-4">
                    Something went wrong — please try again or email us at{' '}
                    <a href="mailto:info@ellaai.ai" className="underline">info@ellaai.ai</a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 font-OneZero-Apparat-Book text-[15px] md:text-[16px] bg-[#0A0A0A] text-white rounded-3xl py-[14px] px-8 hover:bg-[#0A0A0A]/80 transition-colors disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      Sending…
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    </>
                  ) : (
                    'Submit questionnaire'
                  )}
                </button>
                <p className="font-OneZero-Apparat-Book text-[13px] text-[#9CA3AF] mt-3">
                  All questions are optional. Your responses go directly to our team and are kept confidential.
                </p>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
