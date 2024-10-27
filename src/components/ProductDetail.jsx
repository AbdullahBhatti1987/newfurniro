import React from "react";

function ProductDetail({
  title,
  category,
  newPrice,
  rating,
  description,
  mainImage,
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  onClick,
  discountPercentage,
}) {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto py-12 flex lg:flex-row md:flex-row flex-col justify-stretch items-start gap-8">
      {/* Left Div */}
      <div className="left lg:w-6/12 md:w-6/12 w-full flex flex-row gap-4 min-h-fit">
        <div className="left lg:w-2/12 w-3/12 flex flex-col justify-start items-center gap-4">
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src={thumbnail1}
            alt="..."
          />
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src={thumbnail2}
            alt="..."
          />
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src={thumbnail3}
            alt="..."
          />
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src={thumbnail4}
            alt="..."
          />
        </div>
        <div className="right lg:w-10/12 w-full shadow-lg rounded-2xl flex justify-center items-center overflow-hidden relative">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-130"
            src={mainImage}
            alt="Product Image"
          />
        </div>
      </div>

      <div className="right lg:w-6/12 md:w-6/12 w-full border-b-2 p-6">
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-3xl text-2xl font-bold text-gray-800">
            {title}
          </h1>
          <h3 className="lg:text-2xl text-xl text-gray-400 font-semibold">
            {category}
          </h3>
          <h3 className="lg:text-2xl text-xl text-gray-600 font-semibold">
            $ {newPrice}
          </h3>
          <div className="flex flex-row items-center">
            <h3 className="lg:text-lg text-md text-gray-600 font-medium">
              Rating:
            </h3>
            <span className="ml-2 text-yellow-500 text-lg font-bold">
              {rating}
            </span>
          </div>
          <p className="text-sm lg:text-base leading-relaxed text-gray-700">
            {description}
          </p>

          <div className="lg:w-3/12 md:w-6/12 w-full">
            <p className="text-gray-600 font-semibold mb-1">Size</p>
            <div className="flex flex-row gap-3">
              <button className="bg-gray-200 p-2 w-10 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                L
              </button>
              <button className="bg-gray-200 p-2 w-10 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                XL
              </button>
              <button className="bg-gray-200 p-2 w-10 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                XS
              </button>
            </div>
          </div>
          <div className="lg:w-3/12 md:w-6/12 w-full">
            <p className="text-gray-600 font-semibold mb-1">Discount</p>
            <div className="flex flex-row gap-3">
              <span className="text-red-500">{discountPercentage} %</span>
            </div>
            <p className="text-gray-600 font-semibold mb-1">Reviews</p>
            <div className="flex flex-row gap-3"></div>

            {/* ==============Color Selection Div================= */}
            {/* <p className="text-gray-600 font-semibold mb-1">Color</p> */}
            {/* <div className="flex flex-row gap-3">
              <button className="bg-green-800 w-8 h-8 rounded-full border-2 border-transparent focus:outline-none focus:border-green-800"></button>
              <button className="bg-purple-800 w-8 h-8 rounded-full border-2 border-transparent focus:outline-none focus:border-green-800"></button>
              <button className="bg-black w-8 h-8 rounded-full border-2 border-transparent focus:outline-none focus:border-green-800"></button>
            </div> */}
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <button
              onClick={onClick}
              className="flex items-center justify-center text-nowrap px-4 lg:px-8 py-2 text-lg font-semibold border border-black rounded-xl shadow-lg hover:bg-gray-100 active:shadow-sm"
            >
              Add to Cart
            </button>
            <button className="flex items-center justify-center text-nowrap px-4 lg:px-8 py-2 text-lg font-semibold border border-black rounded-xl shadow-lg hover:bg-gray-100 active:shadow-sm">
              + Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
