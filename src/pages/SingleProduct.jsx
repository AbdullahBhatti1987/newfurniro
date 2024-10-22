import { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Component } from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";
import Descriptions from "../components/Descriptions";
import Heading from "../components/Heading";
import OurProducts from "../components/OurProducts";

import { AddtoCartContext } from "../context/AddToCart";

function SingleProduct() {
  const [oneProduct, setOneProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(`https://dummyjson.com/products/${id}`)
  //     .then((response) => {
  //       setOneProduct(response.data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setIsLoading(false);
  //     });
  // }, [])

  const {
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(AddtoCartContext);

  return (
    <div className="">
      <div className="lightColor w-full">
        <div className="lg:w-10/12 w-11/12 mx-auto py-6">
          <Component linkName={"Shop"} to={"/shop"} />
        </div>
      </div>
      <ProductDetail
        // mainImage={'https://dummyjson.com/image/150'}
        mainImage={oneProduct.thumbnail}
        thumbnail1={'https://dummyjson.com/image/150'}
        thumbnail2={'https://dummyjson.com/image/150'}
        thumbnail3={'https://dummyjson.com/image/150'}
        thumbnail4={'https://dummyjson.com/image/150'}
        category={oneProduct.category}
        title={oneProduct.title}
        newPrice={oneProduct.price}
        rating={oneProduct.rating}
        description={oneProduct.description}
        onClick={() => {
          addItemToCart(oneProduct);
        }}
        discountPercentage={(
          (oneProduct.price * oneProduct.discountPercentage) /
          100
        ).toFixed(2)}
      />
      {!isLoading && <Descriptions totalReviews={oneProduct.reviews.length}
          reviews={oneProduct.reviews.map((data, ind) => {
            return (
            
             <div key={ind} className="w-fit min-h-36 border justify-center items-center shadow-md p-4 flex flex-col gap-2">
             <p className="text-center">
               Review Comment: {data.comment}
              </p>
              <p className="text-center">
                Review Person: {data.reviewerName}</p>
                <p className="text-center">
                  Review Rating: {data.rating}</p>
              </div>
            );
          })}
      />}
      <Heading text={"Related Products"} />
      {/* <OurProducts apiProducts={""} limit={4} /> */}
    </div>
  );
}

export default SingleProduct;
