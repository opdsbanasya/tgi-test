import { IoMdCall, IoMdMail } from "react-icons/io";
import homeBg from "../assets/home1.png";
import { CONTACT_INFO } from "../utils/constants";

const Address = () => {
    return (
        <div style={{backgroundImage:`url(${homeBg}})`}} className="w-full bg-none text-center font-light my-16 py-10 space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light font-serif">{CONTACT_INFO?.name}</h2>
            <p className="text-sm md:text-lg w-[75%] sm:[70%] md:w-full mx-auto">{CONTACT_INFO?.address}</p>
            <div className="flex md:flex-row flex-col w-[75%] sm:[70%] md:w-full mx-auto justify-center md:gap-8 gap-3">
                <h4 className="flex items-center gap-3 mr-10 cursor-pointer"><IoMdMail className="bg-black text-white md:size-10 size-7 p-[6px] rounded-full" />                     
                    {CONTACT_INFO?.email}</h4>
                <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-black text-white md:size-10 size-7 p-[6px] rounded-full" />
                    {CONTACT_INFO?.phone1} </h4>
                <h4 className="flex items-center gap-3 cursor-pointer"><IoMdCall className="bg-black text-white md:size-10 size-7 p-[6px] rounded-full" />
                    {CONTACT_INFO?.phone2}</h4>
            </div>
            <div className="flex justify-center gap-5 text-xs md:text-sm">
                <p><strong>Check-in Time: </strong>12:00PM</p>
                <p><strong>Check-out Time: </strong>11:00AM</p>
            </div>
        </div>
    );
}

export default Address;