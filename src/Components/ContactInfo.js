import { IoMdCall, IoMdMail } from "react-icons/io";
import { CONTACT_INFO } from "../utils/constants";

const ContactInfo = () => {
    return (
        <div className="flex justify-between lg:flex-row flex-col xl:w-[80%] w-[90%] mx-auto lg:mt-16 mt-5">
            <h3 className="md:text-3xl text-2xl font-semibold font-serif text-center text-black my-5 lg:my-0">Contact Info</h3>
            <div>
                <h4 className="w-full flex items-center justify-between gap-5 md:gap-28 mr-10 cursor-pointer md:text-2xl text-lg py-4 border-y-2 border-zinc-500 border-spacing-1  ">
                    <IoMdMail className="bg-black text-white md:size-10 size-7 p-[6px] rounded-full" />
                    {CONTACT_INFO?.email}</h4>
                <h4 className="w-full flex items-center justify-between gap-5 md:gap-28 cursor-pointer md:text-2xl text-lg py-4 border-b-2 border-zinc-500 border-spacing-1  ">
                    <IoMdCall className="bg-black text-white md:size-10 size-7 p-[6px] rounded-full" />
                    {CONTACT_INFO?.phone1} </h4>
                <h4 className="w-full flex items-center justify-between gap-5 md:gap-28 cursor-pointer md:text-2xl text-lg py-4 border-b-2 border-zinc-500 border-spacing-1  ">
                    <IoMdCall className="bg-black text-white md:size-10 size-7 p-[6px] rounded-full" />
                    {CONTACT_INFO?.phone2}</h4>
            </div>

        </div>
    );
}

export default ContactInfo;
