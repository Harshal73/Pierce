import React from 'react'
import Bookmap from '../assets/Bookmap2.png'

export const Last = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
    text-white' >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full' >
        <div>
        <p className='pt-10 text-4xl font-bold '>Bookmap</p>
      </div>
     <div className="pt-2" >
      <img src={Bookmap} alt='book' className="h-50 w-100 mx-auto  md:w-full " />
     </div>
        <br/>
        <p>Bookmap is a high-performance trading platform. 
          It has set a new standard for realtime & replay 
          visualization of market data
          </p>
          <div className="text-blue-600" >
           <a href="https://bookmap.com/packages-comparison/ " >Check the official pricing</a>
           </div>
           <div className="text-green-400 font-medium" ><h3>our price : 4999 rs or 60 usd /- </h3></div>
        
        <button className="flex justify-center text-2xl hover:scale-105 duration-200" >Click here for more info
        </button>
        
    </div>
    </div>
  )
}
