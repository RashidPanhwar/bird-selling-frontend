import React from 'react'
import PrimaryButtons from './PrimaryButtons'

const HeroSec = () => {
  return (
    <div className='flex flex-col w-full h-[70vh] justify-center items-center bgImage backdrop-blur-md'>
        <div className='text-white mx-auto text-center px-5'>
            <h3 className='text-4xl font-black uppercase'>Largest pakistan's online pet store</h3>
            
        </div>
        <div className='flex mt-10'>
            <PrimaryButtons className='' />
            <PrimaryButtons />
        </div>
    </div>
  )
}

export default HeroSec