import ellaLogo from '../../assets/ella-logo.png';
import IconButton from '../Ui/IconButton';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import header from '../../assets/w_image header.png';
import { useState } from 'react';
import { MIN_DESKTOP_WIDTH } from '../../constants/constants';
import QrDialog from '../QrDialog/QrDialog';
import starsLtr from '../../assets/icons/stars-ltr.png';
import starsRtl from '../../assets/icons/stars-rtl.png';
import heroMobile from '../../assets/bg-mobile.png';
import heroDesktop from '../../assets/hero-desktop.png';
import bottom_logo from '../../assets/ic.svg';
import bgVideo from '../../assets/ELLA_SCALED.mp4'
import ellaMob from '../../assets/ella_mobile.mp4'
import ellaDesk from '../../assets/ella_desktop.mp4'

type Props = {};
export default function FirstScreen({}: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleClick() {
    setIsDialogOpen(true);
  }
  return (
    <div
      id="hero"
      className={`w-full h-[573px] flex flex-col md:h-[661px] md:relative`}
    >
      <img
        className="object-contain self-start w-[111.78514099121094px] h-[21px] mt-[26px] ml-[17px] md:ml-[59px] md:mt-[50.18px] md:w-[148.99073791503906px] md:h-[28.67229652404785px]"
        src={ellaLogo}
        alt="Ella.AI Logo"
      />
      <video className='absolute  object-cover h-[inherit] z-[-1] w-full md:h-[inherit]' autoPlay playsInline muted loop id="myVideo" >
          <source className='md:hidden' src={ellaMob} type="video/mp4" />
          <source className='hidden md:block' src={ellaDesk} type="video/mp4" />
      </video>
      <div className="max-w-[100vw] mt-[179px] md:mt-[156.15px] text-black">
        <div className="flex flex-col text-center gap-[15px] md:gap-[0]">
          <p className="font-OneZero-Apparat-Book text-[12px] md:text-[16px] text-blue tracking-wide uppercase">
            Ella.AI for Financial Institutions
          </p>
          <h1 className="font-OneZero-Apparat-Light text-[#3E3E3E] leading-[73%] text-[56px] md:text-[84px] md:leading-[90px] md:my-[unset] md:mb-[29px]">
            The World’s First AI Banker for Banks
          </h1>
          <div className=" flex flex-col items-center gap-[20px] ">
            <p dir="ltr" className="font-OneZero-Apparat-Book dir-ltr text-[14px] md:text-[20px] leading-[22px] md:leading-[150%] text-[#3E3E3E] max-w-2xl">
              Ella helps banks deliver proactive, personalized, conversational banking at scale — resolving customer needs, improving engagement, and driving activation.
            </p>
            <p className="font-OneZero-Apparat-Book text-[12px] md:text-[14px] text-midGrey">
              Designed and proven with ONE ZERO Bank
            </p>
          </div>
        </div>
        {/* <img
          className=" mt-[160px]  md:mt-[175px] mx-auto"
          src={bottom_logo}
          alt="המחשה מסך ראשון"
        /> */}

      </div>
    </div>
  );
}
