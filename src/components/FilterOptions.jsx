
import React, { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";
import { useParams } from "react-router";

function FilterOptions() {
  const [isVisible, setIsVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [choosenCategory, setChoosenCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);


  const {slug } = useParams()





  const HandleFilter = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="filter py-6 lightColor">
      <div className="lg:w-10/12 md:w-11/12 w-2/2 mx-auto flex lg:flex-row md:flex-row flex-col lg:gap-24 md:gap-12 gap-6 justify-between items-center">
        <div className="left lg:w-1/2 md:w-1/2 w-2/2 flex flex-row lg:justify-start md:justify-start justify-between items-center lg:gap-6 md:gap-4 gap-2">
          <div className="flex flex-row lg:gap-6 md:gap-4 gap-2 text-xl font-semibold justify-between items-center">
            <GiSettingsKnobs className="rotate-90" />
            <button onClick={HandleFilter}>Filter</button>
            <TbGridDots />
            <BsViewList />
          </div>
          <div>
            <span className="text-xl text-gray-400">|</span>
          </div>
          <div>
            <p>Showing 1-16 of 32 results</p>
          </div>
        </div>
        <div className="right lg:w-1/2 md:w-1/2 w-2/2 flex flex-row lg:justify-end md:justify-end justify-between items-center lg:gap-6 md:gap-4 gap-2">
          <div className="flex flex-row justify-between items-center lg:gap-6 md:gap-4 gap-2">
            <p>Show</p>
            <select
              name="number"
              id="number"
              className="rounded-lg text-center px-2 text-gray-500"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <span className="text-xl text-gray-400">|</span>
          </div>
          <div className="flex flex-row justify-between items-center lg:gap-6 md:gap-4 gap-2">
            <p>Sort by</p>
            <select
              name="sortby"
              id="sortby"
              className="rounded-lg text-gray-500"
            >
              <option value="1">Sort by name A-Z</option>
              <option value="2">Sort by name Z-A</option>
              <option value="4">Low to High</option>
              <option value="5">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className={`bottom w-10/12 mx-auto flex lg:flex-row md:flex-row flex-col  lg:gap-12 md:gap-6 gap-4 transition-all duration-500 ease-in-out ${
          isVisible ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="left lg:w-1/2 md:w-1/2 w-2/2">
          <select
            name="category"
            id="category1"
            className="w-full rounded-xl"
            onChange={(e) => setChoosenCategory(e.target.value)}>
            <option value="All">All</option>
            {!isLoading &&
              categories.map((data) => (
                <option key={data.slug} value={data.slug}>
                  {data.name}
                </option>
              ))}
          </select>
        </div>
        <div className="right lg:w-1/2 md:w-1/2 w-2/2">
          <div className="w-full flex gap-4">
            <input
              type="search"
              name="search"
              placeholder="Search product by name"
              className="w-3/4 rounded-xl"
            />
            <button className="darkColor text-white font-bold rounded-lg w-1/4">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;
