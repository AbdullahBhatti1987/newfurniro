import React, { useContext, useEffect, useState } from "react";
import { AddtoCartContext } from "../context/AddToCart";
import Loader from "../components/Loader";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../utils/userfirebase";
import Card from "./Card";
import { ProductsContext } from "../context/Products";
import { UserContext } from "../context/UserContext";
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";
import ListViewProducts from "./ListViewProducts";

function OurProducts({ viewText, rendingArray }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const { addtoCart, addItemToCart } = useContext(AddtoCartContext);

  const { user } = useContext(UserContext);

  const userInfo = auth;

  const { products, setProducts } = useContext(ProductsContext);

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

  const handleAddToCart = async (data) => {
    // console.log("user", userInfo);
    await addItemToCart(data);
    // console.log("user uid", data.uid);
    setNotificationText("Add to Cart");
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="bg-white py-12">
      <div className="w-10/12 mx-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <div
            className={`mx-auto gap-4 flex-wrap ${
              viewText === "Card"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : ""
            }`}
          >
            {rendingArray.map((data) => {
              const commonProps = {
                src: data.productImages[0],
                title: data.productTitle,
                category: data.category,
                newPrice: data.price,
                discountPercentage: data.discount,
                oldPrice: data.oldPrice,
                addToCart: () =>
                  user.isLogin
                    ? handleAddToCart({...data, uid: user.uid })
                    : navigate("/auth/login"),
                toViewProduct: `/shop/${data.id}`,
              
                find: addtoCart.some((item) => item.id === data.id) && user.isLogin
                  ? "Already In Cart"
                  : "Add to Cart",
                disabled: addtoCart.some((item) => item.id === data.id),
              };

              return viewText === "Card" ? (
                <Card key={data.id} {...commonProps} />
              ) : (
                <ListViewProducts key={data.id} {...commonProps} />
              );
            })}
          </div>
        )}
      </div>
      {showNotification && <Notification text={notificationText} />}
    </div>
  );
}

export default OurProducts;
