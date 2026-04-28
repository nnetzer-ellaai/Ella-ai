import downArrow from "../../assets/downArrow.svg";



const right_grid = "md:w-[unset]"

export default function AfterSeventhScreen() {
  return (
    <div
      dir="ltr"
      className="text-[rgba(62,62,62,1)] bg-after-seventh flex w-full h-full md:h-[808px] md:pl-[unset] md:pr-[unset] py-[54px] md:py-[80px] justify-center"
    >
      <div className="w-full h-full md:w-[90%] flex flex-col md:flex-row md:gap-[unset] justify-between md:h-[615px]">
       <div className="flex flex-col justify-between  h-full hidden md:flex">

        <div className="flex flex-col text-left gap-[12px]">
            <h2 className="font-OneZero-Apparat text-[28px] md:text-[42px] leading-[32px] md:leading-[46px]">
            With ella,
            <br className="hidden md:block" />{" "} 
            banks can
            </h2>
        </div>

 
        <div className="flex flex-col text-left gap-[12px] md:gap-[28px]">
            <img 
            src={downArrow} 
            alt="down arrow" 
            className="w-[18px] md:w-[29px] h-[25px] md:h-[25px] object-contain"
            />
            <p className="font-OneZero-Apparat-Book text-[18px] leading-[140%] md:text-[24px] md:leading-[134%]">
            Ella is not just changing <br className="hidden md:block" />{" "}
            how customers interact - <br className="hidden md:block" />{" "}
            she’s changing how a <br className="hidden md:block" />{" "}
            bank grows.
            </p>
        </div>

        </div>

   
        <div className="">
          <div className="hidden md:grid md:grid-cols-[1fr,291px]  h-full md:gap-x-[90px] md:gap-y-[75px]">

            <div  className ={`flex flex-col text-left gap-[16px] `}>
                <h2 className="font-OneZero-Apparat-book text-[68px] leading-[36px] md:text-[76px] md:leading-[50px]">  60% <br />{" "} 
                <span className="inline-block md:text-[43px] md:leading-[50px]">Efficiency</span></h2>
                    <p className="font-OneZero-Apparat-Book text-[14px] md:text-[24px] md:leading-[140%]">
                        Ella cut <span className="font-OneZero-Apparat-Bold">cost-to-serve</span> by 60%,<br />{" "}
                        enabling 2X customer growth<br />{" "}
                        with 20% fewer bankers
                    </p>
            </div>

             <div  className ={`flex flex-col text-left gap-[16px] ${right_grid}`}>
                <h2 className="font-OneZero-Apparat-book text-[20px] md:text-[76px] md:leading-[50px]">  15% <br /> {" "}
                <span className="inline-block md:text-[43px] md:leading-[50px]">Upsell</span></h2>
                    <p className="font-OneZero-Apparat-Book text-[14px] md:text-[24px] md:leading-[140%]">
                       15% uplift in product <br/>{" "}
                       conversion and cross-sell<br />{" "}
                       driven by Ella
                    </p>
            </div>

            <div className="flex flex-col text-left gap-[16px]">
                <h2 className="font-OneZero-Apparat-book text-[20px] md:text-[76px] md:leading-[50px]">  47 <br /> {" "}
                <span className="inline-block md:text-[43px] md:leading-[50px]">Messages</span></h2>
                    <p className="font-OneZero-Apparat-Book text-[14px] md:text-[24px] md:leading-[140%]">
                        <span className="font-OneZero-Apparat-Bold">Boost engagement</span> <br />{" "}
                        Customers interact with Ella <br />{" "}
                        47 times per year on average,<br />{" "}
                        turning every touchpoint into a <br />{" "}
                        lasting relationship
                    </p>
            </div>

             <div  className ={`flex flex-col text-left gap-[16px] ${right_grid}`}>
                <h2 className="font-OneZero-Apparat-book text-[20px] md:text-[76px] md:leading-[50px]">  80% <br /> {" "}
                <span className="inline-block md:text-[43px] md:leading-[50px]">Efficiency</span></h2>
                    <p className="font-OneZero-Apparat-Book text-[14px] md:text-[24px] md:leading-[140%]">
                        80% of customer queries <br />{" "}
                        are solved instantly by Ella<br />{" "}
                        in seconds.
                    </p>
            </div>
          </div>

         

        </div>
      
            <div className="flex flex-col md:hidden items-center text-center gap-[60px] w-full mt-[unset] pb-[unset]">

            
            <div className="flex flex-col gap-[12px] items-center">
                <h2 className="font-OneZero-Apparat text-[28px] leading-[32px]">
                With ella, banks can
                </h2>
            </div>

             
            {[
                {
                num: "60%",
                label: "Efficiency",
                desc: (
                    <>
                    Ella cut <span className="font-OneZero-Apparat-Bold">cost-to-serve</span> by 60%,<br/>{" "}
                    enabling 2X customer growth
                    <br/>{" "}
                    with 20% fewer bankers
                    </>
                )
                },
                {
                num: "15%",
                label: "Upsell",
                desc: (
                    <>
                    15% uplift in product conversion 
                    <br/>{" "}
                    and cross-sell driven by Ella
                    </>
                )
                },
                {
                num: "47",
                label: "Messages",
                desc: (
                    <>
                    <span className="font-OneZero-Apparat-Bold">Boost engagement</span><br/>{" "}
                    Customers interact with Ella<br/>{" "}
                    47 times per year on average,<br/>{" "}
                    turning every touchpoint into a<br/>{" "}
                    lasting relationship
                    </>
                )
                },
                {
                num: "80%",
                label: "Resolution",
                desc: (
                    <>
                    80% of customer queries are 
                    <br/>{" "}
                    
                    solved instantly by Ella in seconds
                    </>
                )
                }
            ].map((item, i) => (
                <div key={i} className="flex flex-col gap-[12px] items-center text-center">
                <h2 className="font-OneZero-Apparat-book text-[68px] leading-[36px]">
                    {item.num}<br/>{" "}
                    <span className="inline-block text-[28px] leading-[36px]">{item.label}</span>
                </h2>
                <p className="font-OneZero-Apparat-Book text-[18px] leading-[140%]">
                    {item.desc}
                </p>
                </div>
            ))}

            
            <div className="flex flex-col items-center text-center gap-[12px]">
                <img src={downArrow} className="w-[20px] h-[28px]" />
                <p className="font-OneZero-Apparat-Book text-[16px] leading-[140%]">
                Ella is not just changing
                <br/>{" "}
                how customers interact — she’s
                <br/>{" "}
                changing how a bank grows.

                </p>
            </div>

            </div>

      </div>
    </div>
  );
}
