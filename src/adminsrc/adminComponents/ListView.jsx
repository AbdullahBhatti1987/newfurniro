import React from "react";

export default function ListView({
  onChecked,
  src,
  title,
  dimensions,
  price,
  stock,
  category,
  like = 55,
  onChange,
}) {
  return (
    <div className="w-full flex flex-row justify-between items-center gap-4 p-2 border rounded-2xl shadow-inner hover:shadow-md hover:border-gray-600 bg-white ">
      <div className="w-1/12 flex justify-center items-center">
        <input
          type="checkbox"
          name="sleect"
          id="pselect"
          onChange={onChecked}
        />
      </div>
      <div className="w-1/12 flex justify-center items-center h-16 overflow-hidden rounded-lg">
        <img src={src} alt="" className="rounded-lg  object-contain" />
      </div>
      <div className="w-4/12 title flex flex-col justify-start items-start gap-2">
        <p className="">{title}</p>
        <p className="">{dimensions}</p>
      </div>
      <div className="w-1/12">
        <p>
          $<span>{price}</span>
        </p>
      </div>
      <div className="w-1/12 stock">
        <p className="">{stock}</p>
        <p className="">12 Sold</p>
      </div>
      <div className="w-1/12">
        <p>{category}</p>
      </div>
      <div className="w-1/12">
        <p>{like}</p>
      </div>
      <div className="w-2/12">
        <select name="active" id="action" onChange={onChange}>
          <option value="view">View</option>
          <option value="edit">Edit</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </div>
  );
}
