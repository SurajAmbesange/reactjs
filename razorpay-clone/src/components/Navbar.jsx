import { useState } from "react";
import razor from "../assets/razor.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700">
      <div className="container px-4 mx-auto text-sm">
        <div className="flex justify-center items-center gap-2">
          <img className="w-50 h-15 mr-2" src={razor} alt="" />  
        
          <ul className="flex space-x-600 justify-center gap-1">
            <li>
              <a href="" className="text-gray-300">Home</a>
              <a href="" className="text-gray-300">About</a>
              <a href="" className="text-gray-300">Services</a>
              <a href="" className="text-gray-300">Contact</a>
            </li>
          </ul>
          
        </div>
      </div>    
    </nav>
  );
};

export default Navbar;
