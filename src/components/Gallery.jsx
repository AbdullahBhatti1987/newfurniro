import React from "react";


export default function Gallery() {
  const imagesCateloge = [
    {
      id: 1,
                src: "../images/Rectangle 36.png"
    },
    {
      id: 2,
      src: "../images/Rectangle 37.png"
    },
    {
      id: 3,
      src: "../images/Rectangle 38.png"
    },
    {
      id: 4,
      src: "../images/Rectangle 39.png"
    },
    {
      id: 5,
      src: "../images/Rectangle 40.png"
    },
    {
      id: 6,
      src: "../images/Rectangle 41.png"
    },
    {
      id: 7,
      src: "../images/Rectangle 43.png"
    },
    {
      id: 8,
      src: "../images/Rectangle 44.png"
    },
    {
      id: 9,
      src: "../images/Rectangle 45.png"
    },
  ];
 

  return (
    <>
      <div className="w-full bg-white overflow-hidden ">
        <div className="flex flex-col justify-center items-center gap-2 pt-16 w-[50vw] h-fit mx-auto">
          <h2 className="text-lg md:text-xl lg:text-3xl font-semibold">Share your setup with</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold">#FurniroFurniture</h1>
        </div>
        <div className="w-[100vw] h-[100vh] mx-auto flex flex-col justify-center items-center flex-wrap gap-4 overflow-hidden" id="centerDiv">
  {imagesCateloge.map(
    (data) =>
      data.id <= 9 && (
        <div key={data.id}>

          <img
            className="h-auto max-w-36 md:max-w-48 lg:max-w-56 xl:max-w-72 rounded-lg"
            src={data.src} 
          />
          
        </div>
      )
  )}
</div>

      </div>
    </>
  );
}
