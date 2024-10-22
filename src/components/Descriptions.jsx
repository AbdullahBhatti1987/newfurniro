import React, { useState } from "react";

function Descriptions({reviews, totalReviews}) {
  const [description, setDescription] = useState(true);
  const [additionalInfo, setAdditionalInfo] = useState(false);
  const [currentReview, setCurrentReview] = useState(false);


  const showDescription = () => {
    setDescription(true);
    setAdditionalInfo(false);
    setCurrentReview(false);
  };
  
  const showAdditionalInfo = () => {
    setDescription(false);
    setAdditionalInfo(true);
    setCurrentReview(false);
  };
  
  const showReview = () => {
    setDescription(false);
    setAdditionalInfo(false);
    setCurrentReview(true);
  };

  return (
    <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto py-12 flex flex-col gap-8">
      <div className="top flex flex-row gap-12 justify-center font-semibold">
        <button onClick={showDescription} className="text-xl text-gray-400 focus:text-black">
          Description
        </button>
        <button onClick={showAdditionalInfo} className="text-xl text-gray-400 focus:text-black">
          Additional Information
        </button>
        <button onClick={showReview} className="text-xl text-gray-400 focus:text-black">
          Review [{totalReviews}]
        </button>
      </div>

      {description && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-gray-400">
            <p className="text-justify">
              1 - Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-justify">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full">
          <div className="w-1/2 flex justify-center items-center overflow-hidden lightColor ">
          <img
            className="transition scale-70 hover:scale-100"
            src='https://dummyjson.com/image/150'
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-center items-center overflow-hidden lightColor ">
        <img
            className="transition scale-70"
            src='https://dummyjson.com/image/150'
            alt=""
          />
        </div>
      </div>
        </div>
      )}

      {additionalInfo && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-gray-400">
            <p className="text-justify">
              2 - Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-justify">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full">
          <div className="w-1/2 flex justify-center items-center overflow-hidden lightColor ">
          <img
            className="transition scale-70 hover:scale-100"
            src='https://dummyjson.com/image/150'
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-center items-center overflow-hidden lightColor ">
        <img
            className="transition scale-70"
            src='https://dummyjson.com/image/150'
            alt=""
          />
        </div>
      </div>
        </div>
      )}

      {currentReview && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4 justify-between items-center text-gray-400">
           {reviews}
            {/* <p className="text-justify">

            </p>            */}
          </div>
          <div className="flex flex-row gap-4 w-full">
        <div className="w-1/2 flex justify-center items-center overflow-hidden lightColor ">
          <img
            className="transform scale-x-[-1]"
            src='https://dummyjson.com/image/150'
            alt=""
          />
        </div>
        <div className="w-1/2 flex justify-center items-center overflow-hidden lightColor ">
          <img
            className=""
            src='https://dummyjson.com/image/150'
            alt=""
          />
        </div>
      </div>
        </div>
        
      )}
    </div>
  );
}

export default Descriptions;
