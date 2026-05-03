import React, { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Controller, A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { v2Copy } from '../copy';

import slide1 from '../../assets/desk/slides/slide1.png';
import slide2 from '../../assets/desk/slides/slide2.png';
import slide3 from '../../assets/desk/slides/slide3.png';
import slide4 from '../../assets/desk/slides/slide4.png';
import slide5 from '../../assets/desk/slides/slide5.png';

function SlideHeader({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#3E3E3E] text-[5vw] leading-[6vw] md:text-[1.667vw] md:leading-[2vw] pt-[60.742vw] md:pt-[20.625vw] md:bottom-[15rem] font-OneZero-Apparat-Bold md:mt-[-0.5vw]">
      {children}
    </p>
  );
}

function SlideParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[5vw] leading-[6.2vw] md:text-[1.667vw] md:leading-[2.067vw] pt-[1.022vw] md:pt-[0.347vw] font-OneZero-Apparat-Light">
      {children}
    </p>
  );
}

function SlideCard({ children, style }: { children: React.ReactNode; style?: CSSProperties }) {
  return (
    <div
      className="flex flex-col text-start font-OneZero-Apparat-Book text-[#3E3E3E] w-full rounded-[2.778vw] bg-no-repeat bg-center bg-contain pl-[7.772vw] md:pl-[2.5vw] h-[93.056vw] w-[74.853vw] md:w-[25.417vw] md:h-[31.597vw]"
      style={style}
    >
      {children}
    </div>
  );
}

SwiperCore.use([Pagination, Controller, Navigation, Autoplay, A11y]);

export default function V2DemoSlides() {
  const swiperRef = React.useRef<SwiperCore>();
  const onInit = (swiper: SwiperCore): void => {
    swiperRef.current = swiper;
  };
  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };
  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    <div className="bg-white pt-[16.67vw] md:pt-[4.1vw] pb-[19.444vw] md:pb-[9.931vw] overflow-hidden">
      <p className="font-OneZero-Apparat-Bold text-[11px] md:text-[14px] text-blue tracking-[0.18em] uppercase mb-[6vw] md:mb-[2vw] text-center md:text-start md:pl-[5.21vw]">
        {v2Copy.demoSlides.eyebrow}
      </p>
      <div className="flex flex-col md:justify-between md:flex-row text-[#3E3E3E] md:pl-[5.21vw] md:pr-[5.76vw]">
        <p className="text-center md:text-start md:w-[unset] text-[6.67vw] leading-[133.333%] md:text-[2.92vw] md:leading-[135.714%]">
          Designed Like a Banker,
          <br />{' '}
          Delivered by AI
        </p>
        <p className="text-center md:text-start md:w-[53.47vw] text-[4.44vw] leading-[156%] md:text-[1.53vw] md:leading-[156%] pt-[4.333vw] md:pt-[unset] pb-[10.278vw] md:pb-[5.014vw]">
          Ella is not a chatbot or AI assistant. She's a
          <br className="md:hidden" />{' '}
          Generative AI banker who
          <br className="hidden md:block" />{' '}
          already manages
          <br className="md:hidden" />{' '}
          <span className="font-OneZero-Apparat-Bold">85%</span> of day-to-day service and sales
          <br className="md:hidden" />{' '}
          interactions, with
          <br className="hidden md:block" />{' '}
          the depth of a human
          <br className="md:hidden" />{' '}
          banker and the scale of AI. Live for over 2 years
          <br className="md:hidden" />{' '}
          in production.
          <br className="md:hidden" />{' '}
          <br />{' '}
        </p>
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          onInit={onInit}
          className="w-full cursor-pointer h-[93.056vw] md:h-[32.597vw]"
          modules={[Pagination, Controller, Navigation, Autoplay]}
          loop={true}
          centeredSlides={true}
          slidesPerView={1.25}
          speed={12000}
          navigation={true}
          autoplay={{
            disableOnInteraction: true,
            delay: 1,
            stopOnLastSlide: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3.5,
              centeredSlides: true,
            },
          }}
        >
          {[slide1, slide2, slide3, slide4, slide5, slide1, slide2, slide3, slide4, slide5].map(
            (img, idx) => {
              const data = [
                { header: 'Knows your bank', body: <>all policies, products,<br /> and processes</> },
                { header: 'Knows your customers', body: <>accounts, transactions,<br /> loans, investments, etc.</> },
                { header: 'Thinks and acts', body: <>understands intent,<br /> reasons across data, and<br /> offers relevant products</> },
                { header: 'Proactive', body: <>pushes insights, alerts, and<br /> offers without waiting to be<br /> asked</> },
                { header: '24/7 customer service', body: <>Led by an AI banker,<br /> available instantly<br /> around the clock</> },
              ];
              const slide = data[idx % 5];
              return (
                <SwiperSlide key={idx}>
                  <SlideCard style={{ backgroundImage: `url(${img})` }}>
                    <SlideHeader>{slide.header}</SlideHeader>
                    <SlideParagraph>{slide.body}</SlideParagraph>
                  </SlideCard>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </div>
  );
}
