"use client";
import { Link } from "react-router-dom";
import { Slider } from "../components/Carousel";

export function Component() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap md:flex-row gap-4 lg:p-12 p-8 justify-between items-center lightbg">
      <div className="lg:w-[30%] w-[100%] flex flex-col items-start justify-around gap-6">
        <h1 className="text-4xl font-bold text-start">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-md text-start">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Link to={"/shop"}>
          <button className="py-3 px-6 darkColor text-white">
            Explore More
          </button>
        </Link>
      </div>
      <div className="lg:w-[30%] md:w-[45%] w-[100%] min-h-96 flex flex-col items-start justify-around gap-6">
        <img
            src="../../images/Rectangle 24.png"
          alt=""
        />
      </div>
      <div className="order-2 lg:order3 md:order-3 lg:w-[30%] md:w-[45%] w-[100%] h-full bg-gray-400 flex justify-start items-start">
        {/* <Slider /> */}
      </div>
    </div>
  );
}
