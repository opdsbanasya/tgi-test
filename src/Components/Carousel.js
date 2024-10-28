import React from 'react';
import CarouselBack from './CarouselBack';
import CarouselTitle from './CarouselTitle';

const Carousel = () => {
    return (
        <div className='w-full mx-auto '>
            <CarouselBack />
            <CarouselTitle />
        </div>
    );
}

export default Carousel;
