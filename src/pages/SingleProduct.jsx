import { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Component } from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";
import Descriptions from "../components/Descriptions";
import Heading from "../components/Heading";
import OurProducts from "../components/OurProducts";

import { AddtoCartContext } from "../context/AddToCart";
import { ProductsContext } from "../context/Products";

function SingleProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { addtoCart, addItemToCart } = useContext(AddtoCartContext);
  const { products } = useContext(ProductsContext);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, [location]);

  const viewProduct = products.find((item) => item.id === id);

  return (
    <div className="">
      <div className="lightColor w-full">
        <div className="lg:w-10/12 w-11/12 mx-auto py-6">
          <Component linkName={"Shop"} to={"/shop"} />
        </div>
      </div>

      {viewProduct && (
        <ProductDetail
          mainImage={viewProduct?.productImages[0]}
          thumbnail1={viewProduct.productImages[1]? viewProduct?.productImages[1] : 'https://dummyjson.com/image/150' }
          thumbnail2={viewProduct.productImages[2]? viewProduct?.productImages[2] : 'https://dummyjson.com/image/150' }
          thumbnail3={viewProduct.productImages[3]? viewProduct?.productImages[3] : 'https://dummyjson.com/image/150' }
          thumbnail4={viewProduct.productImages[4]? viewProduct?.productImages[4] : 'https://dummyjson.com/image/150' }
          category={viewProduct?.category}
          title={viewProduct?.title}
          newPrice={viewProduct?.price}
          rating={viewProduct?.rating}
          description={viewProduct?.description}
          onClick={() => addItemToCart(viewProduct)}
          discountPercentage={viewProduct.discountPercentage ? ((viewProduct?.price * viewProduct.discountPercentage) / 100).toFixed(2) : 0 }
        />
      )}

      {!isLoading && viewProduct?.reviews && (
        <Descriptions
          totalReviews={viewProduct.reviews.length}
          reviews={viewProduct.reviews.map((data, ind) => (
            <div
              key={ind}
              className="w-fit min-h-36 border justify-center items-center shadow-md p-4 flex flex-col gap-2"
            >
              <p className="text-center">Review Comment: {data.comment}</p>
              <p className="text-center">Review Person: {data.reviewerName}</p>
              <p className="text-center">Review Rating: {data.rating}</p>
            </div>
          ))}
        />
      )}
      <Heading text={"Related Products"} />
      {/* <OurProducts apiProducts={""} limit={4} /> */}
    </div>
  );
}

export default SingleProduct;
