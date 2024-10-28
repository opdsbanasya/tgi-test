import Banner from "./Banner";
import buildingImg from "../assets/building.jpg";
import Facility from "./Facility";
import { FACILITIES_DATA, OTHER_FAC } from "../utils/constants";
import OtherFacilities from "./OtherFacilities";

const Facilities = () => {
    return (
        <div className="w-full min-h-[50vh] px-5 md:px-10 lg:px-20 xl:px-28 lg:pb-10 py-7">
            <Banner bannerImg={buildingImg} />
            <h2 className="w-full md:w-[90%] text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light mx-auto text-center font-serif py-7 md:py-10">Facilities at TGI Grand Fortuna, Hosur</h2>
            <div className="flex items-center justify-center xl:gap-5 lg:gap-10 md:gap-8 gap-5 flex-wrap">
                {FACILITIES_DATA.map((item) => (
                    <Facility key={item.id} item={item} />
                ))}
            </div>
            <div className="w-full py-10 px-2 mt-20 flex md:flex-nowrap flex-wrap justify-evenly items-center md:gap-20 gap-5 bg-zinc-200 rounded-xl">
                {OTHER_FAC.map(item => (
                    <OtherFacilities item={item} />
                ))}
            </div>
        </div>
    );
}

export default Facilities;