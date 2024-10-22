import React from "react";

export default function BlogCategoryList() {
  const blogcategorylist = [
    { title: "Craft", count: 2, id: 1 },
    { title: "Design", count: 8, id: 2 },
    { title: "Handmade", count: 7, id: 3 },
    { title: "Interior", count: 1, id: 4 },
    { title: "Wood", count: 6, id: 5 },
  ];

  return (
    <ul className="w-full px-2 md:px-4 lg:px-6">
      {blogcategorylist.map((data) => (
        <li
          key={data.id}
          className="w-full flex flex-row justify-between items-center py-4 text-gray-400 font-semibold text-sm md:text-md lg:text-lg"
        
        >
          <span>{data.title}</span>
          <span>{data.count}</span>
        </li>
      ))}
    </ul>
  );
}
