import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Auth() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 


  return (
    <>

      <Outlet/>
      <Footer/>
    </>
  )
}

export default Auth