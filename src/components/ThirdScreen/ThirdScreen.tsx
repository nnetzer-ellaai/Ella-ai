import React, { ReactNode } from "react";
import feedback from "../../assets/feedback.gif"
import typing from "../../assets/typing.gif"
import tickets from "../../assets/tickets.gif"
import lang from "../../assets/lan.png"
import consultation from "../../assets/consultation.png"
import interest from "../../assets/conversation.gif"
import ellaMob from '../../assets/desk/1_c.mp4'
import ellaDesk from '../../assets/desk/2_c.mp4'





export default function ThirdScreen() {
  return (
    <div className="w-full flex items-center justify-center">
      
      {/* <div className="w-[90%] h-[438px] my-[35px]  md:w-[90%] md:h-[unset] md:aspect-[16/9]   md:mt-[74px] md:mb-[107px]"> */}
      <div className="w-[90%] h-[115vw]  my-[35px]  md:w-[90%] md:h-[unset] md:aspect-[16/9]   md:mt-[74px] md:mb-[107px]">
        <video className='object-cover w-full h-[inherit] md:h-[inherit] rounded-[40px] md:rounded-[100px]' autoPlay playsInline muted loop id="myVideo" >
          <source className='md:hidden' src={ellaMob} type="video/mp4" />
          <source className='hidden md:block' src={ellaDesk} type="video/mp4" />
         
      </video>
      </div>
    </div>
  );
}
