import React, { CSSProperties, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import Link from "../Ui/Link";
import galleryOne from "../../assets/mobile-imgs/gallery-one.png";
import galleryOnePlus from "../../assets/mobile-imgs/gallery-one-plus.png";
import galleryZero from "../../assets/mobile-imgs/gallery-zero.png";
type Props = {};

const title1 ="font-OneZero-Apparat-Medium text-[12px] leading-[15px] tracking-[-0.24px] md:text-[24px] md:leading-[100%] md:tracking-[-0.48px]";
const title2 ="font-OneZero-Apparat-Book text-[18.16px] leading-[100%] tracking-[-0.3632px] md:text-[24px] md:leading-[100%] md:tracking-[-0.48px] mt-[21.38px] md:mt-[25px] md:mb-[37px]";
const text1 ="font-OneZero-Apparat-Book text-[#3E3E3E] text-[10px] leading-[100%] tracking-[-0.20px] md:text-[14px] md:leading-[100%] md:tracking-[-0.28px]";
const hr =" border-b border-solid w-[100%] border-[#D9D9D9CC] border-b-[0.76px] md:border-b-[1px] border-t-[0px] md:border-t-[0px]";
const hr1 =" border-b border-solid w-[100%] border-[#D9D9D9CC] md:mt-[unset] md:mb-[unset] border-b-[0.76px] md:border-b-[1px] border-t-[0px] md:border-t-[0px]";
const hr2 =" border-b border-solid w-[100%] border-[#00000000] border-b-[0.76px] md:border-b-[1px] border-t-[0px] md:border-t-[0px]";

const left_side_div = "text-left h-[86px] md:h-[112px] flex flex-col justify-center gap-[2.89px]";



import full from "../../assets/desk/stars/full.png";
import half from "../../assets/desk/stars/half.png";
import blank from "../../assets/desk/stars/blank.png";

import slide_img1 from "../../assets/desk/slide1.png";





type SectionProps = {
  stars: number;
  text?: React.ReactNode;
};

export function Section({ stars, text}: SectionProps) {
  let stars_arr = [];
  for(let i = 1 ; i <= 5 ; i++){

    if(i > stars && stars - i != -0.5){
      stars_arr.push(blank);
    }
    else if(stars - i >= 0){
        stars_arr.push(full);
    }
    else{
      stars_arr.push(half);
    }
  }



  return (
  <div className="flex items-center flex-col h-[86px] md:h-[112px] justify-center gap-[3.03px] md:gap-[4.65px]">
    <div className="flex flex-row gap-[2px]">
      <img
        className="object-contain w-[14px] md:w-[25px] md:h-[31px]"
        src={stars_arr[0]}
        alt=""
      />
      <img
        className="object-contain w-[14px] md:w-[25px] md:h-[31px]"
        src={stars_arr[1]}
        alt=""
      />
      <img
        className="object-contain w-[14px] md:w-[25px] md:h-[31px]"
        src={stars_arr[2]}
        alt=""
      />
      <img
        className="object-contain w-[14px] md:w-[25px] md:h-[31px]"
        src={stars_arr[3]}
        alt=""
      />
      <img
        className="object-contain w-[14px] md:w-[25px] md:h-[31px]"
        src={stars_arr[4]}
        alt=""
      />
    </div>
    <div>
      <p className="font-OneZero-Apparat-Book text-[#3E3E3E] text-[10px] leading-[100%] md:text-[14px] md:leading-[100%]">
        {text}
      </p>
    </div>

  </div>
  
    
  );
}












function SlideHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[2.84rem] mb-5 md:leading-none md:mb-[2.8125rem] font-Digibank-Apparat-Book">
      {children}
    </h2>
  );
}
function SlideParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-[1.375rem] font-Digibank-Regular">
      {children}
    </p>
  );
}

function SlideCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: CSSProperties | undefined;
}) {
  return (
    <div
      className="flex flex-col justify-end text-start text-white w-full rounded-[10px] bg-no-repeat  bg-center bg-cover py-4 px-[1.15rem] h-[25rem] md:w-[21rem]	"
      style={style}
    >
      {children}
    </div>
  );
}
const slideFooterStyle = "text-[18px] md:text-xl text-right  text-darkGrey p-3";

const activeButtonStyle = "text-white bg-black";
export default function FifthScreen({}: Props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();
  function handleGalleryButtonClick(index: number) {
    setActiveSlideIndex(index);
    swiperInstance?.slideTo(index);
  }
  return (
    <div className="flex flex-col items-center justify-center place-content-center pt-[106.93px] px-0 gap-[38px] md:gap-8 text-center md:pt-[108px] pb-[38px] md:pb-[unset]">
      <h2 className="font-OneZero-Apparat-Book text-[#3E3E3E] text-[28px] leading-[32px] md:text-[42px] md:leading-[50px]">
        What Ella Does: 
        <br className="md:hidden"/>{" "}
        Resolves, Acts, and 
        <br />{" "}
        Sells-End-to-End
        <br className="md:hidden"/>{" "}
        Journeys
      </h2>
      <div className="flex flex-row self-end md:self-center  h-[675px] md:h-[970px] w-[95%] md:w-[90%] items-center">
        <div className="w-[35%] md:w-[35%]  h-[697px] md:h-[950px] flex flex-col mt-[110.54px] md:mt-[172px]">

          <div className={left_side_div}>
            <p className={title1}>FAQ</p>
            <p className={text1}>
              Answer on 
              <br className="md:hidden"/>{" "}
              general terms</p>
          </div>
          <hr className={hr1}/>
          <div className={left_side_div}>
            <p className={title1}>Personalization</p>
            <p className={text1}>
              Answer on customer
              <br className="md:hidden"/>{" "}
              personal data
              <br className="hidden md:block" />{" "}
              Real-
              <br className="md:hidden"/>{" "}
              Time calculation tools
            </p>
          </div>
          <hr className={hr1}/>
          <div className={left_side_div}>
            <p className={title1}>Industry Focus</p>
            <p className={text1}>
              Finance &
              <br className="md:hidden"/>{" "}
              Specialization
            </p>
          </div>
          <hr className={hr1}/>
          <div className={left_side_div}>
            <p className={title1}>
              Accuracy and
              <br className="md:hidden"/>{" "}
              Guardrails</p>
          </div>
          <hr className={hr1}/>
          <div className={left_side_div}>
            <p className={title1}>
              Compliance
              <br className="md:hidden"/>{" "}
              Readiness</p>
          </div>
          <hr className={hr1}/>
          <div className={left_side_div}>
            <p className={title1}>
              Human agent
              <br className="md:hidden"/>{" "}
              handover</p>
          </div>
          <hr className={hr1}/>
          <div className={left_side_div}>
            <p className={title1}>
              Proactive
              <br className="md:hidden"/>{" "}
              engagement</p>
          </div>
        </div>
        
        
        

      <Swiper
        // pagination={{
        //   enabled: true,
        //   bulletActiveClass: "swiper-pagination-bullet-active bg-black",
        // }}
        modules={[Pagination, Controller]}
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-gray",
          renderBullet: (index, className) => {
          return '<span class="' + className + '">' +  "</span>";
          },
        }}
                // className="w-[213px] h-[663px] md:hidden"
        // className="w-[65%] h-[697px] md:w-full md:h-[970px]"
        className="w-[65%] h-[697px] md:w-[110%] md:h-[970px]"
        spaceBetween={0}
        slidesPerView={1}
        // initialSlide={0}
        centeredSlides={false}
        
        
        
        // pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        controller={{ control: swiperInstance }}
        onSwiper={(swiper) => {
          swiper.slideTo(0);
          setActiveSlideIndex(1);
          setSwiperInstance(swiper);
        }}

        breakpoints={{
        
     
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
          noSwiping: true,
          centeredSlides: false,
          pagination: false,
          
        },
        
      }}
      >
        <SwiperSlide >
          <div className="w-full md:w-full flex items-center justify-center">
            <div className="selected_card w-[85%] md:w-[90%] md:h-[950px] flex flex-col rounded-[30px]   md:rounded-[48px]    mt-[16px] md:mt-[unset] ml-[unset] md:ml-[unset]">
            <p className={title2}>
              Ella
            </p>
            <Section 
              stars={4} 
              text={
              <>
                Tailor-made solutions designed for
                <br className="md:hidden"/>{" "}
                specific
                <br className="hidden md:block" />{" "}
                industries and organizational 
                <br className="md:hidden"/>{" "}
                
                language
              </>
              }
            />
            {/* <hr className={hr2}/> */}
            <hr className={`${hr2} sp_line`}/>
            
            <Section 
              stars={4} 
              text={
              <>
                Handles customer data to provide 
                <br />{" "}
                personalized answers
              </>
              }
            />
            <hr className={`${hr2} sp_line`}/>
            <Section 
              stars={4} 
              text={
              <>
                Industry-specific customization ensures
                <br className="md:hidden"/>{" "}
                precise
                <br className="hidden md:block" />{" "}
                communication tailored to each
                <br className="md:hidden"/>{" "}
                organization
              </>
              }
            />
            <hr className={`${hr2} sp_line`}/>
            <Section 
              stars={3} 
              text={
              <>
                Over a year of proven
                <br />{" "}
                performance
              </>
              }
            />
            <hr className={`${hr2} sp_line`}/>
            <Section 
              stars={4} 
              text={
              <>
                Bank of Israel-approved compliance 
                <br />{" "}
                guardrails
              </>
              }
            />
            <hr className={`${hr2} sp_line`}/>
            <Section 
              stars={5} 
              text={
              <>
                Smooth handovers with all necessary
                <br />{" "}
                information collected
              </>
              }
            />
            <hr className={`${hr2} sp_line`}/>
            <Section 
              stars={4} 
              text={
              <>
                Ella engages in 40% of ONE ZERO's
                <br className="md:hidden"/>{" "}
                customer 
                <br className="hidden md:block" />{" "}
                interactions
              </>
              }
            />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%] md:w-full md:h-[950px]  flex flex-col mt-[16px] md:mt-[unset]">
          <p className={title2}>
            Finance LLM solutions 
            
          </p>
          <Section 
            stars={4} 
            text={
            <>
              Generic training only
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={1} 
            text={
            <>
              Impossible, Lots of API’s
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={3.5} 
            text={
            <>
              General purpose
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={2} 
            text={
            <>
              Basic ability or disclaimers 
              <br />{" "}
              mechanics 
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={3} 
            text={
            <>
              Most solutions aren’t 
              <br />{" "}
              approved
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={2} 
            text={
            <>
              Currently unavailable
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={1} 
            text={
            <>
             Won’t be in roadmap
            </>
            }
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[100%] md:w-full md:h-[950px]  flex flex-col mt-[16px] md:mt-[unset]">
          <p className={title2}>
            Agent Creation Platforms
            
          </p>
          <Section 
            stars={1} 
            text={
            <>
              Learn from scratch
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={3} 
            text={
            <>
              Manuel work for each API
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={1} 
            text={
            <>
              None
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={2} 
            text={
            <>
              Basic ability or disclaimers
              <br />{" "}
              mechanics 
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={3} 
            text={
            <>
              Own approval process 
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={3} 
            text={
            <>
              Dedicated efforts 
            </>
            }
          />
          <hr className={hr}/>
          <Section 
            stars={1} 
            text={
            <>
             Won’t be in roadmap
            </>
            }
          />
          </div>
          
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="my-custom-pagination-div flex flex-row gap-[2.86px] items-center justify-center md:hidden " />
    </div>
  );
}
