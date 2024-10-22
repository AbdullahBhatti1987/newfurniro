import React from "react";
import PageTop from "../components/PageTop";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]); 



  return (
    <div>
      <PageTop heading={"Contact"} linkName={"Contact"} />
      <div className="w-10/12 mx-auto py-12">
        <div className="flex flex-col">
          <Heading text={"Get In Touch With Us"} />
          <Paragraph
            text={
              "For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!"
            }
            className={"w-7/12 mx-auto pb-12"}
          />
        </div>
        <div className="flex flex-row justify-between gap-12 py-12">
          <div className="left w-5/12 flex flex-col gap-12">
            <div className="box flex flex-row gap-4 justify-between items-start">
              <div className="left w-1/3 flex justify-center items-center">
                <MdLocationPin />
              </div>
              <div className="right w-2/3 flex flex-col gap-2 justify-start">
                <h2 className="text-2xl font-bold">Address</h2>
                <p>2365th SE Avenue, New Yark NY10000, United State</p>
              </div>
            </div>
            <div className="box flex flex-row gap-4 justify-between items-start">
              <div className="left w-1/3 flex justify-center items-center">
                <FaPhone />
              </div>
              <div className="right w-2/3 flex flex-col gap-2 justify-start">
                <h2 className="text-2xl font-bold">Phone</h2>
                <p>Mobile: +(84)546-6789</p>
                <p>Hotline: +(84)546-6789</p>
              </div>
            </div>
            <div className="box flex flex-row gap-4 justify-between items-start">
              <div className="left w-1/3 flex justify-center items-center">
                <GoClockFill />
              </div>
              <div className="right w-2/3 flex flex-col gap-2 justify-start">
                <h2 className="text-2xl font-bold">Working Time</h2>
                <p>Monday-Friday 9:00-22:00</p>
                <p>Saturday-Sunday 9:00-21:00</p>
              </div>
            </div>
          </div>
          <div className="right w-7/12">
            <form className="space-y-4 flex flex-col gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Additional Information
                </label>
                <textarea
                  placeholder="Additional Information"
                  className="mt-1 block w-full p-2 py-4 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button className="darkBoard w-1/2 border-2 py-4 rounded-lg darkColor text-white font-bold">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
