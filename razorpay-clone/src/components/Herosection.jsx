import React from 'react'
import razorbg from "../assets/razorbg.avif"    
const Herosection = () => {
  return (
    <div className="w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto">
      <div className="space-y-5">
        <h1 className="font-poppins font-bold text-[40px] leading-1.2 text-blue-950">Effortless Banking <br /><span className="text-black">for India's boldest disruptors</span></h1>
        <p className="text-gray-700 opacity-80 text-[16px] leading-[1.2] ">Powerful Automation | Smart Dashboard | Integrated Access</p>
        <button className="bg-blue-600 hover:bg-blue-900 transition-all duration-200 text-white px-[18px] py-[10px] rounded-md font-bold ">Sign Up Now</button>
        <button className="px-6 text-blue-600 hover:underline transition-all duration-500 font-bold">Know More</button>
      </div>
      <div>
        <img src={razorbg} alt="" srcset="" width="100%" height="100%"  className='max-w-[680px]'/>
      </div>
    </div>
  )
}

export default Herosection 