import React, { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct";

import { AddtoCartContext } from "../context/AddToCart";
import { UserContext } from "../context/UserContext";
import Loader from "./Loader";
import { CheckOutContext } from "../context/CheckOutContext";
import { useNavigate } from "react-router-dom";

export default function MyCart() {
  const [subtotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const [confirmTotal, setConfirmTotal] = useState(0);

  const { user } = useContext(UserContext);
  const {
    isLoaded,
    setIsLoaded,
    addtoCart,
    setAddtoCart,
    addItemToCart,
    lessQuanityFromCart,
    removeItemFromCart,
  } = useContext(AddtoCartContext);

  const { isCheckOut, 
        setIsCheckOut, 
        checkOut, 
        setCheckOut } =
        useContext(CheckOutContext);

  const navigate = useNavigate();

  const handleCheckboxChange = (data, checked) => {
    setIsCheckOut(true); // yahan sahi function use ho raha hai
    setIsLoaded(true);
    if (checked) {
      const itemToAdd = addtoCart.find((cartItem) => cartItem.id === data.id);
      if (itemToAdd) {
        setCheckOut((prev) => [...prev, { ...itemToAdd }]);
        setDeliveryCharges(checkOut.length > 0 ? 250 : 0); // correct condition
      }
    } else {
      setCheckOut((prev) => prev.filter((cart) => cart.id !== data.id));
    }
  };

  const calculateSubtotal = () => {
    return checkOut.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const calculateDiscount = () => {
    return checkOut.reduce((total, item) => {
      const discountAmount = item.discount ? item.discount * item.quantity : 0;
      return total + discountAmount;
    }, 0);
  };

  const calculateTotal = (subtotal, discount) => {
    return (subtotal - discount + deliveryCharges).toFixed(2);
  };

  const HandleItems = () => {
    if (checkOut.length === 0) {
      return 0;
    }

    const totalItems = checkOut.reduce((acc, data) => {
      return acc + data.quantity;
    }, 0);

    return totalItems;
  };

  const HandleCheckOut = () => {
    console.log("AddtoCart =>", addtoCart);
    console.log("CheckOut =>", checkOut);
    const updatedCart = addtoCart.filter((cartItem) => {
      return !checkOut.some((checkOutItem) => checkOutItem.id === cartItem.id);
    });
    setAddtoCart(updatedCart);
    {
      user.isLogin ? navigate("/checkout") : navigate("/auth/login");
    }
  };

  useEffect(() => {
    const newSubtotal = calculateSubtotal();
    const newDiscount = calculateDiscount();

    setSubTotal(newSubtotal);
    setDiscount(newDiscount);
    setConfirmTotal(calculateTotal(newSubtotal, newDiscount));
  }, [checkOut, addtoCart]);

  return (
    <div className="py-12">
      <div className="w-10/12 mx-auto flex gap-6">
        <div className="left flex flex-col w-8/12">
          <div className="heading lightColor flex flex-row justify-between font-bold text-center py-6">
            <h4 className="w-1/12">Confirm</h4>
            <h4 className="w-2/12">Products</h4>
            <h4 className="w-2/12">Title</h4>
            <h4 className="w-2/12">Price</h4>
            <h4 className="w-2/12">Quantity</h4>
            <h4 className="w-2/12">Subtotal</h4>
            <h4 className="w-1/12">Delete</h4>
          </div>
          <div className="w-full flex flex-col gap-2 py-2">
            {addtoCart.length > 0 ? (
              addtoCart
                .filter((data) => user.uid === data.uid)
                .map((data) => (
                  <CartProduct
                    key={data.id}
                    src={data.productImages[0]}
                    title={data.productTitle}
                    price={data.price}
                    deleteItemFromCart={() => removeItemFromCart(data.id)}
                    lessQuantityCart={() =>
                      data.quantity > 1
                        ? lessQuanityFromCart(data.id)
                        : alert(
                            "Please click the delete button to remove this product."
                          )
                    }
                    addQuantityIntoCart={() => addItemToCart(data)}
                    totalPrice={(data.price * data.quantity).toFixed(2)}
                    quantity={data.quantity}
                    checkBox={(e) =>
                      handleCheckboxChange(data, e.target.checked)
                    }
                    isChecked={checkOut.some((item) => item.id === data.id)}
                  />
                ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
        <div className="relative right w-4/12 lightColor py-2 md:py-4 lg:py-6 px-4 md:px-8 lg:px-12 flex flex-col justify-start">
          <div>
            <h1 className="text-center font-black text-2xl md:text-3xl lg:text-4xl py-2">
              Order Summary
            </h1>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Subtotal</h3>
            <h3 className="w-3/5 text-sm md:text-md lg:text-lg text-gray-500 font-bold">
              $ {subtotal.toFixed(2)}-{HandleItems()}Items
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Delivery</h3>
            <h3 className="w-3/5 text-sm md:text-md lg:text-lg text-gray-500 font-bold">
              $<span className="pl-2">{deliveryCharges}</span>
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Discount</h3>
            <h3 className="w-3/5 text-sm md:text-md lg:text-lg text-gray-500 font-bold">
              $ {discount.toFixed(2)}
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <h3 className="w-2/5 text-sm md:text-md lg:text-lg">Total</h3>
            <h3 className="w-3/5 text-sm md:text-md lg:text-lg darkFont font-bold">
              $ {confirmTotal} {/* Already formatted in the useEffect */}
            </h3>
          </div>
          <div className="w-full mx-auto text-center">
            <button
              disabled={checkOut.length === 0}
              onClick={HandleCheckOut}
              className="w-full border-2 darkBorder font-bold darkFont shadow-lg py-2"
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
