import { ReactNode } from "react";
import graph from "../../assets/desk/graph.png";
import circle1 from "../../assets/desk/circle/circle1.png";
import circle2 from "../../assets/desk/circle/circle2.png";
import circle3 from "../../assets/desk/circle/circle3.png";

const text1 = "font-OneZero-Apparat-Medium text-[#3E3E3E] md:text-[24px] md:leading-[100%] md:tracking-[-0.48px] md:w-[179px]";
const text2 = "font-OneZero-Apparat-Book text-[#3E3E3E] md:text-[20.35px] md:leading-[124%] md:tracking-[-0.4070px] w-[163px] md:w-[210px]";
const text2span = " md:text-[26.16px] md:leading-[124%] md:tracking-[-0.5323px] ";

const wrapper1 = "flex flex-col md:flex-row w-[125px] md:w-[50%] md:items-center md:justify-between";


export default function SecondScreen() {
  return (
    <div className=" bg-white text-black flex flex-col items-center mt-[60px] md:mt-[90.06px]">
      <div className="flex flex-col text-center md:text-start md:flex-row justify-between w-[90%] md:mb-[47.14px]">
        <p className="font-OneZero-Apparat-Book text-[#3E3E3E] text-[28px] leading-[32px] md:text-[42px] md:leading-[57px] ">
          Achieving Human-Like
          <br />{" "}
           Customer Care
           <br className="md:hidden"/>{" "}
           Through AI

        </p>
        <p className="font-OneZero-Apparat-Book text-[#3E3E3E] md:text-[22px] md:leading-[156%] mt-[10px] md:mt-[unset] mb-[39px] md:mb-[unset]">
          Agents deliver scalable, hyper-
          <br className="md:hidden"/>{" "}
          personalized interactions, surpassing
          <br />{" "}
          human agents and chatbots
        </p>

      </div>
      <div className="bg-[#F2F2F280] w-[90%] h-[unset] flex flex-col md:flex-row items-center justify-between md:h-[593px] rounded-[41.78px] md:rounded-[70px] px-[17px] md:pl-[59px] md:pr-[65px] pb-[27.8px] md:pb-[unset]">
        <div className="w-[328px] md:w-[unset] flex flex-col items-center pt-[35px] md:pt-[unset] px-[17px] md:px-[unset] ">
          <img
          className=" md:w-[472.0058898925781px] object-contain"
          src={graph}
          alt={""}
        />
        </div>
        <hr className="w-[100%] border-[#3E3E3E66] md:hidden mt-[37.75px] mb-[13.25px]"/>
        <div className="flex flex-col w-[100%] md:w-[40%] h-[80%] md:h-[389.48px]  justify-between">
          <div className="flex flex-row items-center justify-between ">
            <div className={wrapper1}>

              <img
                className="w-[18px] md:w-[37.15473556518555px] object-contain"
                src={circle1}
                alt={""}/>
                <p className={text1}>
                  Gen AI Agents
                </p>
            </div>
              <p className={text2}>
                <span className={text2span}>
                ↑  
                </span>{" "}
                High personalization
                <br />{" "}
                <span className={text2span}>
                ↑  
                </span>{" "}
                High scalability
              </p>
          </div>
          <hr className="w-[100%] border-[#3E3E3E66] mt-[12.75px] mb-[14.25px] md:my-[unset]"/>
          <div className="flex flex-row items-center justify-between ">
              <div className={wrapper1}>
                <img
                className="w-[18px] md:w-[37.15473556518555px] object-contain"
                src={circle2}
                alt={""}/>
                <p className={text1}>
                  Rule-Based Bots
                </p>
              </div>
              <p className={text2}>
                <span className={text2span}>
                ×  
                </span>{" "}
                No personalization
                <br />{" "}
                <span className={text2span}>
                ↑  
                </span>{" "}
                High scalability
              </p>
          </div>
          <hr className="w-[100%] border-[#3E3E3E66] mt-[12.75px] mb-[14.25px] md:my-[unset]"/>
          <div className="flex flex-row items-center justify-between ">
            <div className={wrapper1}>

            <img
              className="w-[18px] md:w-[37.15473556518555px] object-contain"
              src={circle3}
              alt={""}/>
              <p className={text1}>
                Human Agents
              </p>
            </div>
              <p className={text2}>
                <span className={text2span}>
                ↑  
                </span>{" "}
                High personalization
                <br />{" "}
                <span className={text2span}>
                ↓  
                </span>{" "}
                Low scalability
              </p>
          </div>

        </div>

      </div>
    </div>
  );
}
