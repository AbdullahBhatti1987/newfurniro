// import Card from "./Card";

import React, { useContext, useEffect, useState } from "react";
import { AddtoCartContext } from "../context/AddToCart";
import  Loader  from "../components/Loader";
// import { useParams } from "react-router";

function OurProducts({ apiProducts, limit }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    isLoaded,
    setIsLoaded,
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded
  } = useContext(AddtoCartContext);

  useEffect(() => {}, []);

  return (
    <div className="bg-white py-12 ">
      <div className="w-10/12 mx-auto ">
        <div className="flex mx-auto gap-4 flex-wrap">
          {isLoading && (
            // products.map((data) => ( data.id <= limit &&
            //   <Card
            //   key={data.id}
            //   title={data.title}
            //   newPrice={data.price}
            //   oldPrice={(data.price * 1.25).toFixed(2)}
            //   category={data.category}
            //   // src={data.thumbnail}
            //   src={"/images/image106.png"}
            //   addToCart={()=>{
            //     addItemToCart(data)
            //   }}
            //   buyNow={()=>{console.log("BuyNow this product", data.id)}}
            //   toViewProduct={`/shop/${data.id}`}
            //   addtocartBtnText={"Add to Cart"}
            //   discountPercentage={(data.price * data.discountPercentage / 100).toFixed(2)}

            // />
            // ))
            //   ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className="w-full mx-auto flex justify-center items-center">
        {/* <button className='py-3 px-24 border-2 darkBorder darkFont font-semibold shadow-lg active:shadow-sm'>More</button> */}
      </div>
    </div>
  );
}

export default OurProducts;
