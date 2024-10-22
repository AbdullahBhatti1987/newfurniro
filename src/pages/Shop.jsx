import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FilterOptions from "../components/FilterOptions";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import PageTop from "../components/PageTop";
import  NextPaggination  from "../components/Pagination";


function Shop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 


  return (
    <div className="">
      <PageTop heading={"Shop"} linkName={"Shop"} to={"/shop"}/>
      <FilterOptions  />
      {/* <OurProducts apiProducts={""} limit={100}/> */}
      <NextPaggination />
        <Banner />
    </div>
  );
}

export default Shop;
