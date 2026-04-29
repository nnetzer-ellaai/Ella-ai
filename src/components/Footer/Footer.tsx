import React from "react";
import ellaLogo from "../../assets/ella-logo.png";
import { CONTACT_EMAIL } from "../../constants/constants";
type Props = {
  hidePartnerCredit?: boolean;
};
export default function Footer({ hidePartnerCredit = false }: Props) {
  return (
    <footer className=" flex flex-col-reverse md:flex-col py-4 md:py-[37px] px-5 items-start md:justify-between md:px-[4.5rem] gap-[25px] md:gap-[0]">
      <div className=" flex flex-col md:flex-row-reverse md:justify-between w-full">
        <div className="flex flex-col gap-4 text-xs md:text-sm text-darkGrey">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
            {CONTACT_EMAIL}
          </a>
          {!hidePartnerCredit && (
            <p className="text-xs text-midGrey">Design partner: ONE ZERO Bank</p>
          )}
        </div>
        <img
          className="w-[7.5rem] self-end md:self-center md:w-40"
          src={ellaLogo}
          alt="Ella.AI Logo"
        />
      </div>
    </footer>
  );
}
