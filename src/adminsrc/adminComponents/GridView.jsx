import React from "react";

export default function GridView({
//   onChecked,
  src,
  title,
  dimensions,
  price,
  stock,
  category,
  like,
  onChange,
}) {
  return (
    <div className="w-1/4  border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
      <div className="flex justify-between h-40 items-center mb-4 overflow-hidden">
        <img src={src} alt={title} className="w-full object-contain" />       
      </div>
      <div className="mb-2">
        <h3 className="text-md mb-2 font-semibold">{title}</h3>
        <h3 className="text-sm font-semibold text-gray-500">{category}</h3>
      </div>
      <div className="flex items-center mb-2">
        <span className="text-lg font-bold text-gray-900">${price}</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p>{stock} in Stock</p>

        <p className="text-sm text-gray-500">{dimensions}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>{like} Likes</p>
        <p>{like} Overviews</p>
        <p>{like} Edit</p>
        <p>{like} Delete</p>
        
      </div>
    </div>
  );
}
