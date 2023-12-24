import React from 'react'
import Logo from '../assets/Single-Flying-Bird.png';
import SearchComp from './SearchComp';
import PrimaryButtons from './PrimaryButtons';
import Navbar from './Navbar';

const TopSec = () => {

    const topLinks = [
        {name: "news letter", link: "#news"},
        {name: "Contact us", link: "#contact"},
        {name: "faqs", link: "#faqs"}
    ]
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
                {
                    topLinks.map((items) => {
                        return <h3 className='text-base font-black uppercase cursor-pointer
                        border-r-2  border-gray-500 px-4 py-2'> 
                        <a href={items.link}> {items.name} </a> </h3>
                    })
                }
            </div>
        </div>
    </div>
    <div className='grid grid-cols-6 md:grid-cols-10 w-full h-auto bg-green-300 py-5 items-center'>
        <div className='w-full col-span-2 md:col-span-3  flex justify-center items-center px-3'>
            <img src={Logo} width={90} alt='logo'/>
            <h3 className='text-white text-1xl font-black font-signature'>Humming Bird</h3>
        </div>
        <div className='col-span-4 px-8 justify-center items-center'>
            <SearchComp className=''/>
        </div>
        <div className='hidden md:col-span-3 md:flex justify-center items-center'>
            <PrimaryButtons name='Login' />
            <PrimaryButtons name='Registration' />
        </div>
    </div>
    <div className='grid grid-cols-4 md:grid-cols-12 w-full justify-between items-center 
    bg-green-400 py-4 px-4 uppercase font-black cursor-pointer'>
        <div className='col-span-2 md:col-span-3 text-center'>
            <h3 className='text-white text-base'>browse category</h3>
        </div>
        <div className='col-span-2 flex md:col-span-9 justify-end md:justify-center items-center'>
            <Navbar />
        </div>
        
    </div>
    </section>
  )
}

export default TopSec