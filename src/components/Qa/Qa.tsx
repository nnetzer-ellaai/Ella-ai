import Accordion from './Accordion';

const faqs = [
  {
    q: 'How long does it take to deploy Ella at a bank?',
    a: 'A typical integration takes 6-10 weeks from kickoff to go-live, depending on data access and systems architecture. Ella connects through a secure API layer - no rip-and-replace of existing infrastructure. Our team handles the full implementation alongside yours.',
  },
  {
    q: 'How does Ella connect to our existing systems?',
    a: 'Ella integrates through a structured API and data abstraction layer that connects to your core banking system, CRM, knowledge base, and product catalog. We normalize your data and build the integration schema together. The result is a unified customer context that Ella can reason over in real time.',
  },
  {
    q: 'How does Ella handle compliance and data privacy?',
    a: 'Ella is GDPR compliant and SOC 2 certified. The system was built inside a licensed, regulated bank from day one - compliance is not an add-on, it is core to the architecture. All customer data remains within your controlled infrastructure. We never use your customer data for model training.',
  },
  {
    q: "What happens when Ella can't answer a customer question?",
    a: "Ella is designed to know what she doesn't know. When a question exceeds her confidence threshold, requires regulated advice beyond defined boundaries, or needs human judgment, she escalates to a human banker - with full conversation context already summarized. The customer never has to repeat themselves.",
  },
  {
    q: 'Is Ella available in multiple languages?',
    a: 'Yes. Ella supports multi-language interactions and is designed for multi-market deployment. ONE ZERO Bank operates in Hebrew and English. Language configuration is part of the implementation process and can be adapted to your primary customer markets.',
  },
  {
    q: 'How is accuracy maintained at scale?',
    a: 'Ella operates with a layered control architecture: input validation, policy orchestration, RAG-limited knowledge retrieval, and a final moderation layer before every response is released. We also provide AI Ops tooling for ongoing monitoring, conversation sampling, error tracking, and continuous improvement - so Ella is managed like a top banker, not a static model.',
  },
];

export default function Qa() {
  return (
    <div id="faq" className="flex flex-col px-5 py-[80px] md:px-[4.5rem] md:py-[120px]">
      <h2 className="font-OneZero-Apparat-Medium text-[24px] md:text-[40px] mb-8 md:mb-[2.75rem] text-darkGrey">
        Frequently Asked Questions
      </h2>
      {faqs.map(({ q, a }) => (
        <Accordion key={q} summary={q} details={<p className="text-midGrey leading-relaxed">{a}</p>} />
      ))}
    </div>
  );
}
