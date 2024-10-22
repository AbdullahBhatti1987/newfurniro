import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StaticCard from "./StaticCard";

function BrowseTheRange() {
  return (
    <div className="w-full py-12 bg-white">
      
      <div className="w-10/12 mx-auto">
      <div className="py-12 flex flex-col justify-evenly gap-6">
        <Heading text={"Browse The Range"} />
        <Paragraph
          text={"Lorem ipsum dolor sit amet, consecteur adipiscing elit."}
        />
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row gap-4 justify-between items-center">
        <StaticCard
          src={"/images/image106.png"}
          alt={"Dining"}
          text={"Dining"}
        />
       
        <StaticCard
          src={"/images/image 100.png"}
          alt={"Living"}
          text={"Living"}
        />
       
        <StaticCard
          src={"/images/image 101.png"}
          alt={"Bedroom"}
          text={"Bedroom"}
        />
      </div>
      </div>
    </div>
  );
}

export default BrowseTheRange;
