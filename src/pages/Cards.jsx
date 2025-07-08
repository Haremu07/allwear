import React from 'react'

const Cards = ({ img, text, onClick }) => {
  return (
    <div className='flex flex-col gap-4 rounded-xl  '>
    <div className='w-90 h-80 bg-[#B68B40] flex justify-center  items-center cursor-pointer transition-transform duration-500 hover:scale-101 ' onClick={onClick}>
        <img className='h-full object-contain ' src={img} alt={text} />
    </div>
    <div className='w-full h-10  flex justify-center items-center text-2xl text-amber-950'>
        <h2>{text}</h2>
    </div>
    </div>
  )
}

export default Cards