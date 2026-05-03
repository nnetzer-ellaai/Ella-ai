import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Form from '../components/Form/Form';
import FormImage from '../components/Form/FormImage';
import FormError from '../components/Form/FormError';
import Footer from '../components/Footer/Footer';
import ContactModal from '../components/Form/ContactModal';
import FloatingCTA from '../components/Ui/FloatingCTA';
import StickyPopup from '../components/Ui/StickyPopup';

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

export default function V2App() {
  const [error, setError] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPopupDismissed, setIsPopupDismissed] = useState(false);

  if (error) return <FormError />;

  const openContact = () => setIsContactModalOpen(true);

  return (
    <div>
      <Helmet>
        <title>Ella — The AI Banker for Banks | Stop Piloting. Start Delivering.</title>
        <meta name="description" content="Ella is a production-grade AI banker handling 85% of daily customer interactions. Live in a licensed bank for 2+ years. White-label AI banking infrastructure, deployed in months." />
        <meta name="keywords" content="AI banker, generative AI banking, AI for banks, white-label AI banking, banking AI platform, conversational banking AI, AI banking infrastructure" />
        <link rel="canonical" href="https://www.ellaai.ai/v2" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ellaai.ai/v2" />
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
          "url": "https://www.ellaai.ai/v2",
          "description": "Generative AI banker handling 85% of daily customer interactions. Production-proven in a licensed bank for over 2 years.",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
          "provider": {
            "@type": "Organization",
            "name": "Ella.AI",
            "url": "https://www.ellaai.ai",
            "email": "info@ellaai.ai"
          }
        })}</script>
      </Helmet>
      <V2Hero onPrimaryCta={openContact} />
      <V2Typewriter />
      <V2BuiltRunning />
      <V2KPIs />
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
      <V2ClosingCTA onPrimaryCta={openContact} />

      <div
        id="v2-lead-form"
        className="flex flex-col-reverse md:flex-row w-full md:h-[754px] md:w-full bg-[#E0DEEC]"
      >
        <FormImage />
        <Form setError={setError} />
      </div>

      <Footer hidePartnerCredit />

      {isPopupDismissed && (
        <FloatingCTA
          onContactClick={openContact}
          isModalOpen={isContactModalOpen}
        />
      )}
      <StickyPopup
        onContactClick={openContact}
        isModalOpen={isContactModalOpen}
        onDismiss={() => setIsPopupDismissed(true)}
      />

      <ContactModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
