import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import PageTop from "../components/PageTop";
import BillingDetail from "../components/BillingDetail";

function CheckOut() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 


  return (
    <div>
      <PageTop heading={"Checkout"} linkName={"Checkout"}/>

        <BillingDetail/>


        <Banner />
    </div>
  );
}

export default CheckOut;
