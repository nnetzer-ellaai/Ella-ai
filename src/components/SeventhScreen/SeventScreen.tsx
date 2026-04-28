import React, { useEffect, useMemo, useRef, useState } from 'react';
import img from '../../assets/seventh-section-img-black.png';
import ellaVideo from '../../assets/ELLA_SCALED.mp4'
// import VisibilitySensor from 'react-intersection-observer';



export default function SeventScreen() {
  const didMountRef = useRef<boolean>(true);
  const [showResult, setShowResults] = useState(true);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ref1 = useRef(null);

 

  const isInViewport1 = useIsInViewport(ref1);

  // const lineToType = [
  //   "Ella is the Generative AI Banker built for banks, Inside a bank ",
  //   "and now available as white label solution.",
  //   " ",
  //   "Ella understands each customer in real time, acts proactively, ",
  //   "and is available 24/7 across your digital channels "

  // ];
  let lineToType = [
    "Ella is the Generative AI Banker built for banks — ",
    "battle-tested in a licensed bank ",
    "and now available as a white-label solution.",
    " ",
    "Ella understands each customer in real time, acts proactively, ",
    "and is available 24/7 across your digital channels."

  ];


  if(window.innerWidth <= 768){
 
        lineToType = [
          "Ella is the Generative AI ",
          "Banker built for banks —",
          "battle-tested in a licensed bank ",
          "and now available as a",
          "white-label solution.",
          " ",
          "Ella understands each ",
          "customer in real time, acts ",
          "proactively, and is available ",
          "24/7 across your digital ",
          "channels.",
        ];

    }
   


  let currentIndex = 0;
  let lineIndex = 0;



  function typeCharacter() {
    if (typewriterRef.current) {
      setShowResults(false);
      if (lineToType[lineIndex] === "") {
        typewriterRef.current.innerHTML += "<br /><br />";
        lineIndex += 1;
        currentIndex = 0;
        setTimeout(typeCharacter, 50);
        return;
      }
      typewriterRef.current.innerHTML += lineToType[lineIndex][currentIndex];
      currentIndex += 1;

      if (currentIndex < lineToType[lineIndex].length) {
        setTimeout(typeCharacter, 50);
      } else {
        if (lineIndex < lineToType.length - 1) {
          lineIndex += 1;
          currentIndex = 0;

          if (lineIndex < lineToType.length) {
            typewriterRef.current.innerHTML += "<br />";
          }

          setTimeout(typeCharacter, 50);
        } else {
          // lineIndex = 0;
          // currentIndex = 0;
          // // Set timeout for 3 seconds before typing the next line
          // setTimeout(() => {
          //   if(typewriterRef.current) {
          //     typewriterRef.current.innerHTML = "";
          //   }
          //   setShowResults(true);
          //   typeCharacter();
          // }, 1500);
        }
      }
    }
  }



  
  useEffect(() => {
    if(showResult){
      if(isInViewport1) {
        typeCharacter();
      }
    }
    return () => {
      
    };
  }, [isInViewport1, typeCharacter]);


  


  function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
      
  
      return () => {
        observer.disconnect();
        
      };
    }, [ref, observer]);
    return isIntersecting;
  }


  return (
    <div className="flex flex-col justify-center gap-[50px] pt-[67px] pb-[81px] px-[23px] md:pt-[93px] md:pb-[137px] items-center">
      <div className="flex flex-col gap-[32px] md:gap-[42px] right-1/2 items-center">
        <video  autoPlay playsInline muted loop className='w-[104px] h-[104px] md:w-[134px] md:h-[134px]' id="myVideo" >
            <source src={ellaVideo} type="video/mp4" />
        </video>
        <div ref={ref1} style={{ direction: 'ltr' }} className='px-[unset] h-[333.73px] text-center md:h-[206px] leading-[18px] md:leading-[initial]'>

          <span ref={typewriterRef} className='text-[#3E3E3E] text-[24px] md:text-[36px] font-OneZero-Apparat-Book text-tight md:leading-[120%] leading-[32px]'></span>
          {/* <span className={`dot text-[16px] ${showResult?  "" : "fade-out"}`}>●</span> */}
          <span className="font-OneZero-Apparat-Book inline-flex h-[1px] text-[40px] md:text-[55px] text-[#3E3E3E] align-sub md:align-sub leading-[0]">●</span>
        </div>  
      </div>
      
    </div>
  );
}

