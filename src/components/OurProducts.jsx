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

  const handleAddToCart = (data) => {
    console.log("user", userInfo);
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
        <div className="flex mx-auto justify-center gap-4 flex-wrap">
          {isLoading ? (
            <Loader />
          ) : (
            rendingArray.map((data) =>
              viewText === "Card" ? (
                <Card
                  key={data.id}
                  src={data?.productImages[0]}
                  title={data.productTitle}
                  category={data.category}
                  newPrice={data.price}
                  discountPercentage={data.discount}
                  oldPrice={data.oldPrice}
                  addToCart={() =>
                    user.isLogin
                      ? handleAddToCart({ ...data, uid: user.uid })
                      : navigate("/auth/login")
                  }
                  toViewProduct={`/shop/${data.id}`}
                  find={
                    addtoCart.some((item) => item.id === data.id)
                      ? "Already In Cart"
                      : "Add to Cart"
                  }
                  disabled={addtoCart.some((item) => item.id === data.id)}
                />
              ) : (
                <ListViewProducts
                  key={data.id}
                  src={data.productImages[0]}
                  title={data.productTitle}
                  category={data.category}
                  newPrice={data.price}
                  discountPercentage={data.discount}
                  oldPrice={data.oldPrice}
                  addToCart={() =>
                    user.isLogin
                      ? handleAddToCart({ ...data, uid: user.uid })
                      : navigate("/auth/login")
                  }
                  toViewProduct={`/shop/${data.id}`}
                  find={
                    addtoCart.some((item) => item.id === data.id)
                      ? "Already In Cart"
                      : "Add to Cart"
                  }
                  disabled={addtoCart.some((item) => item.id === data.id)}
                />
              )
            )
          )}
        </div>
      </div>
      {showNotification && <Notification text={notificationText} />}
    </div>
  );
}

export default OurProducts;
