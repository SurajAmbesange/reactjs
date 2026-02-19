import { useState } from "react";
import India from "../assets/India.png";
import razor from "../assets/razor.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-gray-600 w-full">
      <div className="flex justify-between items-center mx-auto px-20">
        <a href="#"><img src={razor} alt="Razorpay Logo" width="150px" height="100px" /></a>
          <ul className="flex space-x-4 hidden md:flex">
              <li className="relative text-gray-700 font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Payments</a></li>
              <li className="relative text-gray-700 font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Banking+</a></li>
              <li className="relative text-gray-700 font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Payroll</a></li>
              <li className="relative text-gray-700 font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Engage</a></li>
              <li className="relative text-gray-700 font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Partners</a></li>
              <li className="relative text-gray-700 font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Resources</a></li>
              <li className="relative text-gray-700 font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Pricing</a></li>
          </ul>
          <div className="flex flex-col justify-center items-center">
          <a href="#">
            <img src={India} alt="" srcset="" />
            <button className="bg-transparent hover:bg-gray-100  font-bold text-blue-700 font-bold border border-blue-800 px-2 py-1 rounded">Login</button>
            <button className="bg-blue-600 mx-4 lg:mx-6 hover:bg-blue-800 font-bold text-white font-bold border border-blue-800 px-2 py-1 rounded">Sign Up</button>
          </a>
          </div>
      </div>  
    </nav>

    //Hero Section
    
  );
};

export default Navbar;
