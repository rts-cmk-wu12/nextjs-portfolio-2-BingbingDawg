import { IoIosArrowForward } from "react-icons/io";

export default function InTouchButton({buttonText}){
    return(
        <button className="text-[#FFFFFF] bg-[#3F8E00] border-[#62BA1B] border px-16 py-5 rounded flex items-center justify-center">
            {buttonText} <IoIosArrowForward />
        </button>
    )
}