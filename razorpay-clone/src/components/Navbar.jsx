import { useState } from "react";
import India from "../assets/India.png";
import razor from "../assets/razor.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950">
      <div className="flex justify-between items-center px-4 py-3 mx-auto w-[1080px]">
        <a href="#"><img src={razor} alt="Razorpay Logo" width="150px" /></a>
          <ul className="flex space-x-4 hidden md:flex">
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Payments</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Banking+</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Payroll</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Engage</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Partners</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Resources</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Pricing</a></li>
          </ul>
          <div className="flex space-x-6 items-center">
              <img src={India} alt="" srcset="" width="48px" height="20px" className="rounded"/>
            <button className="px-5 py-2 bg-white hover:bg-gray-100 font-bold text-blue-600 text-sm border border-blue-900 rounded">Login</button>
            <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold text-sm text-white border border-blue-800 rounded">Sign Up</button>
          </div> 
      </div>  
    </nav>  
  );
};

export default Navbar;
