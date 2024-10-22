import React, { useEffect, useState } from "react";

const Notification = ({ text }) => {
  const [lineVisible, setLineVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`fixed z-50 top-4 right-4 lg:w-72 h-16 bg-gray-800 transform transition-transform duration-1000 ${
        isVisible ? "translate-x-full" : "translate-x-0"
      } `}
    >
      <div className="relative h-full">
        <div
          className={`absolute bottom-0 left-0 h-1 bg-green-400 transition-all duration-2000 ease-in-out ${
            lineVisible ? "animate-line-move" : "w-0"
          }`}
        >
          <div
            className={`h-full bg-green-400`}
            style={{ width: lineVisible ? "100%" : "0%" }}
          />
        </div>
        <p className="text-start font-semibold text-green-400 p-4">{text}</p>
      </div>
    </div>
  );
};

export default Notification;
