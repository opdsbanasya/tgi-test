import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CAROUSEL_DATA } from '../utils/constants';

const CarouselTitle = () => {

  const navigate = useNavigate();

  const navigateContactUs = (id) => {
    navigate("/contact-form");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='lg:block hidden w-full h-screen pl-[8vw] pt-[18vw] absolute inset-0 bg-gradient-to-r from-black text-white space-y-5'>
      <h1 className='text-5xl font-bold font-serif'>{CAROUSEL_DATA?.name}</h1>
      <p className=' w-[40%] font-light tracking-wide'>{CAROUSEL_DATA?.about}</p>
      <button
        className='cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]'
        onClick={() => navigateContactUs("contact-form")}
      >Reach out</button>
    </div>
  )
}

export default CarouselTitle
