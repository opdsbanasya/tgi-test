import { useNavigate } from "react-router-dom";


const Pricing = () => {

    const navigate = useNavigate();

    const navigateContactUs = (id) => {
        navigate("/contact-form");
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div id="pricing" className="w-full font-light pb-10 space-y-4 md:px-28 px-10">
            <h2 className="w-full md:w-[90%] text-xl md:text-2xl lg:text-3xl font-semibold mx-auto text-center md:text-left font-serif pt-5 md:py-10">Pricing</h2>
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col bg-zinc-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col justify-between items-start gap-3 p-6">
                        <div>
                            <h3 className="md:text-2xl text-lg font-semibold text-gray-900">Professional</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                This plan is for those who have a team already and running a large business.
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-md font-semibold text-black">Starting from ₹2999</span>
                        </div>
                    </div>

                    {/* Right section with button */}
                    <div className="p-6 pt-0 flex items-center">
                        <button onClick={() => navigateContactUs("contact-form")} className="w-fit mx-auto py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
                            Enquiry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
