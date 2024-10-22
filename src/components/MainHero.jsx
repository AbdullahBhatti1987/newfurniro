import React from 'react'

function MainHero() {
  return (
    <div className="w-full relative flex flex-col lg:flex-row md:flex-row items-center ">
    <div className='blank w-[50%] h-full'></div>
    <div className='message lg:w-[50%] md:w-[50%] w-[75%] my-24 p-12 gap-4 mx-12 lightColor h-full flex flex-col justify-evenly rounded-2xl'>
        <p className='text-start font-bold lg:text-lg md:text-md text-sm'>New Arrival</p>
        <h1 className='text-2xl md:text-4xl lg:text-6xl darkFont font-bold text-start'>Discover Our New Collection</h1>
        <p className='text-start lg:text-lg md:text-md text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni est ab maiores iste dolorum suscipit !</p>
        <button className='p-4 darkColor max-w-36 font-bold text-white lg:text-lg md:text-md text-sm'>BUY NOW</button>
    </div>

</div>
  )
}

export default MainHero