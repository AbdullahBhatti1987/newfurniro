import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { ImageModal } from "./ImageModal";
import QuantityOption from "./QuantityOption";

export default function CartProduct({
  src,
  title,
  price,
  deleteItemFromCart,
  lessQuantityCart,
  addQuantityIntoCart,
  totalPrice,
  quantity,
  checkBox
}) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);



  



  return (
    <div className="relative flex flex-row items-center gap-2 text-center border rounded-lg pl-4">
      <div className="w-1/12 h-20 p-3 flex flex-row justify-center overflow-hidden items-center gap-1">
      <input type="checkbox" name="" id="confirm" className=" checked:bg-gray-400 text-gray-400" onChange={checkBox} />
      </div>
      <div className="w-2/12 h-20 p-3 flex flex-row justify-center overflow-hidden items-center gap-1">
        <ImageModal src={src} />
      </div>
      <h3 className="w-3/12 truncate text-start">{title}</h3>
      <h4 className="w-1/12 text-start">{price}</h4>
      <div className="w-1/12 flex justify-center items-center">
     

          <QuantityOption onClickAdd={addQuantityIntoCart} quantity={quantity} onClickLess={lessQuantityCart} />

      </div>
      <h4 className="w-3/12 font-bold ">
        $ <span>{totalPrice}</span>
      </h4>
      <button className="w-1/12 right-8 cursor-pointer">
        <AiFillDelete
          className="darkFont text-2xl"
          onClick={deleteItemFromCart}
        />
      </button>
    </div>
  );
}
