import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/userfirebase";
import ListView from "../adminComponents/ListView";
import Loader from "../../components/Loader";

export default function ProductList() {
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
        <div className= "flex flex-col gap-1">
        {isLoading ? (
        <Loader />
      ) : (
        productList.map((data) => (
          <ListView
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
