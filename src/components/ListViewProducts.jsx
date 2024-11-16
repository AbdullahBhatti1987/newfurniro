import React, { useContext, useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AddtoCartContext } from "../context/AddToCart";

function ListViewProducts({
  src,
  alt,
  title,
  category,
  newPrice,
  oldPrice,
  discountPercentage,
  addToCart,
  buyNow,
  toViewProduct,
  find,
  disabled
}) {
  const [isHovered, setIsHovered] = useState(false);

  const { isLoaded, addtoCart, setIsLoaded, addItemToCart } =
    useContext(AddtoCartContext);

  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-4 md:p-6 border-b shadow-md w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/4 lg:w-1/5 h-48 mb-4 md:mb-0">
        <img
          className="w-full h-full object-cover rounded-md"
          src={src}
          alt={alt}
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-3/4 lg:w-4/5 pl-0 md:pl-6">
        <h3 className="font-bold text-xl mb-2 text-start">{title}</h3>
        <p className="text-gray-600 text-md mb-2 text-start">{category}</p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
          <span className="text-xl font-semibold">${newPrice}</span>
          <span className="text-sm line-through text-gray-400">${oldPrice}.00</span>
        </div>

        {/* Discount Badge */}
        {discountPercentage && (
          <div className="bg-red-600 flex w-fit text-white p-2 rounded-lg my-2 text-xs mb-4">
            {((discountPercentage / newPrice) * 100 ).toFixed(2)} % OFF
            
          </div>
        )}

        <div className="flex gap-4 mb-4">
          <button
            onClick={addToCart}
            className=" text-black py-2 px-6 rounded-lg border-2 font-semibold text-sm hover:bg-gray-200 focus:bg-gray-200"
            disabled={disabled}
          >
            {find}
          </button>

          <button
            onClick={buyNow}
      className=" text-black py-2 px-6 rounded-lg border-2 font-semibold text-sm hover:bg-gray-200 focus:bg-gray-200"
          >
            Buy Now
          </button>

          <Link
            to={toViewProduct}
          className=" text-black py-2 px-6 rounded-lg border-2 font-semibold text-sm hover:bg-gray-200 focus:bg-gray-200"
          >
            View Product
          </Link>
        </div>

        {/* Social and Action Icons */}
        <div className="flex gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1 cursor-pointer">
            <IoShareSocialSharp />
            <span>Share</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <MdOutlineCompareArrows />
            <span>Compare</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FaRegHeart />
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListViewProducts;
