import React from "react";
import Dialog from "../Ui/Dialog";
import ellaLogo from "../../assets/ella-logo.png";

type Props = {
  open?: boolean;
  onClose: () => void;
  onContactClick?: () => void;
};

export default function QrDialog({ open, onClose, onContactClick }: Props) {
  const handleBook = () => {
    onClose();
    onContactClick?.();
  };

  return (
    <Dialog open={open} onClose={onClose} className="w-fit h-fit items-center justify-center">
      <div className="flex flex-col items-center px-8 py-10 md:px-16 md:py-12 gap-6 max-w-md text-center">
        <img src={ellaLogo} alt="Ella.AI" className="h-6 w-auto" />
        <div className="flex flex-col gap-2">
          <h2 className="font-OneZero-Apparat-Book text-3xl md:text-4xl text-darkGrey" dir="ltr">
            See Ella in Action
          </h2>
          <p className="font-OneZero-Apparat-Book text-sm text-midGrey leading-relaxed">
            Schedule a 30-minute demo with our team. We'll walk you through Ella's capabilities, show you real interactions from ONE ZERO Bank, and discuss how Ella fits your institution.
          </p>
        </div>
        <ul className="text-left w-full flex flex-col gap-2">
          {[
            'Live product walkthrough',
            'Real banking use cases and metrics',
            'Integration and deployment overview',
            'Q&A with our team',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 font-OneZero-Apparat-Book text-sm text-darkGrey">
              <svg className="w-4 h-4 mt-0.5 text-blue flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={handleBook}
          className="w-full bg-blue text-white rounded-full py-3 font-OneZero-Apparat-Book text-sm hover:bg-blue/90 transition-colors"
        >
          Book a Demo
        </button>
      </div>
    </Dialog>
  );
}
