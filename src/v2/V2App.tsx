import { useState } from 'react';
import Form from '../components/Form/Form';
import FormImage from '../components/Form/FormImage';
import FormError from '../components/Form/FormError';
import Footer from '../components/Footer/Footer';
import ContactModal from '../components/Form/ContactModal';

import V2Hero from './components/V2Hero';
import V2BuiltRunning from './components/V2BuiltRunning';
import V2KPIs from './components/V2KPIs';
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

  if (error) return <FormError />;

  const openContact = () => setIsContactModalOpen(true);
  const scrollToForm = () => {
    const el = document.getElementById('v2-lead-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <V2Hero onPrimaryCta={openContact} onSecondaryCta={scrollToForm} />
      <V2BuiltRunning />
      <V2KPIs />
      <V2ImmediateValue />
      <V2InterfaceChanging />
      <V2FutureProof />
      <V2InsightToAction />
      <V2RealBanking />
      <V2FinancialBrain />
      <V2OpenControlled />
      <V2NoHeavyLifting />
      <V2ClosingCTA onPrimaryCta={scrollToForm} onSecondaryCta={openContact} />

      <div
        id="v2-lead-form"
        className="flex flex-col-reverse md:flex-row w-full md:h-[754px] md:w-full bg-[#E0DEEC]"
      >
        <FormImage />
        <Form setError={setError} />
      </div>

      <Footer hidePartnerCredit />

      <ContactModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
