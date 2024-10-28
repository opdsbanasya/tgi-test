import React from 'react';
import banner from "../assets/building-view.jpg"

const Banner = ({ bannerImg }) => {
    return (
        <div className='w-full h-[25vh] sm:h-[30vh] lg:h-[40vh] xl:h-[80vh] md:h-[35vh] mx-auto overflow-hidden md:rounded-xl rounded-lg'>
            <img className="w-full h-full scale-110 object-cover object-bottom" src={bannerImg ? bannerImg : banner} />
        </div>
    );
}

export default Banner;
