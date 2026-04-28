import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Controller,A11y, FreeMode, Navigation, Pagination, Swiper as SwiperType, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


import slide1 from "../../assets/desk/slides/slide1.png";
import slide2 from "../../assets/desk/slides/slide2.png";
import slide3 from "../../assets/desk/slides/slide3.png";
import slide4 from "../../assets/desk/slides/slide4.png";
import slide5 from "../../assets/desk/slides/slide5.png";
import slide6 from "../../assets/desk/slides/slide6.png";
import slide7 from "../../assets/desk/slides/slide7.png";
import la from '../../assets/left_arrow.png'
import ra from '../../assets/right_arrow.png'



type Props = {};


function SlideHeader({ children }: { children: React.ReactNode }) {
    return (
      // <p className="text-[#FFFFFF] text-[5vw] leading-[6vw] md:text-[1.667vw] md:leading-[2vw] absolute top-[60.742vw] md:bottom-[15rem] font-OneZero-Apparat-Bold">
      <p className="text-[#3E3E3E] text-[5vw] leading-[6vw] md:text-[1.667vw] md:leading-[2vw] pt-[60.742vw] md:pt-[20.625vw]  md:bottom-[15rem] font-OneZero-Apparat-Bold md:mt-[-0.5vw]">
        {children}
      </p>
    );
  }
  function SlideParagraph({ children }: { children: React.ReactNode }) {
    return (
      // <p className="text-[5vw] leading-[6.2vw] md:text-[1.667vw] md:leading-[2.067vw] absolute top-[68.514vw] font-OneZero-Apparat-Book ">
      <p className="text-[5vw] leading-[6.2vw] md:text-[1.667vw] md:leading-[2.067vw] pt-[1.022vw] md:pt-[0.347vw] font-OneZero-Apparat-Light ">
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
        className="flex flex-col text-start font-OneZero-Apparat-Book text-[#3E3E3E] w-full rounded-[2.778vw] bg-no-repeat  bg-center bg-contain  pl-[7.772vw] md:pl-[2.5vw] h-[93.056vw] w-[74.853vw] md:w-[25.417vw] md:h-[31.597vw]	"
        style={style}
      >
        {children}
      </div>
    );
  }


  const slideFooterStyle =
  "text-[18px] leading-[22.5px] pt-[4px] text-right font-OneZero-Apparat-Book text-darkGrey p-3";

const activeButtonStyle = "text-white bg-black";


SwiperCore.use([Pagination, Controller,Navigation,Autoplay,A11y]);

