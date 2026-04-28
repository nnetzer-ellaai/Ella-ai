import React, { ReactEventHandler, useState } from "react";

type Props = {
  summary?: React.ReactNode;
  details?: React.ReactNode;
  className?:string;
};

export default function Accordion({ summary, details,className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle(
    event: React.SyntheticEvent<HTMLDetailsElement, Event>
  ) {
    setIsOpen((prevState) => !prevState);
  }
  const marker = isOpen ? "-" : "+";
  return (
    <details
      onToggle={handleToggle}
      open={isOpen}
      className={`border-b-[1px] w-full py-8 ${className}`}
    >
      <summary className="cursor-pointer font-OneZero-Apparat-Book text-[16px] md:text-[24px] flex justify-between text-base leading-6 select-none md:text-2xl 3xl:text-3xl leading-[120%] md:leading-[initial]">
        {summary}
        <span className="text-[14px] md:text-[20px] font-OneZero-Apparat-Book" id="marker">
          {marker}
        </span>
      </summary>
      <div className="font-Digibank-Regular text-[14px] leading-[120%] my-3 md:text-xl opacity-[0.7] mt-[10px]">
        {details}
      </div>
    </details>
  );
}
