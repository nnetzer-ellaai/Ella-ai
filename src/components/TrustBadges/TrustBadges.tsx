const badges = [
  {
    label: 'SOC 2 Type II',
    sub: 'Security and availability independently audited',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: 'GDPR Compliant',
    sub: 'Data handled to the highest EU privacy standards',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: 'Bank-grade Security',
    sub: 'Built and deployed inside a licensed regulated bank',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: 'Live Since 2023',
    sub: 'Millions of real customer interactions in production',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 px-5 md:px-[4.5rem]">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">

        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3">
          <p className="font-OneZero-Apparat-Book text-xs text-white/40 uppercase tracking-widest">
            Security & Compliance
          </p>
          <h2 className="font-OneZero-Apparat-Light text-white text-[32px] md:text-[48px] leading-tight">
            Built for regulated banking
          </h2>
          <p className="font-OneZero-Apparat-Book text-white/50 text-sm md:text-base max-w-xl leading-relaxed">
            Ella was designed from day one inside a licensed bank. Security, compliance, and data privacy are not add-ons - they are core to the architecture.
          </p>
        </div>

        {/* Badge cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col gap-3 p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors"
            >
              <div className="text-white/60">
                {badge.icon}
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-OneZero-Apparat-Medium text-white text-sm md:text-base leading-tight">
                  {badge.label}
                </p>
                <p className="font-OneZero-Apparat-Book text-white/40 text-xs leading-snug">
                  {badge.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
