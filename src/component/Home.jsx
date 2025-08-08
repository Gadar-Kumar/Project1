import { useState } from "react"
import React  from 'react'
import { Outlet, useNavigate } from "react-router"
import { Link } from "react-router"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import FAQ from "../FAQ";

const slides = [
  {
    image: 'https://i.pinimg.com/1200x/9d/a7/65/9da7650ebf3e499c28551bcdcb9d52dc.jpg',
    text: 'Mental Health Matter',
  },
];

const bgImg='https://i.pinimg.com/1200x/a9/79/79/a97979c1721101d56dc238b72da20a9a.jpg'
const bgImg1='https://i.pinimg.com/1200x/6a/e7/d1/6ae7d176e753b4605ee0198a58f1119a.jpg'
const bgImg2='https://i.pinimg.com/736x/0a/47/9c/0a479c36741dc105ff0af4835aa8b066.jpg'

function Home() {

  const navigate=useNavigate();

  const handleSubmit=()=>{
    navigate('/login')
  }

  return (
    <>
    
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-screen h-200 bg-cover bg-center ml-50 flex items-center justify-center text-center bg-gray-300"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className=" bg-black/40  " />
            <h1 className=" text-orange-400 text-4xl font-bold ml-2 opacity-100 bg-black/40">
              {slide.text}
            </h1>
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="h-110 flex w-screen mt-0 ">
      <div className="container flex justify-center items-center bg-gray-300">
        <div className="flex h-95 mb-3 w-90  bg-cover m-3 mt-10 ml-0 rounded-3xl bg-gray-600 opacity-90 hover:bg-amber-500 transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 " 
        style={{
          backgroundImage:`url(${bgImg})`
        }}
        >
         
          <h1 className="font-bold text-white m-1 text-3xl rounded-t-2xl">
            Reset Your Mind, Reclaim Your Peace
            <p className="text-xl font-extrabold text-black mt-4">Mental health is the state of our emotional, psychological, and social well-being. It affects how we think, feel, and act. Good mental health helps us manage stress, connect with others, and make healthy decisions.

        </p>
          <button
          onClick={handleSubmit}
          className="text-black w-30 font-light text-xl bg-red-500 h-10 bottom-2 mt-10  hover:text-blue-500 rounded-2xl hover:cursor-pointer"
          type="button"

          >
            Know More
          </button>
          </h1>     
        </div>


        <div className="container flex justify-center items-center rounded-2xl opacity-80 bg-gray-600  h-95 mb-3 mt-10 w-90 m-3 bg-cover hover:bg-amber-500 translate-z-1 transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 "
        style={{backgroundImage:`url(${bgImg1})`}}
        >
          hello
        </div>
        <div className="container flex w-90  h-95 mb-3 mt-10 opacity-100 bg-gray-600 m-3 rounded-2xl bg-cover hover:bg-amber-500 transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-110  hover:rotate-x-6 transform"
        style={{backgroundImage:`url(${bgImg2})`}}
        ></div>
      </div>
    </div>


<div className="w-screen h-150 bg-gray-600 mt-0 rounded-b-2xl  ">
  <FAQ/>
    </div>

    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Thanks for visiting our website</h2>
      <p className="text-gray-700">
        We are dedicated to providing the best services for your needs. Explore our website to learn more about what we offer.
      </p>
      <p>Give your <Link to='/feedback' className="text-blue-400">feedback</Link> </p>
    </div>

    

    </>
  );
};

export default Home;