import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Banner from "../components/Banner";
import PageTop from "../components/PageTop";
import MyCart from "../components/MyCart";

function Cart() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 


  return (
    <div>
      <PageTop heading={"Cart"} linkName={"Cart"}/>
        <MyCart/>
        <Banner />
    </div>
  );
}

export default Cart;
