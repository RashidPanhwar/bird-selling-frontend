import React from 'react'

const PrimaryButtons = (text) => {
  const {name} = text;
  return (
    <div>
        <div>
            <button className='bg-blue-400 py-2 px-4 rounded-full text-white 
            text-base font-black mr-4' >
                {name}
            </button>
        </div>
    </div>
  )
}

export default PrimaryButtons