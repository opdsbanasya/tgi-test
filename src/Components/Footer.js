import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { CONTACT_INFO, LOGO } from "../utils/constants";

const Footer = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className="w-full py-10 px-4 md:px-28 flex flex-col md:flex-row justify-center items-start">
                <div className="w-full md:w-3/12 flex justify-center mb-5 md:mb-0">
                    <img src={LOGO} className="max-w-full h-auto" />
                </div>
                <div className="w-full md:w-4/12 md:ml-28 md:mr-14 space-y-5 text-xl">
                    <h4 className="text-2xl">Contact Us</h4>
                    <h4 className="flex items-center md:text-2xl text-lg gap-3 cursor-pointer">
                        <IoMdMail className="bg-white text-black size-6 p-1 rounded-full" />
                        {CONTACT_INFO?.email}
                    </h4>
                    <h4 className="flex items-center md:text-2xl text-lg gap-3 cursor-pointer">
                        <IoMdCall className="bg-white text-black size-6 p-1 rounded-full" />
                        {CONTACT_INFO?.phone1}
                    </h4>
                    <h4 className="flex items-center md:text-2xl text-lg gap-3 cursor-pointer">
                        <IoMdCall className="bg-white text-black size-6 p-1 rounded-full" />
                        {CONTACT_INFO?.phone2}
                    </h4>
                </div>
                <div className="w-full md:w-4/12 text-xl space-y-5">
                    <h4 className="text-2xl md:py-0 py-4 mt-2">Get In Touch</h4>
                    <div className="flex gap-4">
                        <FaFacebook className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaLinkedin className="cursor-pointer" />
                        <FaXTwitter className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <h5 className="w-full text-lg text-white text-center mx-4">All Copyright &copy; Reserves</h5>
        </div>

    );
}

export default Footer;
