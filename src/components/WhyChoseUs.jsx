import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { CgDanger } from "react-icons/cg";

const WhyChoseUs = () => {
    const cards = [
        { icon: BiSolidLike, heading: "Why chose us", para:  "farmGhar is the most trusted online platform for all its customers All our vendors are verified through NADRA so that none of our customers face any fraudulent activity" },
        { icon: TiTick, heading: "Why chose us", para:  "farmGhar is the most trusted online platform for all its customers All our vendors are verified through NADRA so that none of our customers face any fraudulent activity" },
        { icon: CgDanger, heading: "Why chose us", para:  "farmGhar is the most trusted online platform for all its customers All our vendors are verified through NADRA so that none of our customers face any fraudulent activity" }
    ]
  return (
    <div className='whyUsBgImage py-10 px-10 brightness-75 md:h-[70vh]'>
        <div className='drop-shadow-2xl '>
            <div className='text-center'>
                <h3 className='text-4xl md:text-6xl font-black py-10'>Why chose us</h3>
                <p className='mx-auto text-white text-lg font-black'>
                Taj birds is the largest online livestock and pet market where you can buy and sell anything 
                related to farming. It is a one-stop shop for all pet and animal lovers. Our Taj birds app is 
                easy to use and has access to vendors all around the globe. We feel it is our responsibility 
                to provide the most outstanding web experience for pet owners and farmers to foster a better 
                farming experience in Pakistan and worldwide
                </p>
            </div>
            <div className='hidden grid-cols-3  text-white py-10 gap-10 md:flex justify-center items-center'>
                {
                    cards.map((items, i) => {
                        return <div key={i} className='bg-black  py-5 px-5 rounded-lg'>
                        <div className='py-2'>
                            <span> {items.icon} </span>
                            <h3 className='text-lg font-black capitalize'> {items.heading} </h3>
                            <p className='mx-auto text-sm'>
                            {items.para}
                            </p>
                        </div>
                    </div>
                    })
                }
            </div>
            
        </div>
    </div>
  )
}

export default WhyChoseUs