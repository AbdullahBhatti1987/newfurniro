import React, { useEffect, useState } from "react";

const Notification = ({ text, duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lineWidth, setLineWidth] = useState("100%");

  useEffect(() => {
    const lineAnimation = setTimeout(() => {
      setLineWidth("0%"); // Animate to zero width
    }, 500); // Start line animation after 500ms

    const visibilityTimeout = setTimeout(() => {
      setIsVisible(false);
    }, duration); // Hide the notification after the specified duration

    return () => {
      clearTimeout(lineAnimation);
      clearTimeout(visibilityTimeout);
    };
  }, [duration]);

  return (
    <div
      className={`fixed z-50 top-4 right-4 lg:w-72 h-16 bg-gray-800 transform transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative h-full">
        <div
          className={`absolute bottom-0 left-0 h-1 bg-green-400 transition-all duration-1000 ease-in-out`}
          style={{ width: lineWidth }} // Control the width through state
        />
        <p className="text-start font-semibold text-green-400 p-4">{text}</p>
      </div>
    </div>
  );
};

export default Notification;
