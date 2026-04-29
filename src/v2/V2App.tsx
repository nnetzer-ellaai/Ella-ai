import { useState } from 'react';
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
