import React, { useContext, useEffect, useState } from "react";
import { AddtoCartContext } from "../context/AddToCart";
import Loader from "../components/Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/userfirebase";
import Card from "./Card";
import { ProductsContext } from "../context/Products";

function OurProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoaded, setIsLoaded, addtoCart, addItemToCart } =
    useContext(AddtoCartContext);
    const {isProductsLoaded, setIsProductsLoaded, products, setProducts} = useContext(ProductsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIsProductsLoaded(true)
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [addtoCart]);

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
                addToCart={() => {
                  setIsLoaded(true);
                  addItemToCart(data);
                }}
                toViewProduct={`/shop/${data.id}`}  // Passing the correct path
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
    </div>
  );
}

export default OurProducts;
