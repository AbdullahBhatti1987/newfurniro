import React, { useContext, useEffect, useState } from "react";
import { AddtoCartContext } from "../context/AddToCart";
import Loader from "../components/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/userfirebase";
import Card from "./Card";
import { ProductsContext } from "../context/Products";
import { UserContext } from "../context/UserContext";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

function OurProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [loadNotification, setLoadNotification] = useState(true);
  const [notificationText, setNotificationText] = useState("");
  
  const {
    addtoCart,
    addItemToCart,
  } = useContext(AddtoCartContext);

  const { user } = useContext(UserContext);
 
  const { products, setProducts } =
    useContext(ProductsContext);

    const navigate = useNavigate();

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


  // const handleAddToCart = async (data, userUid) => {
  //   try {
  //     await addItemToCart(data, userUid); // Wait for the item to be added to the cart
  //     setNotificationText("Added to Cart"); // Set the notification message
  //     setShowNotification(true); // Show the notification
  //     setTimeout(() => {
  //       setShowNotification(false); // Hide the notification after 3 seconds
  //     }, 2000);
  //   } catch (error) {
  //     console.error("Error adding item to cart:", error);
  //     setNotificationText("Failed to Add to Cart"); // Set error message
  //     setShowNotification(true); // Show error notification
  //     setTimeout(() => {
  //       setShowNotification(false); // Hide the notification after 3 seconds
  //     }, 2000);
  //   }
  // };
  









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
                // addToCart={() => handleAddToCart(data)}
                addToCart={() => user.isLogin ? handleAddToCart({ ...data, uid: user.uid }) : navigate("/auth/login")}

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
