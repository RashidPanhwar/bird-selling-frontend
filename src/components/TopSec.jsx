import React from 'react'
import Logo from '../assets/Single-Flying-Bird.png';
import SearchComp from './SearchComp';
import PrimaryButtons from './PrimaryButtons';
import { IoIosMenu } from "react-icons/io";

const TopSec = () => {
  return (
    <section>
    <div className='flex w-full h-10 bg-green-400 '>
        <div className='w-full flex items-center justify-center
        md:justify-between md:items-center md:ml-10'>
            <div>
                <h3 className='text-base text-white uppercase font-black
                cursor-pointer'>free shipping for all pakistan</h3>
            </div>
            <div className='hidden md:flex max-w-screen-lg justify-center items-center
            gap-4 pr-10 text-white right-8 '>
                <h3 className='text-base font-black uppercase cursor-pointer'>news letter</h3>
                <h3 className='text-base font-black uppercase border-r-2 border-l-2 
                border-gray-500 px-4 py-2 cursor-pointer'>contact us</h3>
                <h3 className='text-base font-black uppercase cursor-pointer'>faqs</h3>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-6 md:grid-cols-10 w-full h-auto bg-green-300 py-5 items-center'>
        <div className='w-full col-span-2 md:col-span-3  flex justify-center items-center'>
            <img src={Logo} width={90} alt='logo'/>
            <h3 className='text-white text-1xl font-black font-signature'>Humming Bird</h3>
        </div>
        <div className='col-span-4 px-4 justify-center items-center'>
            <SearchComp className='w-30'/>
        </div>
        <div className='hidden md:col-span-3 md:flex justify-center items-center'>
            <PrimaryButtons />
            <PrimaryButtons />
        </div>
    </div>
    <div className='grid grid-cols-4 md:grid-cols-12 w-full justify-between items-center 
    bg-green-400 py-4 px-4 uppercase font-black cursor-pointer'>
        <div className='col-span-2 md:col-span-3 text-center'>
            <h3 className='text-white text-base'>browse category</h3>
        </div>
        <div className='col-span-2 flex justify-end items-center md:hidden'>
            <IoIosMenu className='text-white text-3xl font-black border-2 
            border-white rounded-sm'/>
        </div>
        <div className='hidden md:flex col-span-9 text-white justify-center 
        items-center gap-4'>
            <h3 className='font-black text-base cursor-pointer uppercase'>Home</h3>
            <h3 className='font-black text-base cursor-pointer uppercase'>about us</h3>
            <h3 className='font-black text-base cursor-pointer uppercase'>shop</h3>
            <h3 className='font-black text-base cursor-pointer uppercase'>maweshi mandi</h3>
            <h3 className='font-black text-base cursor-pointer uppercase'>blogs</h3>
            <h3 className='font-black text-base cursor-pointer uppercase'>contact us</h3>
        </div>
    </div>
    </section>
  )
}

export default TopSec