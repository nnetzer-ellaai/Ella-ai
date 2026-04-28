import React from 'react';
import formImage from '../../assets/desk/form_mob_img.png';
import formImageDesktop from '../../assets/desk/form_img.png';
type Props = {};
export default function FormImage({}: Props) {

  return (
    <>
      <img
        className="md:hidden z-8 max-w-[325px]  object-contain  mb-[43.29px]"
        //@ts-ignore
        style={{ '-webkit-transform': 'translate3d(0,0,0)' }}
        src={formImage}
        alt="אישה עם טלפון"
      />
      <img
        className="hidden  z-8 md:block w-screen h-64 mt-auto md:h-[90%] md:object-contain md:w-[50%] "
        src={formImageDesktop}
        alt="אישה עם טלפון"
      />
    </>
  );
}