export default function SixthPart({}: Props) {
  const swiperRef = React.useRef<SwiperCore>();
  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };
  const handleMouseEnter = () => {
    // if (swiperRef.current) swiperRef.current.autoplay.start();
    if (swiperRef.current) swiperRef.current.autoplay.stop();
    // if (swiperRef.current) swiperRef.current.autoplay.pause();
    // if (swiperRef.current) swiperRef.current.autoplay.pause();
  };
  const handleMouseLeave = () => {
    // if (swiperRef.current) swiperRef.current.autoplay.stop();
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  // const slides_amount = 12;
  // const jump = 3;

  // function JumpNext(index: number){
  //   console.log('JumpNext');
  //   console.log(index);
  //   console.log(index+jump);
  //   if(slides_amount>(index+jump)){
  //     return index+jump-slides_amount;
  //   }
  //   return index+jump;
  // }
  // function JumpPrev(swiperRef: { current: { realIndex: number; }; }){
  //   swiperRef.current.realIndex - jump;
  // }






 

    // ct
  return (
    <div className='pt-[16.67vw] md:pt-[4.1vw] pb-[19.444vw] md:pb-[9.931vw] '>
        <div className='flex flex-col md:justify-between md:flex-row text-[#3E3E3E] md:pl-[5.21vw] md:pr-[5.76vw]'>
            <p className='text-center md:text-start md:w-[unset] text-[6.67vw] leading-[133.333%] md:text-[2.92vw] md:leading-[135.714%]'>
                Designed Like a Banker, 
                <br />{" "}
                Delivered by AI
            </p>
            <p className='text-center md:text-start md:w-[53.47vw] text-[4.44vw] leading-[156%] md:text-[1.53vw] md:leading-[156%] pt-[4.333vw] md:pt-[unset] pb-[10.278vw] md:pb-[5.014vw]'>
              Ella is not a chatbot or AI assistant. She's a
              <br className='md:hidden'/> {" "}
               Generative AI banker who
              <br className='hidden md:block'/> {" "}
              already manages
              <br className='md:hidden'/> {" "}
              85% of day-to-day service and sales
              <br className='md:hidden'/> {" "}
              interactions, with
              <br className='hidden md:block'/> {" "}
              the depth of a human
              <br className='md:hidden'/> {" "}
              banker and the scale of AI. Live for over 2 years
              <br className='md:hidden'/> {" "}
               at
              <br className='hidden md:block'/> {" "}
              ONE ZERO Bank.

              <br className='md:hidden'/> {" "}
              <br /> {" "}

            </p>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* <div> */}
        <Swiper onInit={onInit}
          className="w-full cursor-pointer h-[93.056vw]  md:h-[32.597vw] "
          // modules={[Pagination, Controller,Navigation,Autoplay,A11y]}
          // modules={[Pagination, Controller,Navigation,Autoplay]}
          modules={[Pagination, Controller,Navigation,Autoplay]}
          loop={true}
          // pagination={{clickable:true}}
          
          // spaceBetween={22.82}
         
          centeredSlides={true}
          slidesPerView={1.25}
          speed={12000}
          // speed={1000}
          navigation={true}
          
          
          // delay={1}
         
        
          autoplay={{
            // pauseOnMouseEnter:true,
            // disableOnInteraction: true,
            disableOnInteraction: true,
            // pauseOnMouseEnter: true,
            
            // pauseOnMouseEnter: true,
            
            delay: 1,
            // disableOnInteraction: false,
            stopOnLastSlide: true,
            // pauseOnMouseEnter: true,

          }}

          // onSlideChange={() => console.log(swiperRef.current?.realIndex)}
          // onSlideChange={(swiper) => setValue(swiperRef.current?.realIndex)}
      

      
      
          breakpoints={{
            768: {
              
              
                // slidesPerGroupSkip:3,
                // slidesPerGroup: 1,s
                // slidesPerGroupAuto:true,
             
                // slidesPerView: "auto",
                slidesPerView: 3.5,
                
                // slidesPerGroup: 3,
              
                // loop: true,
                centeredSlides:true,
                
            
                // spaceBetween: 150,
              

                // centerInsufficientSlides:true,
                // centeredSlidesBounds:true,
                
                
              },
          }}
  
          > 
          {/* //   */}
          <SwiperSlide   >
            <SlideCard  style={{ backgroundImage: `url(${slide1})` }}>
              <SlideHeader>
                Knows your bank
              </SlideHeader>
              <SlideParagraph>
                  all policies, products, 
                  <br /> {" "}
                  and processes
                  
              </SlideParagraph>
            </SlideCard>
            
          </SwiperSlide >
          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide2})` }}>
              <SlideHeader>
              Knows your customers  
              </SlideHeader>
              <SlideParagraph>
                  accounts, transactions,
                  <br />{" "}
                  loans, investments, etc.
              </SlideParagraph>
            </SlideCard>
            
          </SwiperSlide>
          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide3})` }}>
              <SlideHeader>
                    Thinks and acts
              </SlideHeader>
              <SlideParagraph>
                  understands intent,
                  <br /> {" "}
                  reasons across data, and
                  <br /> {" "}
                  offer relevant products 
              </SlideParagraph>
            </SlideCard>
            
          </SwiperSlide>
          

          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide4})` }}>
              <SlideHeader>
                Proactive
              </SlideHeader>
              <SlideParagraph>
                pushes insights, alerts, and
                <br />{" "}
                offers without waiting to be
                <br />{" "}
                asked
              </SlideParagraph>
            </SlideCard>
            
          </SwiperSlide>

          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide5})` }}>
              <SlideHeader>
                    24/7 customer service
              </SlideHeader>
              <SlideParagraph>
                Led by an AI banker,
                <br />{" "}
                available instantly
                <br />{" "}
                around the clock
              </SlideParagraph>
            </SlideCard>

          </SwiperSlide>


          {/* duplicate */}

          <SwiperSlide   >
            <SlideCard  style={{ backgroundImage: `url(${slide1})` }}>
              <SlideHeader>
                Knows your bank
              </SlideHeader>
              <SlideParagraph>
                  all policies, products,
                  <br /> {" "}
                  and processes

              </SlideParagraph>
            </SlideCard>

          </SwiperSlide >
          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide2})` }}>
              <SlideHeader>
              Knows your customers
              </SlideHeader>
              <SlideParagraph>
                  accounts, transactions,
                  <br />{" "}
                  loans, investments, etc.
              </SlideParagraph>
            </SlideCard>

          </SwiperSlide>
          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide3})` }}>
              <SlideHeader>
                    Thinks and acts
              </SlideHeader>
              <SlideParagraph>
                  understands intent,
                  <br /> {" "}
                  reasons across data, and
                  <br /> {" "}
                  offers relevant products
              </SlideParagraph>
            </SlideCard>

          </SwiperSlide>


          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide4})` }}>
              <SlideHeader>
                Proactive
              </SlideHeader>
              <SlideParagraph>
                pushes insights, alerts, and
                <br />{" "}
                offers without waiting to be
                <br />{" "}
                asked
              </SlideParagraph>
            </SlideCard>

          </SwiperSlide>

          <SwiperSlide   >
            <SlideCard style={{ backgroundImage: `url(${slide5})` }}>
              <SlideHeader>
                    24/7 customer service
              </SlideHeader>
              <SlideParagraph>
                Led by an AI banker,
                <br />{" "}
                available instantly
                <br />{" "}
                around the clock
              </SlideParagraph>
            </SlideCard>
            
          </SwiperSlide>
         
        </Swiper>
        {/* <button onClick={() => swiperRef.current?.slideNext()}>
          <img src={la} className=' md:w-[2.778vw] md:h-[2.778vw]' />
        </button>
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <img src={ra} className='md:w-[2.778vw] md:h-[2.778vw]' />
        </button> */}


{/* swiperRef.current.getActiveIndex() */}

          {/* <div className='text-center pt-[6.503vw] space-x-[5vw] md:text-end md:pr-[5.347vw] md:pt-[2.397vw] md:space-x-[1.25vw]'>
            <button onClick={() => swiperRef.current?.slidePrev(1000)}>

              <img src={la} className='w-[11.111vw] h-[11.111vw] md:w-[2.778vw] md:h-[2.778vw]' />
            </button>

            <button onClick={() => swiperRef.current?.slideNext(1000)}>
    
              <img src={ra} className='w-[11.111vw] h-[11.111vw] md:w-[2.778vw] md:h-[2.778vw]' />
            </button>
          </div> */}


        </div>

    </div>
   
  );
}
