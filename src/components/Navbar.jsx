import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    
    const [toggle, setToggle] = useState(false);
    const navLinks = [
        {name: "Home", link: "#home"},
        {name: "about us", link: "#about"},
        {name: "shop", link: "#shop"},
        {name: "maweshi mandi", link: "#maweshi_mandi"},
        {name: "blogs", link: "#blogs"},
        {name: "contact", link: "#contact"}
    ]
    return (
        <div className='flex justify-end md:justify-center items-center w-full text-white'>
            <ul className='hidden md:flex gap-4'>
                {navLinks.map((items, i) => {
                    return <li key={i} className='cursor-pointer capitalize text-white font-black hover:scale-105 duration-200'> 
                        <a href={items.link}> {items.name} </a> 
                        
                    </li>
                })}
            </ul>
            <div onClick={() => {setToggle(!toggle)}} className='md:hidden z-20 cursor-pointer pr-4 text-white'>
                { toggle ? <FaTimes size={30}/> : <FaBars size={30} /> }
            </div>
            { toggle && (
            <ul className='md:hidden z-10 flex flex-col text-white justify-center items-center absolute
            top-0 left-0 w-full h-screen bg-gradient-to-b from-green-800 to-green-400'>
                {navLinks.map((item, i) => {
                    return <li key={i} className='cursor-pointer capitalize text-2xl px-4 py-6'> 
                        <a href={item.link}> {item.name} </a> 
                    </li>
                })}
            </ul>
            )}
        </div>
  )
}

export default Navbar