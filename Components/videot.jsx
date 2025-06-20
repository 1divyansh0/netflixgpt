import React from 'react'
import { FaGooglePlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
const videot = ({movies}) => {
  return (
    <div className=' w-screen aspect-video flex flex-col justify-center  absolute bg-gradient-to-r from-black'>
    <div className='flex flex-col w-[50%] py-10 md:py-5'>
    <span className=' text-md mx-6 text-white font-bold md:text-5xl font-stretch-50% font-sans '>{movies?.
    original_title
     }</span>

     <p className=' hidden md:inline-block p-3 text-white px-6 w-[65%] break-words'>{movies?.overview
}   </p>
     

     <div className='p-6 flex gap-2 w-full'>
      <button className=' hover:bg-gray-500 w-30 h-10 bg-white rounded-md flex justify-center items-center gap-1 p-2'>
        <FaGooglePlay/>
        <h1 className='font-semibold py-2 text-sm md:text-md'>Play</h1>
      </button>
      <button className='  hover:bg-gray-500  w-60 h-10 bg-white rounded-md flex justify-center items-center gap-1'>
        <FaCircleInfo className='' />
        <h1 className='font-semibold py-2 text-sm md:text-md'>More Info</h1>
      </button>
     </div>

    </div>
    </div>
  )
}

export default videot