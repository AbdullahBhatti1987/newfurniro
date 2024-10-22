import React from 'react'

function StaticCard({ src, alt, text}) {
  return (
    
        <div className='flex flex-col lg:w-[30%] md:w-[30%] w-[100%] h-full gap-8 overflow-hidden rounded-xl '>
            <img className=' min-h-96 object-cover transition-transform duration-300 hover:scale-105' src={src} alt={alt} />
            <h3 className='text-center text-2xl font-bold'>{text}</h3>
        </div>
    
  )
}

export default StaticCard