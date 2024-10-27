import React, { useContext, useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AddtoCartContext } from "../context/AddToCart";

function Card({
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
    <div 
      className="w-[47%] md:w-[30%] lg:w-[23%] relative overflow-hidden group shadow-md border p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="lg:h-72 md:64 h-40">
        <img
          className={`w-full h-full object-cover transform transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          src={src}
          alt={alt}
        />
      </div>
      <div className="p-2 md:p-4 flex flex-col justify-between flex-grow">
        <h3 className="font-bold lg:text-lg md:text-md text-sm text-start ">
          {title}
        </h3>
        <p className="text-gray-600 text-start lg:text-lg md:text-md text-sm">
          {category}
        </p>
        <div className="flex flex-row items-center justify-between">
          <span className="lg:text-lg md:text-md text-sm font-semibold">
            ${newPrice}
          </span>
          <span className="lg:text-lg md:text-md text-sm line-through text-gray-400">
            ${oldPrice}.00
          </span>
        </div>
      </div>

      {discountPercentage && (
        <div className="absolute top-2 left-2 min-w-12 min-h-12 flex justify-center items-center bg-red-600 text-white px-2 py-1 rounded-full text-xs md:text-sm">
          {discountPercentage}
        </div>
      )}

      <div
        className={`absolute inset-0 hoverColor opacity-80 text-white flex flex-col items-center justify-center gap-4 md:gap-8 z-10
        transform ${isHovered ? "translate-y-0" : "-translate-y-full"} 
        transition-transform duration-500 ease-out`}
      ></div>
      <div
        className={`absolute inset-0 opacity-100 text-white flex flex-col items-center justify-center lg:gap-6 md:gap-8 z-20
        transform ${isHovered ? "translate-y-0" : "-translate-y-full"} 
        transition-transform duration-500 ease-out`}
      >
        <button
          onClick={addToCart}
          className="addToCartBtn darkFont text-nowrap bg-white opacity-100 min-w-24 lg:min-w-36 py-2 font-bold lg:text-md md:text-sm text-xs"
          disabled={disabled}
                    
        >{find}
        </button>

        <button
          onClick={buyNow}
          className="addToCartBtn darkFont text-nowrap bg-white opacity-100 min-w-24 lg:min-w-36 py-2 font-bold lg:text-md md:text-sm text-xs"
        >
          Buy Now
        </button>
        <Link
          to={toViewProduct}
          className="addToCartBtn darkFont text-center text-nowrap bg-white opacity-100 min-w-24 lg:min-w-36 py-2 font-bold lg:text-md md:text-sm text-xs"
        >
          View Product
        </Link>
        <div className="flex flex-col md:flex-col lg:flex-row justify-between gap-2 text-sm ">
          <div className="flex justify-center items-center gap-1 ">
            <IoShareSocialSharp />
            <span className="cursor-pointer">Share</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <MdOutlineCompareArrows />
            <span className="cursor-pointer">Compare</span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaRegHeart />
            <span className="cursor-pointer">Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
