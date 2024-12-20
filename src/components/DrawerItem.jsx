import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Drawer } from "flowbite-react";

export default function DrawerItem({
  title,
  count,
  amount,
  image,
  deleteCart,
  onClick,
}) {
  return (
    <Drawer.Items className={"shadow-md rounded-xl py-1"}>
      <div className=" flex flex-row justify-between items-center ">
        <div className=" flex flex-row justify-between gap-2 items-center border rounded-xl p-1 w-full">
          <div className="w-2/6 h-20 lightColor rounded-lg overflow-hidden flex justify-center items-center relative">
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              onClick={onClick}
            />
          </div>

          <div className="w-4/6 flex flex-col justify-between items-start gap-2">
            <h4 className="text-md text-wrap truncate">{title}</h4>
            <p className="flex flex-row gap-2">
              <span className="text-gray-500">{count}</span> X
              <span className="darkFont">
                Rs. <span>{amount}</span>
              </span>
            </p>
          </div>
          <div>
            <button onClick={deleteCart}>
              <IoIosCloseCircle className="text-2xl text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </Drawer.Items>
  );
}
