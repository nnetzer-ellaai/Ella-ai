import ellaLogo from '../../assets/ella-logo.png';
import ellaMob from '../../assets/ella_mobile.mp4';
import ellaDesk from '../../assets/ella_desktop.mp4';
import { v2Copy } from '../copy';

type Props = {
  onPrimaryCta: () => void;
};

export default function V2Hero({ onPrimaryCta }: Props) {
  const c = v2Copy.hero;

  return (
    <div
      id="v2-hero"
      className="w-full min-h-[640px] md:min-h-[760px] flex flex-col md:relative overflow-hidden"
    >
      {/* Logo */}
      <img
        className="object-contain self-start w-[111.78514099121094px] h-[21px] mt-[26px] ml-[17px] md:ml-[59px] md:mt-[50.18px] md:w-[148.99073791503906px] md:h-[28.67229652404785px] z-10"
        src={ellaLogo}
        alt="Ella.AI Logo"
      />

      {/* Video background */}
      <video
        className="absolute object-cover h-[inherit] z-[-1] w-full md:h-[inherit]"
        autoPlay
        playsInline
        muted
        loop
        id="v2HeroVideo"
      >
        <source className="md:hidden" src={ellaMob} type="video/mp4" />
        <source className="hidden md:block" src={ellaDesk} type="video/mp4" />
      </video>

      {/* Soft fade at bottom for legibility of proof strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-white/85 via-white/40 to-transparent z-0 pointer-events-none" />

      <div className="max-w-[100vw] mt-[110px] md:mt-[120px] text-black px-5 md:px-0 relative z-[1]">
        <div className="flex flex-col text-center gap-[14px] md:gap-[10px]">
          {/* Kicker */}
          <p className="font-OneZero-Apparat-Bold text-[11px] md:text-[14px] text-blue tracking-[0.18em] uppercase">
            {v2Copy.kicker}
          </p>

          {/* H1 */}
          <h1 className="font-OneZero-Apparat-Light text-[#3E3E3E] leading-[80%] text-[68px] md:text-[112px] md:leading-[100px] mt-[10px] md:mt-[14px]">
            {c.title}
          </h1>

          {/* Two-line promise */}
          <div className="flex flex-col gap-[2px] md:gap-[4px] mt-[10px] md:mt-[14px]">
            <p
              dir="ltr"
              className="font-OneZero-Apparat-Medium text-[18px] md:text-[26px] leading-[130%] text-[#3E3E3E]"
            >
              {c.subtitleLine1}
            </p>
            <p
              dir="ltr"
              className="font-OneZero-Apparat-Book text-[18px] md:text-[26px] leading-[130%] text-darkGrey/70"
            >
              {c.subtitleLine2}
            </p>
          </div>

          {/* Single CTA */}
          <div className="flex justify-center mt-[26px] md:mt-[30px]">
            <button
              onClick={onPrimaryCta}
              className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-white bg-[#3E3E3E] rounded-3xl py-[14px] px-8 hover:bg-darkGrey/80 transition-colors shadow-lg"
            >
              {c.primaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Proof strip pinned at the bottom */}
      <div className="relative z-[1] mt-auto pt-[60px] md:pt-[100px] pb-[24px] md:pb-[36px] px-5 md:px-0">
        <p className="font-OneZero-Apparat-Book text-[13px] md:text-[18px] leading-[150%] text-darkGrey text-center max-w-[760px] md:max-w-[unset] mx-auto">
          {c.proofPre}{' '}
          <span className="font-OneZero-Apparat-Bold text-blue">{c.proofBold}</span>{' '}
          {c.proofPost}
        </p>
      </div>
    </div>
  );
}
