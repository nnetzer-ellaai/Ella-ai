import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FirstScreen from './components/FirstScreen/FirstScreen';
import SecondScreen from './components/SecondScreen/SecondScreen';
import ThirdScreen from './components/ThirdScreen/ThirdScreen';
import FourthScreen from './components/FourthScreen/FourthScreen';
import FifthScreen from './components/FifthScreen/FifthScreen';
import SeventScreen from './components/SeventhScreen/SeventScreen';
import Form from './components/Form/Form';
import FormImage from './components/Form/FormImage';
import Footer from './components/Footer/Footer';
import FormError from './components/Form/FormError';
import AfterFourthScreen from './components/AfterFourthScreen/AfterFourthScreen';
import AfterSeventhScreen from './components/AfterSeventhScreen/AfterSeventhScreen';
import TimelineScreen from './components/TimelineScreen/TimelineScreen';
import SixthPart from './components/SixthPart/SixthPart';
import FinancialImpactScreen from './components/FinancialImpactScreen/FinancialImpactScreen';
import ContactModal from './components/Form/ContactModal';
import FloatingCTA from './components/Ui/FloatingCTA';
import StickyPopup from './components/Ui/StickyPopup';
import V2App from './v2/V2App';
import Questionnaire from './v2/Questionnaire';
import NavHeader from './components/NavHeader/NavHeader';
import TrustBadges from './components/TrustBadges/TrustBadges';
import Qa from './components/Qa/Qa';

type ModalVariant = 'contact' | 'demo';

function HomePage() {
  const [error, setError] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<ModalVariant>('contact');
  const [isPopupDismissed, setIsPopupDismissed] = useState(false);

  const openContact = () => { setModalVariant('contact'); setIsContactModalOpen(true); };
  const openDemo = () => { setModalVariant('demo'); setIsContactModalOpen(true); };

  if (error) return <FormError />;

  return (
    <div>
      <NavHeader onBookDemoClick={openDemo} />

      <FirstScreen onBookDemoClick={openDemo} onContactClick={openContact} />

      <SeventScreen />

      <section id="impact">
        <AfterSeventhScreen />
      </section>

      <SixthPart />
      <hr className="border-b w-[90%] mx-auto" />
      <SecondScreen />
      <ThirdScreen />

      <section id="how-it-works">
        <FourthScreen />
        <TimelineScreen />
        <AfterFourthScreen />
      </section>

      <FifthScreen />

      <FinancialImpactScreen />

      <TrustBadges />

      <Qa />

      <section id="contact">
        <div className="flex flex-col-reverse md:flex-row w-full md:h-[754px] md:w-full bg-[#E0DEEC]">
          <FormImage />
          <Form setError={setError} />
        </div>
      </section>

      <Footer />

      {isPopupDismissed && (
        <FloatingCTA
          onContactClick={openContact}
          onBookDemoClick={openDemo}
          isModalOpen={isContactModalOpen}
        />
      )}
      <StickyPopup
        onContactClick={openContact}
        onBookDemoClick={openDemo}
        isModalOpen={isContactModalOpen}
        onDismiss={() => setIsPopupDismissed(true)}
      />
      <ContactModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        variant={modalVariant}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V2App />} />
        <Route path="/v1" element={<HomePage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
