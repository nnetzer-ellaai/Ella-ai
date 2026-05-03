import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from '../components/Form/Form';
import FormImage from '../components/Form/FormImage';
import FormError from '../components/Form/FormError';
import Footer from '../components/Footer/Footer';
import FloatingCTA from '../components/Ui/FloatingCTA';
import StickyPopup from '../components/Ui/StickyPopup';
import { openCalendly } from '../utils/calendly';

import V2Hero from './components/V2Hero';
import V2Typewriter from './components/V2Typewriter';
import V2BuiltRunning from './components/V2BuiltRunning';
import V2KPIs from './components/V2KPIs';
import V2DemoSlides from './components/V2DemoSlides';
import V2VideoDemos from './components/V2VideoDemos';
import V2ImmediateValue from './components/V2ImmediateValue';
import V2InterfaceChanging from './components/V2InterfaceChanging';
import V2FutureProof from './components/V2FutureProof';
import V2InsightToAction from './components/V2InsightToAction';
import V2RealBanking from './components/V2RealBanking';
import V2FinancialBrain from './components/V2FinancialBrain';
import V2OpenControlled from './components/V2OpenControlled';
import V2NoHeavyLifting from './components/V2NoHeavyLifting';
import V2ClosingCTA from './components/V2ClosingCTA';
import V2Nav from './components/V2Nav';
import V2Timeline from './components/V2Timeline';
import V2ImpactCards from './components/V2ImpactCards';
import V2FAQ from './components/V2FAQ';
import { v2Copy } from './copy';

export default function V2App() {
  const [error, setError] = useState(false);

  if (error) return <FormError />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": v2Copy.faq.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Ella — The AI Banker for Banks | Stop Piloting. Start Delivering.</title>
        <meta name="description" content="Ella is a white-label AI banking platform handling 85% of daily customer interactions in licensed banks since 2022. Production infrastructure, not a prototype. Deployed in months." />
        <meta name="keywords" content="AI banking platform, AI banker, white-label AI banking, AI for banks, banking AI platform, conversational banking AI, AI banking infrastructure, generative AI banking" />
        <link rel="canonical" href="https://www.ellaai.ai/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ellaai.ai/" />
        <meta property="og:title" content="Ella — The AI Banker for Banks | Stop Piloting. Start Delivering." />
        <meta property="og:description" content="Ella handles 85% of daily banking interactions. Production-proven in a licensed bank for 2+ years. White-label AI banking, live in months." />
        <meta property="og:image" content="https://www.ellaai.ai/og-image.png" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ella — The AI Banker for Banks" />
        <meta name="twitter:description" content="Ella handles 85% of daily banking interactions. Production-proven. White-label AI banking, live in months." />
        <meta name="twitter:image" content="https://www.ellaai.ai/og-image.png" />
        {/* GEO */}
        <meta name="geo.region" content="IL" />
        <meta name="geo.placename" content="Israel" />
        <meta name="geo.position" content="32.0853;34.7818" />
        <meta name="ICBM" content="32.0853, 34.7818" />
        {/* Structured data: SoftwareApplication */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Ella",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "url": "https://www.ellaai.ai/",
          "description": "A white-label AI banking platform handling 85% of daily customer interactions. Production-proven in a licensed bank since 2022 with 10M+ real customer interactions.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "provider": {
            "@type": "Organization",
            "name": "Ella.AI",
            "url": "https://www.ellaai.ai",
            "email": "info@ellaai.ai",
          },
        })}</script>
        {/* Structured data: FAQPage */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        {/* Structured data: Organization */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ella.AI",
          "url": "https://www.ellaai.ai",
          "email": "info@ellaai.ai",
          "description": "Ella.AI builds white-label AI banking platforms for licensed banks. Ella automates 85% of daily banking interactions in production environments.",
          "foundingDate": "2022",
          "areaServed": "Worldwide",
          "knowsAbout": ["AI banking", "white-label banking AI", "conversational banking", "AI financial services"],
        })}</script>
      </Helmet>
      <V2Nav />
      <V2Hero onPrimaryCta={openCalendly} />
      <V2Typewriter />
      <V2BuiltRunning />
      <V2KPIs />
      <V2ImpactCards />
      <V2Timeline />
      <V2VideoDemos />
      <V2DemoSlides />
      <hr className="border-b w-[90%] mx-auto" />
      <V2ImmediateValue />
      <V2InterfaceChanging />
      <V2FutureProof />
      <V2InsightToAction />
      <V2RealBanking />
      <V2FinancialBrain />
      <V2OpenControlled />
      <V2NoHeavyLifting />
      <V2FAQ />
      <V2ClosingCTA onPrimaryCta={openCalendly} />

      <div
        id="v2-lead-form"
        className="flex flex-col-reverse md:flex-row w-full md:h-[754px] md:w-full bg-[#E0DEEC]"
      >
        <FormImage />
        <Form setError={setError} />
      </div>

      <Footer hidePartnerCredit />

      <FloatingCTA onContactClick={openCalendly} ctaLabel="Book a demo" />
      <StickyPopup
        onContactClick={openCalendly}
        onDismiss={() => {}}
        ctaLabel="Book a demo"
      />
    </div>
  );
}
