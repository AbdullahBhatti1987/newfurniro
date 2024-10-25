import React, { useContext, useEffect, useState } from "react";
import { AddtoCartContext } from "../context/AddToCart";
import Loader from "../components/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/userfirebase";
import Card from "./Card";
import { data } from "autoprefixer";
// import { useParams } from "react-router";

function OurProducts({ apiProducts, limit }) {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    isLoaded,
    setIsLoaded,
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductList(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
        console.log("ProductList =>", productList)
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white py-12 ">
      <div className="w-10/12 mx-auto ">
        <div className="flex mx-auto gap-4 flex-wrap">
          {isLoading ? (
            <Loader />
          ) : (
            productList.map((data) => (
              <Card
                key={data.productTitle}
                src={data.productImages[0]}
                title={data.productTitle}
                category={data.category}
                newPrice={data.price}
                discountPercentage={data.discount}
                oldPrice={data.oldPrice}
                // addToCart={()=>addItemToCart(...addtoCart, data)}
                // You can add more props like onClick, addToCart, buyNow, etc.
              />
            ))
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
