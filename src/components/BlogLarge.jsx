import React from "react";
import { FaUser } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdTask } from "react-icons/md";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";

export default function BlogLarge({ image, heading, paragraph }) {
  return (
    <div className="left w-full flex flex-col">
      <div>
        <img
          src={image}
          alt=""
          className="w-full rounded-2xl lg:h-[70vh] md:h-[60vh] h-[50vh] object-cover"
        />
      </div>
      <div className="py-2 flex flex-row gap-8">
        <div className="w-fit flex flex-row justify-center items-center text-gray-400 gap-2">
          <FaUser />
          <p className="">Admin</p>
        </div>
        <div className="w-fit flex flex-row justify-center items-center text-gray-400 gap-2">
          <BsCalendarDateFill />
          <p className="">14-Oct-2022</p>
        </div>
        <div className="w-fit flex flex-row justify-center items-center text-gray-400 gap-2">
          <MdTask />
          <p className="">Wood</p>
        </div>
      </div>
      <Heading className={"text-start"} text={heading} />
      <Paragraph className={"text-justify"} text={paragraph} />
      <Link className="py-8 underline">Read more</Link>
    </div>
  );
}
