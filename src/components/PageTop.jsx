import React from 'react'
import { Component } from "../components/Breadcrumb";

function PageTop({heading, linkName, to}) {
  return (
    <div className="relative lg:h-56 md:h-48 h-36 overflow-hidden flex justify-center items-center">
        <img
          className="w-fit blur-sm opacity-50"
          src="../../images/Rectangle 1.jpg"
          alt=""
        />
        
        <div className="absolute w-full h-full flex flex-col justify-center items-center gap-4">
        <img
              src="/images/logo.png"
              className="lg:w-12 md:w-18 w-6 transition translate-y-4 "
              alt="Flowbite React Logo"
            />
          <h1 className=" text-center lg:text-4xl md:text-2xl text-xl font-semibold mb-4">                       
            {heading}
          </h1>
          <Component linkName={linkName} to={to} />
        </div>
      </div>
  )
}

export default PageTop