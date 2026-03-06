import React from 'react'
import razorbg from "../assets/razorbg.avif"    
const Herosection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-white-500 to-blue-50 py-6">

    <div className=" w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto">
      <div className="space-y-5">
        <h1 className="font-poppins font-bold text-[40px] leading-1.2 text-blue-950">Effortless Banking <br /><i data-feather="check" className='text-green-300'></i><span className="text-black">for India's boldest disruptors</span></h1>
        <p className="text-gray-700 opacity-80 text-[16px] leading-[1.2] ">Powerful Automation | Smart Dashboard | Integrated Access</p>
        <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 cursor-pointer text-white px-[18px] py-[10px] rounded-md font-bold ">Sign Up Now</button>
        <a className="px-6 text-blue-600 hover:underline cursor-pointer transition-all duration-500 font-bold">Know More</a>
      </div>
      <div>
        <img src={razorbg} alt="" srcset="" width="100%" height="100%"  className="w-full max-w-[680px]"/>
      </div>
    </div>
      <div className="w-10/12 max-w-[1080px] font-bold flex justify-between mx-auto items-center py-4 inset-shadow-md px-4 rounded-lg bg-white">
        <h2>Looking for products?</h2>
          <div className="bg-blue-200 opacity-70 px-4 py-1 rounded-lg">
            <img src="" alt="" srcset=""/>
            <p className="text-blue-600">Accept Payments</p>
          </div>
          <div className="bg-blue-200 opacity-70 px-4 py-1 rounded-lg"> 
            <img src="" alt="" srcset=""/>
            <p className="text-blue-600">Make Payouts</p>
          </div>
          <div className="bg-blue-200 opacity-70 px-4 py-1 rounded-lg">
            <img src="" alt="" srcset=""/>
            <p className="text-blue-600">Get Credit</p>
          </div>
          <div className="bg-blue-200 opacity-70 px-4 py-1 rounded-lg">
            <img src="" alt="" srcset=""/>
            <p className="text-blue-600">Accept Payments</p>
          </div>
          <div className="bg-blue-200 opacity-70 px-4 py-1 rounded-lg"> 
            <img src="" alt="" srcset=""/>
            <p className="text-blue-600">Create Payment links</p>
          </div>
          <div className="bg-blue-200 opacity-70 px-4 py-1 rounded-lg">
            <img src="" alt="" srcset="" />
            <p className="text-blue-600 opacity-70 px-4 py-1 rounded-lg"> Something Else</p>
          </div>
      </div>
    </div>
    
  )
}

export default Herosection  