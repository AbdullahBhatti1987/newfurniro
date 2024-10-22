import React from "react";
import { CiSearch } from "react-icons/ci";

export default function InputwithSearch({ className, onClick, value, onChange, onMouseOut }) {
  return (
    <div onMouseOut={onMouseOut} className={`border border-black flex flex-row justify-between items-center p-2 rounded-2xl ${className}`}>
      <input
        type="text"
        name="searchblog"
        id="searchblog"
        placeholder="Search Bar"
        className="border-0 flex-grow text-sm md:text-md lg:text-lg"
        value={value} // Bind the value prop here
        onChange={onChange} // Use the onChange prop for updates
      />
      <button onClick={onClick}>
        <CiSearch className="text-md md:text-xl lg:text-3xl" />
      </button>
    </div>
  );
}
