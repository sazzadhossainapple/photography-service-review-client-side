import React from "react";
import Image from "../../../asserts/images/image.jpg";
import { GiLovers } from "react-icons/gi";

const BandleAndSave = () => {
  return (
    <div
      className="hero lg:mb-20  md:mb-16 sm:mb-12 mb-8 bg-fixed"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-center text-neutral-content ">
        <div className="lg:py-32 md:py-20 sm:py-16 py-12">
          <h1 className="text-4xl  font-medium mb-2">Bundle and Save</h1>
          <h1 className="mb-2  font-text1 text-4xl">
            <div className="flex text-center justify-center flex-col">
              <div>
                <h2 className="font-text1 text-2xl">
                  Our Classic Photo and Video Package
                </h2>
              </div>
            </div>
          </h1>
          <div className="flex justify-center text-2xl my-4 ">
            <GiLovers className=""></GiLovers>
          </div>
          <p className="text-xl font-bold mb-2">Only $1,299</p>
          <p>Book a photo session today</p>
        </div>
      </div>
    </div>
  );
};

export default BandleAndSave;
