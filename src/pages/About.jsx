import React from 'react'
import PageTop from "../components/PageTop";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 




  return (
     <div>
      <PageTop heading={"About"} linkName={"About"} to={"/about"}/>
      <div className='w-full min-h-48'>
       </div>
     </div>
  )
}

export default About