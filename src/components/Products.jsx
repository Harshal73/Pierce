import React from "react";
import ninja1 from "../assets/ninjafootprints.png";

const Products = () => {
  return (
    <div
      name="products"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800
    text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold ">NinjaTrader Platform</p>
        </div>
        <div className="mt-10">
          <img
            src={ninja1}
            alt="ninja"
            className="h-50 w-100 mx-auto  md:w-full "
          />
        </div>
        <br />
        <p>
          NinjaTrader 8 platform-8.0.2.2.2 Live trading,Orderflow trading +,license vendor
          patched, multibroker.
        </p>
        <p>Ninjatrader helps you to trade futures,stocks,forex with real-time market datafeed.
           </p>
           <div className="text-blue-600" >
           <a href="https://bookmap.com/packages-comparison/ " >Check the official pricing</a>
           </div>
           <div className="text-green-400 font-medium" ><h3>our price : 7999 rs or 98 usd /-</h3></div>
        
          <button  className=" flex justify-center text-2xl hover:scale-105 duration-200">Click here for more info</button>
        
      </div>
    </div>
  );
};

export default Products;
