import React, { ReactNode, useState } from 'react';
import mobileTimeLine from "../../assets/line-mob.png";
import desktopTimeLine from "../../assets/line-desktop.png";
import img2 from "../../assets/desk/img2.png";
import mob_img2 from "../../assets/desk/mob_img2.png";



const sub_title = "font-OneZero-Apparat-Medium text-[#3E3E3E] text-[16px] leading-[156%] md:text-[24px] md:leading-[100%] md:tracking-[-0.48px] mt-[18px] md:mt-[unset] mb-[17px] md:mb-[14px]";
const list_item = "font-OneZero-Apparat-Book list-item text-[#3E3E3E] text-[16px] leading-[24px] tracking-[-0.32px] md:text-[18px] md:leading-[32px] md:tracking-[-0.36px]";


export default function AfterFourthScreen() {
  return (
    <div className='w-full flex items-center justify-center mt-[40px] md:mt-[105px]'>
        <div className='flex flex-col items-center w-[unset] md:flex-row md:w-[90%] md:h-[unset] gap-[35px] md:gap-[unset]'>
            <div className='md:w-[50%] flex flex-col  justify-center md:gap-[40px]'>
                <p className='font-OneZero-Apparat-Book text-[#3E3E3E] text-[28px] leading-[32px] md:text-[42px] md:leading-[50px]'>
                    Everyone wants a GenAI
                    <br />{" "}
                     Agent - Few get it right
                </p>
                <div>
                    <p className={sub_title}>
                        Banks and fintechs are racing to launch
                        <br className="md:hidden"/>{" "}
                        GenAI
                        <br className="hidden md:block"/>{" "}
                        agents → {" "}
                        <span className='font-OneZero-Apparat-Bold'>
                             But more than 90% of
                             <br className="md:hidden"/>{" "}
                             GenAI projects fail
                            <br className="hidden md:block"/>{" "}
                            before facing real
                            <br className="md:hidden"/>{" "}
                            customers.
                        </span>
                    </p>

                    <div className='ml-[22px] md:ml-[20px]'>
                    <p className={list_item}>
                        Ella.AI was built inside a licensed bank
                        <br className="md:hidden"/>{" "}
                        and is now available as a

                        <br className="hidden md:block"/>{" "}
                        white-label solution.
                    </p>
                    <p className={list_item}>
                        Live since late 2023, Ella has handled

                        <br className="md:hidden"/>{" "}
                        millions of real
                        <br className="hidden md:block"/>{" "}
                        customer interactions.</p>
                    <p className={list_item}>
                        We bring the expertise to ensure
                        <br className="md:hidden"/>{" "}
                        your deployment succeeds.</p>
                    
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[50%] flex flex-col  justify-center'>
                <img
                    className="hidden md:block h-[241.1741180419922px] md:h-[70%]  object-contain"
                    src={img2}
                    alt={""}
                />
                <img
                    className="md:hidden h-[241.1741180419922px] md:h-[70%]  object-contain"
                    src={mob_img2}
                    alt={""}
                    />
            </div>
        </div>
    </div>
  );
}
