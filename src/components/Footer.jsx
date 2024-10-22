import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full flex flex-col bg-white relative bottom-0 ">
      <div className="w-10/12 mx-auto py-12 flex lg:flex-row flex-wrap justify-between items-start gap-6 border-t-2">
        <div className="flex flex-col lg:w-[30%] w-[45%] ">
        
            <span className=" whitespace-nowrap text-2xl lg:text-3xl font-bold dark:text-white h-16">
              Furniro
            </span>
          <ul className="flex flex-col gap-2">
            <li>400 University Drive Suite 200 Coral</li>
            <li>Gables,</li>
            <li>FL 33134 USA</li>
          </ul>
        </div>
        <div className="flex lg:flex-row md:flex-row lg:w-[30%] w-[45%] justify-evenly ">
          <div className="">
            <h3 className=" h-16">Links</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link to={"/"} className="font-bold">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/shop"} className="font-bold">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/blog"} className="font-bold">
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="font-bold">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="font-bold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="h-16">Help</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link to={"/"} className="font-bold">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link to={"/shop"} className="font-bold">
                  Returns
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="font-bold">
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-[30%] w-full flex lg:flex-col flex-col lg:items-start lg:justify-start md:justify-between md:items-center ">
  <h3 className="min-h-16 text-gray-800 lg:justify-start lg:items-start flex items-center md:flex-row md:justify-start md:font-semibold md:items-center w-full md:w-1/3">
    Newsletter
  </h3>
  <div className="flex lg:w-full md:w-2/3 gap-4 lg:flex-row md:flex-row flex-col">
    <input
      type="email"
      name="email"
      id="subscribeEmail"
      className="pl-0 lg:w-2/3 md:w-2/3 border-b-2 border-t-0 border-l-0 border-r-0 border-gray-600 hover:cursor-pointer text-sm"
      placeholder="Enter Your Email Address"
    />
    <button className="lg:w-1/3 lg:font-bold md:w-fit md:text-start border-b-2 border-gray-600 text-center py-2 hover:shadow-md">
      Subscribe
    </button>
  </div>
</div>

      </div>
      <div className="w-10/12 mx-auto py-8 border-t-2">
        <p>2023 furniro. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
