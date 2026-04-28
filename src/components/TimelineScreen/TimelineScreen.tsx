// import React, { ReactNode } from "react";
import React, { useLayoutEffect, useRef,ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';




type TimelineItemProps = {
  title: ReactNode;
  text: ReactNode;
  number: string;
  isLast?: boolean;
  
};

function TimelineItem({ title, text, number }: TimelineItemProps) {
  return (
    <div dir="ltr" className="Timelineitem flex flex-col md:items-start items-center gap-[0] relative w-full">

      <div className="flex flex-row items-start gap-[20px] md:gap-[54px] w-[100%] md:w-[unset]">
        <div
          className="Timelineitem
          w-[53px] h-[53px] md:w-[75px] md:h-[75px]
          bg-[#E0DEEC]
          rounded-full
          
          text-[#00000000]
          border border-[transparent]
          flex items-center justify-center
          font-OneZero-Apparat-Book text-[30.92px] leading-[38.28px] tracking-[-0.7656px] md:text-[42px] z-20 md:leading-[52px] md:tracking-[unset]
          "
        >
          {number}
        </div>
        <div className="flex flex-col">
          <p
            className="Timelineitem
            font-OneZero-Apparat-Book
              text-[28px] md:text-[42px]
              leading-[36px] md:leading-[52px]

              text-[#00000000]
              mb-[13px]
              "
          >
            {title}
          </p>

          <p className="Timelineitem font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[140%] text-left text-[#00000000]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TimelineScreen() {
  const main = useRef(null);
  const gsap_line = useRef(null);
  // const item1 = useRef(null);
  // const item2 = useRef(null);

//   const tl = gsap.timeline({
//   scrollTrigger: {
//     // trigger: ".Timelineitem",
//     trigger: ".Timelineitem",
//     // start: "top top",
//     // end: "", // Adjust the end point as needed
//     start: 'bottom 80%',
//     end: 'top 20%',
//     scrub: true,
//     // pin: true, // Pin the container while the animation runs
//     markers: true // Optional: for debugging
//   }
// });

// const Timelineitems = gsap.utils.toArray('.Timelineitem');
//       Timelineitems.forEach((Timelineitem) => {
//         tl.to(".Timelineitem", {
//           borderColor: "#3E3E3E",
//           color: "#3E3E3E",
//         })
//       });

  useGSAP(
    () => {
      const Timelineitems = gsap.utils.toArray('.Timelineitem');
      Timelineitems.forEach((Timelineitem:any) => {
        gsap.to(Timelineitem, {
          borderColor: "#3E3E3E",
          color: "#3E3E3E",
          
          scrollTrigger: {
            trigger: Timelineitem,
            start: 'bottom 80%',
            // end: 'top 20%',
            end: "+=116",
            scrub: true,
            markers: false,
          },
        });
      });

      gsap.set(gsap_line.current, { height: 0 });
      if(window.innerWidth >= 768){

        gsap.to(gsap_line.current, {
          height: 800,
          scrollTrigger: {
            trigger: gsap_line.current,
            start: "top 50%",
            // end: "bottom 50%",
            end: "+=800",
            scrub: true,
            markers: false,
          },
        });
      }
      else{
        gsap.to(gsap_line.current, {
          height: 700,
          scrollTrigger: {
            trigger: gsap_line.current,
            start: "top 50%",
            // end: "bottom 50%",
            end: "+=800",
            scrub: true,
            markers: false,
          },
        });

      }
    },
    { scope: main }
  );
  // useGSAP(
  //   () => {
  //     const gsap_lines = gsap.utils.toArray('.gsap_line');
  //     gsap_lines.forEach((gsap_line) => {
  //       gsap.to(gsap_line, {
  //         // borderColor: "#3E3E3E",
  //         // color: "#3E3E3E",
  //         height: 805,
          
  //         scrollTrigger: {
  //           trigger: gsap_line,
  //           start: 'bottom bottom',
  //           end: 'top 60%',
  //           scrub: true,
  //           // markers: true,
  //         },
  //       });
  //     });
  //   },
  //   { scope: main }
  // );



  return (
    <div className="bg-[#E0DEEC] md:h-[1225px] w-full flex items-center md:justify-center
    
    pl-[24px]
          pt-[53px]
          pb-[52px]
          md:px-[unset]
          md:py-[unset]">
      {/* <div
        dir="ltr"
        className="
          md:hidden  w-full h-[1225px]
          flex flex-col items-center text-center
          relative pt-[60px] pb-[60px] gap-[80px]
        "
      >
       
        <div
          className="
            absolute top-[200px] bottom-[220px]
            left-[35px]
            w-[1px] bg-[rgba(62,62,62,1)]
            z-0
          "
        ></div>


        <h2 className="text-[24px] font-OneZero-Apparat-Medium text-[#3E3E3E]">
          From onboarding to <br />
          everyday banking — <br />
          Ella’s there at every step.
        </h2>
        <div className="flex flex-col items-center w-full gap-[60px] z-20" >

          <TimelineItem
            
            number="01"
            title="Onboarding Support"
            text={<>Guides customers through activation<br/>for a smooth start.</>}
          />

          <TimelineItem
            number="02"
            title="First Deposit & Salary"
            text={<>Leads customers to complete their<br/>first key action.</>}
          />

          <TimelineItem
            number="03"
            title="Spending Analysis"
            text={<>Brings clear insight into daily<br/>spending patterns.</>}
          />

          <TimelineItem
            number="04"
            title="Product Activation"
            text={<>Matches customer needs with the<br/>right banking products.</>}
          />

          <TimelineItem
            number="05"
            title="Service & Guidance"
            text={<>Resolves issues instantly and offers<br/>proactive financial advice.</>}
          />

        </div>

        <h2 className="text-[20px] font-OneZero-Apparat-Medium text-[#3E3E3E]">
          Ella doesn’t just chat, <br />
          she Banks
        </h2>
      </div> */}

      <div
        dir="ltr"
        className="
           md:flex md:w-[90%] 
          flex-row text-[#3E3E3E] relative
          
        "
      >

        <div className="flex flex-col justify-between w-full md:w-1/2  top-0 h-[unset]">
          <h2 className="text-[24px] leading-[32px] md:text-[42px] font-OneZero-Apparat-Book md:leading-[52px] md:tracking-[-0.84px] text-left">
            From onboarding to <br />{" "}
            everyday banking — <br />{" "}
            Ella’s there at every step.
          </h2>

          <h2 className="timelineend text-[32px] font-OneZero-Apparat-Medium text-left hidden md:block">
            Ella doesn’t just chat, <br />{" "}
            she Banks
          </h2>
        </div>


        <div className="flex flex-col pt-[38px] pb-[2px]  relative w-full md:w-1/2 mb-[52px] md:mb-[unset]">

          <div
          ref={gsap_line}
            className="
            gsap_line
              absolute top-[80px] md:h-[0px]
              left-[25px]  
              md:left-[76px]  
              w-[2px] bg-[rgba(62,62,62,1)]
              z-0
            "
          ></div>

          <div ref={main} className="timeline_wrapper flex flex-col gap-[90px]  md:ml-[40px] z-20">
           
            {/* <div  dir="ltr" className="Timelineitem flex flex-col md:items-start items-center gap-[0] relative w-full">

              <div className="flex flex-row items-start gap-[20px] md:gap-[54px]">
                <div
                  className="
                    w-[36px] h-[36px] md:w-[75px] md:h-[75px]
                    bg-[#E0DEEC]
                    rounded-full
                    text-[rgba(62,62,62,1)]
                    border border-[rgba(62,62,62,1)]
                    flex items-center justify-center
                    font-OneZero-Apparat-Book text-[16px] md:text-[42px] z-20 md:leading-[52px]
                  "
                >
                  01
                </div>
                <div className="flex flex-col">
                  <p
                    className="
                      font-OneZero-Apparat-Book
                      text-[28px] md:text-[42px]
                      leading-[36px] md:leading-[52px]
                      text-[rgba(62,62,62,1)]
                      mb-[13px]
                    "
                  >
                    Onboarding Support
                  </p>

                  <p className="font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[140%] text-left">
                    Guides customers through activation<br/>for a smooth start.
                  </p>
                </div>
              </div>
            </div>
            <div  dir="ltr" className="Timelineitem flex flex-col md:items-start items-center gap-[0] relative w-full">

              <div className="flex flex-row items-start gap-[20px] md:gap-[54px]">
                <div
                  className="
                    w-[36px] h-[36px] md:w-[75px] md:h-[75px]
                    bg-[#E0DEEC]
                    rounded-full
                    text-[rgba(62,62,62,1)]
                    border border-[rgba(62,62,62,1)]
                    flex items-center justify-center
                    font-OneZero-Apparat-Book text-[16px] md:text-[42px] z-20 md:leading-[52px]
                  "
                >
                  01
                </div>
                <div className="flex flex-col">
                  <p
                    className="
                      font-OneZero-Apparat-Book
                      text-[28px] md:text-[42px]
                      leading-[36px] md:leading-[52px]
                      text-[rgba(62,62,62,1)]
                      mb-[13px]
                    "
                  >
                    Onboarding Support
                  </p>

                  <p className="font-OneZero-Apparat-Book text-[15px] md:text-[18px] leading-[140%] text-left">
                    Guides customers through activation<br/>for a smooth start.
                  </p>
                </div>
              </div>
            </div> */}

            <TimelineItem
              number="01"
              title="Onboarding Support"
              text={<>Guides customers through activation<br/>{" "}for a smooth start.</>}
            />

            <TimelineItem
              
              number="02"
              title="First Deposit & Salary"
              text={<>Leads customers to complete their<br/>{" "}first key action.</>}
            />

            <TimelineItem
              number="03"
              title="Spending Analysis"
              text={<>Brings clear insight into daily<br/>{" "}spending patterns.</>}
            />

            <TimelineItem
              number="04"
              title="Product Activation"
              text={<>Matches customer needs with the<br/>{" "}right banking products.</>}
            />

            <TimelineItem
              number="05"
              title="Service & Guidance"
              text={<>Resolves issues instantly and offers<br/>{" "}proactive financial advice.</>}
            />
          </div>
        </div>
        <h2 className="text-[20px] font-OneZero-Apparat-Medium text-[#3E3E3E] md:hidden">
          Ella doesn’t just chat, <br />{" "}
          she Banks
        </h2>
      </div>
    </div>
  );
}
