import React, { useState } from 'react';
import IconButton from '../Ui/IconButton';
import leftArrow from '../../assets/icons/arrow-left.svg';
import QrDialog from '../QrDialog/QrDialog';
import { MIN_DESKTOP_WIDTH } from '../../constants/constants';
import img from "../../assets/desk/img1.png";
import mob_img from "../../assets/desk/mob_img1.png";


const sub_title = "font-OneZero-Apparat-Medium text-[#3E3E3E] text-[16px] leading-[156%] md:text-[1.67vw] md:leading-[100%] md:tracking-[-0.0334vw] md:mb-[0.28vw]";
const list_item = "font-OneZero-Apparat-Book list-item text-[#3E3E3E] text-[16px] leading-[156%] md:text-[1.25vw] md:leading-[2.22vw] md:tracking-[-0.025vw]";

export default function FourthScreen() {


 

  return (
    <div className=" font-OneZero-Apparat-Book flex flex-col-reverse md:flex-row w-full ">
      <div className=" md:w-[50%]">
          <img
          className=" md:w-[100%] object-contain hidden md:block"
          src={img}
          alt={""}
        />

          <img
          className=" md:w-[100%] object-contain md:hidden"
          src={mob_img}
          alt={""}
        />

      </div>
      <div className="bg-[#F2F2F2] md:w-[50%] flex flex-col items-center pb-[49px] md:pb-[unset] pt-[47px] md:pt-[unset]">
        <div className='md:w-[38.4vw] flex flex-col gap-[5.83vw] md:gap-[2.08vw] md:mt-[9.58vw]'>

          <p className='font-OneZero-Apparat-Book text-[#3E3E3E] text-[24px] leading-[32px] md:text-[2.92vw] md:leading-[3.47vw] md:mb-[1.32vw]'>
            How Ella Makes It Happen
          </p>
          <div>
            <p className={sub_title}>
              Intelligent Customer Care
            </p>

            <div className='ml-[25px] md:ml-[1.85vw]'>
              <p className={list_item}> Not a chatbot but a true digital banker.</p>
              <p className={list_item}>Manages 85% of all customer 
                <br  className='md:hidden'/>{" "}
                interactions across service and sales.</p>
              <p className={list_item}>Connected to every policy, process,
                <br  className='md:hidden'/>{" "}
                 and product in the bank.</p>
              <p className={list_item}>Delivers 24/7, instant, accurate answers
                <br  className='md:hidden'/>{" "}
                 and passes complex cases
                <br className='hidden md:block'/>{" "}
                with full 
                <br  className='md:hidden'/>{" "}
                context.
                </p>
            </div>
          </div>
          <div>
            <p className={sub_title}>
              Personalized  & Proactive Banking
            </p>

            <div className='ml-[25px] md:ml-[1.85vw]'>
              <p className={list_item}> 360° customer insights for hyper-
                <br  className='md:hidden'/>{" "}
                personalized answers and 
                <br className='hidden md:block'/>{" "}
                actionable 
                <br  className='md:hidden'/>{" "}
                advice.</p>
              <p className={list_item}>Interprets intent, reasons across data,
                <br  className='md:hidden'/>{" "}
                 and acts, not just answers.</p>
              <p className={list_item}>Proactively reaches out with insights,
                <br  className='md:hidden'/>{" "}
                 alerts, and next-best actions.</p>
              <p className={list_item}>Builds lasting relationships that drive 
                <br  className='md:hidden'/>{" "}
                engagement and growth.</p>
            </div>
          </div>

          <p className="font-OneZero-Apparat-Book text-[#3E3E3E] text-[12px] leading-[100%] tracking-[-0.24px] md:text-[0.97vw] md:leading-[100%] md:tracking-[-0.0194vw] mt-[12px] md:mt-[3.61vw]">
            Ella is fully secure, transparent, and GDPR-compliant, built
            <br  className='md:hidden'/>{" "}
            for the highest
            <br className='hidden md:block'/>{" "}
             banking privacy standards.
          </p>
 
   
        </div>

      </div>
      
     
    </div>
  );
}
