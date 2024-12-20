import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { TbGridDots } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";

function FilterOptions({
  viewClick,
  categoryArray,
  HandleCategory,
  form,
  onSubmit,
  sortBy,
  perPage
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const HandleFilter =  () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="filter py-6 lightColor">
      <div className="lg:w-10/12 w-11/12 mx-auto flex lg:flex-row md:flex-col flex-col lg:gap-12 md:gap-6 gap-2 justify-between items-center">
        <div className="left lg:w-1/2  w-full flex flex-row lg:justify-start items-center lg:gap-6 md:gap-4 gap-2">
          <div className="flex flex-row lg:gap-6 md:gap-4 gap-2 text-xl font-semibold justify-between items-center">
            <GiSettingsKnobs className="rotate-90" />
            <button onClick={HandleFilter} className="p-2">Filter</button>
            <TbGridDots onClick={viewClick} className="cursor-pointer" />
            <BsViewList />
          </div>
          <div>
            {/* <span className="text-3xl text-gray-400 ">|</span> */}
          </div>
          <div>
            <p>
              Showing 1-{categoryArray.length} of {categoryArray.length} results
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row md:flex-row lg:flex-row justify-end items-center transition-all duration-500 ease-in-out lg:gap-6 md:gap-4 gap-2 ">

        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-row justify-between items-center gap-2 ">
        <p className="text-gray-700">Show</p>
            <select
              name="number"
              id="number"
              className=" rounded-lg px-2 text-gray-500 flex-grow"
              onChange={perPage}
            >
              <option value="2">2 per page</option>
              <option value="4">4 per page</option>
              <option value="6">6 per page</option>
              <option value="8">8 per page</option>
              <option value="10">10 per page</option>
            </select>
          </div>
          
          <div className="">
            {/* <span className="text-3xl text-gray-400 lg:flex hidden">|</span> */}
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 flex flex-row justify-between items-center gap-2">
          <p className="text-gray-700 text-nowrap">Sort by</p>
            <select
              name="sortby"
              id="sortby"
              className="rounded-lg text-gray-500 flex-grow"
              onChange={sortBy}
            >
              <option value={"byNameAtoZ"}>Sort by name A-Z</option>
              <option value={"byNameZtoA"}>Sort by name Z-A</option>
              <option value={"byPriceLow"}>Low to High</option>
              <option value={"byPriceHigh"}>High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className={`bottom w-11/12 lg:w-10/12  mx-auto flex items-center lg:flex-row md:flex-row flex-col lg:gap-12 md:gap-6 gap-4 transition-all duration-500 ease-in-out ${
          isVisible ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="left lg:w-1/2 md:w-1/2 w-full">
          <select
            name="category"
            id="category1"
            className="w-full rounded-xl"
            onChange={HandleCategory}
          >
            <option value="All">All</option>
            {isLoading &&
              categoryArray.map((data) => (
                <option key={data.id} value={data.category}>
                  {data.category}
                </option>
              ))}
          </select>
        </div>
        <div className="right lg:w-1/2 md:w-1/2 w-full">
          <form className="w-full flex gap-4" onSubmit={onSubmit} ref={form}>
            <input
              type="search"
              name="search"
              placeholder="Search product by name"
              className="w-3/4 rounded-xl text-lg"
              // onChange={onChange} // Update search input on change
            />
            <button
              type="submit" // Use type="submit" to trigger form submission
              className="darkColor text-white font-bold rounded-lg w-1/4"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;
