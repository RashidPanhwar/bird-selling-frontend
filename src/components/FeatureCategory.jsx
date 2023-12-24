import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import FeatureImage from '../assets/featureCategory/featureCategory.png';
import one from '../assets/featureCategory/one.png';
import two from '../assets/featureCategory/two.png';
import three from '../assets/featureCategory/three.png';
import four from '../assets/featureCategory/four.png';
import five from '../assets/featureCategory/five.png';
import six from '../assets/featureCategory/six.png';



const FeatureCategory = ({category, imageSource}) => {

  const featureList = [
    {name: "Feature Post 1", img: one},
    {name: "Feature Post 2", img: two},
    {name: "Feature Post 3", img: three},
    {name: "Feature Post 4", img: four},
    {name: "Feature Post 5", img: five},
    {name: "Feature Post 6", img: six},
  ]
  return (
    <div className='py-10 '>
      <div className='flex items-center bg-white px-10'>
        <h3 className='text-2xl uppercase font-black underline py-5'>{category}</h3>
        <p className='hidden md:flex items-center text-lg ml-10'>view more 
          <span> <FaArrowDown size={15}/> </span>
        </p>
      </div>
      <div className='bg-green-400'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-10 py-10 gap-10'>
        <div className='px-5 py-10 border-l-4 border-r-4 border-gray-600'>
          <img src={imageSource} alt='feature' />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-10'>
          
            {
              featureList.map((items, i) => {
                return <div key={i}>
                    <img src={items.img} alt='feature' />
                    <h3>{items.name}</h3>
                </div>
              })
            }
        </div>
      </div>
      </div>
    </div>
  )
}

export default FeatureCategory