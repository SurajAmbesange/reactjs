import { useState } from "react";
import India from "../assets/India.png";
import razor from "../assets/razor.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950">
      <div className="flex justify-between items-center mx-auto w-[1080px]">
        <a href="#"><img src={razor} alt="Razorpay Logo" width="150px" height="100px" /></a>
          <ul className="flex space-x-4 hidden md:flex">
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Payments</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Banking+</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Payroll</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Engage</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Partners</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Resources</a></li>
              <li className="relative text-white font-poppins font-bold hover:text-blue-500 cursor-pointer transition-all duration-200"><a href="#">Pricing</a></li>
          </ul>
          <div className="flex space-x-6">
              <img src={India} alt="" srcset="" width="48px" height="20px" />
            <button className="font-bold text-blue-700 border border-blue-800 px-5 py-3 rounded">Login</button>
            <button className="bg-blue-600 mx-4 lg:mx-6 hover:bg-blue-800 font-bold text-white border border-blue-800 px-2 py-1 rounded">Sign Up</button>
          </div>
      </div>  
    </nav>

    //Hero Section
    
  );
};

export default Navbar;
