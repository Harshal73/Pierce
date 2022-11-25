import React from 'react'
import HeroImage from '../assets/hero.jpg'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to bg-gray-800'>

      <div className='max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row' >

        <div className='max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full px-4 md:flex-row'>

          <div className='flex flex-col justify-center h-full ' >

          <h2 className='text-4xl sm:text-7xl font-bold text-white' >We are group of Engineers and traders</h2>
          <p>
            We have wide range of trading softwares for affordable price.
            Those are adavanced tools which help you to trade better with  help of 
            platform which connected with realtime datafeed, it provides market 
            transparency for user..
            
          </p>
          <button>
            Products 
            <span>
                <MdOutlineKeyboardArrowRight/>
            </span>
          
          </button>

        </div>
        <div>
        </div>
        <img src={HeroImage}  alt='bateman' className='rounded-2xl mx-auto min-w-min md:w-full ' />
      </div>
      </div>
   
    </div>
  )
}

export default Home