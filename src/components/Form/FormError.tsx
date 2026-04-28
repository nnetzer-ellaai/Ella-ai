import errorDesktopHeroPhone from "../../assets/form-error/error-desktop-hero-asset.png";
import errorDesktopHeroBg from "../../assets/form-error/error-desktop-hero-bg.png";
import errorMobileHeroBg from "../../assets/form-error/error-mobile-hero-bg.png";
import ellaLogo from "../../assets/ella-logo.png";
import { MIN_DESKTOP_WIDTH } from "../../constants/constants";

import Link from "../Ui/Link";
import marked from "../../assets/icons/marked.png";
import IconButton from "../Ui/IconButton";
import qr from '../../assets/qr.png'
export default function FormError() {
  const isDesktop = window.screen.width >= MIN_DESKTOP_WIDTH;
  const text =
    <h2
      className="text-white text-center leading-snug"
    >
      אופס משהו השתבש...<br/> ניתן ליצור קשר ב-<a href="tel:*6121">6121*</a>
    </h2>;
  
  return isDesktop ? (
    <div
      className="relative flex justify-center items-center w-full h-screen"
    >
      <img
        className="absolute w-full h-full object-cover z-1"
        src={errorDesktopHeroBg}
        alt="רקע איקס" 
      />
      <img
        className="absolute bottom-0 left-0 p-8 max-w-[25%]"
        src={ellaLogo}
        alt="וואן זירו לוגו"
      />
      <div
        className="flex w-[50%] justify-center"
      >
        <img
          className="absolute max-h-[80%] max-w-[50%] bottom-0 object-contain z-2"
          src={errorDesktopHeroPhone}
          alt="רקע אייפון" 
        />
        <div 
          className="relative mt-24 z-2 text-3xl md:text-[1.5rem] 2xl:text-[2.5rem]"
        >
          {text}
        </div>
      </div>
    </div>
  ) : (
    <div
      className="relative flex justify-center items-center w-full h-screen"
    >
      <img
        className="absolute w-full h-full object-cover object-left z-1"
        src={errorDesktopHeroBg}
        alt="רקע איקס" 
      />
      <img
        className="absolute top-0 left-0 pt-4 pl-4 w-[130px]"
        src={ellaLogo}
        alt="וואן זירו לוגו"
      />
      <div
        className="flex justify-center"
      >
        <div 
          className="relative mb-32 z-2 text-l"
        >
          {text}
        </div>
      </div>
    </div>
  )
}
