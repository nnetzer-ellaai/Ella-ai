import errorDesktopHeroBg from "../../assets/form-error/error-desktop-hero-bg.png";
import ellaLogo from "../../assets/ella-logo.png";
import { CONTACT_EMAIL } from "../../constants/constants";
import { MIN_DESKTOP_WIDTH } from "../../constants/constants";

export default function FormError() {
  const isDesktop = window.screen.width >= MIN_DESKTOP_WIDTH;

  const text = (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-white text-2xl md:text-3xl font-OneZero-Apparat-Book leading-snug">
        Something went wrong.
      </h2>
      <p className="text-white/80 font-OneZero-Apparat-Book text-base md:text-lg">
        Please try again or reach us directly at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-white">
          {CONTACT_EMAIL}
        </a>
      </p>
    </div>
  );

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen">
      <img
        className="absolute w-full h-full object-cover z-0"
        src={errorDesktopHeroBg}
        alt="Error background"
      />
      <img
        className="absolute top-0 left-0 p-6 md:p-8 w-[130px] md:w-[160px] z-10"
        src={ellaLogo}
        alt="Ella.AI Logo"
      />
      <div className="relative z-10 px-5">{text}</div>
    </div>
  );
}
