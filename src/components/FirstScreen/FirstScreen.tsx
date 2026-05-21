import { MIN_DESKTOP_WIDTH } from '../../constants/constants';
import ellaMob from '../../assets/ella_mobile.mp4';
import ellaDesk from '../../assets/ella_desktop.mp4';

type Props = {
  onBookDemoClick: () => void;
  onContactClick: () => void;
};

export default function FirstScreen({ onBookDemoClick, onContactClick }: Props) {
  return (
    <div
      id="hero"
      className="w-full h-[573px] flex flex-col md:h-[661px] md:relative"
    >
      <video
        className="absolute object-cover h-[inherit] z-[-1] w-full md:h-[inherit]"
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
      >
        <source className="md:hidden" src={ellaMob} type="video/mp4" />
        <source className="hidden md:block" src={ellaDesk} type="video/mp4" />
      </video>

      <div className="max-w-[100vw] mt-[120px] md:mt-[170px] text-black">
        <div className="flex flex-col text-center gap-[15px] md:gap-[0]">
          <p className="font-OneZero-Apparat-Book text-[12px] md:text-[16px] text-blue tracking-wide uppercase">
            Ella.AI for Financial Institutions
          </p>
          <h1 className="font-OneZero-Apparat-Light text-[#3E3E3E] leading-[73%] text-[56px] md:text-[84px] md:leading-[90px] md:my-[unset] md:mb-[29px]">
            The World's First AI Banker for Banks
          </h1>
          <div className="flex flex-col items-center gap-[20px]">
            <p
              dir="ltr"
              className="font-OneZero-Apparat-Book dir-ltr text-[14px] md:text-[20px] leading-[22px] md:leading-[150%] text-[#3E3E3E] max-w-2xl"
            >
              Ella helps banks deliver proactive, personalized, conversational banking at scale - resolving customer needs, improving engagement, and driving activation.
            </p>
            <p className="font-OneZero-Apparat-Book text-[12px] md:text-[14px] text-midGrey">
              Designed and proven with ONE ZERO Bank
            </p>
            <div className="flex gap-3 mt-2">
              <button
                onClick={onBookDemoClick}
                className="bg-blue text-white rounded-full py-3 px-7 font-OneZero-Apparat-Book text-sm hover:bg-blue/90 transition-colors shadow-sm"
              >
                Book a Demo
              </button>
              <button
                onClick={onContactClick}
                className="border border-[#3E3E3E] text-[#3E3E3E] bg-white/60 backdrop-blur-sm rounded-full py-3 px-7 font-OneZero-Apparat-Book text-sm hover:bg-white/80 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
