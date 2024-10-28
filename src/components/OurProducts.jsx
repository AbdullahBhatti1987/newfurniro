import React, { useContext, useEffect, useState } from "react";
import { AddtoCartContext } from "../context/AddToCart";
import Loader from "../components/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/userfirebase";
import Card from "./Card";
import { ProductsContext } from "../context/Products";
import Notification from "./Notification";

function OurProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [loadNotification, setLoadNotification] = useState(true);
  const [notificationText, setNotificationText] = useState("");
  
  const {
    addtoCart,
    addItemToCart,
  } = useContext(AddtoCartContext);

  const { products, setProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (data) => {
    addItemToCart(data);
    setNotificationText("Add to Cart");
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); 
  };

  return (
    <div className="bg-white py-12">
      <div className="w-10/12 mx-auto">
        <div className="flex mx-auto gap-4 flex-wrap">
          {isLoading ? (
            <Loader />
          ) : (
            products.map((data) => (
              <Card
                key={data.id}
                src={data.productImages[0]}
                title={data.productTitle}
                category={data.category}
                newPrice={data.price}
                discountPercentage={data.discount}
                oldPrice={data.oldPrice}
                addToCart={() => handleAddToCart(data)}
                toViewProduct={`/shop/${data.id}`}
                find={
                  addtoCart.some((item) => item.id === data.id)
                    ? "Already In Cart"
                    : "Add to Cart"
                }
                disabled={addtoCart.some((item) => item.id === data.id)}
              />
            ))
          )}
        </div>
      </div>
      {showNotification && <Notification text={notificationText} />}
    </div>
  );
}

export default OurProducts;
