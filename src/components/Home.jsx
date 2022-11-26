import React from "react";
import HeroImage from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to bg-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row">
        <div
          className="max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full px-4 md:flex-row"
        >
          <div className="flex flex-col justify-center h-full ">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              We are group of Engineers and traders
            </h2>
            <p className="text-gray-300 py-4 max-w-md">
              We have wide range of trading softwares for affordable price.
              Those are adavanced tools which help you to trade better with help
              of platform which connected with realtime datafeed, it provides
              market transparency for user..
            </p>
            <div>
              <Link to='products' smooth duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center
           rounded-md bg-gradient-to-r from bg-cyan-500 to-blue-500 cursor-pointer "
              >
                Products
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div className="pb-10" >
            <img
              src={HeroImage}
              alt="bateman"
              className=" rounded-2xl w-2/3 mx-auto  md:w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
