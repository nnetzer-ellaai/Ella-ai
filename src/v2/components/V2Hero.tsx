import ellaLogo from '../../assets/ella-logo.png';
import ellaMob from '../../assets/ella_mobile.mp4';
import ellaDesk from '../../assets/ella_desktop.mp4';
import { v2Copy } from '../copy';

type Props = {
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
};

export default function V2Hero({ onPrimaryCta, onSecondaryCta }: Props) {
  const c = v2Copy.hero;

  return (
    <div
      id="v2-hero"
      className="w-full min-h-[640px] md:min-h-[760px] flex flex-col md:relative overflow-hidden"
    >
      <img
        className="object-contain self-start w-[111.78514099121094px] h-[21px] mt-[26px] ml-[17px] md:ml-[59px] md:mt-[50.18px] md:w-[148.99073791503906px] md:h-[28.67229652404785px]"
        src={ellaLogo}
        alt="Ella.AI Logo"
      />
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

      <div className="max-w-[100vw] mt-[80px] md:mt-[90px] text-black px-5 md:px-0">
        <div className="flex flex-col text-center gap-[18px] md:gap-[12px]">
          {/* Kicker */}
          <p className="font-OneZero-Apparat-Bold text-[11px] md:text-[14px] text-blue tracking-[0.18em] uppercase">
            {v2Copy.kicker}
          </p>

          {/* Proof strip */}
          <p className="font-OneZero-Apparat-Book text-[12px] md:text-[15px] text-darkGrey/80 max-w-[640px] md:max-w-[unset] mx-auto leading-[140%]">
            {c.proofStrip}
          </p>

          {/* Eyebrow */}
          <p className="font-OneZero-Apparat-Book text-[12px] md:text-[16px] text-blue tracking-wide uppercase mt-[10px] md:mt-[20px]">
            {c.eyebrow}
          </p>

          {/* H1 */}
          <h1 className="font-OneZero-Apparat-Light text-[#3E3E3E] leading-[80%] text-[64px] md:text-[96px] md:leading-[100px] md:my-[unset] md:mb-[10px]">
            {c.title}
          </h1>

          {/* Two-line promise */}
          <div className="flex flex-col gap-[2px] md:gap-[4px] mt-[6px] md:mt-[6px]">
            <p
              dir="ltr"
              className="font-OneZero-Apparat-Medium text-[18px] md:text-[28px] leading-[130%] text-[#3E3E3E]"
            >
              {c.subtitleLine1}
            </p>
            <p
              dir="ltr"
              className="font-OneZero-Apparat-Medium text-[18px] md:text-[28px] leading-[130%] text-[#3E3E3E]"
            >
              {c.subtitleLine2}
            </p>
          </div>

          {/* Body */}
          <p
            dir="ltr"
            className="font-OneZero-Apparat-Book text-[14px] md:text-[18px] leading-[150%] text-[#3E3E3E] max-w-2xl mx-auto mt-[14px] md:mt-[18px] px-2 md:px-0"
          >
            {c.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px] items-center justify-center mt-[24px] md:mt-[28px]">
            <button
              onClick={onPrimaryCta}
              className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-white bg-[#3E3E3E] rounded-3xl py-[12px] px-7 hover:bg-darkGrey/80 transition-colors"
            >
              {c.primaryCta}
            </button>
            <button
              onClick={onSecondaryCta}
              className="font-OneZero-Apparat-Book text-[15px] md:text-[16px] text-darkGrey border border-darkGrey/40 rounded-3xl py-[12px] px-7 hover:bg-darkGrey/5 transition-colors"
            >
              {c.secondaryCta} →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
