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
    navigate('/content')
  }

  

  const handleSubmits=()=>{
    navigate('/register')
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
            className=" mx-auto max-w-screen-3xl bg-cover bg-center ml-50 flex items-center justify-center text-center bg-gray-100 h-300"
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

    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
      <div className="container flex justify-center items-center bg-gray-100">
        <div className=" h-95 mb-3 w-90  bg-cover m-3 mt-10 ml-0 rounded-3xl bg-gray-100 opacity-90 hover:bg-amber-500 transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 " 
        style={{
          backgroundImage:`url(${bgImg})`
        }}
        >
         <div className="w-full h-15 flex overflow-hidden">
          <h1 className="font-extrabold text-white m-1 rounded-t-2xl text-xl">
            Reset Your Mind, Reclaim Your Peace
            </h1>
            </div>
            <div className="h-57 w-full  overflow-hidden">
            <p className="text-xl font-bold text-black mt-2 overflow-hidden">Mental health is the state of our emotional, psychological, and social well-being. It affects how we think, feel, and act. Good mental health helps us manage stress, connect with others, and make healthy decisions.

        </p>
        </div> 
        <div className="h-15 ">
          <button
          onClick={handleSubmit}
          className="text-black w-30 font-light text-xl bg-red-500 h-10 bottom-2 mt-2  hover:text-blue-500 rounded-2xl hover:cursor-pointer"
          type="button"

          >
            Know More
          </button>
              </div>
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


<div className="mx-auto max-w-screen-xl bg-gray-100 h-150 ">
  <FAQ/>
        <div className="w-180 ml-60 rounded-2xl  h-10 text-black  flex justify-center mt-3  ">
        <p className="font bold text-2xl  h-10 w-180">Ready To Explore And Relax Your Mind</p>
      </div>
      <div className="mt-3 flex justify-center mr-30 ">
         <button
         onClick={handleSubmits}
         type="button"
         className="bg-red-600 text black  w-30 h-10 ml-2 hover:cursor-pointer  "
         > Get Started</button>
      </div>
  </div>
  



   <div className="max-w-screen-xl mx-auto h-30 bg-gray-100">
    <div className="flex justify-center text-black font-semibold ">
      <p className="mt-4 mr-30 ">Thanks For Visiting Our Website</p>
    </div>
    <div className="max-w-screen-2xl h-10 p-1 mt-2">
      <p>Give Your <Link 
      to='/feedback'
      className="text-blue-500 mr-30 font-extralight "
      >Feedback</Link></p>
    </div>

   </div>
    

    </>
  );
};

export default Home;