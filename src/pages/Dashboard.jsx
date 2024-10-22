import React from 'react'
import { Outlet } from 'react-router'
import { Component } from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 



  return (
    <>

      <Component/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Dashboard