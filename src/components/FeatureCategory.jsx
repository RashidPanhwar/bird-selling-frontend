import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import FeatureImage from '../assets/heroBg.jpg';

const FeatureCategory = () => {
  return (
    <div className='py-10 '>
      <div className='flex items-center bg-white px-10'>
        <h3 className='text-2xl uppercase underline py-5'>feature categories</h3>
        <p className='hidden md:flex items-center text-lg ml-10'>view more 
        <span> <FaArrowDown size={15}/> </span>
        </p>
      </div>
      <div className='bg-green-400'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 py-10 gap-10'>
        <div className='px-5 py-10 border-l-4 border-r-4 border-gray-600'>
          <img src={FeatureImage} alt='feature' />
        </div>
        <div className='grid grid-cols-3 items-center justify-center gap-10'>
          <div>
            <img src={FeatureImage} alt='feature' />
            <h3>Rashid Panhwar</h3>
          </div>
          <div>
            <img src={FeatureImage} alt='feature' />
            <h3>Rashid Panhwar</h3>
          </div>
          <div>
            <img src={FeatureImage} alt='feature' />
            <h3>Rashid Panhwar</h3>
          </div>
          <div>
            <img src={FeatureImage} alt='feature' />
            <h3>Rashid Panhwar</h3>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        
      </div>
      </div>
    </div>
  )
}

export default FeatureCategory