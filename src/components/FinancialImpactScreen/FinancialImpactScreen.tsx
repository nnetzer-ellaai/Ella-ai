import React, { CSSProperties, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Pagination, Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

import bg1 from "../../assets/desk/bg1.png";
import bg2 from "../../assets/desk/bg2.png";
import mob_bg1 from "../../assets/desk/mob_card1.png";
import mob_bg2 from "../../assets/desk/mob_card2.png";
type Props = {};




const card = "flex flex-col justify-center md:justify-start md:pt-[78px] gap-[7.83px] md:gap-[24px] items-center bg-contain bg-no-repeat w-[318.0000000000018px] h-[213.70156860351614px] md:w-[609.8472290039098px] md:h-[369.00006103515716px]";
const card_title = "font-OneZero-Apparat-Book text-[24px] leading-[28.96px] md:text-[42px] md:leading-[50px]";
const card_text = "font-OneZero-Apparat-Book text-[16px] leading-[130%] tracking-[-0.32px] md:text-[24px] md:leading-[130%] md:tracking-[-0.48px] text-center";
const card_span = "font-OneZero-Apparat-Bold text-[16px] leading-[130%] tracking-[-0.32px] md:text-[24px] md:leading-[130%] md:tracking-[-0.48px] text-center";



export default function FinancialImpactScreen({}: Props) {
    var card1_bg;
    var card2_bg;

    if(window.innerWidth <= 768){
        console.log(window.innerWidth);
        card1_bg = mob_bg1;
        card2_bg = mob_bg2;
    }
    else{
        card1_bg = bg1;
        card2_bg = bg2;
    }
  
  return (
    <div className="flex flex-col items-center text-[#3E3E3E] mb-[65px] md:mb-[155px] md:mt-[147px]">
        <div className="flex items-center justify-center mb-[10px] md:mb-[14px]
        border-[0.5px] border-[black] rounded-[60px] w-[113px] h-[27px]
        md:border-[0.5px] md:border-[black] md:rounded-[60px] md:w-[194px] md:h-[47px]">
            <p className="font-OneZero-Apparat-Book text-[12px] leading-[15.15px] md:text-[22px] md:leading-[30px] ">Financial Impact</p>
        </div>
        <p className="font-OneZero-Apparat-Book text-center text-[#3E3E3E] text-[28px] leading-[32px] md:text-[42px] md:leading-[50px]
        mb-[15px] md:mb-[12px]
        ">
            Clear ROI: Lower Costs,
            <br className="md:hidden"/>{" "}
             Higher Revenue
        </p>
        <p className="font-OneZero-Apparat-Book text-center text-[18px] leading-[23px] md:text-[24px] md:leading-[100%] md:tracking-[-0.48px]
        mb-[17px] md:mb-[71px]
        ">
            ONE ZERO Bank case study —
             <br className="md:hidden"/>{" "}
            80K to 160K customers
        </p>
        <div className="flex flex-col md:flex-row text-[#3E3E3E] gap-[28.3px] md:gap-[53.15px] md:w-[90%] justify-center">
            <div className={`${card}`} style={{ backgroundImage: `url(${card1_bg})` }}>
                <p className={card_title}>
                    Cut cost to serve by 60%
                </p>
                <p className={card_text}>
                    Achieved {" "}
                    <span className={card_span}>   
                        2x customer growth 
                    </span>{" "}
                    with
                    <br />{" "}
                    <span className={card_span}>
                        20% fewer bankers
                    </span>
                    , alongside 
                    <br className="md:hidden" />{" "}
                    rising
                    <br className="hidden md:block"/>{" "}
                    satisfaction and trust
                </p>

            </div>
            <div className={`${card} h-[237px]`} style={{ backgroundImage: `url(${card2_bg})` }}>
                <p className={card_title}>
                    Increase revenue by 15%
                </p>
                <p className={card_text}>
                    Through timely and relevant product
                    <br /> {" "}
                     recommendations, Ella expanded
                     <br className="md:hidden" />{" "}
                     wallet
                    <br className="hidden md:block"/> {" "}
                    share, achieving {" "}
                    <span className={card_span}>
                        20%
                        <br className="md:hidden" />{" "}
                        conversion and
                    </span>
                    <br className="hidden md:block"/> {" "}
                    <span className={card_span}>
                        10% AUM growth
                    </span>
                </p>

            </div>

        </div>


    </div>
  );
}
