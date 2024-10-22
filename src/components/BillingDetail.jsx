import React, { useState } from "react";
import { Link } from "react-router-dom";

const BillingDetail = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="py-6 ">
      <div className="w-11/12 lg:w-10/12 mx-auto gap-6 md:gap-12 lg:gap-24 flex lg:flex-row flex-col ">
        {/* Billing Details */}
        <div className="w-full lg:w-6/12 md:w-6/12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-6">Billing details</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Country / Region
              </label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option>Sri Lanka</option>
                <option>Pakistan</option>
                <option>India</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Street Address
              </label>
              <input
                type="text"
                placeholder="Street Address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">Town / City</label>
                <input
                  type="text"
                  placeholder="Town / City"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Province</label>
                <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                  <option>Western Province</option>
                  <option>Eastern Province</option>
                  <option>Southern Province</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium">ZIP Code</label>
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
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

        {/* Order Summary */}
        <div className="w-full lg:w-6/12 md:w-6/12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold mb-6">Product</h2>
            <h2 className="text-xl font-bold mb-6">Subtotal</h2>
          </div>
          <div className="flex justify-between mb-4">
            <span>Asgaard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span className="font-bold darkFont">Rs. 250,000.00</span>
          </div>
          <hr className="my-4" />
          <h3 className="font-semibold mb-4">Payment Method</h3>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={handlePaymentChange}
                className="h-4 w-4 text-black border-gray-300"
              />
              <span className="ml-2">Direct Bank Transfer</span>
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentChange}
                className="h-4 w-4 text-black border-gray-300"
              />
              <span className="ml-2">Cash On Delivery</span>
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our 
              <Link className="font-bold">privacy policy</Link>
              .
            </p>
          </div>
            <div className="w-full flex justify-center items-center">
          <button className="w-full mx-auto py-3 darkColor text-white font-semibold rounded-md mt-4 shadow-lg hover:shadow-md active:shadow-sm" >
            Place order
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
