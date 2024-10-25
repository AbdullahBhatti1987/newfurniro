import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import FilterOptions from "../components/FilterOptions";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import PageTop from "../components/PageTop";
import  NextPaggination  from "../components/Pagination";
import Card from "../components/Card";
import { AddtoCartContext } from "../context/AddToCart";


function Shop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 



  const {
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);







  return (
    <div className="">
      <PageTop heading={"Shop"} linkName={"Shop"} to={"/shop"}/>
      <FilterOptions  />
      <OurProducts apiProducts={""} limit={100}/>
      {/* <div className="bg-white py-12 ">
      <div className="w-10/12 mx-auto ">
        <div className="flex mx-auto gap-4 flex-wrap">
       
            <Card              
              // key={data.id}  
              title={"Sofa"}
              newPrice={25000}
              oldPrice={26500}  
              category={"Living"}
              // src={data.thumbnail}
              src={"/public/images/image 2.png"}
              addToCart={""}             
              buyNow={""}
              toViewProduct={`/shop/single/id`}              
              addtocartBtnText={"Add to Cart"}
              discountPercentage={"10%"}
    
            />

        </div>
        </div>
        </div> */}


      <NextPaggination />
        <Banner />
    </div>
  );
}

export default Shop;
