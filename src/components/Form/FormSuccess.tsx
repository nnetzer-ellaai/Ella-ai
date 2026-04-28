import Link from "../Ui/Link";
import marked from "../../assets/icons/marked.png";
import IconButton from "../Ui/IconButton";
import qrCode from "../../assets/qr-code.png";
export default function FormSuccess() {
  return (
    <div className="flex flex-col gap-[19px] relative z-10 pb-[20px]">
      {/* <img className="mx-auto md:mx-0 w-[35px] h-[35px] md:w-[53px] md:h-[53px]" src={marked} alt="marked" /> */}
      <h2 className="text-start md:text-start text-[28px] leading-[50px] md:leading-[50px]  md:text-[42px]  whitespace-nowrap">
       Thanks.
      </h2>
      <p className="text-start md:text-start text-[16px] leading-[120%] md:leading-[30px] md:text-[24px]">
       We’ve got your details and will be in 
        <br className="md:hidden" />{" "}
        touch soon.
      </p>

   {/* <button onClick={openAppStore} className="md:hidden text-white bg-blue rounded-[33px] py-[11px] px-[36px] w-fit mx-auto">
    להורדה
   </button>
   <img className="hidden md:block w-[150px] h-[150px]" src={qrCode} alt="qr" /> */}
    </div>
  );
}
