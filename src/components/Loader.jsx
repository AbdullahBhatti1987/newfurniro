import React from 'react'

export default function Loader() {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center">
      <img
        src="/images/logo.png"
        className="lg:h-12 w-12"
        alt="Flowbite React Logo"
      />
      <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-bold dark:text-white">
        Furniro
      </span>
    </div>
    <div className="loader"></div>
  </div>
  )
}
