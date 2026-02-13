import { useState } from "react";
import razor from "../assets/razor.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-blue px-2 py-4 border-b border-gray-600 w-full">
      <div className="flex justify-between items-center pl-4 pr-4">
        <a href="#"><img src={razor} alt="Razorpay Logo" width="150px" height="100px" /></a>
          <ul className="flex space-x-4">
              <li className="md:flex text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Home</a></li>
              <li className="md:flex text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">About</a></li>
              <li className="md:flex text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Services</a></li>
              <li className="md:flex text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Contact</a></li>
           
          </ul>
          <a href="#">
            <button className="bg-blue-500 hover:bg-blue-300 font-bold text-white px-2 py-1 rounded">Know More</button>
          </a>
      </div>
    </nav>

    //Hero Section
    
  );
};

export default Navbar;
