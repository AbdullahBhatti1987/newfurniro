import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import FilterOptions from "../components/FilterOptions";
import OurProducts from "../components/OurProducts";
import Banner from "../components/Banner";
import PageTop from "../components/PageTop";
import NextPaggination from "../components/Pagination";

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

  const { id } = useParams(); // id will now be populated if route is /shop/:id

  return (
    <div className="">
      <PageTop heading={"Shop"} linkName={"Shop"} to={"/shop"} />
      <FilterOptions />
      <OurProducts toViewProduct={id} />
      <NextPaggination />
      <Banner />
    </div>
  );
}

export default Shop;
