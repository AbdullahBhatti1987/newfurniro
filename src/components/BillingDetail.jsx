import React, { useContext, useEffect, useState } from "react";
import { CheckOutContext } from "../context/CheckOutContext";
import { UserContext } from "../context/UserContext";

const BillingDetail = () => {
  const [subtotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(0);
  const [confirmTotal, setConfirmTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const { checkOut } = useContext(CheckOutContext);
  const { user } = useContext(UserContext);

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
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
    return (subtotal - discount) + deliveryCharges;
  };

  useEffect(() => {
    setDeliveryCharges(checkOut.length > 0 ? 250 : 0);
    const newSubtotal = calculateSubtotal();
    const newDiscount = calculateDiscount();
    setSubTotal(newSubtotal);
    setDiscount(newDiscount);
    setConfirmTotal(calculateTotal(newSubtotal, newDiscount));
  }, [checkOut, deliveryCharges]);

  const totalItems = checkOut.reduce((acc, item) => acc + item.quantity, 0);

  const [placeOrder, setPlaceOrder] = useState([]);
  const HandlePlaceOrder = (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target.value,
      lastName: e.target.value,
      companyName: e.target.value,
      country: e.target.value,
      streetAddress: e.target.value,
      city: e.target.value,
      province: e.target.value,
      zipCode: e.target.value,
      phone: e.target.value,
      email: e.target.value,
      additionalInfo: e.target.value,
      paymentMethod: paymentMethod,
    };

    setPlaceOrder(formData); 
    console.log("Form Data =>", formData);
  };

  const userData = user.isLogin
  ? {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      phoneNumber: user.phoneNumber,
      userName: user.userName,
    }
  : {};

  return (
    <div className="py-6">
      <div className="w-11/12 lg:w-10/12 mx-auto gap-6 md:gap-12 lg:gap-24 flex lg:flex-row flex-col">
        <div className="w-full lg:w-6/12 md:w-6/12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-6">Billing details</h2>
          <form className="space-y-4" onSubmit={HandlePlaceOrder}>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  defaultValue={userData?.firstName}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  defaultValue={userData?.lastName}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Company Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Company Name"
                defaultValue={userData?.companyName}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Country / Region
              </label>
              <select defaultValue={userData?.country} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option>Pakistan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Street Address
              </label>
              <input
                type="text"
                placeholder="Street Address"
                defaultValue={userData?.address}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Town / City</label>
                <input
                  type="text"
                  placeholder="Town / City"
                  defaultValue={userData?.city}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Province</label>
                <select value={userData?.province} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  <option>Sindh</option>
                  <option>Punjab</option>
                  <option>Balochistan</option>
                  <option>KPK</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">ZIP Code</label>
                <input
                  type="text"
                  placeholder="ZIP Code"
                  defaultValue={userData?.zipcode}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  defaultValue={userData.phoneNumber}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                defaultValue={userData?.email}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Additional Information
              </label>
              <textarea
                placeholder="Additional Information"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-6/12 md:w-6/12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold mb-6">Product</h2>
            <h2 className="text-xl font-bold mb-6">Subtotal</h2>
          </div>
          <div className="flex flex-col justify-start mb-4 gap-1 w-full">
            {checkOut
             .filter((data) => user.uid === data.uid)
            .map((data) => (
              
              <div
                key={data.id}
                className="bg-white w-full flex flex-row justify-between items-center gap-4 p-2 border rounded-2xl shadow-inner hover:shadow-md hover:border-gray-600"
              >
                <div className="w-3/12 flex justify-center items-center h-16 overflow-hidden rounded-lg">
                  <img
                    src={data.productImages[0]}
                    alt=""
                    className="rounded-lg object-contain"
                  />
                </div>
                <div className="w-3/12 title flex flex-col justify-center items-start gap-2">
                  <p className="font-semibold">{data.productTitle}</p>
                  <p className="text-gray-500">{data.category}</p>
                </div>
                <div className="w-2/12 price flex flex-col justify-center items-center gap-2">
                  <p className="font-semibold">${data.price}</p>
                  <p className="text-red-500 line-through">
                    {data.discount && `$${data.discount}`}
                  </p>
                </div>
                <div className="w-2/12 total flex flex-col justify-center items-center gap-2">
                  <p className="font-bold">${data.price - data.discount}</p>
                </div>
                <div className="w-2/12 stock">
                  <p>Qty.{data.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Charges</span>
            <span>${deliveryCharges.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold darkFont">${confirmTotal}</span>
          </div>
          <hr className="my-4" />
          <h3 className="font-semibold mb-4">Payment Method</h3>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                defaultValue="bank"
                checked={paymentMethod === "bank"}
                onChange={handlePaymentChange}
                className="h-4 w-4 text-black border-gray-300"
              />
              <span className="ml-2">Direct Bank Transfer</span>
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Make your payment directly into our bank account.
            </p>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                defaultValue="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentChange}
                className="h-4 w-4 text-black border-gray-300"
              />
              <span className="ml-2">Cash On Delivery</span>
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Your personal data will be used to support your experience
              throughout this website.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <button type="submit"
              onClick={HandlePlaceOrder}
              className="w-full mx-auto py-3 darkColor text-white font-semibold rounded-md mt-4 shadow-lg hover:shadow-md active:shadow-sm"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
