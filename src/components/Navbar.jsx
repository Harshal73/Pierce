import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "products",
  },
  {
    id: 4,
    link: "contact",
  },
];

const Navbar = () => {
 
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black">
      <div>
        <h1 className="font-signature text-4xl  px-8 ml-2">Pierce & Pierce</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({id, link}) => (
          <li key={link.id} className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200">
            {link}
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10
       text-gray-100 md:hidden" >
        {nav? <FaTimes size={30}/> :<FaBars size={30}/> }
      </div>
      
      {nav && (

      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full
      h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
        {links.map(({id,link}) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {link}
              </li>
        ))}
      </ul>

      ) }

    </div>

  );
};

export default Navbar;
