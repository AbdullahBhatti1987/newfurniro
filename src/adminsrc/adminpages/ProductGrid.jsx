import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/userfirebase";
import Loader from "../../components/Loader";
import GridView from "../adminComponents/GridView";

export default function ProductGrid() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      }
    };
    fetchData();
  }, []);

  const HandleChecked = () => {
    // Implement functionality as needed
  };

  const HandleAction = () => {
    // Implement functionality as needed
  };

  return (
    <div className={"w-full bg-gray-200 h-screen p-6"}>
        {/* <div className="grid grid-cols-4 gap-6 p-8"> */}
        <div className="w-11/12 mx-auto bg-orange-400 flex flex-row flex-wrap gap-4" >

        {isLoading ? (
        <Loader />
      ) : (
        productList.map((data) => (
          <GridView
            key={data.id}
            onChecked={HandleChecked}
            src={data.productImages[0]}
            title={data.productTitle}
            dimensions={data.dimensions}
            price={data.price}
            stock={data.stock}
            category={data.category}
            like={data.like}
            onChange={HandleAction}
          />
        ))
      )}

        </div>
 
 
     </div>
  );
}
